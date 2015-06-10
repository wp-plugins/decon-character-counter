/**
 * decon-character-counter-js
 *
 * deconcc JavaScript file.
 *
 * @package Decon_Character_Counter
 * @since 0.0.1
 */
jQuery(document).ready(function($){

	/* Post/Page edit */
	if( $('.post-php').length ) {
		/* setup */
		$('#titlediv > *:first-child').after('<div class="decon-character-counter"><span class="dcc-left">Character count: <span class="dcc-character"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-character"></span> / 50 characters max</b></span></div>');
		$('#postdivrich').append('<div class="decon-character-counter"><span class="dcc-left">Word count: <span class="dcc-word"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-word"></span> / 300 words minimum</b></span></div>');
		$('#postexcerpt').append('<div class="decon-character-counter"><span class="dcc-left">Character count: <span class="dcc-character"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-character"></span> / 150 characters max</b></span></div>');
		$('#wp-word-count').html('Character count&colon; <span class="dcc-character"></span>');

		/* character count */
		$('#titlediv .dcc-character').html($('#title').val().length);
		$('#postdivrich .dcc-character').html($('#content').val().length);
		/**
		 * Check if page excerpt is supported by the active theme before counting.
		 *
		 * @package Decon_Character_Counter
		 * @since 0.0.2
		 */
		if( $('#postexcerpt').length ) {
			$('#postexcerpt .dcc-character').html($('#excerpt').val().length);
		}

		/* word count */
		$('.dcc-word').html($('#content').val().split(/\S+\b[\s,\.\'-:;]*/).length - 1);

		/* on keyup */
		$('#title, #excerpt').keyup( function() {
			/* character count */
			$('#titlediv .dcc-character').html($('#title').val().length);
			$('#postdivrich .dcc-character').html($('#content').val().length);
			$('#postexcerpt .dcc-character').html($('#excerpt').val().length);

			/* word count */
			$('#dcc-word').html($('#content').val().split(/\S+\b[\s,\.\'-:;]*/).length - 1);
		});
	} /* end Post/Page edit */

	/* Profile edit */
	if( $('.profile-php').length ) {
		/* setup */
		$('#description').after('<div class="decon-character-counter"><span class="dcc-left">Character count: <b><span class="dcc-character"></span> / 150 ( recommended max )</b></span></div>');

		/* character count */
		$('.user-description-wrap .dcc-character').html($('#description').val().length);

		/* on keyup */
		$('#description').keyup( function() {
			$('.user-description-wrap .dcc-character').html($('#description').val().length);
		});
	} /* end Profile edit */

}); /* end document.ready() */