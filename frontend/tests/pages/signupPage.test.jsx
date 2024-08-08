import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { signup } from "../../src/services/authentication";
import { SignupPage } from "../../src/pages/Signup/SignupPage";

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

vi.mock("../../src/services/authentication", () => ({
  signup: vi.fn()
}));

vi.mock("../../src/components/Utilities/PasswordValidator", () => ({
  PasswordValidator: ({ onPasswordChange }) => (
    <input
      type="password"
      onChange={(e) => onPasswordChange(e.target.value, true)}
      data-testid="password-validator"
    />
  )
}));

const completeSignupForm = async () => {
  const user = userEvent.setup();

  const nameInputEl = screen.getByLabelText("Name:");
  const surnameInputEl = screen.getByLabelText("Surname:");
  const emailInputEl = screen.getByLabelText("Email:");
  const passwordInputEl = screen.getByTestId("password-validator");
  const submitButtonEl = screen.getByRole("submit-button");

  await user.type(nameInputEl, "Test");
  await user.type(surnameInputEl, "User");
  await user.type(emailInputEl, "test@email.com");
  await user.type(passwordInputEl, "ValidPassword1234!");
  await user.click(submitButtonEl);
};

describe("Signup Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("allows a user to signup", async () => {
    render(<SignupPage />);
    await completeSignupForm();
    expect(signup).toHaveBeenCalledWith("Test", "User", "test@email.com", "ValidPassword1234!");
  });

  test("navigates to /login on successful signup", async () => {
    render(<SignupPage />);
    await completeSignupForm();
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  test("navigates to /signup on unsuccessful signup", async () => {
    vi.mocked(signup).mockRejectedValue(new Error("Error signing up"));
    render(<SignupPage />);
    await completeSignupForm();
    expect(mockNavigate).toHaveBeenCalledWith("/signup");
  });

  test("submit button is disabled when password is invalid", async () => {
    render(<SignupPage />);

    const submitButtonEl = screen.getByRole("submit-button");
    expect(submitButtonEl.disabled).toBe(true);

    // Simulate valid password input
    const passwordInputEl = screen.getByTestId("password-validator");
    await userEvent.type(passwordInputEl, "ValidPassword123!");

    expect(submitButtonEl.disabled).toBe(false);
  });
});
