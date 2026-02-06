//Building an Inventory Management Program
let inventory=[{name: "FLOUR", quantity: 5}
];
function findProductIndex(product){
  if (typeof product !== 'string') return -1;
  for(let i=0;i<inventory.length;i++){
  if(inventory[i].name.toLowerCase()===product.toLowerCase()){
    return i;
  }
}
return -1
}
// console.log(findProductIndex())


let productObj={name:'flour',quantity:5};
function addProduct(productObj){
  productObj.name=productObj.name.toLowerCase();
    let index=findProductIndex(productObj.name);
    if(index!==-1){
      inventory[index].quantity+=productObj.quantity;
      console.log(productObj.name + " quantity updated")
    return;
}
    else{
      inventory.push(productObj)
       return console.log(productObj.name + " added to inventory")
    }
    }
    addProduct({name: "FLOUR", quantity: 5})


function removeProduct(product,quantity){
  product=product.toLowerCase();
  let index=findProductIndex(product);
   
  if(index!==-1){
    let temp1=inventory[index].quantity
    let temp=temp1-quantity;


    if(temp1<quantity){
       console.log('Not enough '+product+' available, remaining pieces: '+temp1);
       return; 
    }
    if(temp>=0 )
     {
        inventory[index].quantity=temp
        console.log('Remaining'+product+' pieces: '+temp);}

    if(temp===0)inventory.splice(index,1);
  }
  else {
    return console.log(product+' not found');
  }
  
}
removeProduct('flour',5)