import { getCustomers } from "./customers";
import { API } from "aws-amplify";
import { ApiResponse } from "../types";

describe("getCustomers", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return an array of customers", async () => {
    const mockData = {
      data: {
        listZellerCustomers: {
          items: [],
        },
      },
    } as ApiResponse;
    jest.spyOn(API, "graphql").mockResolvedValue(mockData);
    const customers = await getCustomers();
    expect(customers).toEqual(mockData.data.listZellerCustomers.items);
  });
});
