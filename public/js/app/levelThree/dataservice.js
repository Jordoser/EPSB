var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelThree;
    (function (levelThree) {
        var LevelThreeDataService = (function (_super) {
            __extends(LevelThreeDataService, _super);
            function LevelThreeDataService($http, $q) {
                _super.call(this, $http, $q);
                this.$http = $http;
                this.$q = $q;
            }
            LevelThreeDataService.prototype.loadItemById = function (Id) {
                return this.getItemByKeyValue("LevelThreeContent", "Id", Id);
            };
            LevelThreeDataService.prototype.getSectionItemsById = function (Id) {
                return this.getItemByKeyValue("LevelFourNavItems", "l3NavId", Id);
            };
            LevelThreeDataService.prototype.getRelatedNews = function (Tags) {
                return this.getItemsByTag(Tags, "NewsItems");
            };
            LevelThreeDataService.prototype.getRelatedApps = function (Tags) {
                return this.getItemsByTag(Tags, "Applications");
            };
            LevelThreeDataService.prototype.getRelatedContacts = function (Tags) {
                return this.getItemsByTag(Tags, "UserContacts");
            };
            LevelThreeDataService.prototype.getMetadata = function (item) {
                return this.expandPropery([item.MetadataId], "Metadata", "Id");
            };
            return LevelThreeDataService;
        }(App.BaseJsonDataService));
        levelThree.LevelThreeDataService = LevelThreeDataService;
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map