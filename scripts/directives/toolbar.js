/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('toolbar', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/toolbar.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

            $scope.addRow_clickHandler = function () {
                console.log('add row');
                var newRow = {};
                $scope.project.rows.push(newRow);
                $scope.$broadcast('newrow', newRow);
            };

        }
    };

});