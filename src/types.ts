export enum CUSTOMER_ROLES {
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

export type Customer = {
  email: string;
  id: string;
  name: string;
  role: CUSTOMER_ROLES;
};

export type ApiResponse = {
  data: {
    listZellerCustomers: {
      items: Customer[];
    };
  };
};
