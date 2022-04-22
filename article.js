body=document.getElementById('body');
switchB=document.getElementById("switch");
firststyle=document.getElementById("firststyle");
secondstyle=document.getElementById("secondstyle");
thirdstyle=document.getElementById("thirdstyle");
reader=document.getElementById("reader");
function invertStyle(){
	if(body.className=="white")
	{
		localStorage.setItem("color","black");
		body.className="black";
		switchB.className="white";
		reader.className="black";
		firststyle.style.color="black";
		secondstyle.style.color="white";
		thirdstyle.style.background="linear-gradient(white 50%,black 50%);";
		thirdstyle.style.border="1px solid white";
	}
	else{
		localStorage.setItem("color","white");
		body.className="white";
		switchB.className="black";
		reader.className="white";
		firststyle.style.color="white";
		secondstyle.style.color="black";
		thirdstyle.style.background="linear-gradient(black 50%,white 50%);";
		thirdstyle.style.border="1px solid black";

	}
}


//GET COLOR TO CORRECT STATE

invertStyle();invertStyle();