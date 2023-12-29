import {
  // act,
  render,
  screen,
} from "@testing-library/react";
import AddTodo from "../../../components/practice/AddTodo";
// import userEvent from "@testing-library/user-event";
// import { BrowserRouter } from "react-router-dom";
// import Practice from "../Practice";
const mockedSetTodo = jest.fn();

// const MockTodo = () => {
//   return (
//     <BrowserRouter>
//       <Practice />
//     </BrowserRouter>
//   );
// };

describe("CHECK THE ELEMENT TO BE", () => {
  test("check input exist", () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const para = screen.getByRole("textbox");
    expect(para).toBeInTheDocument();
  });
  // test("BUTTON CLEAR THE INPUT", async () => {
  //   const user = userEvent.setup();
  //   render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
  //   const para = screen.getByRole("textbox");
  //   const btn = screen.getByTestId("mm");
  //   // console.log(btn);
  //   await act(() => user.click(btn));
  //   expect(para).toHaveValue("");
  // });
});

// describe("interaction", () => {
//   test(`adds a task to the todo list`, async () => {
//     const user = userEvent.setup();
//     render(<MockTodo />);
//     const inputEl = screen.getByPlaceholderText("add new task");
//     const buttonEl = screen.getByTestId("mm");
//     await act(() => user.type(inputEl, "Hello Arash"));
//     await act(() => user.click(buttonEl));
//     const listItem = screen.getByRole("listitem");

//     expect(listItem).toHaveTextContent(/hello arash/i);

//   });
// });

// describe("interaction2", () => {
//   test(`adds many tasks to the todo list`, async () => {
//     const user = userEvent.setup();
//     render(<MockTodo />);
//     const inputEl = screen.getByPlaceholderText("add new task");
//     const buttonEl = screen.getByTestId("mm");
//     await act(() => user.type(inputEl, "bye AraSh"));
//     await act(() => user.click(buttonEl));
//     await act(() => user.type(inputEl, "Hello Arash"));
//     await act(() => user.click(buttonEl));
//     const listItemAll = screen.getAllByRole("listitem");
//     expect(listItemAll).toHaveLength(2);
//   });
// });
