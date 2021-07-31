import axios from 'axios';

const functions = {
  add(x, y) {
    return x + y;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createUser() {
    return {
      firstname: 'diego',
      lastname: 'vila',
    };
  },
  fetchUser() {
    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default functions;
