$(document).on('ready', function() {

	$('#form-container').hide();

	$('#btn-plus').on('click', function() {
		console.log('button clicked');
		$('#form-container').show();
	});

	$('#btn-cancel').on('click', function() {
		$('#form-container').hide();
	});

	var imageFeed = new ImageCollection();
	imageFeed.fetch();

	// var imageBuilder = _.template($('#image-template').html());

	$('#form-add-image').on('submit', function(e) {
		e.preventDefault();

		var newImage = new ImageItem({
			imageUrl: $('#input-url').val(),
			caption: $('#input-caption').val()
		});
		
		if(newImage.isValid()) {
			imageFeed.add(newImage);
			newImage.save();
		}
		else {
			console.log(newImage.validationError());
		}

	});

});