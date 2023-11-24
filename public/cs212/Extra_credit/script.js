function Addendum() {
	document.getElementById("story").innerHTML = "<p>This was a fun project to work on. Everything was fairly easy to make. The hardest part was probably making the buttons work properly. But once I got it working it was all just copy and paste and rinse and repease.</p><button onclick='goBack()'>Go back</button>";
}

function goLeft() {
	document.getElementById("story").innerHTML = "<p>You went through the left door. You find two big guards. Do you hide or fight?</p><button onclick='hide()'>Hide</button><button onclick='fight()'>Fight</button>";
}

function hide() {
	document.getElementById("story").innerHTML = "<p>You hid behind a barrel. The guards didn't see you. The guards start to leave. Do you follow them or go back?</p><button onclick='follow()'>Follow</button><button onclick='goBack()'>Go back</button>";
}

function fight() {
	document.getElementById("story").innerHTML = "<p>You tried to fight the guards, but they were too strong. You died.</p><button onclick='showEnding3()'>Restart</button>";
}

function follow() {
	document.getElementById("story").innerHTML = "<p>You followed the guards. You find more prisoners. Do you free them or leave them and continue? </p><button onclick='free()'>Free them</button><button onclick='leave()'>Leave them</button>";
}

function free() {
	document.getElementById("story").innerHTML = "<p>You freed the prisoners. They help you fight the guards. Do you follow the prisoners or take your own path?</p><button onclick='followPrisoners()'>Follow the prisoners</button><button onclick='takePath()'>Take your own path</button>";
}

function followPrisoners() {
	document.getElementById("story").innerHTML = "<p>You followed the prisoners. You may of let them free but they still beat you up. You died.</p><button onclick='showEnding4()'>Restart</button>";
}

function takePath() {
	document.getElementById("story").innerHTML = "<p>You took your own path. You find a key. Do you take the key or leave it?</p><button onclick='takeKey()'>Take the key</button><button onclick='leaveKey()'>Leave the key</button>";
}

function takeKey() {
	document.getElementById("story").innerHTML = "<p>You took the key. You unlock the door and it leads you to the labrinth. Do you go left or right?</p><button onclick='takeLeft()'>Go left</button><button onclick='takeRight()'>Go right</button>";
}

function leaveKey() {
	document.getElementById("story").innerHTML = "<p>You left the key. You continue on your path. You find a fire breathing dragon. Do you fight or run?</p><button onclick='fightDragon()'>Fight</button><button onclick='runDragon()'>Run</button>";
}

function fightDragon() {
	document.getElementById("story").innerHTML = "<p>You tried to fight the dragon, but it was too strong. You died.</p><button onclick='showEnding6()'>Restart</button>";
}

function runDragon() {
	document.getElementById("story").innerHTML = "<p>You ran from the dragon. The dragon chased you and burned you alive.</p><button onclick='showEnding2()'>Restart</button>";
}

function leave() {
	document.getElementById("story").innerHTML = "<p>You left the prisoners. The guards found you before you could hide. You died.</p><button onclick='showEnding5()'>Restart</button>";
}

function goRight() {
	document.getElementById("story").innerHTML = "<p>You are led into a room with a table. On the table is a key and a note. Do you take the key or read the note?</p><button onclick='take()'>Take the key</button><button onclick='read()'>Read the note</button>";
}

function take() {
	document.getElementById("story").innerHTML = "<p>You took the key. You unlock the door and it leads you to the labrinth. Do you go left or right?</p><button onclick='takeLeft()'>Go left</button><button onclick='takeRight()'>Go right</button>";
}

function read() {
	document.getElementById("story").innerHTML = "<p>You read the note. It says 'The key is a trap. It will lead you to the labrinth. It also tells you how to get out of the cave. You follow the instructions and escape.</p><button onclick='showEnding1()'>Restart</button>";
}

function takeLeft() {
	document.getElementById("story").innerHTML = "<p>You went left. You find a dead end. Do you go back or go right?</p><button onclick='goBack()'>Go back</button><button onclick='takeRight()'>Go right</button>";
}

function takeRight() {
	document.getElementById("story").innerHTML = "<p>You went right. You are approached by two doors owned by goblins. Left one claims that his door will lead you to the exit. Right one claims that his door will kill you. One is lying while the other one is telling you the truth.</p><button onclick='leftLying()'>Left Door</button><button onclick='rightTruth()'>Right Door</button>";
}

function leftLying() {
	document.getElementById("story").innerHTML = "<p>You went through the Left Door and brought you through a chute and led you to a trash compactor and it squished you alive</p><button onclick<button onclick='showEnding7()'>Restart</button>";
}

function rightTruth() {
	document.getElementById("story").innerHTML = "<p>You went through the Right door and it brought you to an elevator and you chose to go up. The elevator brought you to the surface. You breathed in the nice fresh air and were able to escape</p><button onclick<button onclick='showEnding8()'>Restart</button>"
}

function goBack() {
	document.getElementById("story").innerHTML = "<p>You're back where you started.</p><button onclick='goLeft()'>Go left</button><button onclick='goRight()'>Go right</button>";
}



function showEnding1() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending1").style.display = "block";
}

function showEnding2() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending2").style.display = "block";
}

function showEnding3() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending3").style.display = "block";
}

function showEnding4() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending4").style.display = "block";
}

function showEnding5() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending5").style.display = "block";
}

function showEnding6() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending6").style.display = "block";
}

function showEnding7() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending7").style.display = "block";
}

function showEnding8() {
	document.getElementById("story").style.display = "none";
	document.getElementById("ending8").style.display = "block";
}
