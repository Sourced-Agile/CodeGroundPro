const codeGroundPro = {

    init:function (params) {
        $('.code-select-picker').selectpicker();
        if (global_var.n_rgstr) {
            var bgid = Utility.getParamFromUrl('bgid');
            global_var.current_backlog_id = bgid;
            loadNameBacklogOrProjectShareURl(bgid);
            $('.projectList_codeground_storycard').attr('disabled', 'disabled')
            $('.projectList_codeground_storycard').selectpicker();
        } else {
            loadProjectList2SelectboxByClass('projectList_codeground_storycard');
            if (global_var.current_backlog_id) {
                var val = global_var.current_backlog_id;
                getBacklogHTMLBodyByIdCodeGround(val, '');
                getBacklogJSBodyByIdCodeGround(val, '');
                getBacklogCSSBodyByIdCodeGround(val, '');

                return

            }
            generateMonacoeditros('html-code-editor', 'editorHTMLGround', 'html', 'vs-dark');
            generateMonacoeditros('css-code-editor', 'editorCSSGround', 'css', 'vs-dark');
            generateMonacoeditros('js-code-editor', 'editorJSGround', 'javascript', 'vs-dark');

        }
    },
}



///// code ground start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).on('click', '.loadCodeGround', function (evt) {

     


});


function generateMonacoeditros4FnBoard(elmId, nameEditor, lang, theme, body, readOnly) {
    $("#" + elmId).html('');
    $('.loading.editor').show();
    require.config({
        paths: {
            'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs'
        }
    });
    window.MonacoEnvironment = {
        getWorkerUrl: () => proxy
    };

    let proxy = URL.createObjectURL(new Blob([`
        self.MonacoEnvironment = {
            baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
        };
        importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
    `], {
        type: 'text/javascript'
    }));

    require(["vs/editor/editor.main"], function () {
        window[nameEditor] = monaco.editor.create(document.getElementById(elmId), {
            value: body,
            language: lang,
            automaticLayout: true,
            lineNumbers: "on",

            readOnly: readOnly,
            roundedSelection: true,
            scrollBeyondLastLine: true,
            theme: theme,

        });
        loadProjectList2SelectboxByClass('jsCodeModal_projectList_class');
    });
}

function generateMonacoeditros(elmId, nameEditor, lang, theme, body, readOnly) {
    require.config({
        paths: {
            'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs'
        }
    });
    window.MonacoEnvironment = {
        getWorkerUrl: () => proxy
    };

    let proxy = URL.createObjectURL(new Blob([`
        self.MonacoEnvironment = {
            baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
        };
        importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
    `], {
        type: 'text/javascript'
    }));

    require(["vs/editor/editor.main"], function () {
        window[nameEditor] = monaco.editor.create(document.getElementById(elmId), {
            value: body,
            language: lang,
            automaticLayout: true,
            lineNumbers: "on",

            readOnly: readOnly,
            roundedSelection: true,
            scrollBeyondLastLine: true,
            theme: theme
        });

    });
}

function loadNameBacklogOrProjectShareURl(backlogId) {
    var bid = (backlogId) ? backlogId : global_var.current_backlog_id;

    var data = {};
    data.id = bid;
    callService('serviceTmGetBacklogCoreInfoByIdNew', data, true, function (res) {

        var cmd = $('#storyCardListSelectBox4CodeGround');
        cmd.html('');
        console.log(res);
        var obj = res.tbl[0].r;
        for (var n = 0; n < obj.length; n++) {
            var o = obj[n];
            if (o.isApi !== '1') {
                var pname = o.backlogName;

                cmd.closest('.mm-col').html($('<span style="color:rgb(255 255 255 / 70%);" class="pl-2 pr-2">').text(" " + pname));
            }

            try {
                var prName = SACore.Project[o.fkProjectId]
                $('#project-list-codeground')
                    .closest(".mm-col")
                    .html($('<span style="color:rgb(255 255 255 / 70%);" class="pl-2 pr-2">').text(" " + prName));
            } catch (error) {

            }

        }
        getBacklogHTMLBodyByIdCodeGround(bid, '', o.hasHtml);
        getBacklogJSBodyByIdCodeGround(bid, '');
        getBacklogCSSBodyByIdCodeGround(bid, '');
    })
}

