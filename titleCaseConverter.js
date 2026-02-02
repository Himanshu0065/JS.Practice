// Building a function that converts a string into titleCase.
function titleCase(str){
  let temp1=str.toLowerCase();
  let temp2=temp1.split(' ');
  let result=''
  for(let char of temp2){
    result+=char[0].toUpperCase();
    result+=char.slice(1);
    result+=" "
  }
    
    return result.trim();;
}
console.log(titleCase('sHoRt AnD sToUt'))