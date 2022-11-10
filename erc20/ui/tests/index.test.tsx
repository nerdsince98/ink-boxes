import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ERC20", () => {
    it("renders ERC20 contract app", () => {
        render(<Home />);
        expect(screen.getByText('Provide Contract Address')).toBeInTheDocument();
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(screen.getByText('total supply')).toBeInTheDocument();
        expect(screen.getByText('Balance Of')).toBeInTheDocument();
        expect(screen.getByText('Approve')).toBeInTheDocument();
        expect(screen.getByText('Transfer')).toBeInTheDocument();
    });
  });