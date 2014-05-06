(function ($) {
	module( 'jQuery#awesome', {
		// This will run before each test in this module.
		setup: function () {
			this.elems = $( '#qunit-fixture' ).children();
		},
		'create': function (test) {
			test.done();
		}
	} );

}( jQuery ));
