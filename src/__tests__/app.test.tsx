import { render, screen, queryByAttribute } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

const getById = queryByAttribute.bind(null, "id");

test("getByText", () => {
  const { getByText } = render(<App />);
  expect(getByText("React Testing library")).toBeInTheDocument();
});

test("getByRole", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(
    "React Testing library"
  );
});

test("getById", () => {
  const dom = render(<App />);
  const app = getById(dom.container, "App");
  expect(app).toBeInTheDocument();
});