function getBacklogHTMLBodyByIdCodeGround(bid, trig, isHtml) {

    var pid = bid ? bid : global_var.current_backlog_id;

    var json = initJSON();
    json.kv.fkBacklogId = pid;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmgetBacklogHtml",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {

            isHtml = isHtml ? isHtml : $('#storyCardListSelectBox4CodeGround option:selected').attr("isHtml");

            if (isHtml === '1') {
                $('#cs-col-Ceckbox-id').val("0");
                $('#cs-col-Ceckbox-id').selectpicker("refresh");

                try {
                    if (trig == 'load') {
                        window.editorHTMLGround.setValue(res.kv.backlogHtml);
                    } else {
                        generateMonacoeditros('html-code-editor', 'editorHTMLGround', 'html', 'vs-dark', res.kv.backlogHtml, false);
                    }
                } catch (error) {
                    if (trig == 'load') {
                        return
                    }
                    generateMonacoeditros('html-code-editor', 'editorHTMLGround', 'html', 'vs-dark', "", false);

                }
                $('#cs-col-Ceckbox-id').val("1");
                $('#cs-col-Ceckbox-id').selectpicker("refresh");
            } else {



                var resTmp = SAInput.toJSONByBacklog(pid);
                var oldmodal = global_var.current_modal;
                global_var.current_modal = '';
                var html = new UserStory().getGUIDesignHTMLPure(resTmp);
                global_var.current_modal = oldmodal;
                if (trig == 'load') {
                    window.editorHTMLGround.setValue(html);
                } else {
                    generateMonacoeditros('html-code-editor', 'editorHTMLGround', 'html', 'vs-dark', html, true);
                }
            }

        }
    });
}

function getBacklogJSBodyByIdCodeGround(bid, trig) {

    var pid = bid ? bid : global_var.current_backlog_id;

    var json = initJSON();
    json.kv.fkBacklogId = pid;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmgetBacklogJsCode",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {
            try {
                if (trig == 'load') {
                    window.editorJSGround.setValue(res.tbl[0].r[0].fnBody);
                } else {
                    generateMonacoeditros('js-code-editor', 'editorJSGround', 'javascript', 'vs-dark', res.tbl[0].r[0].fnBody);
                }

            } catch (error) {
                if (trig == 'load') {
                    window.editorJSGround.setValue('');
                    return
                }
                generateMonacoeditros('js-code-editor', 'editorJSGround', 'javascript', 'vs-dark');

            }


        }
    });
}

function getBacklogCSSBodyByIdCodeGround(bid, trig) {
    var pid = bid ? bid : global_var.current_backlog_id;

    var json = initJSON();
    json.kv.fkBacklogId = pid;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmgetBacklogCssCode",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {
            try {
                if (trig == 'load') {
                    window.editorCSSGround.setValue(res.tbl[0].r[0].classBody);
                } else {
                    generateMonacoeditros('css-code-editor', 'editorCSSGround', 'css', 'vs-dark', res.tbl[0].r[0].classBody);
                }
            } catch (error) {
                if (trig == 'load') {
                    window.editorCSSGround.setValue('');
                    return
                }
                generateMonacoeditros('css-code-editor', 'editorCSSGround', 'css', 'vs-dark');

            }



            //insertCssmanualBybacklogId(body);
        }
    });
}

function getBacklogListforCodeGround(fkProjectId) {
    var pid = (fkProjectId) ? fkProjectId : global_var.current_project_id;

    var json = initJSON();
    json.kv.fkProjectId = pid;
    json.kv.isApi = 'NE%1';
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmGetBacklogList4Combo",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {

            var cmd = $('#storyCardListSelectBox4CodeGround');
            cmd.html('');
            var obj = res.tbl[0].r;
            for (var n = 0; n < obj.length; n++) {
                var o = obj[n];
                if (o.isApi !== '1') {
                    var pname = o.backlogName;
                    var op = $('<option></option>').attr('value', o.id).text(pname).attr("isHtml", o.hasHtml ? o.hasHtml : '0');

                    if (o.id === global_var.current_backlog_id) {
                        op.attr("selected", true);
                    }
                    cmd.append(op);
                }
            }


            sortSelectBoxByElement(cmd);
            cmd.val(global_var.current_backlog_id);
            cmd.selectpicker('refresh');

        }
    });
}


