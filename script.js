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


function jumptoAboutP1(e){
	scrollTo(0,0);
	document.body.style.overflowY = "auto";
	page1.style.transform = "translateY(-100%)";
	page1.style.opacity = "0";
	CURRENT_PAGE = 2;
}


function jumptoHomeP2(e){
	document.body.style.overflowY = "hidden";
	// page1.style.transition="none !important";
	page1.style.transform = "translateY(0%)";
	page1.style.opacity = "1";
	CURRENT_PAGE = 1;
	scrollTo(0,0);
	
}

function jumptoProjectsP2(e){
	scrollTo(0,0);
	// page1.style.transition="none !important";
	page2.style.transform = "translateY(-100%)";
	page2.style.opacity = "0";
	CURRENT_PAGE = 3;
	document.body.style.overflowY = "auto";
}

function jumptoAboutP3(e){
	scrollTo(0,0);
	// page1.style.transition="none !important";
	page2.style.transform = "translateY(0%)";
	page2.style.opacity = "1";
	CURRENT_PAGE = 2;
	document.body.style.overflowY = "auto";

}


function jumptoBlogP3(e){
	scrollTo(0,0);
	document.body.style.overflowY = "hidden";
	// page1.style.transition="none !important";
	page3.style.transform = "translateY(-100%)";
	page3.style.opacity = "0";
	CURRENT_PAGE = 4;
}

function jumptoProjectsP4(e){
	scrollTo(0,0);
	// page1.style.transition="none !important";
	page3.style.transform = "translateY(0%)";
	page3.style.opacity = "1";
	CURRENT_PAGE = 3;
	document.body.style.overflowY = "auto";
}



function jumptoHomeP4(e){
	scrollTo(0,0);
	document.body.style.overflowY = "hidden";
	// page1.style.transition="none !important";
	page4.style.transform = "translateY(0%)";
	page4.style.opacity = "1";
	page1.style.transform = "translateY(0%)";
	page1.style.opacity = "1";
	page2.style.transform = "translateY(0%)";
	page2.style.opacity = "1";
	page3.style.transform = "translateY(0%)";
	page3.style.opacity = "1";
	CURRENT_PAGE  = 1;
}

function headerButtonprojects(e){

	if( CURRENT_PAGE == 1 ){
		jumptoAboutP1(e);
		jumptoProjectsP2(e);
	}
	else if( CURRENT_PAGE == 2 ){
		jumptoProjectsP2(e);		
	}
	else if( CURRENT_PAGE == 4 ){
		jumptoProjectsP4(e);		
	}
}

function headerButtonblog(e){
	document.body.style.overflowY = "hidden";

	if( CURRENT_PAGE == 1 ){
		jumptoAboutP1(e);
		jumptoProjectsP2(e);
		jumptoBlogP3(e);
	}
	else if( CURRENT_PAGE == 2 ){
		jumptoProjectsP2(e);		
		jumptoBlogP3(e);
	}
	else if( CURRENT_PAGE == 3 ){
		jumptoBlogP3(e);
	}
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




let mouse = document.getElementById("mouse");

let IMG_MOUSE = newImage("mouse4");


// PAGE 1
let jumptoAboutButtonP1 = document.getElementById('jumper1');

// PAGE 2 
let jumptoHomeButtonP2 = document.getElementById('jumper2');
let jumptoProjectsButtonP2 = document.getElementById('jumper3');

// PAGE 3 
let jumptoAboutButtonP3 = document.getElementById('jumper4');
let jumptoBlogButtonP3 = document.getElementById('jumper5');

// PAGE 4
let jumptoProjectsButtonP4 = document.getElementById('jumper6');
let jumptoHomeButtonP4 = document.getElementById('jumper7');




let homeButton = document.getElementById("homebutton");
let aboutButton = document.getElementById("aboutbutton");
let projectsButton = document.getElementById("projectsbutton");
let blogButton = document.getElementById("blogbutton");


let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');



let modechanger = document.getElementById("changestyle");


jumptoAboutButtonP1.onclick = jumptoAboutP1;
jumptoHomeButtonP2.onclick = jumptoHomeP2;
jumptoProjectsButtonP2.onclick = jumptoProjectsP2;
jumptoAboutButtonP3.onclick = jumptoAboutP3;
jumptoBlogButtonP3.onclick = jumptoBlogP3;
jumptoProjectsButtonP4.onclick = jumptoProjectsP4;
jumptoHomeButtonP4.onclick = jumptoHomeP4;

homeButton.onclick = jumptoHomeP4;
aboutButton.onclick = function(e){jumptoAboutP1(e);jumptoAboutP3(e);};
projectsButton.onclick = headerButtonprojects;
blogButton.onclick = headerButtonblog;

modechanger.onclick = manageLights;