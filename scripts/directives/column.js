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

            $scope.$watch('project.preferences.currentBreakpoint', function (newbp, oldbp) {
                if (newbp !== oldbp) {
                    var oldSpan = col.getPropertyAt('span', oldbp),
                        oldOffset = col.getPropertyAt('offset', oldbp),
                        newSpan = col.getPropertyAt('span', newbp),
                        newOffset = col.getPropertyAt('offset', newbp);

                    element.removeClass('gd-column-' + oldSpan).removeClass('gd-offset-' + oldOffset).addClass('gd-column-' + newSpan);
                    if (newOffset !== undefined) {
                        element.addClass('gd-offset-' + newOffset);
                    }
                }
            });

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
                    element.removeClass('gd-offset-' + offset).addClass('gd-offset-' + (offset - 1));

                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {});
                    bp.offset = offset - 1;
                }
            };

        }
    };

});