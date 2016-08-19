function createTable(size) {
	$("table").empty();
	for (var i = 0; i < size; i++) {
		$("table").append("<tr></tr>");
		for (var j = 0; j < size; j++) {
			$("tr:last-of-type").append("<td></td>");
		}
	}
	$("td").hover(function() {
		$(this).addClass("blue");
	});
}
$(document).ready(function(){
	createTable(5);
	$("button").click(function() {
		var num = prompt("Please enter grid size (1-50)");
		if (num > 0 && num < 51) {
			createTable(num);
		} else {
			alert("Sorry, try again");
		}
	});
});