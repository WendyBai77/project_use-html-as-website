$(document).ready(function () {
    // 點擊到產品介紹，進入下拉選單，產品介紹保留hover效果
    $('.product_introduce').click(function (e) {
        e.preventDefault();
        $('.product_introduce').toggleClass('active');
    });

    // 摺疊選單 (除了當下選擇到的，其他隱藏下拉)
    $(".menu > li > a").click(function (e) {
        e.preventDefault();
        //this以外的都隱藏起來
        $(this).parent().siblings().find("ul").slideUp();
        // 將自己的ul做摺疊效果
        $(this).parent().find("ul").slideToggle();
    });

    // Swiper 輪播效果
    const swiper = new Swiper('.swiper', {
        // Optional parameters 
        direction: 'horizontal', //輪播可選擇垂直或水平的設計
        loop: true,
        // 自動播放輪播
        autoplay: {
            delay: 1000,
        },
        effect: 'slide',
        // 如果需要pagination分頁設計
        pagination: {
            el: '.swiper-pagination',
        },

        // 上一個/下一個 按鈕
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // lightbox 效果
    lightbox.option({
        resizeDuration: 1000,
        //點到最後一張圖像可回到第一張
        wrapAround: true,
        disableScrolling: true,
        
    });

    //top效果 
    $(".top a").click(function (e) {
        e.preventDefault();
        // 當點選到html或是body，卷軸往最上方滾動
        $("html,body").animate(
            {
                scrollTop: 0
            },
            1000
        );
    });

});
