
// gallery js
$(function(){
    $('.card-text').hide();
    $('.btn-success').click(function(){
        $(this).parent().children ('.card-text').fadeToggle(1000)
    })
})
// gallry js end
// 
// famous brighes start
    $(document).ready(function(){
        $('img').click(function(){
            var src =$(this).attr('src');
            $('#im').attr('src', src);
        })
    })   
//  famous brighes js end