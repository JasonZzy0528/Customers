import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("should have a label", () => {
    const label = "text";

    render(<Radio selected={false} label={label} onSelect={jest.fn()} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should have an radio input", () => {
    render(<Radio selected={false} label="text" onSelect={jest.fn()} />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("should invoke the onSelect callback when the radio is clicked", () => {
    const onSelect = jest.fn();
    render(<Radio selected={false} label="text" onSelect={onSelect} />);

    userEvent.click(screen.getByTestId("radio"));

    expect(onSelect).toBeCalledTimes(1);
  });
});
