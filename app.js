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
