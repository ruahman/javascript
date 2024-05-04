export default function intersection(expect: any) {
  // intersection types

  // creates a new type by combining other types
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

  // can mix object but not extend
  type Employee = Identity & Contact;
  type Customer = BusinessPartner & Contact;

  let e: Employee = {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
  };

  expect(e).toEqual({
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
  });

  let c: Customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  };

  expect(c).toEqual({
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  });

  type TechBaseEvent = {
    title: string;
    description: string;
    date: Date;
    capacity: number;
    rsvp: number;
    kind: string;
  };

  // sort of like a mixin
  type Conference = TechBaseEvent & {
    location: string;
    price: number;
    talks: string[];
  };

  type Meetup = TechBaseEvent & {
    location: string;
    price: string;
    talks: string[];
  };

  type Webinar = TechBaseEvent & {
    url: string;
    price?: number;
    talks: string[];
  };
}
