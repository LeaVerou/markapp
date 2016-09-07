$.fetch("data.json", {
	responseType: "json"
})
.then(function(xhr) {
	var json = xhr.response;
	var template = $("template");
	var templateContent;

	if ('content' in template) {
		var div = document.createElement('div');
		var clonedNode = template.content.cloneNode(true);
		div.appendChild(clonedNode);
		templateContent = div.innerHTML
	} else {
		templateContent = template.innerHTML;
	}

	template.insertAdjacentHTML("beforebegin", Mustache.render(templateContent, json));
	template.remove();
});
