let remove = document.querySelector("#remDay");
let add = document.querySelector("#addDay");
let update = document.querySelector("#update");
let struct = document.querySelector(".dayGraphN");
let visible = struct.innerHTML.replace("dayGraphN","dayGraph");
 
function createElementFromHTML(htmlString) {
	let div = document.createElement('div');
	div.innerHTML = htmlString.trim();
  
	
	return div.firstChild; 
  }
 
let ele;
add.addEventListener('click',function(){
	

	let elmnt = document.querySelector(".dayGraphN").innerHTML;

	document.querySelector(".container").insertAdjacentHTML('beforeend',"<div class='dayView'>"+elmnt+"</div>");
	sumStats();
	eves();
});



remove.addEventListener('click',function(){
let cc = document.querySelectorAll('.dayView').length;

	document.querySelectorAll('.dayView')[cc - 1].remove();
	sumStats();
	
	
});



let dayevs;
function eves(){

let evs = document.querySelectorAll(".inp");


let handler = function() {
	let pt = prompt("Enter Point", "");
	
	
	if(pt == 0){
		this.setAttribute("id", "missed");	

	}
	else{
		this.setAttribute("id", "");	
	}
	this.innerHTML = pt;
	sumStats();
console.log(this)
};


	evs.forEach(function(elem) {




		elem.removeEventListener("click", handler);


		elem.addEventListener("click", handler );


	});



	
}

function sumStats(){
	let totday = document.querySelectorAll('.dayView').length;
	document.querySelector('#tot').innerHTML = totday;

	let missed = document.querySelectorAll("#missed").length;
	document.querySelector('#missedless').innerHTML = missed;
}