$(document).on("change", '#change-editor-theme-monaco', function (e) {
    window.editorJSGround.updateOptions({
        theme: $(this).val()
    });
    window.editorHTMLGround.updateOptions({
        theme: $(this).val()
    })
    window.editorCSSGround.updateOptions({
        theme: $(this).val()
    })

});
$(document).on("change", '#cs-col-Ceckbox-id', function (e) {



    updateUS4ShortChangeDetails($(this).val(), 'hasHtml');
    if ($(this).val() === '1') {
        window.editorHTMLGround.updateOptions({
            readOnly: false
        })
    } else {
        window.editorHTMLGround.updateOptions({
            readOnly: true
        })
    }

    loadBacklogProductionCoreDetailssByIdPost(global_var.current_backlog_id, true);


});
$(document).on("change", '#project-list-codeground', function (e) {
    Utility.addParamToUrl("current_project_id", $(this).val())
    global_var.current_project_id = $(this).val();
    getBacklogListforCodeGround($(this).val());


});

$(document).on("change", '#storyCardListSelectBox4CodeGround', function (e) {
    var val = $(this).val()
    global_var.current_backlog_id = val;
    Utility.addParamToUrl("current_backlog_id", val);

    getBacklogHTMLBodyByIdCodeGround(val, 'load');

    getBacklogJSBodyByIdCodeGround(val, 'load');
    getBacklogCSSBodyByIdCodeGround(val, 'load');
});

function getIframeBlock(elm) {
    /*   var parts = document.location.href.split("?"); */

    /*   var $iframe = $(`<iframe>`)
                               .addClass("h-100 w-100")
                               .attr("src",'iframe.html?'+parts[1]+'&current_domain='+global_var.current_domain)
                               .attr("id",'result-iframe');

    //  $(elm).html($iframe);
        */
    iframeLoaded();

}

function iframeLoaded() {
    try {
        var pid = global_var.current_backlog_id;
        var js = window.editorJSGround.getValue();

        if ($("#cs-col-Ceckbox-id").val() !== '1') {
            // var html = getBacklogAsHtml(global_var.current_backlog_id, false);
            var resTmp = SAInput.toJSONByBacklog(pid);
            var oldmodal = global_var.current_modal;

            global_var.current_modal = $('#show_hidden_carrier').prop('checked') ? 'loadLivePrototype' : '';
            var html = new UserStory().getGUIDesignHTMLPure(resTmp);
            global_var.current_modal = oldmodal;
        } else {
            var html = window.editorHTMLGround.getValue();

        }
        var css = window.editorCSSGround.getValue();
        var block = getIframeBlockInside(pid, css, js, html);
        $("#result-code-editor").html(block);
        /*  $("#result-iframe").contents().find('body').html(block +`<script>
         loadSelectBoxesAfterGUIDesign($("#result").find(".redirectClass"))</script>`); */
        loadSelectBoxesAfterGUIDesign($("#result-code-editor").find(".redirectClass"));
    } catch (error) {

    }

}

function getIframeBlockInside(pid, css, js, bodys) {
    // var jsLink  = `<script src="${urlGl}/api/get/dwd/js/${global_var.current_domain}/${pid}.js"></script>`
    // var cssLink  = `<link src="${urlGl}/api/get/dwd/css/${global_var.current_domain}/${pid}.css">`
    var body = $(`<div class='redirectClass h-100' id='${pid}'>`).html(bodys)
    var cssBlock = $(body).find('#css-function-list-for-story-card');
    var jsBlock = $(body).find('#js-function-list-for-story-card');

    if (cssBlock.length > 0) {
        $(body).find('#css-function-list-for-story-card').text(css);
    } else {
        $(body).append($('<style id="js-function-list-for-story-card">').text(css));
    }
    if (jsBlock.length > 0) {
        $(body).find('#js-function-list-for-story-card').text(js);
    } else {
        $(body).append($('<script id="js-function-list-for-story-card">')
            //.text("(function(){"+js+"})(window,document);")
            .text(js));
    }
    var dt = $("<div>").html(body);
    return dt.html();
    var $iframe = $("<div class='overflow-hidden'>")
        .append(body);
    return $iframe.html();
}

