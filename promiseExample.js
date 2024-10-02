// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (like a network request)
    setTimeout(() => {
        const success = true; // Simulate success or failure

        if (success) {
            resolve("Operation succeeded!"); // Resolve the promise
        } else {
            reject("Operation failed!"); // Reject the promise
        }
    }, 2000); // Wait for 2 seconds
});
