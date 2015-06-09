var ImageModel = Backbone.Model.extend({
	defaults: {
		imageUrl: null, 
		caption: null
	}, 

	validate: function(attr, options) {
		if(attr.imageUrl.length === 0 && attr.imageUrl.indexOf('http://') < 0) {
			return 'You must enter a valid URL'; 
		}
		if(attr.caption.length === 0) {
			return 'You must enter a caption';
		}
		return false;
	}, 

	urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/syd-image-model', 
	idAttribute: '_id'
});