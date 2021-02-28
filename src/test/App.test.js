import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("App is not crash", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
