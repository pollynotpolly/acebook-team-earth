import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect, vi } from 'vitest';
import { HomePage } from "../../src/pages/Home/HomePage";

// Mock the LoginComponent
vi.mock("../../src/components/Utilities/Login-component", () => ({
  LoginComponent: () => <div data-testid="login-component">Mocked Login Component</div>
}));

describe("Home Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  test("displays the site name", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toEqual("earthbook");
  });

  test("displays the globe emojis", () => {
    const subheading = screen.getByRole("heading", { level: 2 });
    expect(subheading.textContent).toEqual("🌎 🌏 🌍");
  });

  test("renders the LoginComponent", () => {
    const loginComponent = screen.getByTestId("login-component");
    expect(loginComponent).toBeTruthy();
  });
});
