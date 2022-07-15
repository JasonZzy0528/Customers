import { useCallback, useEffect, useMemo, useState } from "react";

import type { Customer } from "./types";
import { CUSTOMER_ROLES } from "./types";
import * as customerAPI from "./api/customers";
import { Customers } from "./components/Customers/Customers";
import { AppWrapper, Divider } from "./components/styles";
import { UserTypes } from "./components/UserTypes/UserTypes";
import { ROLE_MAPPING } from "./constants";

const App = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedRole, setSelectedRole] = useState<CUSTOMER_ROLES>(
    CUSTOMER_ROLES.ADMIN
  );
  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => customer.role === selectedRole);
  }, [customers, selectedRole]);
  const headerText = `${ROLE_MAPPING[selectedRole]} Users`;

  const onRoleChange = useCallback((role: CUSTOMER_ROLES) => {
    setSelectedRole(role);
  }, []);

  useEffect(() => {
    const getCustomers = async () =>
      setCustomers(await customerAPI.getCustomers());
    getCustomers();
  }, []);

  return (
    <AppWrapper>
      <UserTypes onChange={onRoleChange} selectedRole={selectedRole} />
      <Divider />
      <Customers data={filteredCustomers} headerText={headerText} />
      <Divider />
    </AppWrapper>
  );
};

export default App;
