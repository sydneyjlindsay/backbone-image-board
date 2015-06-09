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

	var imageBuilder = _.template($('#image-template').html());

	$('#btn-add-image').on('click', function(e) {
		console.log('form submitted');
		e.preventDefault();

		var newImage = new ImageModel({
			imageUrl: $('#input-url').val(),
			caption: $('#input-caption').val()
		});

		if(newImage.isValid()) {
			imageFeed.add(newImage);
			newImage.save();
		}
		else {
			console.log(newImage.validationError);
		}
		console.log(newImage);

		$('#input-url').val('');
		$('#input-caption').val('');
	});

	imageFeed.on('add', function(model) {
		var imageHtml = imageBuilder(model.attributes);
		console.log(imageHtml);

		$('#image-album').prepend(imageHtml);
	});

});