$(document).ready(function(){

    ////////////////////////////////////////////////////////////////////////////////////
    // Infographics data
    //
    //
    var infographics = {
        perception: {
            filename: 'info_perception.png',
            patch: 'patch_perception.jpg',
            description: 'We eat less healthy than we think.',
            patchOffset: -35,
            banner: [
                { filename: 'Perception-01.png',        top: '-40px',   left: '0px', parallax: 'A' },
                { filename: 'Perception-02-guy.png',    top: '-40px',   left: '76%', parallax: 'B' },
                { filename: 'Perception-02-mirror.png', top: '-40px',   left: '76%', parallax: 'A' },
                { filename: 'Perception-03.png',        top: '-200px',  left: '54%', parallax: 'C' }
            ],
            sections: [
                { height:  800, caption: 'bla', color: 'rgba(0,161,180,0.3)'},
                { height: 1391, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 2407, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3295, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 4640, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 4754, caption: 'bla', color: 'rgba(0,123,0,0.6)'}
            ],
            offset: 160
        },
        what: {
            filename: 'info_whatweeat.png',
            patch: 'patch_what.jpg',
            description: 'What we eat matters.',
            patchOffset:-17,
            banner: [
                { filename: 'banner_what4.png', top: '-70px',  left: '-9%', parallax: 'A' },
                { filename: 'banner_what1.png', top: '310px',     left: '71%', parallax: 'B' },
                { filename: 'banner_what3.png', top: '285px',  left: '93.5%', parallax: 'B' },
                { filename: 'banner_what2.png', top: '310px',   left: '70.5%', parallax: 'C' }
            ],
            sections: [
                { height:  800, caption: 'bla', color: 'rgba(0,161,180,0.3)'},
                { height: 1440, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 2317, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3450, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 3700, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 3800, caption: 'bla', color: 'rgba(0,161,180,0.7)'}
            ],
            offset: 260
        },
        where: {
            filename: 'info_whereweeat.png',
            patch: 'patch_where.jpg',
            patchOffset: -26,
            description: 'Where we eat matters.',
            banner: [
                { filename: 'banner_whereTitle.png',        top: '-80px',     left: '0px', parallax: 'C' },
                { filename: 'banner_whereHalo.png',         top: '-80px',     left: '0px', parallax: 'B' },
                { filename: 'banner_whereBigheadBack.png',  top: '-80px',     left: '0px', parallax: 'A' },
                { filename: 'banner_whereMoustache.png',    top: '-80px',     left: '0px', parallax: 'B' },
                { filename: 'banner_whereBigheadFront.png', top: '-80px',     left: '0px', parallax: 'A' }

            ],
            sections: [
                { height:  1010, caption: 'bla', color: 'rgba(0,161,180,0.3)'},
                { height: 1775, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 2355, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 2823, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3023, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3330, caption: 'bla', color: 'rgba(0,123,0,0.6)'}
            ],
            offset: 190
        },

        when: {
            filename: 'info_whenweeat.png',
            patch: '',
            patchOffset: 0,
            description: 'Who eats what?',
            banner: [
                { filename: 'banner_whenTitle.png',     top: '-90px',     left: '-20px', parallax: 'B' },
                { filename: 'banner_whenGuys.png',      top: '-150px',     left: '-20px', parallax: 'A' },
                { filename: 'banner_whenCurtain.png',   top: '500px',     left: '-80px', parallax: 'A' },
                { filename: 'banner_whenFoodBack.png',  top: '-150px',     left: '-20px', parallax: 'B' },
                { filename: 'banner_whenFoodFront.png', top: '-150px',     left: '-20px', parallax: 'C' }
            ],
            sections: [
                { height:  670, caption: 'bla', color: 'rgba(0,161,180,0.3)'},
                { height: 1015, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 1820, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 2575, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 3387, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3787, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3931, caption: 'bla', color: 'rgba(0,123,0,0.6)'}
            ],
            offset: 0
        },
        who: {
            filename: 'info_eatingiscontagious.png',
            patch: '',
            patchOffset: 0,
            description: 'Eating habits are contagious.',
            banner: [
                { filename: 'banner_whoTitle.png',      top: '-90px',     left: '-20px', parallax: 'A' },
                { filename: 'banner_whoPeeps.png',     top: '-90px',     left: '-20px', parallax: 'B' },
                { filename: 'banner_whenCurtain.png',   top: '540px',     left: '-80px', parallax: 'B' },
                { filename: 'banner_whoFood.png',      top: '-90px',     left: '-20px', parallax: 'C' },
            ],
            sections: [
                { height:  750, caption: 'bla', color: 'rgba(0,161,180,0.3)'},
                { height: 1090, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 1970, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 2695, caption: 'bla', color: 'rgba(0,161,180,0.7)'},
                { height: 3160, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3360, caption: 'bla', color: 'rgba(0,123,0,0.6)'},
                { height: 3500, caption: 'bla', color: 'rgba(0,123,0,0.6)'}
            ],
            offset: 110
        }
    };


    ////////////////////////////////////////////////////////////////////////////////////
    // Globals
    //
    //

    window.app = {};

    var navLabel = new Array('1', '2', "3", '4', '5', '6', '7', '8', '9', '10');
    var cumulHeight = 0;
    var lastInfographic = '';
    var curInfographic = '';
    var INFOGRAPHIC = infographics[curInfographic];
    var sectionHeight = 0;

    var prevSection = 0;
    var currentSection = 0;

    var $main = $('#main');
    var $wrapper = $('#wrapper');
    var $banner = $('#banner_main');
    var $pageScroll = $('#pageScroll');
    var $topNav = $('.topNav');

    var imgPATH = '../images/'
    var infographicsOrder = ['perception', 'when', 'where', 'what', 'who'];

    var getPrevNextInfographicName = function(aDirection) {
        var newIndex = 0;
        var curIndex = infographicsOrder.indexOf(curInfographic);
        console.log(curIndex);
        var numInfographics = infographicsOrder.length;
        if (aDirection === 'next') {
            if (curIndex >= numInfographics-1) { newIndex = 0; }
            else { newIndex = curIndex + 1; }
        }
        if (aDirection === 'prev') {
            console.log(curIndex)
            if (curIndex <= 0) { newIndex = numInfographics-1; }
            else { newIndex = curIndex - 1; }
        }
        return infographicsOrder[newIndex];
    };

    ////////////////////////////////////////////////////////////////////////////////////
    // Create sections
    //
    //

    function createInfographicPage(aInfographic) {
        lastInfographic = curInfographic;
        curInfographic = aInfographic;
        INFOGRAPHIC = infographics[aInfographic];

        // Update nav bar
        $('.nav_'+lastInfographic).removeClass('active');
        $('.nav_'+curInfographic).addClass('active');

        $banner.hide().html('');
        $main.fadeOut(0, function() {
            $wrapper.html('').append('<div id="main"></div>');
            var $main = $('#main');

            // Create banner
            var _bn = INFOGRAPHIC.banner;
            for (var i=0; i<_bn.length; i++) {
                $('<div class="banner-item parallax'+_bn[i].parallax+'"><img id="'+curInfographic+'-'+i+'" src="'+imgPATH+_bn[i].filename+'"/></div>').appendTo($banner).css({'margin-left': _bn[i].left, 'margin-top': _bn[i].top});
            }

            // Create image
            $main.append('<div id="image"><div class="image_frame"></div><div id="image_container"><div id="patch"></div><img src="'+imgPATH+INFOGRAPHIC.filename+'"/></div></div>');
            $('#image').css({'padding-top': INFOGRAPHIC.sections[0].height});
            $('#image img').css({'margin-top': -INFOGRAPHIC.sections[0].height + INFOGRAPHIC.offset});
            $('#patch').css({'background-position': '0 '+INFOGRAPHIC.patchOffset+'px', 'background-image': "url('"+(imgPATH+INFOGRAPHIC.patch)+"')" });

            // Create sections
            $pageScroll.html('');
            for (var i=0; i<INFOGRAPHIC.sections.length; i++) {
                if (i === 0) { sectionHeight = INFOGRAPHIC.sections[i].height; }
                else { sectionHeight = INFOGRAPHIC.sections[i].height - INFOGRAPHIC.sections[i-1].height; }
                $main.append('<div class="section section'+i+'" style="height: '+ sectionHeight +'px"></div>');

                // Create scroll targets
                $pageScroll.append('<li class="scrollNav scrollNav_2"><a href="#scrollTo/'+i+'">'+(i+1)+'</a></li>');
            }

            var facebook_like = '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fdata.massivehealth.com%2F%23infographic%2F'+curInfographic+'&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=35&amp;appId=272119109590" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:30px; " allowTransparency="true"></iframe>';
            var pinterest = '<a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fdata.massivehealth.com%2F%23infographic%2F'+curInfographic+'&media=http%3A%2F%2Fdata.massivehealth.com%2Fimages%2F'+INFOGRAPHIC.filename+'&description='+encodeURIComponent(INFOGRAPHIC.description)+'" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>';

            // Add sharing box
            $main.append('<div class="section section'+INFOGRAPHIC.sections.length+'"><div class="share_buttons">'+pinterest+facebook_like+'</div><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/" style="position:relative;float:right;"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a>');
            $main.append('<div class="section"><a href="#infographic/'+getPrevNextInfographicName('prev')+'"><div class="bottom_button bottom_button_prev"><div class="prev_button"></div></div></a> <a href="#infographic/'+getPrevNextInfographicName('next')+'"><div class="bottom_button bottom_button_next"><div class="next_button"></div></div></a></div>')

            $banner.show();
            $main.show();

            $.pageScroll({
                target: $('.section0'),
                pushState: false
            });

        });
    }

    function createPage(aPage) {

        var _template = _.template($('#'+aPage+'-page').html());

        lastInfographic = curInfographic;
        curInfographic = aPage;

        // Update nav bar
        $('.nav_'+lastInfographic).removeClass('active');
        $('.nav_'+curInfographic).addClass('active');

        $banner.fadeOut('fast').html('');
        $main.fadeOut('fast', function() {
            $wrapper.html('')
                    .append(_template);

            if(aPage === 'intro') {
                //createMap();
            }

            $banner.fadeIn();
            $main.fadeIn();
        });

    };

    /*  AVAILABLE OPTIONS:
     *  currentSection              starting position
     *  sectionClass                class of each section
     *  navigationClass             navigation element class
     *  scrollOffset                offset target area from top of section
     *  animationSpeed              change duration of animation in miliseconds
     *  animationBefore             callback: assign a function before animation
     *  animationComplete           callback: assign a function after animation
     *  onChange                    callback: assign a function for when section changes
    */

    window.app.createInfographicPage = createInfographicPage;

    ////////////////////////////////////////////////////////////////////////////////////
    // Setup page
    //
    //

    // Start router
    var App = Backbone.Router.extend({

    routes: {
        '':                     'home',
        'about':                'about',
        'infographic/:name':    'infographic',
        'scroll/:direction':    'scroll',
        'scrollTo/:sectionNum': 'scrollTo'
    },
    home: function() {
        //app.navigate('/infographic/where', {trigger: true});
        createPage('intro');
    },
    about: function() {
        createPage('about');
    },
    infographic: function(name) {
        //app.navigate('/#infographic/'+name, {trigger: true});
        if (name === 'friends') {
            name = 'who';
            app.navigate('infographic/who', {trigger: false, replace: true});
        }
        createInfographicPage(name);
    },
    scroll: function(direction) {
        if (direction === 'up') {
            var newSection = Math.max(0, currentSection - 1);
        }
        else if (direction === 'down') {
            var newSection = Math.min(INFOGRAPHIC.sections.length, currentSection + 1)
        }
        $.pageScroll({
            target: $('.section' + newSection),
            pushState: false
        });
        app.navigate('infographic/'+curInfographic, {trigger: false, replace: true});
    },
    scrollTo: function(sectionNum) {
        app.navigate('infographic/'+curInfographic, {trigger: false, replace: true});
        $.pageScroll({
            target: $('.section' + sectionNum),
            pushState: false
        });
    }



    });

    // Backbone routing shim courtesy of Backbone Boilerplate
    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router.  If the link has a data-bypass
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass]), a:not[.next]", function(evt) {
        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";

        // Ensure the protocol is not part of URL, meaning its relative.
        if (href && href.slice(0, protocol.length) !== protocol &&
            href.indexOf("javascript:") !== 0) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events.  The Router's internal `navigate` method
            // calls this anyways.
            Backbone.history.navigate(href, true);
        }
    });

    window.app = new App();
    Backbone.history.start();


    ////////////////////////////////////////////////////////////////////////////////////
    // Listen for scrolling events
    //
    //

    $(window).scroll(function(e) {
        var scrollY = e.currentTarget.scrollY;
        var getSection = function () {
            for (var i=0; i<INFOGRAPHIC.sections.length; i++) {
                if (scrollY <= INFOGRAPHIC.sections[i].height - 40) {
                    return i;
                }
            }
        };
    });


    ////////////////////////////////////////////////////////////////////////////////////
    // Parallax
    //
    //
    var prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];
    var hour = 0;
    $(window).mousemove(function(e) {
        if (window.scrollY < 1000) {
            var newValue = (window.innerWidth/2 - e.pageX) / window.innerWidth;
            transformA = {};
            transformB = {};
            transformC = {};

            for (var i=0; i<prefixes.length; i++) {
                transformA[prefixes[i]+'transform'] = 'translate3d('+ Math.floor(newValue * 5) +'px, 0px, 0px)';
                transformB[prefixes[i]+'transform'] = 'translate3d('+ Math.floor(newValue * 20) +'px, 0px, 0px)';
                transformC[prefixes[i]+'transform'] = 'translate3d('+ Math.floor(newValue * 50) +'px, 0px, 0px)';
            }
            $('.parallaxA').css(transformA);
            $('.parallaxB').css(transformB);
            $('.parallaxC').css(transformC);
        }
        if (e.pageY < 820) {
            var newValue = 3*((1 - (e.pageX / window.innerWidth)))%1;
            var newHour = Math.floor(newValue * 24);

            var timeZoneOffset = -8; //London to San Francisco
            var desiredStartTime = 4;

            var timeOffset = timeZoneOffset - desiredStartTime;
            var adjustedHour = newHour + timeOffset;
            if (adjustedHour > 23) { adjustedHour = adjustedHour - 24; }
            if (adjustedHour < 0) { adjustedHour = 24 + adjustedHour; }

            var timeZoneHour = adjustedHour + timeZoneOffset;
            if (timeZoneHour > 23) { timeZoneHour = timeZoneHour - 24; }
            if (timeZoneHour < 0) { timeZoneHour = 24 + timeZoneHour; }

            if (hour !== adjustedHour) {
                $('#map_overlay_hour_'+adjustedHour).show();
                $('#map_overlay_hour_'+hour).hide();
                hour = adjustedHour;
                $('.intro_time_output').text(timeZoneHour + ':00');
            }
            $('#map_overlay_darkness').css({'background-position': ((newValue+(timeOffset/24)) * -800) + 'px -20px' });
        }
        // $('#map_overlay_hour_'+hour).css({'-webkit-transform': 'translate3d('+((newValue+(-12/24)) * 1320)+'px,0,0)' });
        //document.getElementById('map_overlay_darkness').style.webkitTransform = 'translate3d('+((newValue+(-12/24)) * 1320)+'px,0,0)';

    });
});