let cust_Id=prompt("Enter your torrent customer Id")
let cust_Name=prompt("Enter your Name")
let unit=Number(prompt("Enter Total unit consumed by you")
)
let charge;


if(unit<200){
   charge=1.20    
}

else if(unit>=200 && unit<400){
    charge=1.50
}

else if(unit>=400 && unit<600){
    charge=1.80
}

else{
    charge=2.00
}

gross_bill=unit*charge;
let surcharge
if(gross_bill>400){
     surcharge=gross_bill*15/100 //(15/100)
}

else{
    surcharge=0
}   

let final_bill=gross_bill+surcharge;

if(final_bill<100){
    final_bill=100
}

console.log(`yuor final bill is ${final_bill}`);
