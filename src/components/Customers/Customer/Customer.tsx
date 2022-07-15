import { ROLE_MAPPING } from "../../../constants";
import type { Customer as CustomerType } from "../../../types";
import { Avatar, Name, Role, CustomerWrapper, NameRoleWrapper } from "./styles";

type CustomerProps = {
  data: CustomerType;
};

export const Customer = ({
  data: { name, role },
}: CustomerProps): JSX.Element => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <CustomerWrapper data-testid="customer">
      <Avatar>{firstLetter}</Avatar>
      <NameRoleWrapper>
        <Name>{name}</Name>
        <Role>{ROLE_MAPPING[role]}</Role>
      </NameRoleWrapper>
    </CustomerWrapper>
  );
};
