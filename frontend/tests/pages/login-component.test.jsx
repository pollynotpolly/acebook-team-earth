import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../../src/services/authentication";

import { LoginComponent } from "../../src/components/Utilities/Login-component";

// Mocking React Router's hooks and components
//UseOutletContext hook allows you to access the context value that is passed by the component to the child routes. 
//This is useful when you want to share some state or other value between the parent and child routes.

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useOutletContext: vi.fn(),
  Link: vi.fn().mockImplementation(({ children, ...props }) => <a {...props}>{children}</a>)
}));

// Mocking the login service
vi.mock("../../src/services/authentication", () => ({
  login: vi.fn()
}));

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn()
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Reusable function for filling out login form
const completeLoginForm = async () => {
  const user = userEvent.setup();

  const emailInputEl = screen.getByLabelText("Email:");
  const passwordInputEl = screen.getByLabelText("Password:");
  const submitButtonEl = screen.getByRole("submit-button");

  await user.type(emailInputEl, "test@email.com");
  await user.type(passwordInputEl, "1234");
  await user.click(submitButtonEl);
};

describe("Login Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    useOutletContext.mockReturnValue({ updateLoginStatus: vi.fn() });
  });

  test("allows a user to login", async () => {
    render(<LoginComponent />);

    await completeLoginForm();

    expect(login).toHaveBeenCalledWith("test@email.com", "1234");
  });

  test("navigates to /posts on successful login", async () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock);
    login.mockResolvedValue("secrettoken123");

    render(<LoginComponent />);

    await completeLoginForm();

    expect(navigateMock).toHaveBeenCalledWith("/posts");
    expect(localStorage.setItem).toHaveBeenCalledWith("token", "secrettoken123");
  });

  test("handles unsuccessful login", async () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock);
    login.mockRejectedValue(new Error("Error logging in"));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<LoginComponent />);

    await completeLoginForm();

    expect(consoleSpy).toHaveBeenCalledWith(new Error("Error logging in"));
    expect(navigateMock).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
