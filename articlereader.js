
var body= document.body;


let article_container = document.getElementById("article_container");
let article_box = document.getElementById("article_box");
let article_header = document.getElementById("article_header");
let welcome_title = document.getElementById("welcome_title");
let welcome_text = document.getElementById("welcome_text");

let switcher = document.getElementById("switch");

let article_text = document.getElementById("article_text");

let article_title = document.getElementById("article_title");

let article_date = document.getElementById("article_date");

let footer = document.getElementById("body-footer");

let buttons_header = document.getElementById('blog-button');



function switchbg(){
		if (body.style.background=="black"){
			body.style.background="#edeeef";
			body.style.color="black";
			welcome_title.style.borderBottom="2px solid black";
			welcome_text.innerText="Technology, programming tips, personnal stuff and many more!";

			article_header.style.color="#111111";
			article_header.style.boxShadow="0px 3px 5px -1px grey";
			article_text.style.color="black";

			let header_elements=document.querySelectorAll('#article_header *');
			for (var i = 0; i < header_elements.length; i++) {
				header_elements[i].style.color="black";
			}
			article_title.style.color="#111111";
			
			switcher.innerText="Dark mode";
			switcher.style.background="black";
			switcher.style.color="white";
			footer.style.background="white";

		}
		else{
			body.style.background="black";
			body.style.color="#edeeef";
			welcome_title.style.borderBottom="2px solid #eeeeee";
			welcome_text.innerText="Technology, programming tips, personnal stuff and many more dark things!";
			article_header.style.boxShadow='0px 0px 4px 0px white';
			
			let header_elements=document.querySelectorAll('#article_header *');
			for (var i = 0; i < header_elements.length; i++) {
				header_elements[i].style.color="#cdcdcd";
			}

			article_text.style.color="#dedede";

			switcher.innerText="Light mode";
			switcher.style.background="white";
			switcher.style.color="black";

			footer.style.background="linear-gradient(white,grey)";


		}

}



switcher.addEventListener("click",switchbg);


function write_article(name){

	current_article = articles[name];

	let title=current_article["title"];

	document.title=title;
	article_title.innerText=title;

	article_date.innerHTML=current_article["date"];

	article_text.innerHTML = current_article["content"];

	article_box.style.display="block";

	article_box.classList.add("floatedarticle");

	article_box.classList.add("articleanim");




	body.classList.add("article_mode");



}




function search_query(key) {

	let search_queries = document.location.search.slice(1);


	/* If there's queries */
	if (search_queries.length!=""){
		queries=search_queries.split('&');

		/* If there's only one query */
		if (queries.length==1){
			queries=[search_queries];
		}
		
	}
	else{
		return undefined;

	}

	for (var i = 0;i < queries.length ; i++) 
	{
		let query=queries[i];
		if(query.startsWith(key+"=")){
			let value=query.slice(key.length+1);
			return value;
		}
		else if(query.startsWith(key) && query.length==key.length){
			return true;
		}
	}
	return undefined;
	
}

var article=search_query('article');


if (typeof article=="string"){
	write_article(article);
	}
else{
	document.getElementById('error').style.display="block";
}


// Auto resize when the user clicks on a picture 
var clickablepictures=document.querySelectorAll('.imgintext');

//clickablepictures.addEventListener('click',window.location.href=this.href );