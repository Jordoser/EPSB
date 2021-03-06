var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelTwo;
    (function (levelTwo) {
        "use strict";
        var LevelTwoController = (function (_super) {
            __extends(LevelTwoController, _super);
            function LevelTwoController($scope, $timeout, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                $('.collapse').collapse();
                this.$scope.sectionItems = [];
                this.$scope.documentTypes = [];
                this.$scope.relatedNews = [];
                this.$scope.relatedApps = [];
                this.$scope.relatedContacts = [];
                this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                this.currentItemIdNav = this.navArray[1];
                this.$scope.employeeBar = this.navArray[0].Id == "Employee Essentials";
                this.loadl2Item(this.currentItemIdNav.ContentId);
            }
            LevelTwoController.prototype.loadl2Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                    if (data[0]) {
                        _this.loadRelatedNews(data[0].Tags);
                        _this.loadRelatedApps(data[0].Tags);
                        _this.loadRelatedContacts(data[0].Tags);
                    }
                    _this.loadSectionItems(_this.$scope.currentItem.Id);
                    _this.loadDocumentFilters();
                });
            };
            LevelTwoController.prototype.loadSectionItems = function (Id) {
                var _this = this;
                this.dataService.getSectionItemsById(Id)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.sectionItems, data);
                });
            };
            LevelTwoController.prototype.redirectToSectionItem = function (item) {
                this.navArray[2] = item;
                App.Common.navigateL3(this.navArray);
            };
            LevelTwoController.prototype.loadRelatedNews = function (Tags) {
                var _this = this;
                this.dataService.getItemsByTag(Tags, "NewsItems")
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedNews, data);
                    for (var i = 0; i < _this.$scope.relatedNews.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedNews[i]);
                    }
                });
            };
            LevelTwoController.prototype.loadRelatedApps = function (Tags) {
                var _this = this;
                this.dataService.getRelatedApps(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedApps, data);
                    for (var i = 0; i < _this.$scope.relatedApps.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedApps[i]);
                    }
                });
            };
            //Todo add load related contacts
            LevelTwoController.prototype.loadRelatedContacts = function (Tags) {
                var _this = this;
                this.dataService.getRelatedContacts(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedContacts, data);
                    // for(var i = 0; i < this.$scope.relatedApps.length; i++){
                    //   this.loadMetadata(this.$scope.relatedContacts[i]);
                    // }
                });
            };
            LevelTwoController.prototype.loadDocumentFilters = function () {
                var _this = this;
                this.dataService.getDocumentTypeFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.documentTypes, data);
                    for (var i = 0; i < _this.$scope.documentTypes.length; i++) {
                        _this.$scope.documentTypes[i].Documents = [];
                        _this.loadDocumentForTag([_this.$scope.currentItem.Id, data[i].Tag], _this.$scope.documentTypes[i].Documents);
                    }
                });
            };
            LevelTwoController.prototype.loadDocumentForTag = function (Tags, refrenceArray) {
                var _this = this;
                this.dataService.getTaggedDocuments(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(refrenceArray, data);
                    for (var i = 0; i < refrenceArray.length; i++) {
                        _this.loadMetadata(refrenceArray[i]);
                    }
                });
            };
            LevelTwoController.prototype.loadMetadata = function (Item) {
                this.dataService.getMetadataById(Item.MetadataId)
                    .then(function (data) {
                    Item.Metadata = data[0];
                });
            };
            LevelTwoController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelTwoController;
        }(App.BaseController));
        levelTwo.LevelTwoController = LevelTwoController;
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map