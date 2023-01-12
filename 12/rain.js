function createRain(){
	const rain_icon = document.createElement('i');
	rain_icon.classList.add('fas');
	rain_icon.classList.add('fa-grip-lines-vertical');

	rain_icon.style.left = window.innerWidth * (Math.random()+0.2)*0.7+'px';
	rain_icon.style.animationDuration = Math.random() * 0.01 + 1 + 's';
	rain_icon.style.fontSize = Math.random() * 1 + 1 + 'px';


	document.body.appendChild(rain_icon);

	setTimeout(() =>{
		rain_icon.remove();
	},1000);
}

setInterval(createRain,10);