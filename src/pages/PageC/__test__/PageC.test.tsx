import { render } from "@testing-library/react";
import PageC from "pages/PageC";

describe("PageC Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<PageC />);
		expect(getByText("PageC")).toBeInTheDocument();
	});
});