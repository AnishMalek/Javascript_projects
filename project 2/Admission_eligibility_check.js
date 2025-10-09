
let maths=Number((prompt("Enter Maths subject marks")))
let phy=Number((prompt("Enter Phy subject marks")))
let cham=Number((prompt("Enter Cham subject marks")))

let total=maths+phy+cham;
let totalOfMathAndPhy=maths+phy;

if(maths>=65 && phy>=55 && cham>=50){

    if(total>=190 || totalOfMathAndPhy>=140){
    console.log("The Candidate is eligible");

    }
    else{ 
    console.log("The Candidate is not eligible");

}

    
}

else{
    console.log("The Candidate is not eligible");

}