$(document).on("change", '#show_hidden_carrier', function (e) {
    $("#run-code-ground-btn").click();
})

$(document).on("click", '#save-code-ground-btn', function (e) {
    var elm = $("#result-code-editor");
    elm.find('div').remove();
    $('.loading.editor').show();
    var js = window.editorJSGround.getValue();
    var css = window.editorCSSGround.getValue();
    if ($("#cs-col-Ceckbox-id").val() !== '1') {} else {
        var html = String(window.editorHTMLGround.getValue());

        insertHtmlSendDbBybacklogId(html);
    }

    insertJsSendDbBybacklogId(js);
    insertCssSendDbBybacklogId(css);
    setBacklogAsHtmlCodeGround(global_var.current_backlog_id, js, css);
    getIframeBlock(elm);
    ///   setBacklogAsHtml(global_var.current_backlog_id, css, js);


});

function setBacklogAsHtmlCodeGround(backlogId, js, css) {
    if (!backlogId) {
        return;
    }
    if ($("#cs-col-Ceckbox-id").val() !== '1') {
        var resTmp = SAInput.toJSONByBacklog(backlogId);
        var oldmodal = global_var.current_modal;
        global_var.current_modal = '';
        var html = new UserStory().getGUIDesignHTMLPure(resTmp);
        global_var.current_modal = oldmodal;
    } else {
        var html = window.editorHTMLGround.getValue();
    }
    var json = initJSON();
    json.kv.fkBacklogId = backlogId;
    json.kv.backlogHtml = "<style>" + css + "</style>" + html + "<script>" + js + "</script>";
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmsetBacklogAsHtml",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {
            Toaster.showMessage("Succesfuly Saved");
            $('.loading.editor').hide();
        },
        error: function () {
            Toaster.showError(('Something went wrong!!!'));
        }
    });
}
$(document).on("click", '#info-code-ground-btn', function (e) {

    calStroyCardNew(global_var.current_backlog_id);


});
$(document).on("click", '#run-code-ground-btn', function (e) {

    var elm = $("#result-code-editor");
    elm.find('div').remove();

    getIframeBlock(elm);


});
$(window).keydown(function (e) {
    if (global_var.current_modal === 'loadCodeGround') {
        if ((e.metaKey || e.ctrlKey) && e.keyCode == 83) {
            /*ctrl+s or command+s*/
            $("#save-code-ground-btn").click();
            e.preventDefault();
            return false;
        }
    }

});

function insertJSmanualBybacklogId(body) {
    var elm = $("#SUS_IPO_GUI_Design")
    elm.parent().find("#backlog-manual-js-body").remove();
    var div = $("<div>")
        .attr("id", 'backlog-manual-js-body')
        .append($("<script>")
            .text(body))
    elm.after(div)

}

function insertCssmanualBybacklogId(body) {
    var elm = $("#SUS_IPO_GUI_Design")
    elm.parent().find("#backlog-manual-css-body").remove();
    var div = $("<div>")
        .attr("id", 'backlog-manual-css-body')
        .append($("<style>")
            .append(body))
    elm.after(div)
}

function insertJsSendDbBybacklogId(body) {
    if (!body) {
        return
    }
    var pid = global_var.current_backlog_id;

    var json = initJSON();
    json.kv.fkBacklogId = pid;
    json.kv.jsBody = body;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTminsertBacklogJsCode",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {

            setHistoryCodeGround(pid, body, "js");
        }
    });
}

function insertCssSendDbBybacklogId(body) {
    if (!body) {
        return
    }
    var pid = global_var.current_backlog_id;
    var json = initJSON();
    json.kv.fkBacklogId = pid;
    json.kv.classBody = body;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTminsertBacklogCssCode",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {
            setHistoryCodeGround(pid, body, "css")


        }
    });
}

