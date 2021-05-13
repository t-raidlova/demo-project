//theme

const themeMap = {
	light: 'dark',
	dark: 'light',
};

const theme =
	localStorage.getItem('theme') ||
	((tmp = Object.keys(themeMap)[0]), localStorage.setItem('theme', tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
	const current = localStorage.getItem('theme');
	const next = themeMap[current];

	bodyClass.replace(current, next);
	localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

// text SVG
// const text = document.querySelectorAll('#text path');

// for (let i = 0; i < text.length; i++) {
// 	console.log(`letter ${i} is ${text[i].getTotalLength()}`);
// }

// path SVG
const textPath = document.querySelector('#text-path');

function updateTextPathOffset(offset) {
	textPath.setAttribute('startOffset', offset);
}

function onScroll() {
	requestAnimationFrame(function () {
		updateTextPathOffset(window.scrollY * 1.5);
	});
}
window.addEventListener('scroll', onScroll);

const titles = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting == true) {
			entry.target.classList.add('animate');
		} else {
			entry.target.classList.remove('animate');
		}
	});
});

titles.forEach((title) => {
	observer.observe(title);
});
