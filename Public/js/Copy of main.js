//https://jscompress.com/
jQuery(document)['ready'](function (_0x24d5x2) {
    _0x24d5x2('.counter-sora')['counterUp']({
        delay: 10,
        time: 1000
    })
});

$(document).ready(function () {
    var col = $(".hello-txt").css("background-color");
    function changeWaveCol(col) {
        // Use jQuery to find the SVG element within the container
        var $svg = $('.waves svg');
        if ($svg.length) {
            // Example: Change the fill color of all paths
            $svg.find('path').attr('fill', col); // Change to your desired color
        }
    }
    $('.menu')['slicknav']({
        prependTo: '.menu-mobile',
        label: ''
    });
    $('.scrolling-menu')['slicknav']({
        prependTo: '.menu-mobile2',
        label: ''
    })
    $(function () {
        $(window).on("scroll", function (e) {
            var winScroll1 = document.body.scrollTop || document.documentElement.scrollTop;
            var height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll1 / height1) * 100;

            document.getElementById("progressBar").style.width = scrolled + "%";


            var height = 0;
            var scrollTop = $(this).scrollTop();

            //if (scrollTop < 66) {
            if (scrollTop < 65) {
                height = $("#head-trigger").height();
                $("#head-trigger").removeClass("scrolled-header");
                $("#progressBar").hide();
            } else {
                $("#head-trigger").addClass("scrolled-header");
                $("body").css({
                    "marginTop": height
                });
                $("#head-trigger").fadeIn();
                $("#progressBar").show();
            }
        });
    });
    //check browser in mobile-start
    var isinitformlang = false;
    var iframe = $('#googleForm');
    var gtranslate = $('#google_translate_element');
    let details = navigator.userAgent;
    //let regexp = /android|iphone|kindle|ipad/i; 
    let regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|kindle|Opera Mini/i;
    let isMobileDevice = regexp.test(details);
    //if (isMobileDevice) { 
    //    document.write("You are using a Mobile Device"); 
    //} else { 
    //    document.write("You are using Desktop"); 
    //} 
    //let isWebview=details.toString().includes('wv');
    let isWebview = details.toString().indexOf('wv') > -1;
    //if(!isWebview)
    //{
    //    //document.write(details.toString());
    //    //return;
    //    //document.write('opened in webview');
    //    //document.write('opened in mobilebrowser');
    //    //if(details.toString().toLowerCase().includes('firefox'))
    //    //{
    //    //    if(window.matchMedia && matched){        
    //    //        iframe.css("filter","invert(0.9)");      
    //    //    }
    //    //    else{
    //    //        iframe.css("filter","none"); 
    //    //    }
    //    //}
    //    //else if(details.toString().toLowerCase().includes('opr') || details.toString().toLowerCase().includes('opera'))
    //    //{    
    //    //}
    //    //else if(details.toString().toLowerCase().includes('chrome'))
    //    //{
    //    //}
    //    //else if(details.toString().toLowerCase().includes('ucbrowser'))
    //    //{
    //    //}
    //    //else{
    //    //    if(window.matchMedia && matched){        
    //    //        iframe.css("filter","invert(0.9)");      
    //    //    }
    //    //    else{
    //    //        iframe.css("filter","none"); 
    //    //    }
    //    //}    
    //}    
    //check browser in mobile-end

    var cssImgLazyLoad = (function () {
        var executed = false;
        return function () {
            if (!executed) {
                executed = true;
                // do something
                if (!(details.toString().toLowerCase().indexOf('trident') > -1)) {
                    if (window.scrollY !== 0 || window.scrollY > 65) {
                        //user is at the top of the page; no need to show the back to top button
                        $(".counter-box,#section-5A").css("background", "url(/Public/images/sg-back.webp) no-repeat fixed 50% 50%/cover");
                        $("#section-5C").css("background", "url(/Public/images/head-back.webp) no-repeat fixed 50% 50%/cover");
                        $(".main-gallery").css("background", "url(/Public/images/head-back1.webp) no-repeat fixed 50% 50%/cover");
                        $(".insta-wrap").css("background", "url(/Public/images/map.webp) no-repeat fixed 50% 50%/cover").css("position", "relative");
                        $(".insta-wrap .filter,#Lqr,#Sqr").css("display", "block");
                        if (navigator.onLine/*online*/) {
                            if (!isinitformlang) { initformlang(); }
                        }

                        //$("#google_translate_element").html($("#google_translate_element").html().replace("Offline Translation Is'nt Avaliable",""));
                        //let myScript1 = document.createElement("script");
                        //myScript1.setAttribute("src", "Public/js/gtranslate.js");
                        //myScript1.setAttribute("type","text/javascript");
                        //document.body.appendChild(myScript1);


                        //$.ajax({
                        //    url : "Public/images/sqr.svg",
                        //    dataType: "svg",
                        //    success : function (data) {
                        //        $("#zoom").html(data);
                        //    }
                        //});

                        $('#zoom').load('Public/images/sqr.svg');
                        $('#pop-up').load('Public/images/lqr.svg');
                        $('.waves').load('Public/images/waves.svg');
                        $('#androidsvg').load('Public/images/androidLogo.svg', function () {
                            if ($("#androidapk").length) {
                                $('#androidapk').attr("fill", col);
                                startAnim();
                            }
                        });
                        //document.getElementById("zoom").innerHTML='<object type="text/html" data="Public/images/sqr.svg" ></object>';
                        //document.getElementById("pop-up").innerHTML='<object type="text/html" data="Public/images/lqr.svg" ></object>';
                    }
                } else {
                    $('#zoom').load('Public/images/sqr.svg');
                    $('#pop-up').load('Public/images/lqr.svg');
                    $('.waves').load('Public/images/waves.svg');
                    $('#androidsvg').load('Public/images/androidLogo.svg', function () {
                        if ($("#androidapk").length) {
                            startAnim();
                        }
                    });
                    //$('#pop-up').html($('#pop-up').html().replace('webp','png'));
                    $('#pop-up').load('Public/images/lqr.svg', function () {
                        $(this).html($(this).html().replace('webp', 'png'));
                    });
                }
            }
        };
    })();
    function initformlang() {
        $("#google_translate_element").css("display", "block");
        let myScript = document.createElement("script");
        myScript.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        myScript.setAttribute("type", "text/javascript");
        myScript.setAttribute("id", "transscript");
        document.body.appendChild(myScript);

        let iframe1 = $('#googleForm');
        iframe1.attr("src", "");
        iframe1.attr("src", "https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true");
        iframe1.css("display", "block");
        isinitformlang = true;
    }
    window.addEventListener("scroll", function () {
        cssImgLazyLoad();
        //var styleCSS= document.createElement("link");
        //styleCSS.rel = "stylesheet";
        //styleCSS.href = "Public/fonts/icon-font.min.css";
        //document.head.insertBefore(styleCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
    });
    var h = $(window).height(); // New height
    var w = $(window).width(); // New width
    var matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (window.matchMedia && matched) {
        darkMode();
        setDefaultColor();
    } else {
        lightMode();
        setDefaultColor();
    }
    //    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {   
    //        changeThemeMode();
    //})
    window.addEventListener('online', update_status);
    window.addEventListener('offline', update_status);
    function update_status() {
        showhideform();
    }
    function showhideform() {
        if (!(navigator.onLine)/*offline*/) {
            // if(device=="mobile"){            
            $("#formdiv").hide();
            $(".contact-title span").hide();
            $(".con-title").hide();
            $("#sora_blogger_cntct_form").css("padding-top", "0px");
            $("#google_translate_element").hide();
        } else {/*online*/
            if (window.scrollY !== 0 || window.scrollY > 65) {
                $("#formdiv").show();
                $(".contact-title span").show();
                $(".con-title").show();
                $("#sora_blogger_cntct_form").css("padding-top", "50px");
                $("#google_translate_element").show();
                if (!isinitformlang) { initformlang(); }
            }
        }
        //}
        //    else{
        //        setTimeout(function() {
        //            var translateText=$("#google_translate_element").text();                
        //            if(translateText.length == 2)
        //            {
        //                $("#google_translate_element").text("Offline Translation Is'nt Avaliable").css("color","#707070");
        //            }                
        //        }, 5000);

        //    }      
    }
    var theme = window.matchMedia('(prefers-color-scheme: dark)');
    bindEvent(theme, 'change', function () {
        changeThemeMode();
    });

    function bindEvent(el, eventName, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, eventHandler, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, eventHandler);
        }
    }
    disableoptions();
    //if website steal-start
    (function () {
        //const rgx = new RegExp(/(domainName)|(:portNumUsedInLocalDev)|/g); 
        const rgx = new RegExp('127.0.0.1:5500');
        //const rgx = new RegExp('localhost:4063');
        //const rgx = new RegExp('asjadansari07.github.io');
        const host = window.location.host;
        const isMatch = !host.match(rgx);

        function showWarning() {
            let warning = document.createElement('h1');
            warning.id = '_asj_warning';
            warning.innerText = 'DON\'T STEAL';
            //warning.style.fontSize = '5em'; 
            warning.style.fontWeight = 700;
            warning.style.position = 'fixed';
            warning.style.backgroundColor = '#ff0000';
            warning.style.color = '#ffffff';
            warning.style.padding = '12px';
            //warning.style.left = `${(window.innerWidth/2.5)}px`; 
            //warning.style.top =`${ window.innerHeight /2}px`;
            var a = $(window.innerWidth / 2.5);
            var b = $(window.innerHeight / 2.5);
            warning.style.left = a[0] + 'px';
            warning.style.top = b[0] + 'px';
            warning.style.zIndex = 9999999999999999999;
            document.body.appendChild(warning);
        }

        function exactRvg() {
            cornify_add();

            //window.setTimeout(()=> { 
            window.setTimeout(function () {
                exactRvg();
                console.log("%cWARNING-DON\'T STEAL!", "font: 2em monospace; color: ffffff; background-color: red;");
            }, 1000);
        }
        if (isMatch) {
            showWarning();
            exactRvg();
            //$.getScript('Public/js/cornify.js',function(){ 
            //    exactRvg(); 
            //}); 
        }
    })();
    //if website steal-end
    var ele = $('.m-backtotop>div.text')
    var info = $('#info')
    var skillimg = $('#imgSkills')
    var skillvid = $('#vidPlayer')
    var formdiv = $('#formdiv')
    var hlogo = $('#Header1_headerimg')
    var hinner = $('#header-inner')
    var asj_warning = $('#_asj_warning')
    var popupqr = $('#pop-up')
    var lqr = $('#Lqr')
    var mainvid = $('video')
    var fntweight = $("i.color .lnr .lnr-license");
    switch (true) {
        case (w > 1200):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "104%");
            hlogo.css("height", "56px").css("width", "56px")
            asj_warning.css("font-size", "5em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "5%");
            break;
        case (w <= 1200 && w > 1100):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "104%");
            hlogo.css("height", "56px").css("width", "56px");
            asj_warning.css("font-size", "5em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "5%");
            break;
        case (w <= 1100 && w > 980):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "104%");
            hlogo.css("height", "56px").css("width", "56px");
            asj_warning.css("font-size", "4em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "5%");
            break;
        case (w <= 980 && w > 880):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "104%");
            hlogo.css("height", "56px").css("width", "56px");
            asj_warning.css("font-size", "4em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "6%");
            break;
        case (w <= 880 && w > 768):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "103%");
            hlogo.css("height", "56px").css("width", "56px");
            asj_warning.css("font-size", "3em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "3%");
            break;
        case (w <= 768 && w > 767):
            ele.css("font-size", "7px").css("font-weight", "600");
            skillimg.css("display", "none");
            skillvid.css("display", "block");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "103%");
            hlogo.css("height", "56px").css("width", "56px");
            asj_warning.css("font-size", "3em");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "3.5%");
            break;
        case (w <= 767 && w > 480):
            if (!isMobileDevice) {
                ele.css("font-size", "4px").css("line-height", "8px").css("width", "58%");
            } else {
                ele.css("font-size", "7px").css("line-height", "10px").css("width", "58%");
            }
            skillimg.css("display", "block");
            skillvid.css("display", "none");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "103%");
            hlogo.css("height", "45px").css("width", "45px");
            hinner.css("padding-top", "7px");
            asj_warning.css("font-size", "2em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width", "157").css("height", "157");
            lqr.css("width", "157").css("height", "157");
            mainvid.css("width", "inherit").css("object-fit", "cover");
            info.css("width", "3.5%");
            break;
        case (w <= 480 && w > 360):
            if (!isMobileDevice) {
                ele.css("font-size", "4px").css("line-height", "8px").css("width", "58%");
            } else {
                ele.css("font-size", "7px").css("line-height", "10px").css("width", "58%");
            }
            skillimg.css("display", "block");
            skillvid.css("display", "none");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "101%");
            hlogo.css("height", "45px").css("width", "45px");
            hinner.css("padding-top", "7px");
            asj_warning.css("font-size", "1.5em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width", "157").css("height", "157");
            lqr.css("width", "157").css("height", "157");
            mainvid.css("width", "inherit").css("object-fit", "cover");
            info.css("width", "6%");
            showhideform();
            break;
        case (w <= 360 && w > 300):
            if (!isMobileDevice) {
                ele.css("font-size", "4px").css("line-height", "8px").css("width", "58%");
            } else {
                ele.css("font-size", "7px").css("line-height", "10px").css("width", "58%");
            }
            skillimg.css("display", "block");
            skillvid.css("display", "none");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "101%");
            hlogo.css("height", "45px").css("width", "45px");
            hinner.css("padding-top", "7px");
            asj_warning.css("font-size", "1.5em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width", "157").css("height", "157");
            lqr.css("width", "157").css("height", "157");
            mainvid.css("width", "inherit").css("object-fit", "cover");
            info.css("width", "9%");
            showhideform();
            break;
        case (w <= 300):
            if (!isMobileDevice) {
                ele.css("font-size", "4px").css("line-height", "8px").css("width", "58%");
            } else {
                ele.css("font-size", "7px").css("line-height", "10px").css("width", "58%");
            }
            skillimg.css("display", "block");
            skillvid.css("display", "none");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "105%");
            hlogo.css("height", "45px").css("width", "45px");
            hinner.css("padding-top", "7px");
            asj_warning.css("font-size", "1em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width", "157").css("height", "157");
            lqr.css("width", "157").css("height", "157");
            mainvid.css("width", "inherit").css("object-fit", "cover");
            info.css("width", "11%");
            showhideform();
            break;
        default:
            ele.css("font-size", "4px");
            skillimg.css("display", "block");
            skillvid.css("display", "none");
            formdiv.css("padding", "15px 0px 15px 0px");
            iframe.css("width", "104%");
            hlogo.css("height", "56px").css("width", "56px");
            popupqr.css("width", "175").css("height", "175");
            lqr.css("width", "175").css("height", "175");
            info.css("width", "4%");
            break;
    }
    $('#nav').onePageNav();
    $('.slide-in').onePageNav();

    function setDefaultColor() {
        //if(details.toString().toLowerCase().includes('edge') || details.toString().toLowerCase().includes('trident'))
        if (details.toString().toLowerCase().indexOf('edge') > -1 || details.toString().toLowerCase().indexOf('trident') > -1) {
            var myvid = $('#myvideo');
            myvid.css('position', 'absolute').css('max-height', 'none').css('width', 'auto').css('height', 'auto');
        }
        //if(details.toString().toLowerCase().includes('trident'))
        if (details.toString().toLowerCase().indexOf('trident') > -1) {
            $("<style type='text/css'>.mycoll:after{background:red;" + "} </style>").appendTo("head");
            $("<style type='text/css'>.mycoll3:before{background:red;" + "} </style>").appendTo("head");
            $("<style type='text/css'>.mycoll4{background:red;" + "} </style>").appendTo("head");
            $(".slicknav_nav").addClass("mycoll4");
            $(".slicknav_menu .slicknav_icon-bar").css("background", "none");
            $(".flickity-page-dots").css("display", "none");

            $(".slicknav_menu .slicknav_icon-bar").addClass("mycoll4");
            $(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycoll3 mycoll");
            setTimeout(function () {
                $("ol.flickity-page-dots").css("display", "none");
            }, 7000);

            $("#header-wrapper").css("background", "url(/Public/images/head-back.jpg) no-repeat center bottom").css('background-size', 'cover').css("background-attachment", "fixed");;
            $(".main-gallery").css("background", "url(/Public/images/head-back1.jpg) no-repeat fixed 50% 50%/cover");
            $("#section-5C").css("background", "url(/Public/images/head-back.jpg) no-repeat fixed 50% 50%/cover");
            $(".insta-wrap").css("background", "url(/Public/images/map.jpg) no-repeat fixed 50% 50%/cover").css("position", "relative");
            $(".counter-box,#section-5A").css("background", "url(/Public/images/sg-back.jpg)  no-repeat fixed 50% 50%/cover");
            $(".insta-wrap .filter").css("display", "block");
            $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />');
            $('#bundlecss').remove();
            $('#noscript').remove();
            $('#bundlecss1').remove();
            $('head').append('<link rel="stylesheet" href="Public/css/3597120983-css_bundle_v2.css" type="text/css" />');
            $('#LinkList236').removeClass('widget');
            $('img[alt="Loading..."]').attr('src', 'Public/images/asj_circle1.png');
            $('#Header1_headerimg').attr('src', 'Public/images/asj_2.png');
            $('#qrimg').attr('xlink:href', '/Public/images/asj_2.png');
            $('img[title="Click to Connect"]').attr('src', 'Public/images/asj_circle1.png');
            $('img[data-src="Public/images/fl.webp"]').attr('class', '').attr('src', 'Public/images/fl.jpg').addClass('testimonial-avatar');
            $('img[alt="Asp.Net"]').attr('class', '').attr('src', 'Public/images/aspnet.jpg');
            $('img[alt="SQL Server"]').attr('class', '').attr('src', 'Public/images/sql.jpg');
            $('img[alt="MS CRM Dynamics"]').attr('class', '').attr('src', 'Public/images/crm.jpg');
            $('img[alt="HTML"]').attr('class', '').attr('src', 'Public/images/html.jpg');
            $('img[alt="CSS"]').attr('class', '').attr('src', 'Public/images/css.jpg');
            $('img[alt="Bootstrap"]').attr('class', '').attr('src', 'Public/images/bootstrap.jpg');
            $('img[alt="JavaScript"]').attr('class', '').attr('src', 'Public/images/javascript.jpg');
            $('img[alt="JQuery"]').attr('class', '').attr('src', 'Public/images/jquery.jpg');
            $('img[alt="Ado.Net"]').attr('class', '').attr('src', 'Public/images/adonet.jpg');
            $('img[alt="LINQ"]').attr('class', '').attr('src', 'Public/images/linq.jpg');
            $('img[alt="XML"]').attr('class', '').attr('src', 'Public/images/xml.jpg');
            $('img[alt="Google Forms"]').attr('class', '').attr('src', 'Public/images/googleform.jpg');
            $('img[alt="C#"]').attr('class', '').attr('src', 'Public/images/csharp.jpg');
            $('img[alt="JSON"]').attr('class', '').attr('src', 'Public/images/json.jpg');
            $('img[alt="AJAX"]').attr('class', '').attr('src', 'Public/images/ajax.jpg');
            $('img[alt="Web Service"]').attr('class', '').attr('src', 'Public/images/ws.jpg');
            $('img[alt="Web Form"]').attr('class', '').attr('src', 'Public/images/form.jpg');
            $('img[alt="MS Office"]').attr('class', '').attr('src', 'Public/images/office.jpg');
            $('img[alt="SSRS"]').attr('class', '').attr('src', 'Public/images/ssrs.jpg');
            $('img[alt="MVC"]').attr('class', '').attr('src', 'Public/images/mvc.jpg');
            $('img[alt="Certificate4"]').attr('class', '').attr('src', 'Public/images/Summit_Award_Certificate_Jul2020.jpg');
            $('img[alt="Certificate2"]').attr('class', '').attr('src', 'Public/images/Summit_Award_Certificate_Jan2022.jpg');
            $('img[alt="MVC Certificate"]').attr('class', '').attr('src', 'Public/images/MVC_Certificate.jpg');
            $('img[alt="Certificate3"]').attr('class', '').attr('src', 'Public/images/AppCardRepSep2020.jpg');
            $('img[alt="Certificate5"]').attr('class', '').attr('src', 'Public/images/AppCardRepJun2020.jpg');
            $('img[alt="Certificate1"]').attr('class', '').attr('src', 'Public/images/AppCardRepJul2022.jpg');
            $('img[alt="Certificate6"]').attr('class', '').attr('src', 'Public/images/AppCardRepJan2020.jpg');
            $(".counter-sora").css("font-size", "60px");

            $('#google_translate_element').css('display', 'none');
            $('#iegtranslate').css('display', 'inline-block').css('color', '#ff0000').css('margin-top', '12px');
            $('#iegform').css('display', 'inline-block').css('color', '#ff0000');
            $('#resume a').hover(function () {
                $(this).css('color', 'red');
            }, function () {
                $(this).css('color', 'white');
            });
        }

        document.documentElement.style.setProperty('--mycol', '#008080', 'important');
        document.documentElement.style.setProperty('--background', '#008080', 'important');
        if (w > 1200 || (w <= 1200 && w > 1100) || (w <= 1100 && w > 980) || (w <= 980 && w > 880) || (w <= 880 && w > 768) || (w <= 768 && w > 767)) {
            if (window.matchMedia && matched) {
                iframe.css("filter", "invert(0.9)");
                gtranslate.css("filter", "invert(1)");
            } else {
                iframe.css("filter", "none");
                gtranslate.css("filter", "none");
            }
        } else {
            if (!isWebview) {
                if (window.matchMedia && matched) {
                    iframe.css("filter", "invert(0.9)");
                    gtranslate.css("filter", "none");
                } else {
                    iframe.css("filter", "none");
                }
            }
        }
    }

    var counter = 0;
    $("#Header1_headerimg").click(function () {
        changeThemeMode();
    });
    $(".m-theme").click(function () {
        switch (counter) {
            case 0:
                changeColor('#ffbd2f', 'rgba(255,189,47,0.5)');
                changeWaveCol('#ffbd2f');
                counter += 1;
                break;
            case 1:
                changeColor('#00BC22', 'rgba(0,255,0,0.5)');
                changeWaveCol('#00BC22');
                counter += 1;
                break;
            case 2:
                changeColor('#0030EF', 'rgba(0,0,255,0.5)');
                changeWaveCol('#0030EF');
                counter += 1;
                break;
            case 3:
                changeColor('#FF0000', 'rgba(255,0,0,0.5)');
                changeWaveCol('#FF0000');
                counter += 1;
                break;
            case 4:
                changeColor('#FF00FF', 'rgba(255,0,255,0.5)');
                changeWaveCol('#FF00FF');
                counter += 1;
                break;
            case 5:
                changeColor('#FF8000', 'rgba(255,128,0,0.5)');
                changeWaveCol('#FF8000');
                counter += 1;
                break;
            case 6:
                changeColor('#808080', 'rgba(192,192,192,0.5)');
                changeWaveCol('#808080');
                counter += 1;
                break;
            case 7:
            default:
                changeColor('#008080', 'rgba(0,128,128,0.5)');
                changeWaveCol('#008080');
                counter = 0;
                break;
        }
    });

    function darkMode() {
        $(".preloader1").css("background", "rgb(0, 0, 0)");
        $(".preloader1-circle").css("background", "rgb(0, 0, 0)");
        $("body").css("background-color", "rgb(0, 0, 0)");
        $(".sora-special-box").css('background', "rgb(0, 0, 0)");
        $(".sora-works-box").css('background', "rgb(0, 0, 0)");
        $(".sora-about-box").css('background', "rgb(0, 0, 0)");
        $("#outer-wrapper").css('background', "rgb(0, 0, 0)");
        $(".bot-bar-menu").css('background', "rgb(0, 0, 0)");
        // $(".m-backtotop").css('border', "2px solid rgb(255, 255, 255)");
        // $(".m-theme").css('border', "2px solid rgb(255, 255, 255)");
        //$(".tysum-wrapper").css('background', "rgb(0, 0, 0)");
        document.documentElement.style.setProperty('--bccol', 'black', 'important');
        document.documentElement.style.setProperty('--scol', 'white', 'important');

        //if(details.toString().toLowerCase().includes('edge'))
        if (details.toString().toLowerCase().indexOf('edge') > -1) {
            document.documentElement.style.setProperty('--bckimg', 'url(../Public/images/header-mask-black-after.webp) no-repeat center', 'important');
            $('.main-gallery').css('animation-name', 'none').removeClass('fadeInUp');
            $('.counter-box').css('animation-name', 'none').removeClass('slideInUp');
        }
        //else if(details.toString().toLowerCase().includes('trident'))
        else if (details.toString().toLowerCase().indexOf('trident') > -1) {
            $("<style type='text/css'>.black:before{color:black;} </style>").appendTo("head");
            $('.sora-author-box-text .hello-txt').addClass('black');
            $("<style type='text/css'>::selection{text-shadow: white 0 0 2px;} </style>").appendTo("head");
            $('.popup_menu .btn1 .fa').css('color', 'white');

            $("<style type='text/css'>.black:after{background:url(../Public/images/header-mask-black-after.png) no-repeat center !important;} </style>").appendTo("head");
            $("#header-wrapper").addClass('black');
            $("#section-6").addClass('black');
            $(".counter-box.wow.slideInUp").addClass('black');
        } else {
            document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-black-after.webp) no-repeat center', 'important');
        }
    }

    function lightMode() {
        $(".preloader1").css("background", "rgb(255, 255, 255)");
        $(".preloader1-circle").css("background", "rgb(255, 255, 255)");
        $("body").css("background-color", "rgb(255, 255, 255)");
        $(".sora-special-box").css('background', "rgb(255, 255, 255)");
        $(".sora-works-box").css('background', "rgb(255, 255, 255)");
        $(".sora-about-box").css('background', "rgb(255, 255, 255)");
        $("#outer-wrapper").css('background', "rgb(255, 255, 255)");
        $(".bot-bar-menu").css('background', "rgb(255, 255, 255)");
        // $(".m-backtotop").css('border', "2px solid rgb(0,0,0)");
        // $(".m-theme").css('border', "2px solid rgb(0,0,0)");
        //$(".tysum-wrapper").css('background', "rgb(255, 255, 255)");
        document.documentElement.style.setProperty('--bccol', 'white', 'important');
        document.documentElement.style.setProperty('--scol', 'black', 'important');
        //if(details.toString().toLowerCase().includes('edge'))
        if (details.toString().toLowerCase().indexOf('edge') > -1) {
            document.documentElement.style.setProperty('--bckimg', 'url(../Public/images/header-mask-white-after.webp) no-repeat center', 'important');
            $('.main-gallery').css('animation-name', 'none').removeClass('fadeInUp');
            $('.counter-box').css('animation-name', 'none').removeClass('slideInUp');
        }
        //else if(details.toString().toLowerCase().includes('trident'))
        else if (details.toString().toLowerCase().indexOf('trident') > -1) {
            $("<style type='text/css'>.white:before{color:white;} </style>").appendTo("head");
            $('.sora-author-box-text .hello-txt').addClass('white');
            $("<style type='text/css'>::selection{text-shadow: black 0 0 2px;} </style>").appendTo("head");
            $('.popup_menu .btn1 .fa').css('color', 'black');

            $("<style type='text/css'>.white:after{background:url(../Public/images/header-mask-white-after.png) no-repeat center !important;} </style>").appendTo("head");
            $("#header-wrapper").addClass('white');
            $("#section-6").addClass('white');
            $(".counter-box.wow.slideInUp").addClass('white');
        } else {
            document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');
        }
    }

    function changeForm(w, col) {
        var gform = 'https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true';
        col = col.replace(/\s/g, '');
        if (w > 1200 || (w <= 1200 && w > 1100) || (w <= 1100 && w > 980) || (w <= 980 && w > 880) || (w <= 880 && w > 768) || (w <= 768 && w > 767)) {
            if ($("body").css("background-color").replace(/\s/g, '') == "rgb(0,0,0)") {
                iframe.css("filter", "none");
                gtranslate.css("filter", "none");
            } else {
                iframe.css("filter", "invert(0.9)");
                gtranslate.css("filter", "invert(1)");
            }
        } else {
            if (isWebview) {
                if (matchMedia && matched) {
                    if ($("body").css("background-color").replace(/\s/g, '') == "rgb(0,0,0)") {
                        iframe.css("filter", "invert(1)");
                        gtranslate.css("filter", "invert(1)");
                    } else {
                        iframe.css("filter", "none");
                        gtranslate.css("filter", "none");
                    }
                } else {
                    if ($("body").css("background-color").replace(/\s/g, '') == "rgb(255,255,255)") {
                        iframe.css("filter", "invert(0.9)");
                        gtranslate.css("filter", "invert(1)");
                    } else {
                        iframe.css("filter", "none");
                        gtranslate.css("filter", "none");
                    }
                }
            } else {
                if (matchMedia && matched) {
                    if ($("body").css("background-color").replace(/\s/g, '') == "rgb(0,0,0)") {
                        iframe.attr("data-src", "");
                        iframe.attr("data-src", gform);
                        iframe.css("filter", "none");
                        gtranslate.css("filter", "invert(1)");

                    } else {
                        iframe.attr("data-src", "");
                        iframe.attr("data-src", gform);
                        iframe.css("filter", "invert(0.9)");
                        gtranslate.css("filter", "none");
                    }
                } else {
                    if ($("body").css("background-color").replace(/\s/g, '') == "rgb(255,255,255)") {
                        iframe.attr("data-src", "");
                        iframe.attr("data-src", gform);
                        iframe.css("filter", "invert(0.9)");
                        gtranslate.css("filter", "invert(1)");
                    } else {
                        iframe.attr("data-src", "");
                        iframe.attr("data-src", gform);
                        iframe.css("filter", "none");
                        gtranslate.css("filter", "none");
                    }
                }
            }
        }
    }

    function changeThemeMode() {
        // var col = $(".hello-txt").css("background-color");
        if ($("body").css("background-color").replace(/\s/g, '') == "rgb(255,255,255)") {
            //if(window.matchMedia && matched){                  
            changeForm(w, col)
            darkMode();
        } else {
            changeForm(w, col);
            lightMode();
        }
    }

    function changeColor(col, rgba) {
        //if(details.toString().toLowerCase().includes('trident'))
        if (details.toString().toLowerCase().indexOf('trident') > -1) {
            $(".perctext").css("color", col);
            $(".testimonial-avatar").hover(function () {
                $(this).css("border", "2px solid " + col);
            }, function () {
                $(this).css("border", "none");
            });
            $("<style type='text/css'>.mycol:after{background:" + col + " !important;" + "} </style>").appendTo("head");
            $("<style type='text/css'>.mycol1{color:" + col + " !important;" + "} </style>").appendTo("head");
            $("<style type='text/css'>.mycol3:before{background:" + col + " !important;" + "} </style>").appendTo("head");
            $("<style type='text/css'>.mycol4{background:" + col + " !important;" + "} </style>").appendTo("head");
            $("#resume a").hover(function () {
                $(this).addClass("mycol mycol1");
            }, function () {
                $(this).removeClass("mycol1");
            });
            $("#asj").css("color", col).hover(function () {
                $(this).addClass("mycol");
            });
            $("a.btn-2 span").css("color", col).css("border", "1px solid " + col);
            $("a.btn-2").hover(function () {
                $(this).addClass("mycol3");
                $("a.btn-2 span").css("color", "white");
            }, function () {
                $("a.btn-2 span").css("color", col);
            });

            $(".fancyBtn").addClass("mycol1");
            $(".m-theme.active").css("background", col);
            $(".m-backtotop.active").css("background", col);

            $(".slicknav_nav").addClass("mycol4");

            $(".slicknav_menu .slicknav_icon-bar").css("background", "none");
            $(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycol3 mycol");
            $("ol.flickity-page-dots").css("display", "none");

            $(".block-image .thumb").addClass("mycol3");
            $("<style type='text/css'>.hellotext:before{border-left-color:" + col + " !important;" + "} </style>").appendTo("head");
            $(".sora-author-box-text .hello-txt").css("background", col).addClass("hellotext");
            $(".sora-author-box-text-details .profile-list li .list-button,.works-icons li,.flickity-prev-next-button").css("background", col);
            $(".header-logo-desc span,.sora-author-box-text .profile-title,.sora-author-box-text .profile-title span,.counter-box-item,.counter-sora,.testimonial-author,.map-me .con-list li i,#iegtranslate,#iegform").css("color", col);
            $(".flickity-prev-next-button").hover(function () {
                $(this).css("background", "#fff");
            }, function () {
                $(this).css("background", col);
            });

            $(".top-bar-social ul#social a,.bottom-bar-social ul#social a").hover(function () {
                $(this).addClass("mycol1");
            }, function () {
                $(this).removeClass("mycol1");
            });
            $(".socials a i").hover(function () {
                $(this).css("background", col);
            }, function () {
                $(this).css("background", "none");
            });
        } else {
            document.documentElement.style.setProperty('--mycol', col, 'important');
            document.documentElement.style.setProperty('--background', col, 'important');
        }
        $('.popup_menu .btn1').css('background', rgba);
        //$('#androidapk').attr("src", src)
        $('#androidapk').attr("fill", col)
    }
    $(".trigger").click(function () {
        $(".popup_menu").toggleClass("active");
    });
    if ($(window).width() <= 1100) {
        $(".fancyBtn").removeClass("fancyBtn");
    }
    // $(function() {
    //     $("#androidapk").hover(function() {
    //         $("#androidapk").animate({
    //             left: '-12px'
    //         });
    //         $(this).stop(true).fadeTo(200, 1);
    //     }, function() {
    //         $("#androidapk").animate({
    //             left: '-12px'
    //         });
    //         $(this).stop(true).fadeTo(200, 1);
    //     });
    // });

    // $(function() {
    //     $("#androidapk").mouseleave(function() {
    //         $("#androidapk").animate({
    //             left: '-65px'
    //         });
    //         resetAnim()
    //     }, function() {
    //         $("#androidapk").animate({
    //             left: '-65px'
    //         });
    //         resetAnim()
    //     });
    //     var startAnim = function() {
    //         $("#androidapk").delay(7000).animate({
    //             left: '-12px'
    //         }, resetAnim);
    //     }
    //     var resetAnim = function() {
    //         $("#androidapk").delay(7000).animate({
    //             left: '-65px'
    //         });
    //         startAnim();
    //     }
    //     startAnim()
    // });

    function startAnim() {
        $("#androidapk").delay(7000).animate({
            left: '-12px'
        }, resetAnim);
    }

    function resetAnim() {
        $("#androidapk").delay(7000).animate({
            left: '-65px'
        });
        startAnim();
    }

    // Attach event handlers
    $(document).on('mouseenter', '#androidapk', function () {
        $(this).stop(true).animate({ left: '-12px' }, 200).fadeTo(200, 1);
    });

    $(document).on('mouseleave', '#androidapk', function () {
        $(this).stop(true).animate({ left: '-65px' }, 200);
        resetAnim();
    });
    //Make sure the user has scrolled at least double the height of the browser
    //var toggleHeight = $(window).outerHeight() * 2;

    //Scrolls the user to the top of the page again
    $(".m-backtotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $("#loadmore").click(function () {
        if (!$("#gal2").is(":visible")) {
            $("#gal2").show();
        } else if (!$("#gal3").is(":visible")) {
            $("#gal3").show();
        } else if (!$("#gal4").is(":visible")) {
            $("#gal4").show();
            $(this).hide();
            $("#btntitle").hide();
        } else {
            $(this).hide();
            $("#btntitle").hide();
        }
        var y = $(window).scrollTop(); //your current y position on the page
        $(window).scrollTop(y + 1);
    });
    $("#loadmore1").click(function () {
        if (!$("#cert1").is(":visible")) {
            $("#cert1").show();
        }
        else if (!$("#cert2").is(":visible")) {
            $("#cert2").show();
            $(this).hide();
            $("#btntitle1").hide();
        }
        else {
            $(this).hide();
            $("#btntitle1").hide();
        }
        var y = $(window).scrollTop(); //your current y position on the page
        $(window).scrollTop(y + 1);
    });
    $("#loadmore2").click(function () {
        if (!$("#proj0").is(":visible")) {
            $("#proj0").show();
        } else if (!$("#proj1").is(":visible")) {
            $("#proj1").show();
        } else if (!$("#proj2").is(":visible")) {
            $("#proj2").show();
        } else if (!$("#proj3").is(":visible")) {
            $("#proj3").show();
        } else if (!$("#proj4").is(":visible")) {
            $("#proj4").show();
        } else if (!$("#proj5").is(":visible")) {
            $("#proj5").show();
        } else if (!$("#proj6").is(":visible")) {
            $("#proj6").show();
            $(this).hide();
            $("#btntitle2").hide();
        } else {
            $(this).hide();
            $("#btntitle2").hide();
        }
        var y = $(window).scrollTop(); //your current y position on the page
        $(window).scrollTop(y + 1);
    });
    $("#loadmore3").click(function () {
        if (!$("#train1").is(":visible")) {
            //$("#train1").show();
            if (w >= 873 && w <= 1136) {
                $("#train1").css("display", "inline-flex");
            } else {
                $("#train1").show();
            }
            $(this).hide();
            $("#btntitle3").hide();
        } else {
            $(this).hide();
            $("#btntitle3").hide();
        }
        var y = $(window).scrollTop(); //your current y position on the page
        $(window).scrollTop(y + 1);
    });
    var flkty = new Flickity('.main-gallery', {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: true,
        autoPlay: 5000
    });

    setInterval(function () {
        if (!$('#asj:visible')['length']) {
            window['location']['href'] = 'https://asjadansari07.github.io'
        }
    }, 3000)

    $(function () {
        var moveLeft = 20;
        var moveDown = 10;

        $('#zoom').hover(function (e) {
            $('#pop-up').show();
            //.css('top', e.pageY + moveDown)
            //.css('left', e.pageX + moveLeft)
            //.appendTo('body');
        }, function () {
            $('#pop-up').hide();
        });

        $('#zoom').mousemove(function (e) {
            $("#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
    });
    // disable right click
    //var intervalId = window.setInterval(function(){
    //    console.log("%cWARNING-DON\'T STEAL!", "font: 2em monospace; color: ffffff; background-color: red;");
    //}, 1000); 


    function disableoptions() {
        //document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('contextmenu', function () {
            //event.preventDefault()
        });
        document.onkeydown = function (e) {
            // disable F12 key
            if (e.keyCode == 123) {
                return false;
            }
            // disable I key
            if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                return false;
            }
            // disable J key
            if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                return false;
            }
            // disable U key
            if (e.ctrlKey && e.keyCode == 85) {
                return false;
            }
        }
    }
    setTimeout(function () {
        var webmsrcvid = $('#webmsrcvid');
        var mp4srcvid = $('#mp4srcvid');
        webmsrcvid.attr('data-src', 'Public/images/beach.webm');
        mp4srcvid.attr('data-src', 'Public/images/beach.mp4');
        $("video#myvideo source").each(function () {
            var sourceFile = $(this).attr("data-src");
            $(this).attr("src", sourceFile);
            var video = this.parentElement;
            //if(details.toString().toLowerCase().includes('trident'))
            if (details.toString().toLowerCase().indexOf('trident') > -1) {
                try {
                    video.load();
                    video.play()
                } catch (ex) {
                    //function(ex) {}
                }
            } else {
                video.load();
                video.play().catch(function (e) { });
            }
        });
    }, 5000);
    //$(function() {
    //    $("video#myvideo source").each(function() {
    //        var sourceFile = $(this).attr("data-src");
    //        $(this).attr("src", sourceFile);
    //        var video = this.parentElement;
    //        video.load();
    //        video.play().catch(function(e) {});
    //    });
    //});
});
//window.onload = function () {
//    var el = document.querySelector(".slicknav_btn");
//    if (el) {
//        el.addEventListener("click", function () {
//            this.classList.toggle("active");
//        });
//    }
//}

