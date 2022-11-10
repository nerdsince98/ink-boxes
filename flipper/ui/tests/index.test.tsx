import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Flipper", () => {
    it("renders flipper app", () => {
        render(<Home />);
        expect(screen.getByText('Provide Contract Address')).toBeInTheDocument();
    });
  });