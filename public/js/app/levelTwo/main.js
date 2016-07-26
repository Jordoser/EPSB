var App;
(function (App) {
    var levelTwo;
    (function (levelTwo) {
        "use strict";
        angular.module('levelTwoApp', [])
            .controller('levelTwoController', levelTwo.LevelTwoController)
            .service('dataService', levelTwo.LevelTwoDataService);
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map