
window.onload = function(){
	bulmacayiEkle();
}

var val = ["TIGER", "CARROT", "PENCIL", "HELLO","RUBBER","SINGER"];
var sira = 0;
var mistake = 0;
var correct = 0;
function bulmacayiEkle(){
	var kelime = val[sira]; 
	var div = document.getElementById("kelimeler");
	for (var i = 0; i < kelime.length; i++) {
		var span = document.createElement("span");
		span.className = "find";
		span.innerHTML = "_";
		div.appendChild(span);
	}
}
function keyListener(x){
	var kelime = val[sira];
	x.disabled = true;
	if(kelime.includes(x.value)){
		x.style.backgroundImage = "url('../../assets/true.png')";
		x.style.backgroundPosition = "center";
		x.style.backgroundSize = "cover";
		var i = 0;
		for (i; i < kelime.length; i++){
			if(kelime[i] == x.value){
				var span = document.getElementsByClassName("find")[i];
				span.innerHTML = x.value;
				correct++;
				if(correct == kelime.length){
					alert("Correct");
					if(sira < 5){
						sira++;
					}else{
						alert("You Won");
						window.open("AdamAsmaca.html","_self");
					}
					
					reloadGame();
					//window.open("AdamAsmaca.html","_self");
					
				}
			}
		} 	
	}else{
		x.style.backgroundImage = "url('../../assets/false.png')";
		x.style.backgroundPosition = "center";
		x.style.backgroundSize = "cover";

		mistake++;
		var asma = document.getElementById("asmaimage");
		asma.style.display="block";
		asma.src = "../../assets/adamAsmacaImages/AdamAsmaca-"+mistake+".png";
		if(mistake>=9){
			gameOver();
			
		}
	}
}
function gameOver(){
	var kelime = val[sira];
	alert("Game Over"+" Cevap: "+kelime);
	var i = 0;
	for (i; i < kelime.length; i++){
		var span = document.getElementsByClassName("find")[i];
		span.innerHTML = kelime[i];
	}
	sira = 0;
	mistake = 0;
	reloadGame();
	
	//window.open("AdamAsmaca.html","_self");
}
function reloadGame(){
	
	var span = document.getElementsByClassName("find");
	while(span.length > 0){
		span[0].parentNode.removeChild(span[0]);
	}
	for (var i = 0; i < 24; i++){
		var span = document.getElementsByClassName("key")[i];
		span.style.backgroundImage = "none";
		span.disabled = false;
	}
	var asma = document.getElementById("asmaimage");
	asma.style.display = "none";
	correct = 0;
	mistake = 0;
	bulmacayiEkle();
}