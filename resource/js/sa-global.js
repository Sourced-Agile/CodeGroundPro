var global_var = {
    us_is_not_4_generation: true,
    current_issue_id: "",
    current_issue_is_hide: "1",
    projectToggleWithSync: true,
    is_select_from_db_modal_clicked: false,
    active_input_desc_type: "IN",
    current_doc_id: "",
    component_table_default_row_count: 3,
    input_insert_orderno: '',
    input_insert_cellno: '',
    "input_general_content_tab": '',
    "task_mgmt_group_by_filled_list": {},
    "task_mgmt_group_by": "none",
    "story_card_sprint_assign_checked": 0,
    "story_card_sprint_assign_id": "",
    "story_card_sprint_assign_name": "",
    "story_card_label_assign_checked": 0,
    "story_card_label_assign_id": "",
    "story_card_label_assign_name": "",
    "current_modal": "loadDashboard",
    "owesomefont": ['fa-500px', 'fa-address-book', 'fa-address-book-o', 'fa-address-card', 'fa-address-card-o', 'fa-adjust', 'fa-adn', 'fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-amazon', 'fa-ambulance', 'fa-american-sign-language-interpreting', 'fa-anchor', 'fa-android', 'fa-angellist', 'fa-angle-double-down', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-apple', 'fa-archive', 'fa-area-chart', 'fa-arrow-circle-down', 'fa-arrow-circle-left', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-left', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-up', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-down', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrows', 'fa-arrows-alt', 'fa-arrows-h', 'fa-arrows-v', 'fa-asl-interpreting', 'fa-assistive-listening-systems', 'fa-asterisk', 'fa-at', 'fa-audio-description', 'fa-automobile', 'fa-backward', 'fa-balance-scale', 'fa-ban', 'fa-bandcamp', 'fa-bank', 'fa-bar-chart', 'fa-bar-chart-o', 'fa-barcode', 'fa-bars', 'fa-bath', 'fa-bathtub', 'fa-battery', 'fa-battery-0', 'fa-battery-1', 'fa-battery-2', 'fa-battery-3', 'fa-battery-4', 'fa-battery-empty', 'fa-battery-full', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-three-quarters', 'fa-bed', 'fa-beer', 'fa-behance', 'fa-behance-square', 'fa-bell', 'fa-bell-o', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-bicycle', 'fa-binoculars', 'fa-birthday-cake', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-bitcoin', 'fa-black-tie', 'fa-blind', 'fa-bluetooth', 'fa-bold', 'fa-bolt', 'fa-bomb', 'fa-book', 'fa-bookmark', 'fa-bookmark-o', 'fa-braille', 'fa-briefcase', 'fa-btc', 'fa-bug', 'fa-building', 'fa-building-o', 'fa-bullhorn', 'fa-bullseye', 'fa-bus', 'fa-buysellads', 'fa-cab', 'fa-calculator', 'fa-calendar', 'fa-calendar-check-o', 'fa-calendar-minus-o', 'fa-calendar-o', 'fa-calendar-plus-o', 'fa-calendar-times-o', 'fa-camera', 'fa-camera-retro', 'fa-car', 'fa-caret-down', 'fa-caret-left', 'fa-caret-right', 'fa-caret-square-o-down', 'fa-caret-square-o-left', 'fa-caret-square-o-right', 'fa-caret-square-o-up', 'fa-caret-up', 'fa-cart-arrow-down', 'fa-cart-plus', 'fa-cc', 'fa-cc-amex', 'fa-cc-diners-club', 'fa-cc-discover', 'fa-cc-jcb', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-cc-visa', 'fa-certificate', 'fa-chain', 'fa-chain-broken', 'fa-check', 'fa-check-circle', 'fa-check-circle-o', 'fa-check-square', 'fa-check-square-o', 'fa-chevron-circle-down', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-down', 'fa-chevron-left', 'fa-chevron-right', 'fa-chevron-up', 'fa-child', 'fa-chrome', 'fa-circle', 'fa-circle-o', 'fa-circle-o-notch', 'fa-circle-thin', 'fa-clipboard', 'fa-clock-o', 'fa-clone', 'fa-close', 'fa-cloud', 'fa-cloud-download', 'fa-cloud-upload', 'fa-cny', 'fa-code', 'fa-code-fork', 'fa-codepen', 'fa-codiepie', 'fa-coffee', 'fa-cog', 'fa-cogs', 'fa-columns', 'fa-comment', 'fa-comment-o', 'fa-commenting', 'fa-commenting-o', 'fa-comments', 'fa-comments-o', 'fa-compass', 'fa-compress', 'fa-connectdevelop', 'fa-contao', 'fa-copy', 'fa-copyright', 'fa-creative-commons', 'fa-credit-card', 'fa-credit-card-alt', 'fa-crop', 'fa-crosshairs', 'fa-css3', 'fa-cube', 'fa-cubes', 'fa-cut', 'fa-cutlery', 'fa-dashboard', 'fa-dashcube', 'fa-database', 'fa-deaf', 'fa-deafness', 'fa-dedent', 'fa-delicious', 'fa-desktop', 'fa-deviantart', 'fa-diamond', 'fa-digg', 'fa-dollar', 'fa-dot-circle-o', 'fa-download', 'fa-dribbble', 'fa-drivers-license', 'fa-drivers-license-o', 'fa-dropbox', 'fa-drupal', 'fa-edge', 'fa-edit', 'fa-eercast', 'fa-eject', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-empire', 'fa-envelope', 'fa-envelope-o', 'fa-envelope-open', 'fa-envelope-open-o', 'fa-envelope-square', 'fa-envira', 'fa-eraser', 'fa-etsy', 'fa-eur', 'fa-euro', 'fa-exchange', 'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-expand', 'fa-expeditedssl', 'fa-external-link', 'fa-external-link-square', 'fa-eye', 'fa-eye-slash', 'fa-eyedropper', 'fa-fa', 'fa-facebook', 'fa-facebook-f', 'fa-facebook-official', 'fa-facebook-square', 'fa-fast-backward', 'fa-fast-forward', 'fa-fax', 'fa-feed', 'fa-female', 'fa-fighter-jet', 'fa-file', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-code-o', 'fa-file-excel-o', 'fa-file-image-o', 'fa-file-movie-o', 'fa-file-o', 'fa-file-pdf-o', 'fa-file-photo-o', 'fa-file-picture-o', 'fa-file-powerpoint-o', 'fa-file-sound-o', 'fa-file-text', 'fa-file-text-o', 'fa-file-video-o', 'fa-file-word-o', 'fa-file-zip-o', 'fa-files-o', 'fa-film', 'fa-filter', 'fa-fire', 'fa-fire-extinguisher', 'fa-firefox', 'fa-first-order', 'fa-flag', 'fa-flag-checkered', 'fa-flag-o', 'fa-flash', 'fa-flask', 'fa-flickr', 'fa-floppy-o', 'fa-folder', 'fa-folder-o', 'fa-folder-open', 'fa-folder-open-o', 'fa-font', 'fa-font-awesome', 'fa-fonticons', 'fa-fort-awesome', 'fa-forumbee', 'fa-forward', 'fa-foursquare', 'fa-free-code-camp', 'fa-frown-o', 'fa-futbol-o', 'fa-gamepad', 'fa-gavel', 'fa-gbp', 'fa-ge', 'fa-gear', 'fa-gears', 'fa-genderless', 'fa-get-pocket', 'fa-gg', 'fa-gg-circle', 'fa-gift', 'fa-git', 'fa-git-square', 'fa-github', 'fa-github-alt', 'fa-github-square', 'fa-gitlab', 'fa-gittip', 'fa-glass', 'fa-glide', 'fa-glide-g', 'fa-globe', 'fa-google', 'fa-google-plus', 'fa-google-plus-circle', 'fa-google-plus-official', 'fa-google-plus-square', 'fa-google-wallet', 'fa-graduation-cap', 'fa-gratipay', 'fa-grav', 'fa-group', 'fa-h-square', 'fa-hacker-news', 'fa-hand-grab-o', 'fa-hand-lizard-o', 'fa-hand-o-down', 'fa-hand-o-left', 'fa-hand-o-right', 'fa-hand-o-up', 'fa-hand-paper-o', 'fa-hand-peace-o', 'fa-hand-pointer-o', 'fa-hand-rock-o', 'fa-hand-scissors-o', 'fa-hand-spock-o', 'fa-hand-stop-o', 'fa-handshake-o', 'fa-hard-of-hearing', 'fa-hashtag', 'fa-hdd-o', 'fa-header', 'fa-headphones', 'fa-heart', 'fa-heart-o', 'fa-heartbeat', 'fa-history', 'fa-home', 'fa-hospital-o', 'fa-hotel', 'fa-hourglass', 'fa-hourglass-1', 'fa-hourglass-2', 'fa-hourglass-3', 'fa-hourglass-end', 'fa-hourglass-half', 'fa-hourglass-o', 'fa-hourglass-start', 'fa-houzz', 'fa-html5', 'fa-i-cursor', 'fa-id-badge', 'fa-id-card', 'fa-id-card-o', 'fa-ils', 'fa-image', 'fa-imdb', 'fa-inbox', 'fa-indent', 'fa-industry', 'fa-info', 'fa-info-circle', 'fa-inr', 'fa-instagram', 'fa-institution', 'fa-internet-explorer', 'fa-intersex', 'fa-ioxhost', 'fa-italic', 'fa-joomla', 'fa-jpy', 'fa-jsfiddle', 'fa-key', 'fa-keyboard-o', 'fa-krw', 'fa-language', 'fa-laptop', 'fa-lastfm', 'fa-lastfm-square', 'fa-leaf', 'fa-leanpub', 'fa-legal', 'fa-lemon-o', 'fa-level-down', 'fa-level-up', 'fa-life-bouy', 'fa-life-buoy', 'fa-life-ring', 'fa-life-saver', 'fa-lightbulb-o', 'fa-line-chart', 'fa-link', 'fa-linkedin', 'fa-linkedin-square', 'fa-linode', 'fa-linux', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-location-arrow', 'fa-lock', 'fa-long-arrow-down', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-long-arrow-up', 'fa-low-vision', 'fa-magic', 'fa-magnet', 'fa-mail-forward', 'fa-mail-reply', 'fa-mail-reply-all', 'fa-male', 'fa-map', 'fa-map-marker', 'fa-map-o', 'fa-map-pin', 'fa-map-signs', 'fa-mars', 'fa-mars-double', 'fa-mars-stroke', 'fa-mars-stroke-h', 'fa-mars-stroke-v', 'fa-maxcdn', 'fa-meanpath', 'fa-medium', 'fa-medkit', 'fa-meetup', 'fa-meh-o', 'fa-mercury', 'fa-microchip', 'fa-microphone', 'fa-microphone-slash', 'fa-minus', 'fa-minus-circle', 'fa-minus-square', 'fa-minus-square-o', 'fa-mixcloud', 'fa-mobile', 'fa-mobile-phone', 'fa-modx', 'fa-money', 'fa-moon-o', 'fa-mortar-board', 'fa-motorcycle', 'fa-mouse-pointer', 'fa-music', 'fa-navicon', 'fa-neuter', 'fa-newspaper-o', 'fa-object-group', 'fa-object-ungroup', 'fa-odnoklassniki', 'fa-odnoklassniki-square', 'fa-opencart', 'fa-openid', 'fa-opera', 'fa-optin-monster', 'fa-outdent', 'fa-pagelines', 'fa-paint-brush', 'fa-paper-plane', 'fa-paper-plane-o', 'fa-paperclip', 'fa-paragraph', 'fa-paste', 'fa-pause', 'fa-pause-circle', 'fa-pause-circle-o', 'fa-paw', 'fa-paypal', 'fa-pencil', 'fa-pencil-square', 'fa-pencil-square-o', 'fa-percent', 'fa-phone', 'fa-phone-square', 'fa-photo', 'fa-picture-o', 'fa-pie-chart', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-pied-piper-pp', 'fa-pinterest', 'fa-pinterest-p', 'fa-pinterest-square', 'fa-plane', 'fa-play', 'fa-play-circle', 'fa-play-circle-o', 'fa-plug', 'fa-plus', 'fa-plus-circle', 'fa-plus-square', 'fa-plus-square-o', 'fa-podcast', 'fa-power-off', 'fa-print', 'fa-product-hunt', 'fa-puzzle-piece', 'fa-qq', 'fa-qrcode', 'fa-question', 'fa-question-circle', 'fa-question-circle-o', 'fa-quora', 'fa-quote-left', 'fa-quote-right', 'fa-ra', 'fa-random', 'fa-ravelry', 'fa-rebel', 'fa-recycle', 'fa-reddit', 'fa-reddit-alien', 'fa-reddit-square', 'fa-refresh', 'fa-registered', 'fa-remove', 'fa-renren', 'fa-reorder', 'fa-repeat', 'fa-reply', 'fa-reply-all', 'fa-resistance', 'fa-retweet', 'fa-rmb', 'fa-road', 'fa-rocket', 'fa-rotate-left', 'fa-rotate-right', 'fa-rouble', 'fa-rss', 'fa-rss-square', 'fa-rub', 'fa-ruble', 'fa-rupee', 'fa-s15', 'fa-safari', 'fa-save', 'fa-scissors', 'fa-scribd', 'fa-search', 'fa-search-minus', 'fa-search-plus', 'fa-sellsy', 'fa-send', 'fa-send-o', 'fa-server', 'fa-share', 'fa-share-alt', 'fa-share-alt-square', 'fa-share-square', 'fa-share-square-o', 'fa-shekel', 'fa-sheqel', 'fa-shield', 'fa-ship', 'fa-shirtsinbulk', 'fa-shopping-bag', 'fa-shopping-basket', 'fa-shopping-cart', 'fa-shower', 'fa-sign-in', 'fa-sign-language', 'fa-sign-out', 'fa-signal', 'fa-signing', 'fa-simplybuilt', 'fa-sitemap', 'fa-skyatlas', 'fa-skype', 'fa-slack', 'fa-sliders', 'fa-slideshare', 'fa-smile-o', 'fa-snapchat', 'fa-snapchat-ghost', 'fa-snapchat-square', 'fa-snowflake-o', 'fa-soccer-ball-o', 'fa-sort', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-asc', 'fa-sort-desc', 'fa-sort-down', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-sort-up', 'fa-soundcloud', 'fa-space-shuttle', 'fa-spinner', 'fa-spoon', 'fa-spotify', 'fa-square', 'fa-square-o', 'fa-stack-exchange', 'fa-stack-overflow', 'fa-star', 'fa-star-half', 'fa-star-half-empty', 'fa-star-half-full', 'fa-star-half-o', 'fa-star-o', 'fa-steam', 'fa-steam-square', 'fa-step-backward', 'fa-step-forward', 'fa-stethoscope', 'fa-sticky-note', 'fa-sticky-note-o', 'fa-stop', 'fa-stop-circle', 'fa-stop-circle-o', 'fa-street-view', 'fa-strikethrough', 'fa-stumbleupon', 'fa-stumbleupon-circle', 'fa-subscript', 'fa-subway', 'fa-suitcase', 'fa-sun-o', 'fa-superpowers', 'fa-superscript', 'fa-support', 'fa-table', 'fa-tablet', 'fa-tachometer', 'fa-tag', 'fa-tags', 'fa-tasks', 'fa-taxi', 'fa-telegram', 'fa-television', 'fa-tencent-weibo', 'fa-terminal', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-themeisle', 'fa-thermometer', 'fa-thermometer-0', 'fa-thermometer-1', 'fa-thermometer-2', 'fa-thermometer-3', 'fa-thermometer-4', 'fa-thermometer-empty', 'fa-thermometer-full', 'fa-thermometer-half', 'fa-thermometer-quarter', 'fa-thermometer-three-quarters', 'fa-thumb-tack', 'fa-thumbs-down', 'fa-thumbs-o-down', 'fa-thumbs-o-up', 'fa-thumbs-up', 'fa-ticket', 'fa-times', 'fa-times-circle', 'fa-times-circle-o', 'fa-times-rectangle', 'fa-times-rectangle-o', 'fa-tint', 'fa-toggle-down', 'fa-toggle-left', 'fa-toggle-off', 'fa-toggle-on', 'fa-toggle-right', 'fa-toggle-up', 'fa-trademark', 'fa-train', 'fa-transgender', 'fa-transgender-alt', 'fa-trash', 'fa-trash-o', 'fa-tree', 'fa-trello', 'fa-tripadvisor', 'fa-trophy', 'fa-truck', 'fa-try', 'fa-tty', 'fa-tumblr', 'fa-tumblr-square', 'fa-turkish-lira', 'fa-tv', 'fa-twitch', 'fa-twitter', 'fa-twitter-square', 'fa-umbrella', 'fa-underline', 'fa-undo', 'fa-universal-access', 'fa-university', 'fa-unlink', 'fa-unlock', 'fa-unlock-alt', 'fa-unsorted', 'fa-upload', 'fa-usb', 'fa-usd', 'fa-user', 'fa-user-circle', 'fa-user-circle-o', 'fa-user-md', 'fa-user-o', 'fa-user-plus', 'fa-user-secret', 'fa-user-times', 'fa-users', 'fa-vcard', 'fa-vcard-o', 'fa-venus', 'fa-venus-double', 'fa-venus-mars', 'fa-viacoin', 'fa-viadeo', 'fa-viadeo-square', 'fa-video-camera', 'fa-vimeo', 'fa-vimeo-square', 'fa-vine', 'fa-vk', 'fa-volume-control-phone', 'fa-volume-down', 'fa-volume-off', 'fa-volume-up', 'fa-warning', 'fa-wechat', 'fa-weibo', 'fa-weixin', 'fa-whatsapp', 'fa-wheelchair', 'fa-wheelchair-alt', 'fa-wifi', 'fa-wikipedia-w', 'fa-window-close', 'fa-window-close-o', 'fa-window-maximize', 'fa-window-minimize', 'fa-window-restore', 'fa-windows', 'fa-won', 'fa-wordpress', 'fa-wpbeginner', 'fa-wpexplorer', 'fa-wpforms', 'fa-wrench', 'fa-xing', 'fa-xing-square', 'fa-y-combinator', 'fa-y-combinator-square', 'fa-yahoo', 'fa-yc', 'fa-yc-square', 'fa-yelp', 'fa-yen', 'fa-yoast', 'fa-youtube', 'fa-youtube-play', 'fa-youtube-square'],
    "lp_isdragging": 0,
    "ipo_gui_view": "single",
    "is_body_ctrl_pressed": "0",
    "actual_zoom": 100,
    "doc_actual_zoom": 100,
    "previous_backlog_id": "",
    "previous_backlog_name": "",
    "actual_backlog_gui_css": "",
    "current_nav_view": "",
    "current_project_id": "",
    "current_backlog_id": "",
    "current_backlog_name": "",
    "current_us_input_id": "",
    "current_us_task_id": "",
    "current_fn_id": "",
    "analytics_tab": "general",
    "default_us_input_component": "txt",
    "current_ipo_view": "gui",
    "IN": "%IN%",
    "current_user_type": "",
    "vertical_seperator": "|",
    "fileUploadPath": "resources/upload/",
    "fileViewerPath": "http://docs.google.com/gview?url=resources/upload/",
    "current_us_submenu": "generalview",
    "current_domain": "",
    "current_ticker_id": "",
    "ipoTable": {},
    "ipoTableVal": {},
    "data_eliminator": ".",
    "time_eliminator": ":",
    "user_story_history_filter": "",
    "user_story_history_filter_current_index": "0",
    "user_story_core_filter_current_index": "0",
    "user_story_core_filter_paging_button_pressed": "",
    "backlog_history_type_count": {},
    "image_formats": ["jpeg", "jpg", "png", "bmp", "gif"],
    "video_formats": ["mp4", "mpeg", "mkv", "webm", "avi", "mpg"],
    "canvas": {
        "testCase": "testCase",
        "taskType": "taskType",
        "comment": "comment",
        "testTrial": "testTrial",
        "backlog": "backlog",
        "storyCard": "storyCard",
    },
    "userStoryFilter": {
        "owner": "",
        "assignee": "",
        "sprint": "",
        "label": "",
        "status": "",
        "priority": "",
        "createdBy": "",
        "createdDate": "",
        "userstory": "",
        "asc": "",
        "desc": "",
        "isSourced": "",
        "isBounded": "",
        "isAPI": "",
        "isInitial": "",
        "userStoriesAssignedToMe": "",
        "taskType": "",
        "assignedLabel": "",
        "backlogStatus": "",
    },
    "analytic_filter": {
        "histogram": {
            "color": [
                "#008B8B",
                "#8B008B",
                "#9400D3",
                "#228B22",
                "red",
                "green",
                "#CD5C5C",
                "#ADD8E6",
                "#7CFC00",
                "#BA55D3",
                "#48D1CC",
                "#000080",
                "orange",
                "#FF4500",
            ]
        },
        "pivot_sprint": {},
        "pivot_group": [],
        "pivot_group_name": [],
        "pivot_cell": {},
        "filterType": "pivot",
        "res": {},
        "interval": "weekly",
        "project_list": {},
        "assignee_list": {},
        "label_list": {},
        "sprint_list": {},
        "task_type_list": {},
    },
    "current_backlog_list": {},
    "current_view": "detailed",
    "analytics_current_sort": "asc",
    "mainview": "body",
    "current_task_id_4_comment": "",
    "related_SUS_status": "A",
    "current_list_view_table_item": "assignee",
    "current_canvas": 1,
    "active_canvas": "",
    "current_upload_canvas": "",
    "temp_dp_id": "",
    "default_backlog_length": 43,
    "sourcedmatrix_filterby": 'tasktype',
}

