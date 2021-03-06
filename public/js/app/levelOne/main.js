var App;
(function (App) {
    var levelOne;
    (function (levelOne) {
        "use strict";
        angular.module('levelOneApp', [])
            .controller('levelOneController', levelOne.LevelOneController)
            .service('dataService', levelOne.LevelOneDataService)
            .directive('bzPopover', App.Directives.scopedPopover)
            .filter("trust", ['$sce', function ($sce) {
                return function (htmlCode) {
                    return $sce.trustAsHtml(htmlCode);
                };
            }]);
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map