$('.food-button').on('click', function () {
	const foodName = $(this).attr('id');
	apiTest(foodName);
})


const apiTest = name => {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://microsoft-azure-translation-v1.p.rapidapi.com/Speak?text=${name}&language=en`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
			"x-rapidapi-key": "41d91bec37msh346fdefc5f42bc8p18865ejsnfda5f9adc38f"
		}
	}
	console.log(`im making ajax call${name}`);

	var Sound = (function () {
		var df = document.createDocumentFragment();
		return function Sound(src) {
			var snd = new Audio(src);
			df.appendChild(snd); // keep in fragment until finished playing
			snd.addEventListener('ended', function () {df.removeChild(snd);});
			snd.play();
			return snd;
		}
	}());
	// then do it

	$.ajax(settings).done(function (response) {

		// const sound = new Howl({
		// 	src: [response],
		// 	html5: true
		//   });
		//   sound.play();
		console.log(response);
		var snd = Sound("data:audio/wav;base64," + response);
		snd.play();
		// var sound_id = name +"_sound";
		// const sound = document.createElement('AUDIO')
	

		// $(sound).attr('id', sound_id);
		// sound.setAttribute('src',`data:audio/mpeg;base64,//${response}`);

		// document.body.appendChild(sound);
		// const soundBite = document.getElementById(sound_id)
		// console.log(soundBite);
		// soundBite.play();
	});

};



