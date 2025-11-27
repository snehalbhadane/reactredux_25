import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom';
import Login from "./Login";

const Dashboard=()=> {
  return <h1 data-testid="dashboard-page">Dashboard</h1>;
}

const About=()=>{
  return<h2 data-testid="about-page">About</h2>
}

test("navigates to /dashboard after login", async () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </MemoryRouter>
  );

  const username = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");
  const loginBtn = screen.getByRole("button", { name: /login/i });

  await userEvent.type(username, "admin");
  await userEvent.type(password, "123");
  await userEvent.click(loginBtn);

  expect(screen.getByTestId("dashboard-page")).toBeInTheDocument();

  //expect(screen.getByTestId("about-page")).toBeInTheDocument();
});