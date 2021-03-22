//RESULT ROWS
let div = document.getElementById('tads') || document.getElementById('ads');

//GRID ADS
let cu_cont = document.getElementsByClassName('cu-container')[0] || document.getElementsByClassName('js-sidebar-ads')[0];

//GOOGLE QA
let elems = document.getElementsByTagName('g-section-with-header');
try{
	if(div)
		div.style.display='none';
	if(cu_cont)
		cu_cont.style.display='none';
	if(elems){
		for(elem of elems){
			if(elem.innerText.indexOf("Q&A on Google")!=-1)
				elem.style.display = 'none';
		}
	}
}
catch(err){
	console.log(err);
}
