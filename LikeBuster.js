function logRemove(text)
{
    console.log("LikeBusted: "+text+" -- Did you really want to see that?");
}

var likeBust = function() {
	setInterval(function() {
		jQuery('.shareFooter').remove();
		jQuery('div[title="Upcoming Events"],div[title="Upcoming Concerts"]').each(function(){
			var li = jQuery(this).closest('li');
			logRemove(li.text());
			li.remove();
		});
		jQuery('h6.uiStreamPassive,h5.uiStreamPassive').each(function(){
			var h6 = jQuery(this);
			var text = h6.text();
			if (   text.match(/ claimed an offer /)
			    || text.match(/ shared /) 
			    || text.match(/ listened to /)
			    || text.match(/ like(s)? /) ) {
			    var li = h6.closest('li');
			    logRemove(text);
			    li.remove();
			}
		});
		jQuery('span.uiStreamAdditionalLogging').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if (text.match(/^Sponsored$/)) {
			    var li = span.closest('li');
			    logRemove(li.text());
			    li.remove();
			}
		});
		jQuery('a.pronoun-link').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if (text.match(/a link/)) {
			    var li = span.closest('li');
			    logRemove(li.text());
			    li.remove();
			}
		});
		jQuery('h6 a[href*=pinterest]').each(function(){
			var span = jQuery(this);
			var text = span.closest('h6').text();
			var li = span.closest('li');
			logRemove(text);
			li.remove();
			});
		jQuery('div.actorDescription').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if ( text.match(/ via /) || text.match(/ shared /) ) {
			    var li = span.closest('li');
			    logRemove(li.text());
			    li.remove();
			}
		    });
		jQuery('h6.uiHeaderTitle').each(function(){
			var span = jQuery(this);
			var text = span.text();
			
			if ( text.match(/ You Might Like$/ ) ) {
			    span.closest('.ego_section').remove();
			    logRemove(text);
			}
		    });
	}, 200);
};


likeBust();