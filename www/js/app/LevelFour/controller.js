var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var levelFour;
    (function (levelFour) {
        "use strict";
        var LevelFourController = (function (_super) {
            __extends(LevelFourController, _super);
            function LevelFourController($scope, $timeout, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                $('.collapse').collapse();
                this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[3];
                this.$scope.documentTypes = [];
                this.loadl4Item(this.currentItemIdNav.ContentId);
                this.navArray = [];
                this.$scope.relatedNews = [];
                this.$scope.relatedApps = [];
                this.$scope.relatedContacts = [];
                //this.$scope.employeeBar =  this.navArray[0].Id == "Employee Essentials"
            }
            LevelFourController.prototype.loadl4Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                    if (data[0]) {
                        _this.loadRelatedNews(data[0].Tags);
                        _this.loadRelatedApps(data[0].Tags);
                        _this.loadRelatedContacts(data[0].Tags);
                    }
                    _this.loadDocumentFilters();
                });
            };
            LevelFourController.prototype.loadRelatedNews = function (Tags) {
                var _this = this;
                this.dataService.getItemsByTag(Tags, "NewsItems")
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedNews, data);
                    for (var i = 0; i < _this.$scope.relatedNews.length; i++) {
                        _this.loadMetadata(_this.$scope.relatedNews[i]);
                    }
                });
            };
            LevelFourController.prototype.loadRelatedApps = function (Tags) {
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
            LevelFourController.prototype.loadRelatedContacts = function (Tags) {
                var _this = this;
                this.dataService.getRelatedContacts(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.relatedContacts, data);
                    // for(var i = 0; i < this.$scope.relatedApps.length; i++){
                    //   this.loadMetadata(this.$scope.relatedContacts[i]);
                    // }
                });
            };
            LevelFourController.prototype.loadDocumentFilters = function () {
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
            LevelFourController.prototype.loadMetadata = function (Item) {
                this.dataService.getMetadataById(Item.MetadataId)
                    .then(function (data) {
                    Item.Metadata = data[0];
                });
            };
            LevelFourController.prototype.loadDocumentForTag = function (Tags, refrenceArray) {
                var _this = this;
                this.dataService.getTaggedDocuments(Tags)
                    .then(function (data) {
                    App.Common.replaceArrayContents(refrenceArray, data);
                    for (var i = 0; i < refrenceArray.length; i++) {
                        _this.loadMetadata(refrenceArray[i]);
                    }
                });
            };
            LevelFourController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelFourController;
        }(App.BaseController));
        levelFour.LevelFourController = LevelFourController;
    })(levelFour = App.levelFour || (App.levelFour = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map