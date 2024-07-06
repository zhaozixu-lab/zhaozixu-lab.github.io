var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("微软式中文来袭", "使用浅开花手势", "头抬起", "确保那是你", "正在准备Windows请勿™关闭计算机", "这真是让人尴尬", "好东西就要来了！", "11 Windows", "显示二手(second hand)", "微软边缘(Microsoft Edge)", "锂离子单元格的高级扩展(电池鼓包)", "焚烧(烧录)ISO文件");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#000000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}