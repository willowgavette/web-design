string = ""
for (let counter_1 = 0; counter_1 <= 8; counter_1 +=1) {
	if (counter_1 % 2 == 0) {
		string += " "
	}
	for (counter_2 = 0; counter_2 <= 8; counter_2 += 1) {
		if (counter_2 % 2 == 0) {
			string += " "
		}
		else if (counter_2 % 2 != 0) {
			string += "#"
		}
	}	
	string += "\n"
}
