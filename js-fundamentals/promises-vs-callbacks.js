function getData1(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Second Data' });
  }, 1000);
}

function getData2(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Second Data' });
  }, 1000);
}

getData1({ id: 1, title: 'First Data' }, (data) => {
  getData2(data, (data) => {
    console.log(data);
  });
});

function getDataP1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'Data 1' });
    }, 2000);
  });
}

function getDataP2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 2, title: 'Data 2' });
    }, 2000);
  });
}

getDataP1().then((data) => {
  console.log(data);
  getDataP2().then((data) => {
    console.log(data);
  });
});

Promise.all([getDataP1(), getDataP2()]).then((results) => {
  console.log(results);
});
