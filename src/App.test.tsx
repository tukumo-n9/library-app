import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("テスト", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
