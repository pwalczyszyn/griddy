/* jshint browser:true */
/* global angular */

angular.module('griddy.controllers').controller('ProjectCtrl', ['$rootScope', function ($rootScope) {

        $rootScope.project = {
            rows: [],
            preferences: {
                columnsCount: 12,
                currentBreakpoint: 's',
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

    }]);