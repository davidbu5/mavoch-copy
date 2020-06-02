var app = angular.module('Site', ['ngRoute', 'ngAnimate', 'ngAria']);
app.value('lng', { id: 1 });
app.factory('language', function (lng) {

    var factory = {};

    factory.setLng = function (i) {
        lng.id = i;
    }
    factory.baseRoute = function () {
        return 'Pages/' + (lng.id == 1 ? 'he' : 'en') + '/';
    }

    return factory;
});
app.factory('lngStr', function (lng) {

    var factory = {};

    var strings = {
        thumb: [
            "אנחנו נמצאים גם ב:",
            "Find us also in:"
        ],
        title: [
            "מבוך בעמק - אם לא תיכנס, איך תצא?",
            "Mavoch Baemek - A Maze In The Valley"
        ],
        bottom: [
            "© כל הזכויות שמורות למבוך בעמק",
            "© Copyright 'Mavoch Baemek'"
        ],
        name: [
            "מבוך בעמק",
            "Mavoch Baemek"
        ],
        parking: [
            "חניה",
            "Parking"
        ],
        help: [
            "Shortcut to change language - l.\n" +
            "רשימת קיצורי המקשים:\n" +
            "לתוכן הדף - p,\n" +
            "לתפריט הניווט - n,\n" +
            "לתפריט הדף ולמקשי השפות - l.\n" +
            "ייתכן ובדף בו תהיו ימצאו טלפונים או כתובת דואל אלקטרוני. תוכלו להגיע אליהם על ידי המקשים:\n" +
            "טלפונים - c ו- h,\n" +
            "מייל - m.\n",
            //"קיצור דרך לשינוי השפה - l.\n" +
            "Keyboard shortcuts:\n" +
            "To Page content - p,\n" +
            "To Navigation menu - n,\n" +
            "To Page bottom and languages menu - l.\n" +
            "A page may contain phone numbers and email address. You can reach them by the shortcuts:\n" +
            "To Phone numbers - c and- h,\n" +
            "To Email address - m.\n"
        ],
        alpagecontent: "תוכן הדף.=Page's content.",
        allogo: "הלוגו של מבוך בעמק.=Mavoch Baemek's logo.",
        albottomlang: "תפריט הדף ומקשי השפות.=Page bottom and languages menu.",
        alpic: "לחצו על מנת להגדיל את התמונה.=To expand the picture, click here.",

        alnavigationmenu: "תפריט הניווט.=Navigation menu.",
        almainheader: "כותרת ראשית.=Main header.",

        alimageviewer: "נכנסת למראה התמונה, אשר מרחיב את התמונה. אנא הקפד לסגור אותו לפני שתמשיך. תוכל לעשות זאת על ידי לחיצה על כפתור האסקייפ (Escape) או על ידי כפתור היציאה.=You have entered the image viewer. Please be careful to close this before continue surfing. You can close this by pressing the Escape button or by clicking the exit button.",
        alnextpic: "לחץ למעבר לתמונה הבאה.=To move to the next picture, click here.",
        alprevpic: "לחץ למעבר לתמונה הקודמת.=To move to the previous picture, click here.",
        alexitpic: "ליציאה ממראה התמונה לחץ כאן.=To close the image viewer, click here.",

        alfacebook: "קישור לדף הפייסבוק שלנו.=A link to our Facebook page.",
        alfacebookpic: "הלוגו של פייסבוק.=Facebook's logo.",
        alyoutube: "קישור לערוץ היויטיוב שלנו.=A link to our Youtube channel.",
        alyoutubepic: "הלוגו של יוטיוב.=Youtube's logo."
    };

    factory.g = function (param, a) {
        if (! a)
            return (strings[param][lng.id - 1]);
        return (strings[param].split('=')[lng.id - 1]);
    }

    return factory;
});
app.controller('siteController', function ($scope, $location, lng, language, lngStr) {


    $scope.language = lng;

    $scope.setA = function () {
        $scope.alpagecontent = lngStr.g('alpagecontent', true);
        $scope.allogo = lngStr.g('allogo', true);
        $scope.albottomlang = lngStr.g('albottomlang', true);
        $scope.alfacebook = lngStr.g('alfacebook', true);
        $scope.alfacebookpic = lngStr.g('alfacebookpic', true);
        $scope.alyoutube = lngStr.g('alyoutube', true);
        $scope.alyoutubepic = lngStr.g('alyoutubepic', true);
        $scope.alnavigationmenu = lngStr.g('alnavigationmenu', true);
        $scope.almainheader = lngStr.g('almainheader', true);


        $scope.help = lngStr.g('help');


    }

    $scope.options = [[
        { url: "Home", caption: "עמוד הבית" },
        { url: "News", caption: "חדשות", icon: "exclamation-circle", iconalt: "סימן קריאה" },
        { url: "Gallery", caption: "גלריית תמונות" },
        { url: "AirPictures", caption: "תמונות אוויר" },
        { url: "Camping", caption: "לינת לילה" },
        { url: "Price", caption: "מחירון לקבוצות" },
        { url: "Map", caption: "מפה ודרכי הגעה" },
        { url: "About", caption: "עוד אודותינו" },
        { url: "Contact", caption: "צור קשר", icon: "phone", iconalt: "סמל של טלפון" }
    ], [
        { url: "Home", caption: "Home" },
        { url: "Gallery", caption: "Gallery" },
        { url: "AirPictures", caption: "Air Pictures" },
        //{ url:"Camping", caption: "Camping" },
        //{ url:"Price", caption: "Price List" },
        { url: "Map", caption: "Directions" },
        { url: "About", caption: "About Us" },
        { url: "Contact", caption: "Contact", icon: "phone", iconalt: "A telephone icon" }
    ]];

    $scope.lngSets = lngStr;

    $scope.thumbText = lngStr.g('thumb');
    $scope.title = lngStr.g('title');
    $scope.bottom = lngStr.g('bottom');
    $scope.setA();

    $scope.isActivated = function (path) {
        var newPath = "/" + path;
        if ($location.path().substr(0, newPath.length) == newPath) {
            return 'selected';
        }
        return;
    }

    $scope.lng = function (lngId) {
        if (lng.id != lngId) {
            language.setLng(lngId);
            $location.url('');
            $scope.thumbText = lngStr.g('thumb');
            $scope.title = lngStr.g('title');
            $scope.bottom = lngStr.g('bottom');
            $scope.help = lngStr.g('help');
            $scope.setA();
            $('.content-container').toggleClass('float-right');
            $('.logo-pic').toggleClass('float-right');
            $('.header-title').toggleClass('title-left');
            $('body').toggleClass('dir-ltr');
            $('.option').toggleClass('paddingl-5');
            $('.content').toggleClass('ltr');
            $('.fa').remove();
        }
    }
});
app.controller('mapController', function ($scope, lngStr, lng) {
    var mazePlace = new google.maps.LatLng(32.6954664010675, 35.1340788602829);

    var mapProp = {
        center: mazePlace,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    $scope.center = mazePlace;

    var map = new google.maps.Map(document.getElementById('map'), mapProp);

    var mazeMarker = new google.maps.Marker({
        position: mazePlace
    });

    mazeMarker.setMap(map);

    var info = new google.maps.InfoWindow({
        content: lngStr.g('name')
    });

    info.open(map, mazeMarker)

    var path1 = [
        new google.maps.LatLng(32.69432423919802, 35.131187438964844),
        new google.maps.LatLng(32.695516059947714, 35.13204574584961),
        new google.maps.LatLng(32.70089711307906, 35.135414600372314),
        new google.maps.LatLng(32.70093322643361, 35.13801097869873),
        new google.maps.LatLng(32.69947062388495, 35.13953447341919),
        new google.maps.LatLng(32.693914547140196, 35.13536900281906),
        new google.maps.LatLng(32.69504655670348, 35.133172273635864),
        mazePlace
    ]

    var polyline1 = new google.maps.Polyline({
        path: path1,
        strokeColor: "#0000FF",
        strokeWeight: 2
    })

    polyline1.setMap(map);

    var path2 = [
        new google.maps.LatLng(32.70310000096421, 35.135436058044434),
        new google.maps.LatLng(32.70089711307906, 35.135414600372314),
        new google.maps.LatLng(32.70093322643361, 35.13801097869873),
        new google.maps.LatLng(32.69947062388495, 35.13953447341919),
        new google.maps.LatLng(32.693914547140196, 35.13536900281906),
        new google.maps.LatLng(32.69504655670348, 35.133172273635864),
        mazePlace
    ]

    var polyline2 = new google.maps.Polyline({
        path: path2,
        strokeColor: "#00FF00",
        strokeWeight: 2
    })

    polyline2.setMap(map);

    var area = [
        new google.maps.LatLng(32.69548897328922, 35.13384282588959),
        new google.maps.LatLng(32.695660521987584, 35.1334673166275),
        new google.maps.LatLng(32.69515490382517, 35.13306498527527),
        new google.maps.LatLng(32.69506461456621, 35.13335466384888),
        new google.maps.LatLng(32.69519101950318, 35.13345122337341),
        new google.maps.LatLng(32.69516844720614, 35.13350486755371),
        new google.maps.LatLng(32.69548897328922, 35.13384282588959)
    ]

    var parkingPolygon = new google.maps.Polygon({
        strokeWeight: 1,
        path: area,
        fillColor: "#8c8c8c",
        opacity: 0.4
    })

    parkingPolygon.setMap(map);

    var parkingInfo = new google.maps.InfoWindow({
        content: lngStr.g('parking')
    });

    parkingInfo.setPosition(new google.maps.LatLng(32.695371597674054, 35.13351559638977)
    );
    parkingInfo.open(map);

    $scope.map = map;
});
app.controller('galleryController', function ($scope, $compile, lngStr, lng) {
    $scope.images = [[
        { src: "images/gallery/1.jpg", alt: "תמונה של אזור פינת הישיבה המוצלת.=Picture of the area of the shaded seating area." },
        { src: "images/gallery/2.JPG", alt: "תמונה של אוהלים ברחבת הדשא - קמפינג (לינת לילה).=Picture of tents in the lawn - camping." },
        { src: "images/gallery/3.jpg", alt: "תמונה של אזור פינת הישיבה המוצלת.=Picture of the area of the shaded seating area." },
        { src: "images/gallery/4.jpg", alt: "תמונה של מבוך התירס הישן מלמעלה.=Picture of the old corn maze from above." },
        { src: "images/gallery/5.jpg", alt: "תמונה של מבוך השיחים הישן מלמעלה.=Picture of the old bushes maze from above." },
        { src: "images/gallery/6.JPG", alt: "תמונה של מבוך השיחים מלמעלה.=Picture of the bushes maze from above." }
    ], [
        { src: "images/air-gallery/1.JPG", alt: "תמונה של מבוך התירס הישן מלמעלה.=Picture of the old corn maze from above." },
        { src: "images/air-gallery/2.JPG", alt: "תמונה של מבוכי התירס והבדים הישנים מלמעלה.=Picture of the old corn and clothes mazes from above." },
        { src: "images/air-gallery/3.JPG", alt: "תמונה של מבוכי השיחים והחבלים מלמעלה.=Picture of the bushes and ropes mazes from above." },
        { src: "images/air-gallery/6.JPG", alt: "תמונה של מבוך השיחים מלמעלה.=Picture of the bushes maze from above." },
        { src: "images/air-gallery/7.JPG", alt: "תמונה של מבוך השיחים מלמעלה.=Picture of the bushes maze from above." },
        { src: "images/air-gallery/5.JPG", alt: "תמונה של מבוך החיטה מלמעלה.=Picture of the wheat maze from above." },
        { src: "images/air-gallery/4.JPG", alt: "תמונה של מבוך השיחים מלמעלה.=Picture of the bushes maze from above." }
    ]
    ];

    $scope.getAlt = function (set, index) {
        return $scope.images[set][index].alt.split("=")[lng.id - 1];
    }
    $scope.alpic = lngStr.g('alpic', true);
    $scope.alimageviewer = lngStr.g('alimageviewer', true);
    $scope.alnextpic = lngStr.g('alnextpic', true);
    $scope.alprevpic = lngStr.g('alprevpic', true);
    $scope.alexitpic = lngStr.g('alexitpic', true);

    $scope.expand = function (set, index) {
        //var cover = $('<div class="cover-popup-container"></div>');
        //cover.append($('<div class="exit-button no-select link-cursor" onclick="$(this).parent().prev().remove();$(this).parent().remove()">X</div>'));
        //cover.append($('<img src="' + src + '" class="gallery-pic-expand">'));
        //$('body').append($('<div class="cover-popup"></div>'));
        //$('body').append(cover);

        var cover = $compile('<image-display index="' + index + '" set="' + set + '"></image-display>')($scope);

        $('body').append($('<div class="cover-popup"></div>'));
        $('body').append(cover);
    };
    $scope.nextPic = function () {
        $scope.index++;
        $scope.index %= $scope.images[$scope.set].length;
    }
    $scope.prevPic = function () {
        $scope.index--;
        $scope.index += $scope.images[$scope.set].length;
        $scope.index %= $scope.images[$scope.set].length;
    }
    $scope.isExpanded = function (index) {

        return $scope.index == index;
    }
});
app.config(function ($routeProvider, languageProvider) {
    function getUrl(page) {
        //if ($("div.content-view")[0]) $("div.content-view")[0].focus();
        return languageProvider.$get().baseRoute() + page + '.html';
    }

    $routeProvider.when('/',
        {
            templateUrl: function () { return getUrl("home") },
            redirectTo: '/Home'
        })
        .when('/Home',
            { templateUrl: function () { return getUrl("home") } })
        .when('/Contact',
            { templateUrl: function () { return getUrl("contact") } })
        .when('/Camping',
            { templateUrl: function () { return getUrl("camping") } })
        .when('/About',
            { templateUrl: function () { return getUrl("about") } })
        .when('/Price',
            { templateUrl: function () { return getUrl("price") } })
        .when('/Gallery',
            { templateUrl: function () { return getUrl("gallery") } })
        .when('/AirPictures',
            { templateUrl: function () { return getUrl("air-gallery") } })
        .when('/Map',
            { templateUrl: function () { return getUrl("map") } })
        .when('/News',
            { templateUrl: function () { return getUrl("news") } })
        .otherwise({ redirectTo: '/' });

});
app.directive('gallery', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/gallery.html",
        controller: 'galleryController',
        scope: { 'set': '@' }
    }
});
app.directive('mmap', function ($window) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/map.html",
        controller: "mapController",
        link: function (scope) {
            angular.element($window).bind('resize', function () {
                scope.map.setCenter(scope.center);
            })
        }
    }
});
app.directive('bottomText', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/bottom-text.html"
    }
});
app.directive('contactFooter', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/contact-footer.html",
        scope: {
            cellular: '=',
            phone: "=",
            email: "=",
            header: "@"
        }
    }
});
app.directive('enContactFooter', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/en-contact-footer.html",
        scope: {
            cellular: '=',
            phone: "=",
            email: "=",
            header: "@"
        }
    }
});
app.directive('imageDisplay', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/image-display.html",
        controller: 'galleryController',
        scope: {
            set: "=",
            index: "="
        },
        link: function () {
            $("#prevPicButton")[0].focus();
            $("#exitImageDisplayButton")[0].addEventListener('click', function () {
                
            })
            // Handeling lost of focus from all of the image-display directive components
            //function focusLostManagment() {
            //    if (!$("#prevPicButton").is(':focus') &&
            //        !$("#nextPicButton").is(':focus') &&
            //        !$("#exitImageDisplayButton").is(':focus') &&
            //        !$("#expandedPictureElement").is(':focus')) {
            //
            //        $("#exitImageDisplayButton").click();
            //        $('div.content-view').focus();
            //        $('div.content-container').scrollTop(0);
            //    }
            //}

            // Managing focuses te be only for the image viewer

            //$("#prevPicButton").on('blur', function () {
            //    $("#nextPicButton").focus();
            //});
            //
            //$("#nextPicButton").on('blur', function () {
            //    $("#exitImageDisplayButton").focus();
            //});
            //
            //$("#exitImageDisplayButton").on('blur', function () {
            //    $("#prevPicButton").focus();
            //});

        }
    }
});
app.directive('sideBar', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/side-bar.html"
    }
});
app.directive('thumbnails', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/thumbnails.html"
    }
});
app.directive('enterAndFocus', function () {
    return {
        restrict: 'A',
        link: function ($scope, elem) {
                //elem.on('animationend', function (e) {
                //    if ($scope.enetered == undefined) {
                //        elem[0].focus(); $scope.enetered = true
                //    }
                //})
                //elem.on('webkitAnimationEnd', function (e) {
                //    if ($scope.enetered == undefined) {
                //        elem[0].focus(); $scope.enetered = true
                //    }
                //})

            $scope.$watch(function() {return elem.attr('class')}, function(newValue) {
                if ($scope.enetered == undefined && !elem.hasClass('ng-enter')) {
                    
                    //$('div.content')[0].scrollIntoView(true);
                    elem[0].focus();
                    $scope.enetered = true
                    $('div.content-container').scrollTop(0) 
            
                }
            })
            }

    }
});