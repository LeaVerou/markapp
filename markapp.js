$.fetch("data.json", {
	responseType: "json"
})
.then(function(xhr) {
	var json = xhr.response;
	var template = $("template");

	template.insertAdjacentHTML("beforebegin", Mustache.render(template.innerHTML, json));
	template.remove();
});
