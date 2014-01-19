/* jshint browser:true */
/* global angular */

angular.module('griddy.directives').directive('srcPanel', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/srcpanel.tpl.html',
        replace: true,
        link: function ($scope, element, attrs) {

            var src,
                client = new ZeroClipboard(element.find('a')[0], {
                    moviePath: 'scripts/vendor/ZeroClipboard.swf'
                });
            client.on('dataRequested', function (client, args) {
                client.setText(src);
            });

            var foundationBpMap = {
                s: 'small',
                m: 'medium',
                l: 'large',
                xl: 'xlarge'
            };
            $scope.$watch('project.rows', function (rows) {
                var rowsSrc = [];
                rows.forEach(function (row) {
                    var cols = [];
                    row.columns.forEach(function (column) {
                        var classes = [];
                        for (var bpId in column.breakpoints) {
                            var bp = column.breakpoints[bpId];

                            if (bp.span !== undefined) {
                                classes.push(foundationBpMap[bpId] + '-' + bp.span);
                            }
                            if (bp.offset !== undefined) {
                                classes.push(foundationBpMap[bpId] + '-offset-' + bp.offset);
                            }

                        }
                        classes.push('columns');
                        cols.push('<div class="' + classes.join(' ') + '"></div>');
                    });

                    rowsSrc.push('<div class="row">\n' + cols.join('\n') + '\n</div>');
                });

                src = rowsSrc.join('\n');
                element.find('pre').text(src);
            }, true);

        }
    };

});
