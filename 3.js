// problem3
function checkDigitsInName(name){
    if (typeof name !== "string"){
      return "Invalid Input";
    }
    for (let i = 0;i < name.length; i++){
      const item = name[i];
      if (!isNaN(item)){
        return true;
      }
    }
    return false;
}
console.log(checkDigitsInName("Raj123")); // true
console.log(checkDigitsInName("n9ayeem")); // true
console.log(checkDigitsInName("e1mu3")); // true
console.log(checkDigitsInName("Suman")); // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#")); // false
console.log(checkDigitsInName(["Raj"])); // Invalid Input