
$.fetch("data.json", {
	responseType: "json"
})
.then(xhr => xhr.response)
.then(json => {
	var template = $("template");

	template.insertAdjacentHTML("beforebegin", Mustache.render(template.innerHTML, json));
	template.remove();
});
