	




// SJS : Simple JS Scroller

//A simple scroll library for Vanilla JS (Browsers-integrated JavaScript)


// Use : <button onclick="Scroll('id_of_the_target_element',//size for increment -> ScrollSize.fast,normal,slow );>Click me!</button>


// Scroll size detector:
	let ScrollSize={"normal":window.innerHeight/20,"slow":window.innerHeight/30,"fast":window.innerHeight/10}


//Main function:

function Scroll(id,size){
	let scrollTop=window.pageYOffset;//Scroll begin at that

	let element=document.getElementById(id);

	if (!element){
			console.error("'#"+id.toString()+"' seems to not exists");
			return undefined;
	}
	if (!){
			console.error("'#"+id.toString()+"' seems to not exists");
			return undefined;
	}

	let ScrollLoop=window.setInterval(function (){
	if(document.getElementById(id).offsetTop-Size>scrollTop){
					scrollTop+=Size;
					window.scrollBy(0,Size);
				}
				else{
					window.clearInterval(ScrollLoop);
				}
},10);


}

