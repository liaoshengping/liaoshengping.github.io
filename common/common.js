var Request = {

    /**
     * 获取数据ajax-get请求
     * @author liaosp
     */
    get: function (url, data, callback) {

        $.ajax({
            url: url,
            type: "get",
            contentType: "application/json",
            dataType: "json",
            timeout: 10000,
            data: data,
            success: function (data) {
                callback(data);
            }
        });
    },

    /**
     * 提交json数据的post请求
     * @author liaosp
     */
    post: function (url, data, callback) {
        $.ajax({
            url: url,
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: data,
            timeout: 60000,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {

            }
        });
    },

    /**
     * 修改数据的ajax-put请求
     * @author liaosp
     */
    put: function (url, data, callback) {
        $.ajax({
            url: url,
            type: "put",
            contentType: "application/json",
            dataType: "json",
            data: data,
            timeout: 20000,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {

            }
        });
    },
    /**
     * 删除数据的ajax-delete请求
     * @author liaosp
     */
    delete: function (url, data, callback) {
        $.ajax({
            url: url,
            type: "delete",
            contentType: "application/json",
            dataType: "json",
            data: data,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {

            }
        });
    }
}