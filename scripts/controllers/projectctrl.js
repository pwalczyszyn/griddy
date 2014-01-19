/* jshint browser:true */
/* global angular */

angular.module('griddy.controllers').controller('ProjectCtrl', ['$rootScope', function ($rootScope) {

        $rootScope.project = {
            rows: [],
            preferences: {
                columnsCount: 12,
                currentBreakpoint: 's',
                breakpointsDirection: 'up', // up - mobile first, down - desktop first
                breakpoints: [
                    {
                        id: 's',
                        label: 'Small'
                    },
                    {
                        id: 'm',
                        label: 'Medium'
                    },
                    {
                        id: 'l',
                        label: 'Large'
                    },
                    {
                        id: 'xl',
                        label: 'X-Large'
                    }
                ]
            }
        };

        var prevbp,
            prefs = $rootScope.project.preferences,
            prefbps = prefs.breakpointsDirection === 'up' ? prefs.breakpoints : prefs.breakpoints.concat().reverse();

        $rootScope.bpsMap = {};
        for (var i = 0, len = prefbps.length, prefbp, parent; i < len; i++) {
            prefbp = prefbps[i];

            parent = $rootScope.bpsMap[prefbp.id] = {
                id: prefbp.id,
                label: prefbp.label,
                parent: parent
            };
        }

    }]);