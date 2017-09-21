/**
 * 构造函数
 * @constructor
 */

function BackstagePage() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.SYSTEM_SET = arguments['SYSTEM_SET'] ? arguments['SYSTEM_SET'] : '#system-set';
    this.LOG_CHECK = arguments['LOG_CHECK'] ? arguments['LOG_CHECK'] : '#log-check';
    this.init();
}
/**
 * Author:LIYONG
 * Date:2017-9-17
 * 初始化函数
 * @returns {BackstagePage}
 */
BackstagePage.prototype.init = function () {
    this.dropdownList();
    return this;
}

/**
 * Author:LIYONG
 * Date:2017-9-17
 * 参数
 * @returns {string}
 */
BackstagePage.prototype.getParams = function () {

    return params;
}
/**
 * Author:LIYONG
 * Date:2017-9-17
 * 下拉列表
 * @returns {BackstagePage}
 */
BackstagePage.prototype.dropdownList = function () {

    $(this.SYSTEM_SET).click(function () {
        $(this).next('ul').slideToggle();
    });

    $(this.LOG_CHECK).click(function () {
        $(this).next('ul').slideToggle();
    });

    $('#slid-menu li ul li').click(function () {
        var _this_li = this;
        var TEMP_HTML = '<a href="#" data-value="'+$(this).attr("data-value")+'">' + $(this).html() + '</a>';
        var result = true;
        $('.tabs-content a').each(function () {
            if ($(this).html() == $(_this_li).html()) {
                result = false;
            }
        })
        if (result) {
            $('.tabs-content').append(TEMP_HTML);
        }

        $('.right-body .wrapper').eq($(this).attr("data-value")).removeClass('hide')
            .siblings('.wrapper').addClass('hide');
        $('.tabs-content a[data-value="'+$(this).attr("data-value")+'"]').addClass('active').siblings('a').removeClass('active');
    });

    $('.tabs-content').on('click','a',function(){
        $('.right-body .wrapper').eq($(this).attr("data-value")).removeClass('hide')
            .siblings('.wrapper').addClass('hide');
        $(this).addClass('active').siblings('a').removeClass('active');
    })

    return this;
}


var bp = new BackstagePage();