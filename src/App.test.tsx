import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import * as customerAPI from "./api/customers";
import { CUSTOMER_ROLES } from "./types";

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

  beforeEach(() => {
    jest.spyOn(customerAPI, "getCustomers").mockResolvedValue(data);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should have a user types section", async () => {
    render(<App />);
    await act(async () => {
      await customerAPI.getCustomers();
    });
    expect(screen.getByTestId("user-types")).toBeInTheDocument();
  });

  it("should have a customers section", async () => {
    render(<App />);
    await act(async () => {
      await customerAPI.getCustomers();
    });
    expect(screen.getByTestId("customers")).toBeInTheDocument();
  });

  it("should update the selected customer role when a radio button is clicked", async () => {
    render(<App />);

    await act(async () => {
      await customerAPI.getCustomers();
    });

    userEvent.click(screen.getAllByTestId("radio")[1]);

    expect(
      (screen.getAllByRole("radio")[1] as HTMLInputElement).checked
    ).toEqual(true);
  });
});
