document.onload=function(){window.scrollTo(0,0)};

scrollTo(0,0);


let CURRENT_PAGE = 1;

const path = "resources/";

function newImage(name){
	let curr_path=path+name+".png";
	pict = new Image();
	pict.crossOrigin=null;
	pict.src=curr_path;
	return pict;
}



function manageLights(e=null){

	if(localStorage.colormode == undefined){
		localStorage.colormode = "dark";
	}

	if( localStorage.colormode == "dark" ){

		localStorage.colormode = "light";
		document.body.style.filter = "invert(100%)";
		document.body.className = "daymode";

	}
	else{

		localStorage.colormode = "dark";
		document.body.style.filter = "invert(0%)";
		document.body.className = "nightmode";

	}

}






let modechanger = document.getElementById("changestyle");


modechanger.onclick = manageLights;