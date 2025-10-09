let cp=Number(prompt("Enter your cost price"))
let sp=Number(prompt("Enter your  selling price"))

if(sp>cp){
    console.log("you are in Profit");
    
}  else if(sp==cp){
    console.log("No profit No Loss");
    
}

else{
    console.log("Alas! you are in Loss");
    
}