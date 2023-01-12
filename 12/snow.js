function creatSnow(){
	const snow_icon = document.createElement('i');
	snow_icon.classList.add('fas');
	snow_icon.classList.add('fa-snowflake');

	snow_icon.style.left = window.innerWidth * (Math.random()+0.2)*0.7+'px';
	snow_icon.style.animationDuration = Math.random() * 12 + 9 + 's';
	snow_icon.style.fontSize = Math.random() * 9 + 8 + 'px';


	document.body.appendChild(snow_icon);

	setTimeout(() =>{
		snow_icon.remove();
	},9000);
}

yuki = function (){setInterval(creatSnow,300);}

setTimeout(yuki,3000)
