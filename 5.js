// problem5
function waitingTime(waitingTimes, serialNumber){
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
      return "Invalid Input";
    }
    const finishedInterview = waitingTimes.length;
    const peopleBefore = serialNumber - finishedInterview - 1;
    if (peopleBefore <= 0){
      return 0;
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++){
      totalTime += waitingTimes[i];
    }
    const averageTime = Math.round(totalTime / finishedInterview);
    const waitingTime = peopleBefore * averageTime;
    return waitingTime;
}


console.log(waitingTime([15, 30, 45, 60], 1)); // 52.5
console.log(waitingTime([10, 20, 30], 2)); // 0
console.log(waitingTime([10, 20, -5], 1)); // InvalidInput
console.log(waitingTime("invalid input", 1)); // InvalidInput
console.log(waitingTime([10, 20, 30], 5)); // InvalidInput




/**
 * 
function waitingTime(waitingTimes, serialNumber) {
    // Validate waitingTimes is an array
    if (!Array.isArray(waitingTimes)) {
        return "InvalidInput";
    }

    // Validate serialNumber is a number
    if (typeof serialNumber !== 'number') {
        return "InvalidInput";
    }

    // Check all waitingTimes elements are numbers and non-negative
    for (let i = 0; i < waitingTimes.length; i++) {
        if (typeof waitingTimes[i] !== 'number' || waitingTimes[i] < 0) {
            return "InvalidInput";
        }
    }

    // Validate serialNumber is within valid range
    if (serialNumber < 0 || serialNumber >= waitingTimes.length) {
        return "InvalidInput";
    }

    // Extract waiting times after the given serial number
    const remainingTimes = [];
    for (let i = serialNumber + 1; i < waitingTimes.length; i++) {
        remainingTimes.push(waitingTimes[i]);
    }

    // Calculate the average waiting time
    if (remainingTimes.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < remainingTimes.length; i++) {
        sum += remainingTimes[i];
    }
    return sum / remainingTimes.length;
}

// Test cases
console.log(waitingTime([15, 30, 45, 60], 1)); // 52.5
console.log(waitingTime([10, 20, 30], 2)); // 0
console.log(waitingTime([10, 20, -5], 1)); // InvalidInput
console.log(waitingTime("invalid input", 1)); // InvalidInput
console.log(waitingTime([10, 20, 30], 5)); // InvalidInput
 




 * 
 */

// problem5
function waitingTime(waitingTimes, serialNumber){
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
      return "Invalid Input";
    }
    const finishedInterview = waitingTimes.length;
    const peopleBefore = serialNumber - finishedInterview - 1;
    if (peopleBefore <= 0){
      return 0;
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++){
      totalTime += waitingTimes[i];
    }
    const averageTime = Math.round(totalTime / finishedInterview);
    const waitingTime = peopleBefore * averageTime;
    return waitingTime;
  }
  console.log(waitingTime([3, 5, 7, 11, 6], 10)); // 24
console.log(waitingTime([13, 2], 6)); // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
console.log(waitingTime([6], 4)); // 12
console.log(waitingTime(7, 10)); // Invalid Input
console.log(waitingTime("[6,2]", 9)); // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input