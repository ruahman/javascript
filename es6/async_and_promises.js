setTimeout(() => {
  console.log('I execute first.');
}, 1000);

const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
};

let res = await fetchData();
console.log(res);
