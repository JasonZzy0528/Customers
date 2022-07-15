import { render, screen } from "@testing-library/react";
import { CUSTOMER_ROLES } from "../../types";

import { Customers } from "./Customers";

describe("Radio", () => {
  const data = [
    {
      email: "email1",
      id: "id1",
      name: "name1",
      role: CUSTOMER_ROLES.ADMIN,
    },
    {
      email: "email2",
      id: "id2",
      name: "name2",
      role: CUSTOMER_ROLES.MANAGER,
    },
  ];

  const headerText = "headerText";

  it("should have a header", () => {
    render(<Customers data={data} headerText={headerText} />);

    expect(screen.getByText(headerText)).toBeInTheDocument();
  });

  it("should have customers", () => {
    render(<Customers data={data} headerText={headerText} />);

    expect(screen.getAllByTestId("customer")).toHaveLength(2);
  });
});
