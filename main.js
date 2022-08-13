// Sidebar

function openNav() {
	document.getElementById('mobileSidebar').style.width = '270px';
}

function closeNav() {
	document.getElementById('mobileSidebar').style.width = '0';
}

// Accordion
const accordion = document.getElementsByClassName('faq__container');

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}
