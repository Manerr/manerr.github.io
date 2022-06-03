
		window.scrollTo(0,0);
		let text_ido_idx=0;
		let text_ido_text='Music maker , Web designer, 3D maker and Python dev \n';
		let text_ido_zone=document.getElementById("canidothat");

		text_ido_zone.onclick=function (){
			if(text_ido_idx < text_ido_text.length){return}
			text_ido_idx=0;
			text_ido_zone.innerHTML="";
			var text_ido=window.setInterval(write_text,155);
		}

		function write_text() {
			if(Math.random()>.75){return}
			
			if(text_ido_idx < text_ido_text.length){
				text_ido_zone.innerHTML+=text_ido_text[text_ido_idx];
				text_ido_idx++;
			}
			else{window.clearInterval(text_ido)}
		}
		var text_ido=window.setInterval(write_text,133);

		scroll_index=0;
		scroll_size=0
		let dalist=document.getElementsByClassName('dalist')[0];

		function scroll(size){



			scroll_add=pages[scroll_index].clientWidth;
		
			if (scroll_index===0 && size===-1){
				scroll_index=0;return
			}
			if (scroll_index===pages.length-1 && size===1){scroll_index=pages.length-1;return}
		
			pages[scroll_index].parentElement.className="";


			scroll_index+=size;

			if(size===-1){scroll_add=-scroll_add}
			else if(size===1){scroll_add=scroll_add}

			scroll_size+=scroll_add;


			pages[scroll_index].parentElement.className="first";


			dalist.style.marginLeft=-(scroll_size).toString()+"px";
		}


		let pages=document.getElementsByClassName('bgcontainer');
		for (var i = 0; i < pages.length; i++) {
			a=pages[i];
			a.parentElement.style.zIndex=pages.length-i.toString();

		// 	a.getElementsByClassName('description')[i].style.overflowY="hidden";
		// 	a.onclick=function (){
		// 		if(a.getElementsByClassName('description')[i].style.overflowY=="hidden"){
		// 			a.getElementsByClassName('description')[i].style.overflowY="scroll";}
		// 		else{a.getElementsByClassName('description')[i].style.overflowY="hidden";}
		// 	}
		}

let logotwo=document.getElementById("secondlogo");
let canidothat=document.getElementById("canidothat");
let jumper=document.getElementById("jumper");

let pictures=document.querySelectorAll("body #boxofgallery img");

for (var i = 0; i < pictures.length; i++) {
	let source=pictures[i].src;
	bruh=(source,document.querySelector("body #boxofgallery img:nth-child("+(i+1).toString()+")"))
	bruh.onclick=function (e){window.location=source;}
}

function callLogoTwo(arg){
	if(window.pageYOffset>(window.innerHeight-window.innerHeight/1.8)){
		logotwo.style.display="inline-block";
		jumper.style.display="inline-block";
	}
	else{
		logotwo.style.display="none";
		jumper.style.display="none";

	}
}


callLogoTwo();
document.onscroll=callLogoTwo;


cookiealert=document.getElementById("cookiealert");
let cookie=localStorage.getItem("cookie");

if(cookie!==null){cookiealert.style.display="none";}
else{document.getElementById("cookieclose").onclick=function () {
	cookiealert.style.display="block";
	cookie=true;
	localStorage.setItem("cookie","true");
	cookiealert.style.display="none";
}}
	
