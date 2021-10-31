function minimum(num1, num2) {
	if (num1 < num2) {
		console.log(num1);
	}
	else {
		console.log(num2);
	}
}

function is_even(num) {
	if (num == 0) {
		console.log("This number is even.");
	}
	else if (num == 1) {
		console.log("This number is odd.");
	}
	else {
		num -= 2;
		is_even(num);
	}
}

function count_Bs(string) {
	number_of_Bs = 0
	for (counter = 0; counter < string.length -1; counter += 1) {
		if (string[counter] == "B") {
			number_of_Bs += 1;
		}
	}
	return number_of_Bs;
}

function count_chars(string, char) {
	number_of_chars = 0
	for (counter = 0; counter < string.length -1; counter += 1) {
		if (string[counter] == char) {
			number_of_chars += 1;
		}
	}
	return number_of_chars;
}