import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";
import { render, screen } from "@testing-library/react";

describe("Theme Switcher Component", () => {
  test("renders Theme Mode Switcher if the button has pressed", () => {
    render(<ThemeSwitcher />);

    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Dark Mode");
    expect(outputElement).toBeInTheDocument();
  });
});
