/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('row', ['Column', function (Column) {

        return {
            restrict: 'E',
            templateUrl: 'partials/row.tpl.html',
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.addColumn = function () {
                    var pbps = $scope.project.preferences.breakpoints,
                        cbp = $scope.project.preferences.currentBreakpoint,
                        rootbp = $scope.project.preferences.breakpointsDirection === 'up' ? pbps[0] : pbps[pbps.length - 1],
                        bps = {},
                        column = new Column({
                            breakpoints: bps
                        });

                    // Adding BP with a span of 1
                    bps[cbp] = {
                        span: 1
                    };

                    // If current BP is not the lowest one adding it also with a span of 1
                    if (cbp !== rootbp.id) {
                        bps[rootbp.id] = {
                            span: 1
                        };
                    }

                    // Pushing new column
                    $scope.row.columns.push(column);
                };
            }
        };

    }]);