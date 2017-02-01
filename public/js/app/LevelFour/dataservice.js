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
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                return _this;
            }
            LevelFourDataService.prototype.loadItemById = function (Id) {
                return this.getItemByKeyValue("LevelFourContent", "Id", Id);
            };
            LevelFourDataService.prototype.getRelatedNews = function (Tags) {
                return this.getItemsByTag(Tags, "NewsItems");
            };
            LevelFourDataService.prototype.getRelatedApps = function (Tags) {
                return this.getItemsByTag(Tags, "Applications");
            };
            LevelFourDataService.prototype.getRelatedContacts = function (Tags) {
                return this.getItemsByTag(Tags, "UserContacts");
            };
            LevelFourDataService.prototype.getMetadata = function (item) {
                return this.expandPropery([item.MetadataId], "Metadata", "Id");
            };
            return LevelFourDataService;
        }(App.BaseJsonDataService));
        levelFour.LevelFourDataService = LevelFourDataService;
    })(levelFour = App.levelFour || (App.levelFour = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map