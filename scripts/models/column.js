/* jshint browser:true */
/* global angular */

angular.module('griddy.models').factory('Column', ['$rootScope', function ($rootScope) {

        var prefs = $rootScope.project.preferences,
            bpsMap = $rootScope.bpsMap;

        function Column(jsonData) {
            var data = jsonData || {};
            this.breakpoints = data.breakpoints || {};
        }

        Column.prototype.getPropertyAt = function (propId, bpId) {
            if (this.breakpoints[bpId] && this.breakpoints[bpId][propId] !== undefined) {
                return this.breakpoints[bpId][propId];
            }

            if (!bpsMap[bpId].parent) {
                return undefined;
            }

            return this.getPropertyAt(propId, bpsMap[bpId].parent.id);
        };

        return Column;
    }]);