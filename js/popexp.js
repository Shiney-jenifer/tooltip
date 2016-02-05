$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        html : true,
        title : 'Company Description <a href="#" class="close" data-dismiss="alert">&times;</a>',
        content : '<div class="media"><a href="#" class="pull-left"><img src="coextrix.jpg" class="media-object" alt="Sample Image"></a><div class="media-body"><h4 class="media-heading">COEXTRIX</h4><p>We are an innovative information technology company delivering sustainable and scalable services and solutions with a vision to define the future of excellence.</p></div></div>'
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
});
