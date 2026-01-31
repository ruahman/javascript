import assert from "node:assert";

export default function () {
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

  const e: Employee = {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
  };

  assert.deepEqual(e, {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
  });

  const c: Customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  };

  assert.deepEqual(c, {
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
  const conf: Conference = {
    title: "comic con",
    description: "a comic con",
    date: new Date(),
    capacity: 3,
    rsvp: 7,
    kind: "foobar",
    location: "chicago",
    price: 7.32,
    talks: ["batman", "superman"],
  };
  assert(conf.title === "comic con");

  type Meetup = TechBaseEvent & {
    location: string;
    price: string;
    talks: string[];
  };
  const meetup: Meetup = {
    title: "defcom",
    description: "a comic con",
    date: new Date(),
    capacity: 3,
    rsvp: 7,
    kind: "foobar",
    location: "chicago",
    price: "7.32",
    talks: ["batman", "superman"],
  };
  assert(meetup.title === "defcom");

  type Webinar = TechBaseEvent & {
    url: string;
    price?: number;
    talks: string[];
  };
  const webinar: Webinar = {
    title: "goto",
    url: "www.google.com",
    description: "a comic con",
    date: new Date(),
    capacity: 3,
    rsvp: 7,
    kind: "foobar",
    talks: ["batman", "superman"],
  };
  assert(webinar.title === "goto");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test intersection");
}
