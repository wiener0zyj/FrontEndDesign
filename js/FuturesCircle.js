$(document).ready(function () {
    //tab单击事件
    clickADrop();
});

//tab单击事件
function clickADrop() {
    $(".a_drop").click(function () {
        var idNum = $(this).attr("data-title");
        if (idNum == "hottopic")
        {
            if ($("#hottopicdiv").hasClass("a_droped")) {
                //do nothing
            } else {
                $("#hottopicdiv").addClass("a_droped");
                $("#freetopicdiv").removeClass("a_droped");
            }
        } else
        {
            if ($("#freetopicdiv").hasClass("a_droped")) {
                //do nothing
            }
            else {
                $("#freetopicdiv").addClass("a_droped");
                $("#hottopicdiv").removeClass("a_droped");
            }
        } 
    });
}