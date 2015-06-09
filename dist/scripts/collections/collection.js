var ImageCollection = Backbone.Collection.extend({
	model: ImageModel, 
	url: 'http://tiy-fee-rest.herokuapp.com/collections/syd-image-model'
});