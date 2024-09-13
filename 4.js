//problem4
function calculateFinalScore(obj){
    if (typeof obj !== "object"){
        return "Invalid Input";
    }
    if (typeof obj.name !== "string" || typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean"){
        return "Invalid Input";
    }
    if (obj.testScore < 0 || obj.testScore >50 || obj.schoolGrade < 0 || obj.schoolGrade >30){
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily){
        finalScore += 20;
    }
    return finalScore >= 80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); // true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
console.log(calculateFinalScore("hello")); // Invalid Input
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); // false