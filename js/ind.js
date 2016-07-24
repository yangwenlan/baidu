
    $(function(){
        $('#box').fullpage({
            'verticalCentered': false,
            'css3': true,
            'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
            anchors: ['page1', 'page2', 'page3', 'page4'],
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['登录百度舆情', '领先：数据收集与处理', '全面：舆情分析逻辑与架构', '专业：专业数据可视化'],
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);
                //using index
                if(index == 1){
                        $('.ship').css({transition: "all 1s", left:150})
                    
                }else if(index == 2){
                        $('.titile1').css({transition: "all 1s",left:50,opacity:1});
                        $('.contimg1').css({transition: "all 1s",left:600,opacity:1});

                }else if(index == 3){
                        $('.titile2').css({transition: "all 1s",left:50,opacity:1});
                        $('.contimg2').css({transition: "all 1s",left:600,opacity:1});

                }else if(index == 4){
                        $('.titile3').css({transition: "all 1s",left:50,opacity:1});
                        $('.contimg3').css({transition: "all 1s",left:600,opacity:1});
                }

            },
            onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);
               if(index==1){
                       $('.ship').transition({transition: "all 0s 500s", left:100});
               }else if(index == 2){
                   setTimeout(function () {
                       $('.titile1').transition({transition: "all 0s",left:-10,opacity:0});
                       $('.contimg1').transition({transition: "all 0s",left:700,opacity:0});
                   },300);
               }else if(index == 3){
                   setTimeout(function () {
                   $('.titile2').transition({transition: "all 0s",left:-10,opacity:0});
                   $('.contimg2').transition({transition: "all 0s",left:700,opacity:0});
                   },300);
               }else if(index == 4){
                   setTimeout(function () {
                   $('.titile3').transition({transition: "all 0s",left:-10,opacity:0});
                   $('.contimg3').transition({transition: "all 0s",left:700,opacity:0});
                   },300);
               }
            }
        });
        
       
        $('.btn').click(function () {
            $.fn.fullpage.moveSectionDown();
        });
        $('.iconfont').each(function (ind) {

                $(this).click(function () {
                    $('.iconfont').not($('.iconfont').eq(ind)).removeClass('active')
                    $(this).toggleClass('active');
                     $(".smallnav ul").not($(".smallnav ul").eq(ind)).removeClass('active');
                    $( $(".smallnav ul")[ind]).toggleClass('active');
            })
        });
        $('.qita div:first-child').hover(function () {
            $(this).find("ul").css({display:"block"});
        },function () {
            $(this).find("ul").css({display:"none"});
        })
    })
