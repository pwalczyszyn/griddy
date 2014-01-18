/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('gridCanvas', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/canvas.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {
        
            $scope.$watch('project.breakpoint', function(newBreakpoint) {
                console.log('break changed', newBreakpoint); 
            });
            
            $scope.$on('newrow', function(event, newRow) {
                
                
                
                
            }, true);
        }
    };

});