// 关于文章
var article = {
    search: function (param, callBack) {
        $.get(URLIST.article_search, param,
            function (res) {
                callBack(res);
            });
    },
    del: function (id, callBack) {
        $.get(URLIST.article_del, {
            id: id
        }, function (res) {
            callBack(res);
        });
    },
    //高级的post请求
    add: function (fd, callBack) {
        $.ajax({
            url: URLIST.article_add,
            type: 'post',
            data: fd,
            processData: false, //让jQuery不处理数据。它无法处理form DATa对象
            contentType: false, //不要额外去处理设置请求头。它自己有。
            success: function (res) {
                callBack(res);
            }
        });
    }
}