//WIP (Ashm)
function topicselected(content) {
    if(content.hasClass('li_selected')){
        content.removeClass('li_selected');
        content.addClass('li_deselected');
    }
    else if(content.hasClass('li_deselected')){
        content.removeClass('li_deselected');
        content.addClass('li_selected');
    }
}