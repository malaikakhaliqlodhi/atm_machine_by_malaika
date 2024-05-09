import inquirer from "inquirer"
let myBalance= 10000; 
let myPin= 9090
let pinAnswer = await inquirer.prompt(
    [
    {
    
    name:"pin",
    message:"enter your pin",
    type:"number",
}
]
)
if(pinAnswer.pin===myPin){
    console.log("correct pin code !!!")

    let operationAns =await inquirer.prompt({
        name:"operation",
        message:"please select option",
        type:"list",
        choices:["checkbalance", "withdraw"]

    
    })
    if (operationAns.operation=== "withdraw"){
let amountAns= await inquirer.prompt([{
    name:"amount",
    message:"enter your amount",
    type:"number",


}])
    myBalance-=amountAns.amount
    console.log("your remaining balance :" + myBalance)
    
}else if (operationAns.operation === "checkbalance"){
console.log(`your balance is ${myBalance}`)}


}else{
   console.log("incorrect pin number")
}
