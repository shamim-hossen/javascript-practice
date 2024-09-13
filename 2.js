// problem2
function sendNotification(email){
    if (email.includes("@")){
      const newString = email.split("@");
      const notification = newString[0] + " sent you an email from " + newString[1];
      return notification;
    }else{
      return "Invalid Email";
    }
}

console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
console.log(sendNotification("sadia8icloud.com")); // Invalid Email