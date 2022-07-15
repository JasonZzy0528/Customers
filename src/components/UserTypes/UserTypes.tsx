import { ROLE_MAPPING } from "../../constants";
import { CUSTOMER_ROLES } from "../../types";
import { Header } from "../styles";
import { Radio } from "./Radio";
import { UserTypesWrapper } from "./styles";

type UserTypesProps = {
  selectedRole: CUSTOMER_ROLES;
  onChange: (role: CUSTOMER_ROLES) => void;
};

export const UserTypes = ({
  onChange,
  selectedRole,
}: UserTypesProps): JSX.Element => {
  return (
    <UserTypesWrapper data-testid="user-types">
      <Header>User Types</Header>
      <Radio
        selected={selectedRole === CUSTOMER_ROLES.ADMIN}
        label={ROLE_MAPPING[CUSTOMER_ROLES.ADMIN]}
        onSelect={() => onChange(CUSTOMER_ROLES.ADMIN)}
      />
      <Radio
        selected={selectedRole === CUSTOMER_ROLES.MANAGER}
        label={ROLE_MAPPING[CUSTOMER_ROLES.MANAGER]}
        onSelect={() => onChange(CUSTOMER_ROLES.MANAGER)}
      />
    </UserTypesWrapper>
  );
};
