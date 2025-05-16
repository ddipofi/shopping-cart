import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import routes from "../routes";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const router = createMemoryRouter(routes);

describe("App component", () => {
    it("renders correct heading", async () => {
        render(<RouterProvider router={router} />);
        const heading = await screen.findByRole("heading", { name: /home/i });
        expect(heading).toBeInTheDocument();
    });
});
