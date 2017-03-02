console.log("are we working?");

document.getElementById("changeText").addEventListener("click", function() {
	console.log("clicked color button");
	
	var textColor = document.getElementById("textColor").value;
	console.log("color entered", textColor);

	var text = document.getElementById("bodyText");
	console.log("body DOM", text);

	text.style.color = textColor;
});

document.getElementById("hideAll").addEventListener("click", function() {
	console.log("clicked hide button");

	var text = document.getElementsByTagName("BODY");

	text.style.display = "none";
});

function validateForm() {
	console.log("function opens!");

	var name = document.getElementById('nameInput').value;
	var species = document.getElementById('speciesInput').value;
	var age = document.getElementById('ageInput').value;

	if (!name.length || !species.length || !age.length) {
		alert("Fields cannot be blank!");
		return false;
	}

	/*if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
		alert("Age must be a number!");
		return false;
	}*/
	
	if (parseInt(age) != age || !Number.isInteger(parseInt(age))) {
		alert("Age must be a number!");
		return false;
	}

	console.log(name, species, age);
	return true;
}

/*lines 29-32 also work, and are what Ben covered in lecture*/
/*lines 34-37 are a different way to tackle integers being entered. 2nd condition is covering entries 
of all integers ("6") or all letters ("toof"). It can't figure out an entry of "12ff4" because parseInt makes
that 12 and doesn't trip alert. 1st condition covers "12ff4" because 12 != "12ff4" and alerts code. CAN'T 
USE !== BECAUSE THEN INTEGERS DON'T WORK [ex: an entry of 6 would give you 6 !== "6" which is TRUE because
the data types (number, string) are different. we've already covered for data types in 2nd condition and we 
also want integers to be false so alert is not tripped!!!]*/