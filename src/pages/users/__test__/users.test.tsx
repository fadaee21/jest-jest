import { render, screen } from "@testing-library/react";
import Users from "../Users";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";

test("renders async value", async () => {
  const user = userEvent.setup();
  render(<Users />);
  const fetchButton = screen.getByRole("button");
  await act(() => user.click(fetchButton));
  const content = await screen.findAllByRole("listitem");
  expect(content).toHaveLength(10);
});

test("rendering not found error properly", async () => {
  server.use(
    rest.get(
      "https://jsonplaceholder.typicode.com/users",
      (_req, res, ctx) => {
        return res(ctx.status(404),ctx.json(""));
      }
    )
  );
  const user = userEvent.setup();
  render(<Users />);
  const fetchButton = screen.getByRole("button");
  await act(() => user.click(fetchButton));
  const err = await screen.findByRole("heading", { level: 3 });
  expect(err).toHaveTextContent("What the FUCK are you looking for");
});
