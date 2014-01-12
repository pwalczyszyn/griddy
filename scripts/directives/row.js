/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('row', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/row.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {
            if ($scope.row.columns === undefined) {
                $scope.row.columns = [];
            }
            $scope.addColumn = function () {            
                $scope.row.columns.push({});
            };
        }
    };

});