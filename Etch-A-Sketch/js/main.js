$(document).ready(function() {
	createGrid(64);
});

var createGrid = function(count) {
	for (var i = 0; i < count * count; i++) {
		$("div#content").append('<div class="grid"></div>');
	}
	$("div.grid").css('width', 1152/count);
	$("div.grid").css('height', 1152/count);

	$('div.grid').mouseenter(function() {
		$(this).animate({"opacity" : 1});
	});
	//$('div.grid').mouseleave(function() {
	//	$(this).animate({"opacity" : 0.1});
	//});
}

var resetGrid = function() {
	var gridSize = prompt("How many blocks per row? (max of 64)");
	if (gridSize > 64) { gridSize = 64; }
	$('div#content').empty();
	createGrid(gridSize);
}