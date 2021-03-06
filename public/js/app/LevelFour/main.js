var App;
(function (App) {
    var levelFour;
    (function (levelFour) {
        "use strict";
        angular.module('levelFourApp', [])
            .controller('levelFourController', levelFour.LevelFourController)
            .service('dataService', levelFour.LevelFourDataService)
            .directive('bzPopover', App.Directives.scopedPopover)
            .filter("trust", ['$sce', function ($sce) {
                return function (htmlCode) {
                    return $sce.trustAsHtml(htmlCode);
                };
            }]);
    })(levelFour = App.levelFour || (App.levelFour = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map