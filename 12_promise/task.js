
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 4000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 Rejected");
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolved");
    }, 3000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4 Rejected");
    }, 1000);
});


Promise.any([p1, p2, p3, p4])
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });