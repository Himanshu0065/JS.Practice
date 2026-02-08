function convertHTML(str){
  let result="";
  for(let i=0;i<str.length;i++){
    let char=str[i];
    switch(char){
      case '&':
      result+='&amp;';
      break;
      case '<':
      result+='&lt;';
      break;
      case '>':
      result+='&gt;';
      break;
      case '"':
      result+='&quot;';
      break;
      case "'":
      result+='&apos;';
      break;
      default:
      result+=char;   
    }
  }return result;
}
console.log(convertHTML("Dolce & Gabbana"))