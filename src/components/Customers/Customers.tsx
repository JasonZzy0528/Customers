import type { Customer as CustomerType } from "../../types";
import { Header } from "../styles";
import { Customer } from "./Customer/Customer";
import { CustomerList, CustomersWrapper } from "./styles";

export type CustomersProps = {
  data: CustomerType[];
  headerText: string;
};

export const Customers = ({
  data,
  headerText,
}: CustomersProps): JSX.Element => {
  return (
    <CustomersWrapper data-testid="customers">
      <Header>{headerText}</Header>
      <CustomerList>
        {data.map((customer) => (
          <Customer data={customer} key={customer.id} />
        ))}
      </CustomerList>
    </CustomersWrapper>
  );
};
