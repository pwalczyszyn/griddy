/* jshint browser:true, jquery:true */

(function () {

    $(document).on('click', '.btn-add-column', function () {
        var $btn = $(this),
            $rowContent = $btn.parent().siblings('.gd-canvas--row--content');
        $rowContent.append('<div class="gd-column-1 gd-column--box"><div class="gd-column--resize-buttons"><a href="javascript:void(0)" class="gd-icon-btn btn-extend-column" title="Extend column"><span class="icon-arrow-right2"></span></a><a href="javascript:void(0)" class="gd-icon-btn btn-collapse-column" title="Collapse column"><span class="icon-arrow-left2"></span></a></div></div>');                                
    });

    $(document).on('click', '.btn-collapse-column', function () {
        var $btn = $(this),
            $column = $btn.parent().parent(),
            classList = $column[0].classList,
            columnClass,
            columnNum;

        for (var i = 0, len = classList.length, c; i < len; i++) {
            c = classList[i];

            if (/gd-column-[1-9][0-2]?/.test(c)) {
                columnClass = c;
                columnNum = Number(columnClass.substr(columnClass.lastIndexOf('-') + 1));
            }
        }

        columnNum--;
        if (columnNum >= 1) {
            classList.remove(columnClass);
            columnClass = 'gd-column-' + columnNum;
            classList.add(columnClass);
        }
    });

    $(document).on('click', '.btn-extend-column', function () {
        var $btn = $(this),
            $column = $btn.parent().parent(),
            classList = $column[0].classList,
            columnClass,
            columnNum;

        for (var i = 0, len = classList.length, c; i < len; i++) {
            c = classList[i];

            if (/gd-column-[1-9][0-2]?/.test(c)) {
                columnClass = c;
                columnNum = Number(columnClass.substr(columnClass.lastIndexOf('-') + 1));
            }
        }

        columnNum++;
        if (columnNum <= 12) {
            classList.remove(columnClass);
            columnClass = 'gd-column-' + columnNum;
            classList.add(columnClass);
        }
    });

    $(document).on('click', '#btn-add-row', function () {
        $('#gd-canvas--rows').append('<div class="gd-canvas--row"><div class="gd-canvas--row--tools"><a href="javascript:void(0)" class="gd-icon-btn btn-add-column" title="Add column"><span class="icon-plus"></span></a></div><div class="gd-canvas--row--content gd-row"></div></div>');
    });
    
})();