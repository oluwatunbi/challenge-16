
function My_obs() {
	var dots = document.getElementById("dots");
	var moretext = document.getElementById("more");
	var btntext =document.getElementById("mybtn");

	if(dots.style.display === "none"){
		dots.style.display ="inline";
		btntext.innerHTML ="read more";
		moretext.style.display ="none";
	} else {
		dots.style.display ="none";
		btntext.innerHTML ="read less";
		moretext.style.display ="inline";
	}
}

function My_paedo() {
	var dots = document.getElementById("dots-paedo");
	var moretext = document.getElementById("more-paedo");
	var btntext =document.getElementById("mybtn-paedo");

	if(dots.style.display === "none"){
		dots.style.display ="inline";
		btntext.innerHTML ="read more";
		moretext.style.display ="none";
	} else {
		dots.style.display ="none";
		btntext.innerHTML ="read less";
		moretext.style.display ="inline";
	}
}

function My_medic() {
	var dots = document.getElementById("dots-med");
	var moretext = document.getElementById("more-med");
	var btntext =document.getElementById("mybtn-med");

	if(dots.style.display === "none"){
		dots.style.display ="inline";
		btntext.innerHTML ="read more";
		moretext.style.display ="none";
	} else {
		dots.style.display ="none";
		btntext.innerHTML ="read less";
		moretext.style.display ="inline";
	}
}

function My_surgery() {
	var dots = document.getElementById("dots-sur");
	var moretext = document.getElementById("more-sur");
	var btntext =document.getElementById("mybtn-sur");

	if(dots.style.display === "none"){
		dots.style.display ="inline";
		btntext.innerHTML ="read more";
		moretext.style.display ="none";
	} else {
		dots.style.display ="none";
		btntext.innerHTML ="read less";
		moretext.style.display ="inline";
	}
}