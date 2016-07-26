var App;
(function (App) {
    var levelThree;
    (function (levelThree) {
        "use strict";
        angular.module('levelThreeApp', [])
            .controller('levelThreeController', levelThree.LevelThreeController)
            .service('dataService', levelThree.LevelThreeDataService);
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map