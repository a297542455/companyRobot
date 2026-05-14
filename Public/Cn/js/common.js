$(function () {
    // wow初始化
    new WOW().init();
    ys.phNavInit(1);
    // navFixed();
    // navHovered();
});

// 导航不在顶部时加类名isfixed
function navFixed(){
    ys.isFixed(".ys_hd_pc");
}
// 鼠标经过导航时加类名ishovered
function navHovered(){
    ys.isHovered(".ys_hd_pc");
}
// 检索
$(function(){
    // 搜索
    $(".yx_search3_btn").click(function (e) {
        e.stopPropagation();
        if($(this).hasClass('on')){
            // $(this).stop().removeClass('on');
            $(this).parents().stop().removeClass('act');
            $(this).parents(".yx_search3box").find(".yx_search3xlbox").slideUp();
        }else{
            // $(this).stop().addClass('on');
            $(this).stop().addClass('act');
            $(this).parents(".yx_search3box").find(".yx_search3xlbox").slideDown();
        }
    });
    $('.yx_search3box').click(function (e){
        e.stopPropagation();
    });
    $('body,html').click(function(){
        $('.yx_search3_btn').stop().removeClass('on');
        $('.yx_search3_btn').stop().parents(".yx_search3box").find(".yx_search3xlbox").slideUp();
        $('.yx_search3_btn').stop().parents(".yx_search3box").removeClass("act");
    });
})

// pc导航下拉
$('.head_nav_li').hover(function () {
    $(this).find('.head_nav_drop').stop().slideDown()
}, function () {
    $(this).find('.head_nav_drop').stop().slideUp()
})
// 产品二级切换
$('.head_style1 .head_style3_left_item').click(function(){
    var num = $(this).attr('data-num');
    $(this).addClass('active').siblings().removeClass('active');
    $('.head_style1 .head_style3_right_item[data-num='+num+']').addClass('on').siblings().removeClass('on');
    if($(this).hasClass('yxnav_active3')){
        var index = $(this).parents('.hnpf-list').data('index');
        $('.hnpa-ul-li').eq(index).addClass('yxnav_active2')
    }
    // 20250409
    $(this).parents('.hnpf-list-wrap').addClass('start');
});
// 语言切换
$('.head_lang').hover(function () {
    $(this).stop().addClass('on')
    $(this).find('.head_lang_bot').stop().slideDown()
}, function () {
    $(this).stop().removeClass('on')
    $(this).find('.head_lang_bot').stop().slideUp()
})
// 侧边二维码
fuxian();
$(window).on("scroll", function(){
    fuxian();
});
function fuxian(){
    // if($(window).width()>1199){
        if ($(window).scrollTop() > 100) {
            $('.mod_side').stop().addClass('on');
        }else{
            $('.mod_side').stop().removeClass('on');
        }
        $('.mod_side_top_item').hover(function(){
            $(this).stop().addClass('active')
        }, function(){
            $(this).stop().removeClass('active')
        })
    // } 
    // if($(window).width()<1200){
    //     $('.mod_ewm_icon1').click(function(){
    //         $('.mod_ewm').stop().addClass('on');
    //     });
    //     $('.mod_ewm_icon2').click(function(){
    //         $('.mod_ewm').stop().removeClass('on');
    //     })
    // }  
}
// 返回顶部
$('.mod_side_bot').click(function(){
    $("html,body").animate({scrollTop: 0}, 500);
});
// 底部分享
$('.foot_top_right_ul li').hover(function () {
    $(this).find('.foot_top_right_ewm').stop().slideDown();
}, function () {
    $(this).find('.foot_top_right_ewm').stop().slideUp();
});
// 点击滑动，锚点定位切换
function achange() { 
    var head = 80 + $('.prodet_anchor').height();
    if($(window).width()<1441 && $(window).width()>1199){
        head = 70 + $('.prodet_anchor').height();
    }else if($(window).width()<1200){
        head = 64 + $('.prodet_anchor').height();
    }
    $(".prodet_anchor_list_nub").click(function () {
        setTimeout(function () {
            $("html,body").stop().animate({
                scrollTop: $('.act_nr').offset().top - head
            }, 500);
        }, 100)
    })
    // 产品数据切换pc
    $('.prodet_anchor_list_nub').click(function () {
        var pag = $(this).attr('data-num');
        $('.mod_point').stop().removeClass('act_nr');
        $('.mod_point[data-num="'+ pag +'"]').stop().addClass('act_nr');
        $(this).stop().addClass('on');
        $(this).siblings().stop().removeClass('on');
    });
}
// 鼠标滑动样式对应改变
// function asideNav() {
//     for(var i = 0;i <= $('.prodet_anchor_list_nub:last-child').attr('data-num');i++){
//         if($('.mod_point[data-num="' + i + '"]').length>0){
//             var tops = $('.mod_point[data-num="' + i + '"]').offset().top - ($(window).height()/2);
//             if($(window).scrollTop() > tops){
//                 $('.mod_point').stop().removeClass('act_nr');
//                 $('.mod_point[data-num="' + i + '"]').stop().addClass('act_nr');
//                 $('.prodet_anchor_list_nub').stop().removeClass('on');
//                 $('.prodet_anchor_list_nub[data-num="' + i + '"]').stop().addClass('on');
//             }
//         }
//     }
// }
// 鼠标滑动样式对应改变
function asideNav() {
    // 遍历所有的mod_point元素，按照它们在页面中的实际位置排序
    var modPoints = $('.mod_point').sort(function(a, b) {
        return $(a).offset().top - $(b).offset().top;
    });
    // 遍历排序后的mod_point元素
    modPoints.each(function() {
        var num = $(this).attr('data-num');
        var tops = $(this).offset().top - ($(window).height()/2);
        if($(window).scrollTop() > tops){
            $('.mod_point').stop().removeClass('act_nr');
            $(this).stop().addClass('act_nr');
            $('.prodet_anchor_list_nub').stop().removeClass('on');
            $('.prodet_anchor_list_nub[data-num="' + num + '"]').stop().addClass('on');
        }
    });
}

