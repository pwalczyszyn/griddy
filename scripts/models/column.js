/* jshint browser:true */
/* global angular */

angular.module('griddy.models').factory('Column', ['$rootScope', function ($rootScope) {

        var prefs = $rootScope.project.preferences,
            bpsMap = $rootScope.bpsMap;

        function Column(jsonData) {
            var data = jsonData || {};
            this.breakpoints = data.breakpoints || {};
        }

        Column.prototype.getBreakpointFor = function (bpId) {
            var bp = this.breakpoints[bpId];
            if (bp) {
                return bp;
            }

            var prevbp,
                prefbps = prefs.breakpointsDirection === 'up' ? prefs.breakpoints : prefs.breakpoints.concat().reverse();

            for (var i = 0, len = prefbps.length, prefbp; i < len; i++) {
                prefbp = prefbps[i];

                if (prefbp.id === bpId) {
                    break;
                }

                if (this.breakpoints[prefbp.id]) {
                    prevbp = this.breakpoints[prefbp.id];
                }
            }

            return prevbp;
        };

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