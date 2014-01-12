/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('column', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/column.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

            $scope.expandColumn = function () {
                var classList = element[0].classList,
                    columnClass,
                    columnNum;

                for (var i = 0, len = classList.length, c; i < len; i++) {
                    c = classList[i];

                    if (/gd-column-[1-9][0-2]?/.test(c)) {
                        columnClass = c;
                        columnNum = Number(columnClass.substr(columnClass.lastIndexOf('-') + 1));
                        break;
                    }
                }

                columnNum++;
                if (columnNum <= 12) {
                    classList.remove(columnClass);
                    columnClass = 'gd-column-' + columnNum;
                    classList.add(columnClass);
                }
            };

            $scope.collapseColumn = function () {
                var classList = element[0].classList,
                    columnClass,
                    columnNum;

                for (var i = 0, len = classList.length, c; i < len; i++) {
                    c = classList[i];

                    if (/gd-column-[1-9][0-2]?/.test(c)) {
                        columnClass = c;
                        columnNum = Number(columnClass.substr(columnClass.lastIndexOf('-') + 1));
                        break;
                    }
                }

                columnNum--;
                if (columnNum >= 1) {
                    classList.remove(columnClass);
                    columnClass = 'gd-column-' + columnNum;
                    classList.add(columnClass);
                }
            };


        }
    };

});