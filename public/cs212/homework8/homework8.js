function generateMadLib() {
	const noun1 = document.getElementById("noun1").value;
	const adj1 = document.getElementById("adj1").value;
	const pluralnoun1 = document.getElementById("pluralnoun1").value;
	const adj2 = document.getElementById("adj2").value;
	const noun2 = document.getElementById("noun2").value;
	const adj3 = document.getElementById("adj3").value;
	const noun3 = document.getElementById("noun3").value;
	const pluralnoun2 = document.getElementById("pluralnoun2").value;
	const noun4 = document.getElementById("noun4").value;

	const madLib = `Today, I went to the <strong>${noun1}</strong> store to 
					buy some <strong>${adj1}</strong> <strong>${pluralnoun1}</strong>. 
					As soon as I arrived, I saw a <strong>${adj2}</strong> <strong>${noun2}</strong> 
					that caught my attention. While I was checking it out, 
					I noticed a <strong>${adj3}</strong> <strong>${noun3}</strong> 
					approaching me. I quickly grabbed my <strong>${noun4}</strong> 
					and headed to the checkout. After paying, I walked out of the 
					store and saw a group of <strong>${pluralnoun2}</strong> dancing 
					to the sound of a <strong>${noun1}</strong>. It was a truly 
					<strong>${adj1}</strong> experience.`;

	document.getElementById("madLibOutput").innerHTML = madLib;
	document.getElementById("madLibOutput").style.display = "block";
}
