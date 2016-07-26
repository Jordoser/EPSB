var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelFour;
    (function (levelFour) {
        var LevelFourDataService = (function (_super) {
            __extends(LevelFourDataService, _super);
            function LevelFourDataService($http, $q) {
                _super.call(this, $http, $q);
                this.$http = $http;
                this.$q = $q;
            }
            LevelFourDataService.prototype.loadItemById = function (Id) {
                return this.getItemByKeyValue("LevelFourContent", "Id", Id);
            };
            return LevelFourDataService;
        }(App.BaseJsonDataService));
        levelFour.LevelFourDataService = LevelFourDataService;
    })(levelFour = App.levelFour || (App.levelFour = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map