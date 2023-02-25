const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltText = ['Closeup of a human eye', 'Rock that looks like a wave', 'Purple and white pansies', 'Section of wall from a pharoah\'s tomb', 'Large moth on a leaf'];

/* Looping through images */

for (let i = 0; i < imageFilenames.length; ++i) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/' + imageFilenames[i]);
	newImage.setAttribute('alt', imageAltText[i]);
	thumbBar.appendChild(newImage);
	newImage.addEventListener('click', () => {
	    displayedImage.setAttribute('src', newImage.getAttribute('src'));
	    displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
	});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
	let setDark = btn.getAttribute('class') === 'light';
	btn.setAttribute('class', setDark ? 'dark' : 'light');
	btn.textContent = setDark ? 'Lighten' : 'Darken';
	overlay.style.backgroundColor = 'rgba(0,0,0,' + (setDark ? 0.5 : 0) + ')';
});
