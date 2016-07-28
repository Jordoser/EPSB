var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelTwo;
    (function (levelTwo) {
        var LevelTwoDataService = (function (_super) {
            __extends(LevelTwoDataService, _super);
            function LevelTwoDataService($http, $q) {
                _super.call(this, $http, $q);
                this.$http = $http;
                this.$q = $q;
            }
            LevelTwoDataService.prototype.loadItemById = function (Id) {
                return this.getItemByKeyValue("LevelTwoContent", "Id", Id);
            };
            LevelTwoDataService.prototype.getSectionItemsById = function (Id) {
                return this.getItemByKeyValue("LevelThreeNavItems", "l2NavId", Id);
            };
            return LevelTwoDataService;
        }(App.BaseJsonDataService));
        levelTwo.LevelTwoDataService = LevelTwoDataService;
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map