for (let counter = 1; counter <= 100; counter += 1) {
	if (counter % 3 == 0 && counter % 5 != 0) {
		console.log("fizz")
	}
	else if (counter % 3 != 0 && counter % 5 == 0) {
		console.log("buzz")
	}
	else if (counter % 3 == 0 && counter % 5 == 0) {
		console.log("fizzbuzz")
	}
	else {
		console.log(counter)
	}
}