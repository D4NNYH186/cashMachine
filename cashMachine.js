let userBalance = 2025
let userPin = 4321
let accNum = 267566576
let userInput; // try to avoid this var
let pinCounter = 0

// const wrongPin = () => {
// 	if (userInput != userPin) {
// 		++pinCounter
// 		alert(`Incorrect pin, please try again`)
// 		checkPin()
// 		blockedPin()
// 	}
// }

// const continU = () => {
// 	prompt("Would you like to choose another service? Y or N")
// 	if (userInput == "Y"){
// 		optMenu()
// 	}
// 	else if (userInput == "N"){
// 		cancel()
// 	}
// 	else{
// 		alert("that is not a valid option")
// 	}
// }

const blockedPin = () => {
	if (pinCounter == 3) {
		alert(`you have entered your pin incorrectly 3 times, your card has been blocked`)
		cancel()
	}
}

const checkPin = () => {
	userInput = prompt("Welcome to Danny's ATM, Please enter your PIN:")
	console.log(userInput)
	if (userInput == userPin) {
		optMenu()
	} else if (userInput != userPin) {
		++pinCounter
		alert(`Incorrect pin, please try again`);
		blockedPin()
		checkPin()
	}
}

const optMenu = () => {
	userInput = prompt("Please choose an option:\n1. Check balance\n2. Withdraw cash\n3. Deposit\n4. Change PIN\n5. Cancel")

	if (userInput == 1) {
		checkBalance()
	} else if (userInput == 2) {
		withdrawCash()
	} else if (userInput == 3) {
		deposit()
	} else if (userInput == 4) {
		changePin()
	} else if (userInput == 5) {
		cancel()
	}
}

const checkBalance = () => {
	userInput = prompt(`Your balance is £ ${userBalance}`)
	optMenu()
}

const checkAmount = () => {
switch (userInput) {           //switch case is more efficent than previous statement
	case "5":
	case "10":
	case "20":
	case "100":
	alert(`you have successfully withdrawn £${userInput} from account number ${accNum}\nYour new balance is £${userBalance}`)
	break
default: 
	alert('That is not a valid option, Please try another amount')
}
}
const withdrawCash = () => {
	userInput = prompt("How much would you like to withdraw:\n£5\n£10\n£20\n£100")
    // if (userInput != 5, 10, 20, 100){
    //     alert("that is not a valid option")
    //     withdrawCash()
    if (userInput <= userBalance) {
		userBalance -= userInput
			checkAmount()
			// continU()
			optMenu()
	} else if (userInput > 250) {
		alert(`this will take you over your agreed limit, please withdraw another amount`)
		withdrawCash()
	} else {
		alert("Insufficient Funds")
		optMenu()  //make a check that they can only withdraw round numbers not like £11
	}
}


const deposit = () => {
	userInput = prompt("How much would you like to deposit?")

	userBalance += parseInt(userInput)
	alert(`you have successfully desposited £${userInput}\n Your new balance is £${userBalance}`)
	optMenu() //check to see if deposit was successful look on MDN (return types/ errors) not string being able to be entered
}

const changePin = () => {
	let newPin;
	userInput = prompt("Please enter your PIN")

	if (userInput !== userPin) {
        alert(`That is not the correct pin, please try again`)
        changePin()
		
	} 
	
	while(true) {
		userInput = prompt("Please enter your new PIN")

		if (userInput != '') {
			break;
		}
	}
	
	newPin = userInput;

	userInput = prompt("Please re-ener your PIN")

	if (userInput == newPin){
		alert("You have successfully changed your PIN")
		optMenu()
	} else {
        alert("those pins do not match ")
        changePin();
	}
	
}


const cancel = () => {
    alert("Thank you for using Cash Machine!")
    exit()
}

checkPin()