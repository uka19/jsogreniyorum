function scaleAnim(){
	var obj = document.getElementById("ukaicon");
	obj.style.animation = "scaleanim 1s ";
}
function rotateAnim(){
	var obj = document.getElementById("jsIcon");
	obj.style.animation = "rotateAnim 0.5s";
}
function onayla() {
    alert("Mesajınız başarı ile gönderildi. Sizinle en yakın zamanda iletişime geçeceğiz.");
}
function temizle() {
    return confirm("Form temizlensin mi?");
}
function uzerimde()
{
document.getElementById("metin2").innerHTML="Fare üzerimde";
}
 
function disarida()
{
document.getElementById("metin2").innerHTML="Fare dışarıda";
}
 
function tiklandi()
{
document.getElementById("metin1").innerHTML="Tıklandı";
}

function basildi()
{
document.getElementById("metin3").innerHTML="Fare tuşuna basıldı";
}

function birakildi()
{
document.getElementById("metin3").innerHTML="Fare tuşu bırakıldı";

}
function selectedTextAlert(){
	alert("Metin seçildi");
}
function ornek1(){
	var text0 = document.getElementById("ornek1").value;
	document.getElementById("ornek1cikti").value = text0[0];
}
function ornek2(){
	var text0 = document.getElementById("ornek2").value.length;
	document.getElementById("ornek2cikti").value = text0;	
}
function ornek3(){
	var text0 = document.getElementById("ornek3").value.indexOf("bul");
	document.getElementById("ornek3cikti").value = text0;	
}
function ornek4(){
	var text0 = document.getElementById("ornek4").value;
	document.getElementById("ornek4cikti").value = text0.replace("Antalya","Ankara");	
}
function ornek5(){
	var text0 = document.getElementById("ornek5").value;
	document.getElementById("ornek5cikti").value = text0.toUpperCase();	
}
function ornek6(){
	var text0 = document.getElementById("ornek6").value;
	document.getElementById("ornek6cikti").value = text0.toLowerCase();	
}
function ornek7(){
	var text0 = document.getElementById("ornek7").value.split(",");
	document.getElementById("ornek7cikti").value = text0[2];	
}
function ornek8(){
	var text0 = document.getElementById("ornek8").value.substring(0,6);
	document.getElementById("ornek8cikti").value = text0;	
}
function ornek9(){
	var deger = 10/"armut";
	document.getElementById("ornek9cikti").value = deger;	
}
function ornek10(){
	var deger = 10/"2";
	document.getElementById("ornek10cikti").value = deger;	
}
function ornek11(){
	var deger = true;
	document.getElementById("ornek11cikti").value = Number(deger);	
}
function ornek12(){
	var arabalar = ["araba1", "araba2", "araba3"];
	document.getElementById("ornek12cikti").value = arabalar[1];	
}
function ornek13(){
	var arabalar = ["araba1", "araba2", "araba3"];
	arabalar[1] = "araba4";
	document.getElementById("ornek13cikti").value = arabalar[1];	
}
function ornek14(){
	var arabalar = ["araba1", "araba2", "araba3"];
	document.getElementById("ornek14cikti").value = arabalar;	
}
function ornek15(){
	var insan = {ad:"Ali", soyad:"Pak", yas:46};
	document.getElementById("ornek15cikti").value = insan.ad;	
}
function ornek16(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek16cikti").value = meyveler.length;	
}
function ornek17(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek17cikti").value = meyveler.sort();	
}
function ornek18(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	meyveler.push("Limon");
	document.getElementById("ornek18cikti").value = meyveler;	
}
function ornek19(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek19cikti").value = typeof meyveler;	
}
function ornek20(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek20cikti").value = Array.isArray(meyveler);	
}
function ornek21(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek21cikti").value = meyveler instanceof Array;	
}
function ornek22(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek22cikti").value = meyveler.toString();	
}
function ornek23(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek23cikti").value = meyveler.join("-");	
}
function ornek24(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek24cikti").value = meyveler.pop();	
}
function ornek25(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek25cikti").value = meyveler.push("Limon");	
}
function ornek26(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek26cikti").value = meyveler.shift();	
}
function ornek27(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek27cikti").value = meyveler.unshift("Limon");	
}
function ornek28(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	delete meyveler[0];
	document.getElementById("ornek28cikti").value = meyveler;	
}
function ornek29(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango"];
	document.getElementById("ornek29cikti").value = meyveler.splice(2, 2, "Limon", "Armut");	
}
function ornek30(){
	var meyveler = ["Elma", "Armut"];
	var sebzeler = ["Patlıcan", "Ispanak"];
	var yiyecekler = meyveler.concat(sebzeler)
	document.getElementById("ornek30cikti").value = yiyecekler;	
}
function ornek31(){
	var meyveler = ["Muz", "Portakal", "Elma", "Mango", "Limon"];
	var yeniDizi = meyveler.slice(2)
	document.getElementById("ornek31cikti").value = yeniDizi;	
}
function ornek32(){
	var muzikTurleri = document.selectForm.muzikTurleri;
	var secilenMuzikSayisi = 0;
	 for (var i = 0; i < muzikTurleri.options.length; i++) {
	   if (muzikTurleri.options[i].selected) {
	     secilenMuzikSayisi++;
    	}
  	}
  	document.getElementById("ornek32cikti").value = secilenMuzikSayisi;	
}
function ornek33(){
	document.getElementById("ornek33cikti").value = "John".constructor;	
}