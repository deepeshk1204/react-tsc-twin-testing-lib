import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Greeting } from "../components";

// test("load greeting", async () => {
//   const dom = render(<Greeting />);
//   dom.debug();
//   expect(dom.getByRole("button")).toBeInTheDocument();
//   fireEvent.click(dom.getByRole("button"));
//   await dom.findAllByText("Hello! Deepesh");
//   dom.debug();
// });

test("loads and displays jokes", async () => {
  const dom = render(<Greeting />);
  fireEvent.click(dom.getByRole("button"));
  await wait(() => expect(dom.getByTestId("test-joke-0")).toBeInTheDocument());
  expect(dom.getByTestId("test-joke-9")).toBeInTheDocument();
});
