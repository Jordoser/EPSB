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
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                return _this;
            }
            LevelTwoDataService.prototype.loadItemById = function (Id) {
                return this.getItemByKeyValue("LevelTwoContent", "Id", Id);
            };
            LevelTwoDataService.prototype.getSectionItemsById = function (Id) {
                return this.getItemByKeyValue("LevelThreeNavItems", "l2NavId", Id);
            };
            LevelTwoDataService.prototype.getMetadataById = function (Id) {
                return this.expandPropery([Id], "Metadata", "Id");
            };
            LevelTwoDataService.prototype.getRelatedNews = function (Tags) {
                return this.getItemsByTag(Tags, "NewsItems");
            };
            LevelTwoDataService.prototype.getRelatedApps = function (Tags) {
                return this.getItemsByTag(Tags, "Applications");
            };
            LevelTwoDataService.prototype.getRelatedContacts = function (Tags) {
                return this.getItemsByTag(Tags, "UserContacts");
            };
            LevelTwoDataService.prototype.getMetadata = function (item) {
                return this.expandPropery([item.MetadataId], "Metadata", "Id");
            };
            return LevelTwoDataService;
        }(App.BaseJsonDataService));
        levelTwo.LevelTwoDataService = LevelTwoDataService;
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map