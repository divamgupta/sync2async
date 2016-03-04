
var __ = require('./sync2async')



console.log(__(function(){

	t1=100;
	t2=300;
	$('#l4').css({display:'inline'});
	setTimeout(__(), t1);
	$('#l5').css({display:'inline'});
	setTimeout(__(), t1);
	$('#l6').css({display:'inline'});
	setTimeout(__() , t1);
	$('#l7').css({display:'inline'});
	setTimeout(__(), t1);
	$('#l8').css({display:'inline'});
	setTimeout(__(), t1);
	$('#l9').css({display:'inline'});
	setTimeout(__(), t1);
	$('#l10').css({display:'inline'});
	setTimeout(__() , t1);
	$('#l11').css({display:'inline'});
	setTimeout(__() , t1);
	$('#l12').css({display:'inline'});
	setTimeout(__(),  t1);
	$('#l13').css({display:'inline'});
	$('#l1').css({left:0});
	setTimeout(__(), t2);
	$('#l2').css({left:0});
	setTimeout(__() , t2);
	$('#l3').css({left:0});
	setTimeout(__() , t2);
	

}).toString());