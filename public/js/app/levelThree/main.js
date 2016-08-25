var App;
(function (App) {
    var levelThree;
    (function (levelThree) {
        "use strict";
        angular.module('levelThreeApp', [])
            .controller('levelThreeController', levelThree.LevelThreeController)
            .service('dataService', levelThree.LevelThreeDataService)
            .directive('bzPopover', App.Directives.scopedPopover)
            .filter("trust", ['$sce', function ($sce) {
                return function (htmlCode) {
                    return $sce.trustAsHtml(htmlCode);
                };
            }]);
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map