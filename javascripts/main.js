$(function(){
        // $("#slides").slidesjs({
        //     width: 300,
        //     height: 200,
        //     navigation: false,
        //     pagination: false,
            
        //     });

        $("#nav_docs").click(makeNavFunc('nav_docs', 'docs.html'));
        $("#nav_download").click(makeNavFunc('nav_download', 'download.html'));
        $("#nav_news").click(makeNavFunc('nav_news', 'news.html'));
        $("#nav_contant").click(makeNavFunc('nav_contant', 'contact.html'));
    });

function makeNavFunc(name, page) {
    var selector_name = "#" + name;
    function nav() {
        $('#main_content').load(page);
        $("#main-menu-bar").find("li").removeClass("active");
        $(selector_name).parent().addClass("active");
        $("#collape-btn").click();
    }
    return nav;
}
