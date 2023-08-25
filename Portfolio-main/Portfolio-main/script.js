window.onload = defaut();

function defaut() {
	myDIV.classList.toggle('active');
	myDIV.style.display = 'flex';
	tangram.style.display = 'none';
	mysterynumber.style.display = 'none';
	personality.style.display = 'none';

}

btncv.addEventListener('click', () => {
	myDIV.classList.toggle('active');
	myDIV.style.display = 'flex';
	tangram.style.display = 'none';
	mysterynumber.style.display = 'none';
	personality.style.display = 'none';

	// myDIV.style.transition = "width 1s ease-in-out 0s";
});

btntangram.addEventListener('click', () => {
	tangram.classList.toggle('active');
	// tangram.querySelector("#myDIV").classList.toggle("active");
	tangram.style.display = 'flex';
	myDIV.style.display = 'none';
	mysterynumber.style.display = 'none';
	personality.style.display = 'none';


	// myDIV.style.transition = "width 1s ease-in-out 0s";
});

btnmystery.addEventListener('click', () => {
	mysterynumber.classList.toggle('active');
	// dwayne.classList.toggle('active');
	// myDIV.querySelector("#myDIV").classList.toggle("active");
	mysterynumber.style.display = 'flex';
	myDIV.style.display = 'none';
	tangram.style.display = 'none';
	personality.style.display = 'none';


	// myDIV.style.transition = "width 1s ease-in-out 0s";
});

btnpersonality.addEventListener('click', () => {
	personality.classList.toggle('active');
	// dwayne.classList.toggle('active');
	// myDIV.querySelector("#myDIV").classList.toggle("active");
	personality.style.display = 'flex';
	myDIV.style.display = 'none';
	tangram.style.display = 'none';
	mysterynumber.style.display = 'none';


	// myDIV.style.transition = "width 1s ease-in-out 0s";
});





