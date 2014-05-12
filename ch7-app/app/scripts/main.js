/**
 * Usage
 */

	//Create
$.fn.crud.create( 'posts', {
	title: 'New Post',
	body: 'This is the post body.'
} ).then( function (data) {
	log( data );
} ).fail( function (error) {
	console.error( error )
} );

//Read
$.fn.crud.read( 'posts', {id: 1} ).then( function (data) {
	log( data )
} ).fail( function (error) {
	console.error( error )
} );

//Update
$.fn.crud.update( 'posts', {
	id: 1,
	title: 'Updated Post',
	body: 'This is the post body.'
} ).then( function (data) {
	log( data )
} ).fail( function (error) {
	console.error( error )
} );

//Delete
$.fn.crud.destroy( 'posts', {id: 1} ).then( function (data) {
	log( data )
} ).fail( function (error) {
	console.error( error )
} );

//Query
$.fn.crud.query( 'posts', {title: 'test'} ).then( function (data) {
	log( data )
} ).fail( function (error) {
	console.error( error )
} );

/**
 * Utility logger to html
 */
function log(what) {
	var frag = $( '<li/>' ).html( JSON.stringify( what ) );
	frag.addClass( 'list-group-item' );
	$( "#results" ).append( frag );
	console.log( what );
}