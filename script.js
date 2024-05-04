
let SCROLLSIZE;

let main = document.querySelector("main");

let floating_header = document.querySelector("#floatingheader");

let hiding_header = true;

function getScreenSize(e){

	SCROLLSIZE = main.clientHeight*.9;
}

function setHeader(e){

	displaying = window.scrollY>=SCROLLSIZE;



	if(displaying && hiding_header){
		hiding_header = false;

		floating_header.style.display="block";
		setTimeout(function(){floating_header.className="";},0);

	}
	else if(!displaying && !hiding_header){
		hiding_header = true;
		floating_header.className="hidden";
		// setTimeout(function(){floating_header.style.display="none";},500);

	}






}




window.onresize = function(e){getScreenSize(e);setHeader(e);};
window.onload = function(e){getScreenSize(e);setHeader(e);}

window.onscroll = setHeader;

setInterval(setHeader,60);