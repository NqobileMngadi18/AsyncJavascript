// 1.Function that calls Hello after 2 seconds

//Function that logs a message
function sayHello() {
    console.log("Hello after 2 seconds");
}
//Call of sayHello
setTimeout (sayHello, 2000);


// 2.What will be the ouput of this function

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

// The output of this code will be:

/*
A
C 
B 
*/

// 3.Convert this into a callback promise

function loadData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

// Answer of the promise
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

//Promise
loadData().then((result) => {
  console.log(result);
});

// 4.Promise chain of a function using 'then()'
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User"), 1000);
  });
}

function getPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${user}'s posts`), 1000);
  });
}

// Promise Chain
getUser()
  .then(user => {
    console.log("User:", user);
    return getPosts(user);
  })
  .then(posts => {
    console.log("Posts:", posts);
  });

// 5.Using async/await in the promise chain
async function showUserPosts() {
  const user = await getUser();
  console.log("User:", user);

  const posts = await getPosts(user);
  console.log("Posts:", posts);
}

showUserPosts();