// 表单勾选
$('.sfrc_right span').click(function(){
    $(this).toggleClass('on')
})
// 表单弹窗
ys.modal(".ys_modal_form", ".form_pop");

// 20250318
$('.hnpa-ul-li').click(function(){
    var index = $(this).data('index');
    $('.hnpf-list').eq(index).show().siblings().hide();
    $(this).addClass('yxnav_active2')
    $(this).siblings().removeClass('yxnav_active2')
})
$('.head_style3_left_item').each(function(){
    if($(this).hasClass('yxnav_active3')){
        var index = $(this).parents('.hnpf-list').data('index');
        $('.hnpa-ul-li').eq(index).addClass('yxnav_active2')
    }
})
// 2026.3.11 Lucas新增 导航 start
thisNewNavFun()
function thisNewNavFun(){
    // 初始化
    var nowindex = $(".ndcl-list-li.yxnav_active2").index();
    $(".ndcr-infolist-li").eq(nowindex).stop().fadeIn().siblings().stop().hide();
    console.log(nowindex)
    $(".ndcl-list-li-link").click(function(){
        var index = $(this).closest(".ndcl-list-li").index();
        $(this).closest(".ndcl-list-li").addClass("yxnav_active2").siblings().closest(".ndcl-list-li").removeClass("yxnav_active2");
        $(".ndcr-infolist-li").eq(index).stop().fadeIn().siblings().stop().hide();
    })
    // 产品二级切换
    $('.ndcr-infolist-li:nth-child(1) .head_style3_left_item').click(function(){
        var num = $(this).attr('data-num');
        $(this).addClass('active').siblings().removeClass('active');
        $('.ndcr-infolist-li:nth-child(1) .head_style3_right_item[data-num='+num+']').addClass('on').siblings().removeClass('on');
        if($(this).hasClass('yxnav_active3')){
            var index = $(this).parents('.hnpf-list').data('index');
            $('.hnpa-ul-li').eq(index).addClass('yxnav_active2')
        }
        // 20250409
        $(this).parents('.hnpf-list-wrap').find(".head_style3_right").stop().fadeIn();
    });
    $(".head_style3_bot").mCustomScrollbar({
        axis: "y",  //滚动条方向
        scrollbarPosition: "otuside",  //设置滚动条相对于内容的位置
        theme: "dark-2"  //滚动条主题
    });
}
// 2026.3.11 Lucas新增 导航 end