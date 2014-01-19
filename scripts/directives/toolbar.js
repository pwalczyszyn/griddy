/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('toolbar', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/toolbar.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

            $scope.addRow_clickHandler = function () {
                var newRow = {
                    columns: []
                };
                $scope.project.rows.push(newRow);
            };

        }
    };

});