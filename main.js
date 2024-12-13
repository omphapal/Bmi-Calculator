function calculateBMI() {
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let unit = document.querySelector('input[name="unit"]:checked').value;
	let resultText = "";
	let bmi = 0;

	// Input Validation
	if (weight <= 0 || height <= 0) {
		resultText = "Please enter valid positive values for weight and height.";
		document.getElementById("results").classList.add("error");
		document.getElementById("results").innerText = resultText;
		return;
	}

	// Convert to metric if imperial is selected
	if (unit === "imperial") {
		weight = weight * 0.453592;  // lbs to kg
		height = height * 0.0254;  // inches to meters
	} else {
		height = height / 100;  // cm to meters
	}

	// BMI Calculation
	bmi = weight / (height * height);
	bmi = bmi.toFixed(1);

	// BMI Classification
	if (bmi < 18.5) {
		resultText = `Your BMI is ${bmi}, which means you are Underweight.`;
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		resultText = `Your BMI is ${bmi}, which means you have a Normal weight.`;
	} else if (bmi >= 25 && bmi <= 29.9) {
		resultText = `Your BMI is ${bmi}, which means you are Overweight.`;
	} else {
		resultText = `Your BMI is ${bmi}, which means you are Obese.`;
	}

	document.getElementById("results").classList.remove("error");
	document.getElementById("results").innerText = resultText;

	// Display the BMI on a graph bar
	let bmiBar = document.getElementById("bmiGraph");
	let color = "#00c851"; // Green for normal BMI
	if (bmi >= 25) color = "#ffbb33"; // Yellow for overweight
	if (bmi >= 30) color = "#ff4444"; // Red for obese

	let graphWidth = bmi * 2; // Scale the graph based on BMI value
	if (graphWidth > 100) graphWidth = 100; // Maximum graph width
	bmiBar.innerHTML = `<div class="graph-bar" style="width: ${graphWidth}%; background-color: ${color};"></div>`;
}

function clearForm() {
	document.getElementById("weight").value = "";
	document.getElementById("height").value = "";
	document.getElementById("results").innerText = "Your BMI result will appear here.";
	document.getElementById("bmiGraph").innerHTML = "";
}
