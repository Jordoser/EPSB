var App;
(function (App) {
    var levelOne;
    (function (levelOne) {
        "use strict";
        angular.module('levelOneApp', [])
            .controller('levelOneController', levelOne.LevelOneController)
            .service('dataService', levelOne.LevelOneDataService);
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map