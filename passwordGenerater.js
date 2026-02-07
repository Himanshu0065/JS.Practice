//Building a Password Generator 
function generatePassword(length){
  let random=''; let charac='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  for(let i=0;i<length;i++){
    random+=charac.charAt(Math.floor(Math.random()*charac.length));
  }return random
}
let password=generatePassword(5);
console.log('Generated password: '+password)