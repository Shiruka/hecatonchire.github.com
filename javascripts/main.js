window.onhashchange = function () {
                var page = window.location.hash.slice(1);
                if (page != '/' && page != '') {
                    $('#main_content').load(page);    
                }
                else {
                    window.location = '/';
                }
            }
$(function(){
        var page = location.pathname.split('/')[1];
        page = '/' + page;
        if (page.length > 0 && page != '/' ){
            $('#main_content').load(page, function(res,status) {
                if (status == 'error') {
                    $('#main_content').load('/');
                    window.location.hash = '';
                }
            });
        } 

        var content;
        $.get('news.html', function(data){
            content = data;
            $("#news_ul").html($(content).find('li').slice(0,3));
        });
    });
