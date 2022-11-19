export default () => {
  console.log("***** intersecton types *****");

  interface BusinessPartner {
    name: string;
    credit: number;
  }

  interface Identity {
    id: number;
    name: string;
  }

  interface Contact {
    email: string;
    phone: string;
  }

  type Employee = Identity & Contact;
  type Customer = BusinessPartner & Contact;

  const e: Employee = {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
  };

  const c: Customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  };
  console.log(e, c);
};
