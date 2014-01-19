/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('column', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/column.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

            var prefs = $scope.project.preferences,
                col = $scope.column;

            function findClass(regex, callback) {
                var classList = element[0].classList,
                    columnClass,
                    columnNum;

                for (var i = 0, len = classList.length, c; i < len; i++) {
                    c = classList[i];

                    if (regex.test(c)) {
                        columnClass = c;
                        columnNum = Number(columnClass.substr(columnClass.lastIndexOf('-') + 1));
                        break;
                    }
                }

                callback(columnClass, columnNum);
            }

            $scope.expandColumn = function () {
                var span = col.getPropertyAt('span', prefs.currentBreakpoint) || 1,
                    offset = col.getPropertyAt('offset', prefs.currentBreakpoint) || 0;

                if (span + offset + 1 <= prefs.columnsCount) {
                    element.removeClass('gd-column-' + span).addClass('gd-column-' + (span + 1));

                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {});
                    bp.span = span + 1;
                }
            };

            $scope.collapseColumn = function () {
                var span = col.getPropertyAt('span', prefs.currentBreakpoint) || 1;

                if (span > 1) {
                    element.removeClass('gd-column-' + span).addClass('gd-column-' + (span - 1));

                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {});
                    bp.span = span - 1;
                }
            };

            $scope.addOffset = function () {
                var span = col.getPropertyAt('span', prefs.currentBreakpoint) || 1,
                    offset = col.getPropertyAt('offset', prefs.currentBreakpoint) || 0;

                if (span + offset + 1 <= prefs.columnsCount) {
                    element.removeClass('gd-offset-' + offset).addClass('gd-offset-' + (offset + 1));

                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {});
                    bp.offset = offset + 1;
                }
            };

            $scope.removeOffset = function () {
                var offset = col.getPropertyAt('offset', prefs.currentBreakpoint) || 0;

                if (offset > 0) {
                    element.removeClass('gd-offset-' + offset);

                    if (offset - 1 > 0) {
                        element.addClass('gd-offset-' + (offset - 1));
                    }

                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {});
                    bp.offset = offset - 1 > 0 ? offset - 1 : undefined;
                }
            };

        }
    };

});