///*<![CDATA[*/
//$(window).bind("load", function () {
//    jQuery("#loader").fadeOut("slow");
//    jQuery("#preloader").delay(0).fadeOut();
//});
///*]]>*/

//function invertCol(clr){
//    var invCol;
//    switch (clr) {
//        case 'rgb(255,189,47)': //yellow
//            invCol='rgb(0,48,239)'//blue
//            break;
//        case 'rgb(0,188,34)': //green
//            invCol='rgb(255,0,255)'//magenta
//            break;
//        case 'rgb(0,48,239)'://blue
//            invCol='rgb(255,189,47)'//yellow
//            break;
//        case 'rgb(0,128,128)'://teal
//            invCol='rgb(255,0,0)'//red
//            break;
//        case 'rgb(255,0,255)':   //magenta
//            invCol='rgb(0,188,34)'//green
//            break;
//        case 'rgb(255,128,0)'://orange
//            invCol='rgb(0,48,239)'//blue
//            break;
//        case 'rgb(192,192,192)'://grey
//            invCol='rgb(192,192,192)'//grey
//            break;
//        case 'rgb(255,0,0)':    //red
//            invCol='rgb(0,128,128)'//teal
//            break;
//        default:
//            invCol='rgb(255,0,0)'
//            break;
//    }
//    return invCol;
//}
//function getFormbyCol(c){
//    var formUrl;
//    switch (c) {
//        case 'rgb(255,189,47)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSfNb2Kzqwg1ABhvCjaUbFcUw_zRzrF18AK5aaOF1SnWkdpMZA/viewform?embedded=true'
//            break;
//        case 'rgb(0,188,34)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSejjLWlzY8VK2eO-bhy5JzNHhumu7VXdTEGG8tpPn4EDC5jyQ/viewform?embedded=true'
//            break;
//        case 'rgb(0,48,239)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSelvtCeFbRzhve1QF3h5nODdntJvFePBabgZiLuDxsuLGZjQA/viewform?embedded=true'
//            break;
//        case 'rgb(0,128,128)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLScS8s6OrBD3UmDvtTZqPg3j1WcmWptpsubVhLoSqgyY51fnng/viewform?embedded=true'
//            break;
//        case 'rgb(255,0,255)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSeXyW2PDxsG5Y_R5eTmWrtWjG-vMJQvYXWksHXFC3TbEO7QxQ/viewform?embedded=true'
//            break;
//        case 'rgb(255,128,0)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSdcda7CfmBlvKwIIhOp8OMMbGiaEWheI8fyUJqsQ0RxK0EDRQ/viewform?embedded=true'
//            break;
//        case 'rgb(192,192,192)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true'
//            break;
//        case 'rgb(255,0,0)':
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSex6H7IrFV1OfAGRVnfflw9dv2Z0F2vCTQ2NcoWmL7Q4WPyOg/viewform?embedded=true'
//            break;
//        default:
//            formUrl='https://docs.google.com/forms/d/e/1FAIpQLSex6H7IrFV1OfAGRVnfflw9dv2Z0F2vCTQ2NcoWmL7Q4WPyOg/viewform?embedded=true'
//            break;
//    }
//    return formUrl;
//}