function callApi(apiId, dataCore, isAsync, callback) {
    if (!apiId) {
        Toaster.showError('API ID is not entered');
    }

    var synch = isAsync;
    synch = (synch !== 'undefined') ? synch : true;

    var res1 = '';
    var json = initJSON();
    if (dataCore) {
        json.kv = $.extend(json.kv, dataCore);
    }
    json.kv['apiId'] = apiId;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceIoCallActionApi",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: synch,
        success: function (res) {
            AJAXCallFeedback(res);
            res1 = res;
            if (callback) {
                callback(res);
            }
        },
        error: function () {
            Toaster.showError(apiId + ' ----> Something went wrong!!!');
        }
    });
    return res1;
}

function callService(serviceName, dataCore, isAsync, callback) {
    if (!serviceName) {
        Toaster.showError('Service is not entered');
    }

    var synch = (isAsync) ? isAsync : true;

    var res1 = '';
    var json = initJSON();
    if (dataCore) {
        json.kv = $.extend(json.kv, dataCore);
    }
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/" + serviceName,
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: synch,
        success: function (res) {
            AJAXCallFeedback(res);
            res1 = res;
            if (callback) {
                callback(res);
            }
        },
        error: function () {
            Toaster.showError(serviceName + ' ----> Something went wrong!!!');
        }
    });
    return res1;
}
function AJAXCallFeedback(res) {

    var msgError = "";
    var err = res.err;
    if ((err.length) && err.length > 0) {
        //there are/is errors
        for (var i in err) {
            if (err[i].code === 'general') {
                Toaster.showError(err[i].val);

            } else if (err[i].code === 'notPermission') {
                Toaster.showError(lang_task.message.notPermission);

            } else {
                var f = false;
                $('[sa-selectedfield*="' + err[i].code + '"]').each(function () {
                    var fieldList = $(this).attr('sa-selectedfield').split(',');
                    if (fieldList.includes(err[i].code)) {
                        var id = makeId(10);


                        f = true;
                        $(this).closest('div').find('.apd-form-error-msg').remove();
                        $(this).after('<p class=\'apd-form-error-msg\' id="' + id + '">' + err[i].val + '</p>');


                        setTimeout(function () {
                            $('#' + id).remove();
                        }, 3000);


                    }
                })

                //eyni code-lu component vardir;
                if (!f) {
                    Toaster.showError(err[i].val);
                    msgError = err[i].val;
                }
            }
        }
        throw 'There is/are error(s), message:' + msgError;
    }
}
function loadProjectList2SelectboxByClass(className) {

    var cmd = $('select.' + className);
    cmd.html('');
    var f = true;
    var pid = SACore.GetProjectKeys();
    for (var n = 0; n < pid.length; n++) {
        var pname = SACore.GetProjectName(pid[n]);
        var o = $('<option></option')
            .attr('value', pid[n])
            .text(pname);
        if (f) {
            o.attr("selected", true);
            f = false;
        }
        cmd.append(o);
    }
    if (global_var.current_project_id) {
        cmd.val(global_var.current_project_id);
    } else if (global_var.current_backlog_id) {
        var fkProjectId = SACore.GetBacklogDetails(global_var.current_backlog_id, "fkProjectId");
        cmd.val(fkProjectId);
    }
    sortSelectBoxByElement(cmd);
    cmd.selectpicker('refresh');
    cmd.change();
}
var Toaster = {
    showGeneralError: function () {
        this.showError("System Error Occured!");
    },
    showError: function (msg) {
        var id = makeId(10);
        var div = $('<div>')
                .attr('id', id)
                .attr("style", "z-index: 50000; background: red!important")
                .addClass('toast ml-auto')
                .addClass('toast-error')
                .attr('role', 'alert')
                .attr('data-delay', '300')
                .attr('data-autohide', false)
                .append($('<div>')
                        .addClass('toast-header')
                        .append($('<strong>')
                                .addClass('mr-auto text-primary')
                                .append('Error Message')
                                )
                        .append($('<button>')
                                .addClass('ml-2 mb-1 close')
                                .attr('type', 'button')
                                .attr('data-dismiss', 'toast')
                                .attr('aria-label', 'Close"')
                                .append($('<span>')
                                        .attr('aria-hidden', true)
                                        .append(('x')))

                                )
                        )
                .append($('<div>')
                        .addClass('toast-body')
                        .append(msg)
                        )
                ;
        $('#body_of_toaster').prepend(div);
        // initialize and show Bootstrap 4 toast
        $('#' + id).toast('show');
        setTimeout(function () {
            $('#' + id).toast('hide');
        }, 3000);
    }
    ,
    showMessage: function (msg) {
        var id = makeId(10);
        var div = $('<div>')
                .attr('id', id)
                .attr("style", "z-index: 50000; background: #28a64fbd!important")
                .addClass('toast ml-auto')
                .addClass('toast-message')
                .attr('role', 'alert')
                .attr('data-delay', '300')
                .attr('data-autohide', false)
                .append($('<div>')
                        .addClass('toast-header')
                        .append($('<strong>')
                                .addClass('mr-auto text-primary')
                                .append('Successfull Message')
                                )
                        .append($('<button>')
                                .addClass('ml-2 mb-1 close')
                                .attr('type', 'button')
                                .attr('data-dismiss', 'toast')
                                .attr('aria-label', 'Close"')
                                .append($('<span>')
                                        .attr('aria-hidden', true)
                                        .append(('x')))

                                )
                        )
                .append($('<div>')
                        .addClass('toast-body')
                        .append(msg)
                        )
                ;
        $('#body_of_toaster').prepend(div);
        // initialize and show Bootstrap 4 toast
        $('#' + id).toast('show');
        setTimeout(function () {
            $('#' + id).toast('hide');
        }, 3000);
    }
}
var Utility = {
    convertDate: function (d, seperator) {
        var st = "";
        var sep = (seperator) ? seperator : global_var.data_eliminator;
        try {
            st = d.substring(6, 8) + sep + d.substring(4, 6) + sep + d.substring(0, 4)
        } catch (e) {
        }
        return st;
    }
    ,
    convertTime: function (d, seperator) {
        var st = "";
        var sep = (seperator) ? seperator : global_var.time_eliminator;
        try {
            st = d.substring(0, 2) + sep + d.substring(2, 4) 
        } catch (e) {
        }
        return st;
    },
    convertDTpicker: function (d, seperator,type) {
        var st = "";
        var sep = (seperator) ? seperator : global_var.data_eliminator;
        try {
            if(type&&type==='mm/dd/yy'){
                st = d.substring(4, 6) + sep +  d.substring(6, 8) + sep +d.substring(0, 4) 

            }
            else{
                st = d.substring(0, 4) + sep + d.substring(4, 6) + sep + d.substring(6, 8)

            }

        } catch (e) {
        }
        return st;
    },
    convertTMpicker: function (d, seperator) {
        var st = "";
        var sep = (seperator) ? seperator : global_var.time_eliminator;
        try {
            st = d.substring(0, 2) + sep + d.substring(2, 4);
        } catch (e) {
        }
        return st;
    },
    focus: function (id) {
        setTimeout(function () {
            $('#' + id).focus();
        }, 600);
    },
    addParamToUrl: function (param, value) {
        var newurl = Utility.replaceUrlParam(document.location.href, param, value);
        window.history.pushState({path: newurl}, '', newurl);
    },
    replaceUrlParam: function (url, paramName, paramValue) {
        if (paramValue == null) {
            paramValue = '';
        }
        var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
        if (url.search(pattern) >= 0) {
            return url.replace(pattern, '$1' + paramValue + '$2');
        }
        url = url.replace(/[?#]$/, '');
        return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
    },
    getParamFromUrl: function (param) {
        var parts = document.location.href.split("?");
        var params = parts[parts.length - 1];
        var pairs = params.split("&");
        var res = '';
        for (var i = 0; i < pairs.length; i++) {
            var k = pairs[i].split("=")[0];
            var v = pairs[i].split("=")[1];
            if (k === param) {
                res = v;
                break;
            }
        }
        return res.replace("#", "");
    },
    setParamOnLoad: function () {
        var parts = document.location.href.split("?");
        var params = parts[parts.length - 1];
        var pairs = params.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var k = pairs[i].split("=")[0];
            var v = pairs[i].split("=")[1];
            try {
                v = v.replace(/#/g, '');
            } catch (ee) {
            }
            global_var[k] = v;
//            if (k === 'current_project_id') {
////                $('#projectList option')
////                        .removeAttr('selected')
////                        .filter('[value='+v+']')
////                        .attr('selected', true)
//                $('#projectList').val(v);
//            }

        }
    },
    convertStringToCamelStyle: function (arg) {
        var UNDERSCORE = "_";
        var st = arg.split(UNDERSCORE);
        var res = st[0].toLowerCase()
        for (var i = 1; i <= st.length - 1; i++) {
            res = res + st[i].substring(0, 1).toUpperCase() + st[i].substring(1, st[i].length).toLowerCase();
        }
        return res;
    },
    addUnderScoreToCamalStyle: function (arg) {

        arg = arg.replace(/\.?([0-9-A-Z])/g, function (x, y) {
            return "_" + y.toLowerCase()
        }).replace(/^_/, "");

        return arg;

    },
}
function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function sortSelectBoxByElement(el) {
    var sel = $(el);
    var selected = sel.val(); // cache selected value, before reordering
    var opts_list = sel.find('option');
    opts_list.sort(function (a, b) {
        return $(a).text().toLowerCase() > $(b).text().toLowerCase() ? 1 : -1;
    });
    sel.html('').append(opts_list);
    sel.val(selected); // set cached selected value
}
function initJSON() {
    var json = {kv: {}};
    try {
        json.kv.cookie = getToken();
    } catch (err) {
    }
    return json;
}
