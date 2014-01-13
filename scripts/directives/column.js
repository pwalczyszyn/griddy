/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('column', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/column.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

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
                findClass(/gd-column-[1-9][0-2]?/, function (columnClass, columnNum) {
                    columnNum++;
                    if (columnNum <= 12) {
                        element.removeClass(columnClass).addClass('gd-column-' + columnNum);
                    }
                });
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

});
