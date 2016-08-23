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
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                $('.collapse').collapse();
                this.$scope.sectionItems = [];
                this.$scope.documentTypes = [];
                this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                this.$scope.employeeBar = this.navArray[0].Id == "Employee Essentials";
                this.currentItemIdNav = this.navArray[2];
                this.loadl3Item(this.currentItemIdNav.ContentId);
            }
            LevelThreeController.prototype.loadl3Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
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
            LevelThreeController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelThreeController;
        }(App.BaseController));
        levelThree.LevelThreeController = LevelThreeController;
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map