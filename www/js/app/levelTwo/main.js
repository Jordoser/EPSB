var App;
(function (App) {
    var levelTwo;
    (function (levelTwo) {
        "use strict";
        angular.module('levelTwoApp', [])
            .controller('levelTwoController', levelTwo.LevelTwoController)
            .service('dataService', levelTwo.LevelTwoDataService)
            .directive('bzPopover', App.Directives.scopedPopover)
            .filter("trust", ['$sce', function ($sce) {
                return function (htmlCode) {
                    return $sce.trustAsHtml(htmlCode);
                };
            }]);
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map