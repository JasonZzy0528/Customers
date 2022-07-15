import { render, screen } from "@testing-library/react";

import { Customer } from "./Customer";
import { CUSTOMER_ROLES } from "../../../types";
import { ROLE_MAPPING } from "../../../constants";

describe("Radio", () => {
  const data = {
    email: "email",
    id: "id",
    name: "name",
    role: CUSTOMER_ROLES.ADMIN,
  };

  it("should have an avatar with first letter of the name", () => {
    render(<Customer data={data} />);

    expect(screen.getByText("N")).toBeInTheDocument();
  });
  it("should have customer name", () => {
    render(<Customer data={data} />);

    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it("should have customer role", () => {
    render(<Customer data={data} />);

    expect(screen.getByText(ROLE_MAPPING[data.role])).toBeInTheDocument();
  });
});
