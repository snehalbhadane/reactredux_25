import { render, screen, fireEvent, userEvent } from "@testing-library/react";
import Demo from "./Demo";

test("renders learn react link", () => {
  render(<Demo/>);

  const linkElement = screen.getByText(/welcome to testing/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2=screen.getByText(/hello/i);
  expect (linkElement2).toBeInTheDocument();

  const linkImage=screen.getByTitle(/my image/i);
  expect (linkImage).toBeInTheDocument();

  const linkButton1=screen.getByRole('button',{name:/increment/i});
  expect(linkButton1).toBeInTheDocument(); 

  const linkButton2=screen.getByRole('button',{name:/decrement/i});
  expect(linkButton2).toBeInTheDocument(); 

  const incrb=screen.getByTestId("incrb")
  fireEvent.click(incrb);

  
  const decrb=screen.getByTestId("decrb")
  fireEvent.click(decrb);

  });