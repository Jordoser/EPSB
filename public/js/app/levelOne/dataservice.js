var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelOne;
    (function (levelOne) {
        var LevelOneDataService = (function (_super) {
            __extends(LevelOneDataService, _super);
            function LevelOneDataService($http, $q) {
                _super.call(this, $http, $q);
                this.$http = $http;
                this.$q = $q;
            }
            LevelOneDataService.prototype.getItemById = function (Id) {
                return this.getItemByKeyValue("LevelOneContent", "Id", Id);
            };
            LevelOneDataService.prototype.getSectionItemsById = function (Id) {
                return this.getItemByKeyValue("LevelTwoNavItems", "l1NavId", Id);
            };
            return LevelOneDataService;
        }(App.BaseJsonDataService));
        levelOne.LevelOneDataService = LevelOneDataService;
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map