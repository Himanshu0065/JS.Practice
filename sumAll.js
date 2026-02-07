//Designing a Sum All Numbers Algorithm.
function sumAll(arr){
  let sum=0;
  if(arr[0]<arr[1]){
    while(arr[0]<=arr[1]){
      sum+=arr[0];
      arr[0]++;
    }
    }
    else{
      while(arr[0]>=arr[1]){
        sum+=arr[0];
        arr[0]--;
      }
    }return sum;
  }
  console.log(sumAll([4,1]))
