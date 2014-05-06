(function ($) {

	var expected = {
		create: 'Create item in posts',
		query: 'Query items in posts',
		update: 'Update item 1 in posts',
		destroy: 'Delete item 1 in posts',
		read: 'Read item 1 in posts'
	};

	module( '$.fn.crud', {
		// This will run before each test in this module.
		setup: function () {

			$.mockjax( {
				url: '/api/posts',
				type: 'POST',
				responseText: { status: 'success', message: expected.create }
			} );
			$.mockjax( {
				url: '/api/posts',
				type: 'GET',
				responseText: { status: 'success', message: expected.query }
			} );
		}
	} );

	//Should make a POST request to the server sending the data
	asyncTest( 'create', function () {
		expect( 1 );
		$.fn.crud.create( 'posts', {name: 'test', body: 'This is a test.'} ).done( function (data) {
			equal( data.message, expected.create, 'should return data' );
			start();
		} );
	} );

	//Should make a GET request to the server
	asyncTest( 'query', function () {
		expect( 1 );
		$.fn.crud.query( 'posts' ).done( function (data) {
			equal( data.message, expected.query, 'should return data' );
			start();
		} );
	} );

}( jQuery ));
