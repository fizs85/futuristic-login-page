function digpsw(psw)
{
	var hash = CryptoJS.SHA256(psw);
	
	alert(hash);

	if(hash=="e1fc45f7880e0505ff0b6a079b9af149f225e260f59b1d20225357a8cce8ffd8"){
		window.location.href='pag1.html';
	}
	else{
		alert('Soooca');
	}
}
