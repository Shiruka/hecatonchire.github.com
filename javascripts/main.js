$(function(){
        if (location.hash.indexOf('html') > -1) {
            load_page();
        }

        var content;
        $.get('news.html', function(data){
            content = data;
            $("#news_ul").html($(content).find('li').slice(0,3));
        });

       $("a[href^=http]").each(function(){
        if(this.href.indexOf(location.hostname) == -1) {
            $(this).attr({
        target: "_blank",
            title: "Opens in a new window"
        });
            }
        });
    });

window.onhashchange = load_page;

function load_page() {
    var page = window.location.hash.slice(1);
    if (page != '/' && page != '') {
        $('#main_content').load(page);
    }
    else {
        window.location = '/';
    }
}
