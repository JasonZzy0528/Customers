import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CUSTOMER_ROLES } from "../../types";
import { UserTypes } from "./UserTypes";

describe("Radio", () => {
  it("should have a header", () => {
    render(
      <UserTypes onChange={jest.fn()} selectedRole={CUSTOMER_ROLES.ADMIN} />
    );

    expect(screen.getByText("User Types")).toBeInTheDocument();
  });

  it("should have two radio buttons", () => {
    render(
      <UserTypes onChange={jest.fn()} selectedRole={CUSTOMER_ROLES.ADMIN} />
    );

    expect(screen.getAllByTestId("radio")).toHaveLength(2);
  });

  it("should invoke the onSelect callback when the fist radio button is clicked", () => {
    const onChange = jest.fn();
    render(
      <UserTypes onChange={onChange} selectedRole={CUSTOMER_ROLES.ADMIN} />
    );

    userEvent.click(screen.getAllByTestId("radio")[0]);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(CUSTOMER_ROLES.ADMIN);
  });

  it("should invoke the onSelect callback when the second radio button is clicked", () => {
    const onChange = jest.fn();
    render(
      <UserTypes onChange={onChange} selectedRole={CUSTOMER_ROLES.ADMIN} />
    );

    userEvent.click(screen.getAllByTestId("radio")[1]);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(CUSTOMER_ROLES.MANAGER);
  });
});
