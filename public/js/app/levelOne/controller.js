var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelOne;
    (function (levelOne) {
        "use strict";
        var LevelOneController = (function (_super) {
            __extends(LevelOneController, _super);
            function LevelOneController($scope, $timeout, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                this.$scope.sectionItems = [];
                this.$scope.relatedNews = [];
                this.$scope.relatedApps = [];
                this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                this.currentItemIdNav = this.navArray[0];
                this.$scope.employeeBar = this.navArray[0].Id == "Employee Essentials";
                this.loadl1Item(this.currentItemIdNav.ContentId);
            }
            LevelOneController.prototype.alertTest = function () {
                alert("Test");
            };
            LevelOneController.prototype.loadl1Item = function (Id) {
                var _this = this;
                this.dataService.getItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                    _this.loadSectionItems(Id);
                    if (data[0]) {
                        _this.loadRelatedNews(data[0].Tags);
                        _this.loadRelatedApps(data[0].Tags);
                    }
                });
            };
            LevelOneController.prototype.loadSectionItems = function (Id) {
                var _this = this;
                this.dataService.getSectionItemsById(Id)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.sectionItems, data);
                });
            };
            LevelOneController.prototype.redirectToSectionItem = function (item) {
                this.navArray[1] = item;
                App.Common.navigateL2(this.navArray);
            };
            LevelOneController.prototype.loadRelatedNews = function (Tags) {
                var _this = this;
                this.dataService.getItemsByTag(Tags, "NewsItems")
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedNews, data);
                    for (var i = 0; i < _this.$scope.relatedNews.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedNews[i]);
                    }
                });
            };
            LevelOneController.prototype.loadRelatedApps = function (Tags) {
                var _this = this;
                this.dataService.getRelatedApps(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedApps, data);
                    for (var i = 0; i < _this.$scope.relatedApps.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedApps[i]);
                    }
                });
            };
            LevelOneController.prototype.loadMetadata = function (Item) {
                this.dataService.getMetadataById(Item.MetadataId)
                    .then(function (data) {
                    Item.Metadata = data[0];
                });
            };
            LevelOneController.prototype.loadDocumentForTag = function (Tags, refrenceArray) {
                var _this = this;
                this.dataService.getTaggedDocuments(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(refrenceArray, data);
                    for (var i = 0; i < refrenceArray.length; i++) {
                        _this.loadMetadata(refrenceArray[i]);
                    }
                });
            };
            LevelOneController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelOneController;
        }(App.BaseController));
        levelOne.LevelOneController = LevelOneController;
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map