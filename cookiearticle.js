let color=localStorage.getItem("color");



if (color!==null){
	document.getElementById('body').className=color;
	document.getElementById('reader').className=color;
	// if(color==="black"){
	// 	switchB.className="white";
	// }
	// else{switchB.className="black";}

}
else{
	localStorage.setItem("color","white");
}

