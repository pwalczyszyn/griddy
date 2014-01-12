/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('row', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/row.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {
            console.log('new row');
            
            $scope.mouseEnter = function() {
                console.log('mouse enter');
            };
            $scope.mouseLeave = function() {
                console.log('mouse leave');
            };
            
        }
    };

});