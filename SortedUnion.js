//Implement a Unique Sorted Union using rest parameter 
function uniteUnique(...args){
  let result=[];
  for(let arg of args){
    let i=0;
    while(i<arg.length){
      if(result.includes(arg[i])){
      i++;}
      
      else {
        result.push(arg[i]);
        i++;
      }
      }
  }return result
} 
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))