//$(document)['ready'](function (_0x24d5x2) {
//    var _0x24d5x3 = -1,
//        _0x24d5x4 = '',
//        _0x24d5x5 = '';
//    _0x24d5x2('#menu')['find']('ul')['find']('li')['each'](function () {
//        for (var _0x24d5x6 = _0x24d5x2(this)['text'](), _0x24d5x7 = _0x24d5x2(this)['find']('a')['attr']('href'), _0x24d5x8 = 0, _0x24d5x9 = 0; _0x24d5x9 < _0x24d5x6['length'] && (_0x24d5x8 = _0x24d5x6['indexOf']('_', _0x24d5x8), -1 != _0x24d5x8) ; _0x24d5x9++) {
//            _0x24d5x8++
//        };
//        if (level = _0x24d5x9, level > _0x24d5x3 && (_0x24d5x4 += '<ul>', _0x24d5x5 += '<ul>'), level < _0x24d5x3) {
//            offset = _0x24d5x3 - level;
//            for (var _0x24d5x9 = 0; _0x24d5x9 < offset; _0x24d5x9++) {
//                _0x24d5x4 += '</ul></li>',
//                    _0x24d5x5 += '</ul></li>'
//            }
//        };
//        _0x24d5x6 = _0x24d5x6['replace'](/_/gi, ''),
//            _0x24d5x4 += '<li><a href=\'' + _0x24d5x7 + '\'>' + _0x24d5x6 + '</a>',
//            _0x24d5x5 += '<li><a href=\'' + _0x24d5x7 + '\'>';
//        for (var _0x24d5x9 = 0; _0x24d5x9 < level; _0x24d5x9++) {
//            _0x24d5x5 += ''
//        };
//        _0x24d5x5 += _0x24d5x6 + '</a>',
//            _0x24d5x3 = level
//    });
//    for (var _0x24d5x8 = 0; _0x24d5x3 >= _0x24d5x8; _0x24d5x8++) {
//        _0x24d5x4 += '</ul>',
//            _0x24d5x5 += '</ul>',
//            0 != _0x24d5x8 && (_0x24d5x4 += '</li>', _0x24d5x5 += '</li>')
//    };
//    _0x24d5x2('#menu .LinkList')['html'](_0x24d5x5),
//        _0x24d5x2('#menu > .LinkList > ul')['attr']('id', 'nav1'),
//        _0x24d5x2('#menu ul > li > ul')['parent']('li')['addClass']('parent'),
//        _0x24d5x2('#menu .widget')['attr']('style', 'display:block!important;')
//});