{
	"manifest_version": 2,
	"name": "kittenbook",
	"description": "Replace photos on Facebook with kittens",
	"version": "0.0.1",
	"content_scripts": [
		{
			"matches": ["*://www.facebook.com/*"],
			"js": ["js/getImages.js", "js/prompt.js", "js/replaceImages.js", "js/values.js","js/main.js"]
		}
	]
}