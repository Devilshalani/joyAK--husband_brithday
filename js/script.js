// White Devil @ Devilshalani javascript ES6
const container = document.querySelector('.container');

const createHeart = e => {
	for (let i=0;i<45;i++) {
		let heart = document.createElement('div');
		heart.classList.add('heart');
		if (i%4==0) heart.style.zIndex = '8';
		container.appendChild(heart);
	}
}

const animateHearts = e => {
	anime({
		targets: '.heart',
		translateY: () => { return anime.random(-700, 700); },
		translateX: () => { return anime.random(-500, 500); },
		scale: () => { return anime.random(1, 4); },
		rotate: 45,
		duration: 3000,
		delay: anime.stagger(10),
		easing: 'easeInOutBack',
		complete: animateHearts,
	});
}

createHeart();
animateHearts();