function insertHtmlSendDbBybacklogId(body) {
    var pid = global_var.current_backlog_id;
    var json = initJSON();
    json.kv.fkBacklogId = pid;
    json.kv.backlogHtml = body;
    var that = this;
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl + "api/post/srv/serviceTmInsertBacklogHtml",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        success: function (res) {

            setHistoryCodeGround(pid, body, "html")
        }
    });
}

function setHistoryCodeGround(bid, body, type) {
    var data = {};
    data.requestBody = body;
    data.fkBacklogId = bid;
    data.devType = type;
    callApi('21122715084804621887', data, true, function (res) {

    })
}    
                


$('#css-toggle-ground-btn').click(function () {
    $('#css-toggle-ground-btn').children("i").toggleClass("fa-eye-slash")
    $(".css-code-editor").toggleClass('display-n');
})

$('#html-toggle-ground-btn').click(function () {
    $('#html-toggle-ground-btn').children("i").toggleClass("fa-eye-slash")
    $(".html-code-editor").toggleClass('display-n');
    if ($(".js-code-editor").hasClass("display-n") && $(".html-code-editor").hasClass("display-n")) {
        $(".panel-right-code").addClass("with-100")
        $(".panel-left-code").addClass("with-0")
    } else {
        $(".panel-right-code").removeClass("with-100")
        $(".panel-left-code").removeClass("with-0")
    }
})

$('#js-toggle-ground-btn').click(function() {
     $('#js-toggle-ground-btn').children("i").toggleClass("fa-eye-slash")
    $(".js-code-editor").toggleClass('display-n');
    if ($(".js-code-editor").hasClass("display-n") && $(".html-code-editor").hasClass("display-n")) {
        $(".panel-right-code").addClass("with-100")
        $(".panel-left-code").addClass("with-0")
    } else {
        $(".panel-right-code").removeClass("with-100")
        $(".panel-left-code").removeClass("with-0")
    }
})


$(".panel-left-code").resizable({
    handles: 'e',
    resizeHeight: false
});

 $(".panel-top-code").resizable({
    handles: 's',
    resizeWidth: false
});

// responsib panel

$(".panel-bottom-code-size").click(function () {
    $(".result-code-editor-inp-div").toggleClass("display-block")
    $("#result-code-width-inp").val(1200 + " px")
    $(".panel-right-code").toggleClass("with-100")
    $(".panel-left-code").addClass("with-0")
    $("#result-code-editor").height("90%")

    let width_editor = Math.round($("#result-code-editor").width())
    $("#result-code-width-inp").val(width_editor)

    let height_editor = Math.round($("#result-code-editor").height())
    $("#result-code-height-inp").val(height_editor)

    $("#result-code-editor").resizable({
        handles: 'e, s',
        resize: function (event, ui) {
            $("#result-code-width-inp").val(Math.round(ui.size.width))
            $("#result-code-height-inp").val(Math.round(ui.size.height))
        }
    });
})


$(document).on("change","#result-code-width-inp",function(){
    var with_inp=$("#result-code-width-inp").val() 
    $("#result-code-editor").width(with_inp)
})

$(document).on("change","#result-code-height-inp",function(){
    var height_inp=$("#result-code-height-inp").val() 
    $("#result-code-editor").height(height_inp)
})



$(document).on("change","#res-panel-select",function(){
    var with_selct=$("#res-panel-select > option:selected").attr("width") 
    var height_select=$("#res-panel-select > option:selected").attr("height") 
    $("#result-code-editor").width(with_selct)
    $("#result-code-editor").height(height_select)
    $("#result-code-width-inp").val(with_selct)
    $("#result-code-height-inp").val(height_select)
})

  

 /*    $(document).on("mouseup",".panel-left-code.ui-resizable .ui-resizable-e",function() {
          
                $(this).css('width','7px').css('left','auto').css('right','-5px');  
            
        });
    $(document).on("mousedown",".panel-left-code.ui-resizable .ui-resizable-e",function() {
           
                $(this).css('width','100%').css('left','50%').css('right','0');    
            
        }); */
