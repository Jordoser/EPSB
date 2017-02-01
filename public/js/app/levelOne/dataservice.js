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
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                return _this;
            }
            LevelOneDataService.prototype.getItemById = function (Id) {
                return this.getItemByKeyValue("LevelOneContent", "Id", Id);
            };
            LevelOneDataService.prototype.getSectionItemsById = function (Id) {
                return this.getItemByKeyValue("LevelTwoNavItems", "l1NavId", Id);
            };
            LevelOneDataService.prototype.getL3NavItems = function (levelTwoId) {
                return this.getItemByKeyValue("LevelThreeNavItems", "l2NavId", levelTwoId);
            };
            LevelOneDataService.prototype.getRelatedNews = function (Tags) {
                return this.getItemsByTag(Tags, "NewsItems");
            };
            LevelOneDataService.prototype.getRelatedApps = function (Tags) {
                return this.getItemsByTag(Tags, "Applications");
            };
            LevelOneDataService.prototype.getRelatedContacts = function (Tags) {
                return this.getItemsByTag(Tags, "UserContacts");
            };
            LevelOneDataService.prototype.getMetadata = function (item) {
                return this.expandPropery([item.MetadataId], "Metadata", "Id");
            };
            return LevelOneDataService;
        }(App.BaseJsonDataService));
        levelOne.LevelOneDataService = LevelOneDataService;
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map