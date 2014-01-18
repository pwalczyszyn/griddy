/* jshint browser:true */
/* global angular */

angular.module('griddy.services').factory('bpHelpers', ['$rootScope', function ($rootScope) {
        return {
            getClosestDown: function (column) {
                console.log('$rootScope', $rootScope.project);
            }
        };
    }]);