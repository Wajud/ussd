const pin = 2134;
const banks = ["Access Bank", "Eco Bank", "GTB",  "UBA", "Wema Bank","Zenith Bank"];
let balance = 100000;

let transactionType = prompt(`Welcome to TiideBank.
What will you like to do ? 

1. Airtime Self
2. Airtime Others
3. Transfer to TiideBank
4. Transfer to Other Banks
`)

if(transactionType == 1){
    let airtimeAmount = prompt("How much airtime will you like to purchase ?")
    if(airtimeAmount){
        alert(`You have successfully purchased #${airtimeAmount} airtime`)
    }
    else{
        alert(`Invalid amount entered`)
    }
}

else if(transactionType==2){
    let numberToCredit = prompt(`Enter the phone number you will like to credit`)
    let airtimeAmount = prompt("How much airtime will you like to purchase ?")
    if(numberToCredit.length ==11 && airtimeAmount){
        let enteredPin = prompt(`You are about to credit ${numberToCredit} an airtime of #${airtimeAmount} 
        Enter your pin to confirm`)
        if(enteredPin == pin){
            alert(`Transaction Successful`)
        }
        else{
            alert(`Pin incorrect. Transaction terminated`)
        }
    }
    else if(numberToCredit.length != 11){
    
        alert(`Number to credit is invalid`)
    }

    else if(!airtimeAmount){
        alert(`You did not enter an airtime amount`)
    }
}

else if(transactionType == 3){
    let accountToCredit = prompt(`Enter Tiideaccount number to Credit`);
    let creditAmount = prompt("How much will you like to Transfer ?")
    if(accountToCredit.length == 10 && creditAmount){
        let enteredPin = prompt(`You are about to transfer ${creditAmount} to Tiidebank User ${accountToCredit}.
        Enter your pin to confirm.`)
        if(enteredPin == pin){
            alert(`Transaction Successful`)
        }
        else{
            alert(`Invalid pin entered.
            Transaction terminated.`)
        }
    }
    else if(!creditAmount){
        alert(`You did not specify an amount to Transfer`)
    }
}

else if(transactionType ==4){
    let bank = prompt(`Which bank do you want to transfer to ?
    1. Access Bank
    2. Ecobank
    3. GTB
    4. UBA 
    5. Wema Bank  
    6. Zenith Bank
    `) 

    let accountNumber  = prompt(`Please enter the account number to transfer to`)

    if(bank < 1 || bank > 6){
        alert(`You did not select a valid bank`)
    }
   
    else if(accountNumber.length != 10){
        alert(`You entered an invalid account number`)
    }

    else if(bank >=1 && bank <= 6  && accountNumber.length == 10){
        let transferAmount = prompt("How much will you like to Transfer ?")
        if(transferAmount && transferAmount < balance ){
            let enteredPin = prompt(`You are about to transfer #${transferAmount} to ${banks[bank-1]} user: ${accountNumber}.
            Enter your pin to confirm.`)
            if (enteredPin== pin){
                alert(`You have successfully transfered ${transferAmount}
                Your balance now is #${balance-transferAmount}`)
                alert("Thank you for using Tiidebank")
            }
            else{
                alert(`Invalid pin entered.
                Transaction terminated`)
            }
        }

        else if(transferAmount > balance){
            alert(`Please beware that you cannot transfer beyond your current balance.
            Your current balance is #${balance}`)
        }

        else{
            alert(`You did not specify the transfer amount.
            Your current balance is: #${balance}`)
        }
    }

}

else{
    alert(`Invalid Transaction type selected`)
}
    