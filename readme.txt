
You write : 

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


And we will convert it to:

t1 = 100;
t2 = 300;
$('#l4').css({
    display: 'inline'
});
setTimeout(function() {
    $('#l5').css({
        display: 'inline'
    });
    setTimeout(function() {
        $('#l6').css({
            display: 'inline'
        });
        setTimeout(function() {
            $('#l7').css({
                display: 'inline'
            });
            setTimeout(function() {
                $('#l8').css({
                    display: 'inline'
                });
                setTimeout(function() {
                    $('#l9').css({
                        display: 'inline'
                    });
                    setTimeout(function() {
                        $('#l10').css({
                            display: 'inline'
                        });
                        setTimeout(function() {
                            $('#l11').css({
                                display: 'inline'
                            });
                            setTimeout(function() {
                                $('#l12').css({
                                    display: 'inline'
                                });
                                setTimeout(function() {
                                    $('#l13').css({
                                        display: 'inline'
                                    });
                                    $('#l1').css({
                                        left: 0
                                    });
                                    setTimeout(function() {
                                        $('#l2').css({
                                            left: 0
                                        });
                                        setTimeout(function() {
                                            $('#l3').css({
                                                left: 0
                                            });
                                            setTimeout(function() {}, t2);
                                        }, t2);
                                    }, t2);
                                }, t1);
                            }, t1);
                        }, t1);
                    }, t1);
                }, t1);
            }, t1);
        }, t1);
    }, t1);
}, t1);




