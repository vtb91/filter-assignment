$(document).ready(function () {
	$("#filter").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#content tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});