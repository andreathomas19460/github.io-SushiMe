

var unirest = require("unirest");

var req = unirest("GET", "https://microsoft-azure-translation-v1.p.rapidapi.com/Speak");

req.query({
	"text": "Hello%2C world!",
	"language": "en"
});

req.headers({
	"x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
	"x-rapidapi-key": "ab60acb69emsh3dfb1167f2aa682p113e4bjsn673fba3fd1a7"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});