import { Amplify, API } from "aws-amplify";

import * as queries from "./graphql/queries";
import { AWS_CONFIG } from "../config";
import { ApiResponse, Customer } from "../types";

Amplify.configure(AWS_CONFIG);

export const getCustomers = async (): Promise<Customer[]> => {
  const response = (await API.graphql({
    query: queries.ListZellerCustomers,
  })) as ApiResponse;
  return response.data.listZellerCustomers.items;
};
