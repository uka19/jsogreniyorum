var hesap={
	name_surname:"",
	tc:"",
	tel:"",
	email:"",
	pass:""
};
function kayitOl(){

	hesap.nameSurname = document.getElementById("nameSurname").value;
	hesap.tc = document.getElementById("tc").value;
	hesap.tel = document.getElementById("tel").value;
	hesap.email = document.getElementById("email").value;
	hesap.pass = document.getElementById("pass").value;

	if(hesap.nameSurname.length == 0 || hesap.tc.length == 0 || hesap.tel.length == 0 || hesap.email.length == 0  || hesap.pass.length == 0){
		alert("bos alanlari doldur");
	}else if(hesap.tc.length < 11 || hesap.tc.length > 11){
		alert("Tc kimlik numarasini hatali girdiniz");
	}else if(hesap.tel.length < 11 || hesap.tel.length > 11){
		alert("Telefon numarasini hatali girdiniz");
	}else if(ValidateEmail(hesap.email)){
		alert("Gecersiz email girdiniz");
	}else{
		var divElement = document.createElement("div");
		divElement.id = "account";
		var fieldsetElement = document.createElement("fieldset");
		var legendElement = document.createElement("legend");
		legendElement.innerHTML = "Kayit Basarili";

		var adSoyadLabel = document.createElement("label");
		adSoyadLabel.innerHTML = "Ad Soyad:"
		var getAdSoyadLabel = document.createElement("label");
		getAdSoyadLabel.innerHTML = hesap.nameSurname;

		var tcLabel = document.createElement("label");
		tcLabel.innerHTML = "TC No:"
		var getTcLabel = document.createElement("label");
		getTcLabel.innerHTML = hesap.tc;

		var telLabel = document.createElement("label");
		telLabel.innerHTML = "Tel:"
		var getTelLabel = document.createElement("label");
		getTelLabel.innerHTML = hesap.tel;

		var emailLabel = document.createElement("label");
		emailLabel.innerHTML = "Email:"
		var getEmailLabel = document.createElement("label");
		getEmailLabel.innerHTML = hesap.email;


		fieldsetElement.appendChild(legendElement);
		fieldsetElement.appendChild(adSoyadLabel);
		fieldsetElement.appendChild(getAdSoyadLabel);
		fieldsetElement.appendChild(document.createElement("br"));
		fieldsetElement.appendChild(tcLabel);
		fieldsetElement.appendChild(getTcLabel);
		fieldsetElement.appendChild(document.createElement("br"));
		fieldsetElement.appendChild(telLabel);
		fieldsetElement.appendChild(getTelLabel);
		fieldsetElement.appendChild(document.createElement("br"));
		fieldsetElement.appendChild(emailLabel);
		fieldsetElement.appendChild(getEmailLabel);
		
		divElement.appendChild(fieldsetElement);
		document.getElementById("content").appendChild(divElement);
		document.getElementById("content").removeChild(document.getElementById("formArea"));
		document.getElementById("account").style.visibility = "visible";
	}

}
function ValidateEmail(inputText)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.match(mailformat))
	{
		return false;
	}
	else
	{
		return true;
	}
}