
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello i am Promise 1');
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello i am Promise 2');
//     }, 10000);
// });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello i am Promise 1');
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello i am Promise 2');
    }, 5000);
});


async function getData() {
    console.log('Hello');

    try {
        // Promise one
        const data1 = await p1;
        console.log(data1);

        // Promise two
        const data2 = await p2;
        console.log(data2);

    }

    catch (e) {
        console.log('There is an error');
    }


}
getData()

// async function getData() {
//     console.log('Hello');
//     try {
//         const [data1, data2] = await Promise.allSettled([p1, p2])
//         console.log(data1)
//         console.log(data2)
//     }
//     catch (e) {
//         console.log('There is an error');
//     }
// }
// getData();