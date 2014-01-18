/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('column', ['bpHelpers', function (bpHelpers) {

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

                bpHelpers.getClosestDown({});

                console.log('column.directive');

                $scope.expandColumn = function () {
                    var bp = col.breakpoints[prefs.currentBreakpoint] || (col.breakpoints[prefs.currentBreakpoint] = {
                        span: 1,
                        offset: 0
                    });

                    // Checking if can expand column
                    if (bp.span + bp.offset + 1 <= prefs.columnsCount) {
                        element.removeClass('gd-column-' + bp.span).addClass('gd-column-' + (bp.span + 1));
                        bp.span++;
                    }
                };

                $scope.collapseColumn = function () {
                    findClass(/gd-column-[1-9][0-2]?/, function (columnClass, columnNum) {
                        columnNum--;
                        if (columnNum >= 1) {
                            element.removeClass(columnClass).addClass('gd-column-' + columnNum);
                        }
                    });
                };

                $scope.addOffset = function () {
                    findClass(/gd-offset-[1-9][0-1]?/, function (columnClass, columnNum) {
                        if (columnClass === undefined) {
                            element.addClass('gd-offset-1');
                        } else {
                            columnNum++;
                            if (columnNum <= 11) {
                                element.removeClass(columnClass).addClass('gd-offset-' + columnNum);
                            }
                        }
                    });
                };

                $scope.removeOffset = function () {
                    findClass(/gd-offset-[1-9][0-1]?/, function (columnClass, columnNum) {
                        if (columnClass !== undefined) {
                            columnNum--;
                            element.removeClass(columnClass);
                            if (columnNum > 0) {
                                element.addClass('gd-offset-' + columnNum);
                            }
                        }
                    });
                };

            }
        };

    }]);