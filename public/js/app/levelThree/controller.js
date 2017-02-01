var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelThree;
    (function (levelThree) {
        "use strict";
        var LevelThreeController = (function (_super) {
            __extends(LevelThreeController, _super);
            function LevelThreeController($scope, $timeout, dataService) {
                var _this = _super.call(this, $scope, $timeout, $timeout) || this;
                _this.$scope = $scope;
                _this.$timeout = $timeout;
                _this.dataService = dataService;
                $('.collapse').collapse();
<<<<<<< HEAD
                _this.$scope.sectionItems = [];
                _this.$scope.documentTypes = [];
                _this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                _this.$scope.employeeBar = _this.navArray[0].Id == "Employee Essentials";
                _this.currentItemIdNav = _this.navArray[2];
                _this.loadl3Item(_this.currentItemIdNav.ContentId);
                return _this;
=======
                this.$scope.sectionItems = [];
                this.$scope.documentTypes = [];
                this.$scope.relatedNews = [];
                this.$scope.relatedApps = [];
                this.$scope.relatedContacts = [];
                this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                this.$scope.employeeBar = this.navArray[0].Id == "Employee Essentials";
                this.currentItemIdNav = this.navArray[2];
                this.loadl3Item(this.currentItemIdNav.ContentId);
>>>>>>> origin/master
            }
            LevelThreeController.prototype.loadl3Item = function (Id) {
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
            LevelThreeController.prototype.loadSectionItems = function (Id) {
                var _this = this;
                this.dataService.getSectionItemsById(Id)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.sectionItems, data);
                });
            };
            LevelThreeController.prototype.redirectToSectionItem = function (item) {
                this.navArray[3] = item;
                App.Common.navigateL4(this.navArray);
            };
            LevelThreeController.prototype.loadDocumentFilters = function () {
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
            LevelThreeController.prototype.loadRelatedNews = function (Tags) {
                var _this = this;
                this.dataService.getItemsByTag(Tags, "NewsItems")
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedNews, data);
                    for (var i = 0; i < _this.$scope.relatedNews.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedNews[i]);
                    }
                });
            };
            LevelThreeController.prototype.loadRelatedApps = function (Tags) {
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
            LevelThreeController.prototype.loadRelatedContacts = function (Tags) {
                var _this = this;
                this.dataService.getRelatedContacts(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedContacts, data);
                    // for(var i = 0; i < this.$scope.relatedApps.length; i++){
                    //   this.loadMetadata(this.$scope.relatedContacts[i]);
                    // }
                });
            };
            LevelThreeController.prototype.loadMetadata = function (Item) {
                this.dataService.getMetadataById(Item.MetadataId)
                    .then(function (data) {
                    Item.Metadata = data[0];
                });
            };
            LevelThreeController.prototype.loadDocumentForTag = function (Tags, refrenceArray) {
                var _this = this;
                this.dataService.getTaggedDocuments(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(refrenceArray, data);
                    for (var i = 0; i < refrenceArray.length; i++) {
                        _this.loadMetadata(refrenceArray[i]);
                    }
                });
            };
            return LevelThreeController;
        }(App.BaseController));
        LevelThreeController.$inject = ['$scope', '$timeout', 'dataService'];
        levelThree.LevelThreeController = LevelThreeController;
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map