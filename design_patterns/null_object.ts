// instead of just returning null return a null object
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

// instead or returning null return a null object
class NullUser {
  id: number;
  name: string;

  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id: number): User | NullUser {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

const user = getUser(1);
console.log(`${user.name} has access: ${user.hasAccess()}`);

const user2 = getUser(3);
console.log(`${user2.name} has access: ${user2.hasAccess()}`);
