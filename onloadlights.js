if(localStorage.colormode == undefined){
	localStorage.colormode = "dark";
}

if( localStorage.colormode == "dark" ){

	localStorage.colormode = "dark";
	document.body.style.filter = "invert(0%)";
	document.body.className = "nightmode";

}
else{

	localStorage.colormode = "light";
	document.body.style.filter = "invert(100%)";
	document.body.className = "daymode";


}

