$(document).ready(function() {
	function addListItem() {
	var item = $.trim($("#write").val());

	if (item.length === 0  || item.length > 40) {
    return false;
    }

	$("#itemlist").append($("<li>" + item + "</li>"));
	$("#write").val("");
}
});

	$(function() {
	$("#submit").on('click', addListItem);
});

