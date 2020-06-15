window.onload = function()
{
	document.getElementById("tbImePrezime").focus();
	
	
	document.getElementById("taster").addEventListener("click", provera);
}

	var smerovi, ispis, broj;

	smerovi	= new Array("Season 1", "Season 2", "Season 3", "Season 4");
	
	ispis = "<select id='ddlSmer'>";
	ispis += "<option value='0'>Select</option>";
	for(var i = 0; i < smerovi.length; i++)
	{	
		broj = i + 1;
		ispis += "<option value='"+broj+"'>" + smerovi[i] + "</option>";
	}
	ispis += "</select>";
	
	document.getElementById("ddlista").innerHTML = ispis;

	


function provera()
{	
	var imePrezime, pass, email, statusPol, statusIzbor, sezona, sezonaIzbor, likovi, likovtiIzbor, regImePrezime, regPass, regEmail, nizOk, nizGreske, rezultat;
	
	imePrezime = document.getElementById("tbImePrezime").value;
	pass = document.getElementById("tbPass").value;
	email = document.getElementById("tbEmail").value;
	
	statusPol = document.getElementsByName("rbStatus");
	statusIzbor = "";
	for(var i = 0; i < statusPol.length; i++)
	{
		if(statusPol[i].checked)
		{
			statusIzbor += statusPol[i].value;
			break;
		}
	}
	
	
	sezona = document.getElementById("ddlSmer");
	sezonaIzbor = sezona.options[sezona.selectedIndex].text;
	
	
	likovi = document.getElementsByName("chbLikovi");
	likovtiIzbor = "";
	for(var i = 0; i < likovi.length; i++)
	{
		if(likovi[i].checked)
		{
			likovtiIzbor += likovi[i].value + " ";
		}
	}
	
	
	
	regImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})+$/;
	regPass = /[A-ZČĆŽŠĐ]+[a-zčćžšđ]+/;
	regEmail = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}@ict.edu.rs$/;
	
	
	nizGreske = new Array();
	nizOk = new Array();
	
	if(!regImePrezime.test(imePrezime))
	{
		nizGreske.push("Ime Prezime!");
	}
	else
	{
		nizOk.push(imePrezime);
	}
	
	if(!regPass.test(pass))
	{
		nizGreske.push("Mora postojati barem jedno veliko slovo i barem jedno malo slovo!");
	}
	else
	{
		nizOk.push(pass);
	}
	
	if(!regEmail.test(email))
	{
		nizGreske.push("Ime@ict.edu.rs");
	}
	else
	{
		nizOk.push(email);
	}
	
	if(statusIzbor == "")
	{
		nizGreske.push("Izaberite pol");
	}
	else
	{
		nizOk.push(statusIzbor);
	}
	
	if(likovtiIzbor == "")
	{
		nizGreske.push("Izaberite omiljenog lika!");
	}
	else
	{
		nizOk.push(likovtiIzbor);
	}
	
	
	if(sezonaIzbor == "")
	{
		nizGreske.push("Izaberite omiljenu sezonu");
	}
	else
	{
		nizOk.push(sezona.options[sezona.selectedIndex].text);
	}
	
	rezultat = "<ul>";
	if(nizGreske.length != 0)
	{
		for(var i = 0; i < nizGreske.length; i++)
		{
			rezultat += "<li style='color:#ff0000;'>" + nizGreske[i] + "</li>";
		}
	}
	else
	{
		for(var i = 0; i < nizOk.length; i++)
		{
			rezultat += "<li>" + nizOk[i] + "</li>";
		}
	}
	
	rezultat += "</ul>";
	
	document.getElementById("ispis").style.display = "block";
	document.getElementById("ispis").innerHTML = rezultat;
	
}