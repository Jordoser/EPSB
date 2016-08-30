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
            function LevelOneController($scope, $timeout, $q, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.$q = $q;
                this.dataService = dataService;
                this.$scope.sectionItems = [];
                this.$scope.relatedNews = [];
                this.$scope.relatedApps = [];
                this.$scope.documentTypes = [];
                this.$scope.l3NavItems = [];
                this.navArray = JSON.parse(sessionStorage.getItem("NavArray"));
                this.currentItemIdNav = this.navArray[0];
                this.$scope.employeeBar = this.navArray[0].Id == "Employee Essentials";
                this.loadl1Item(this.currentItemIdNav.ContentId);
                this.loadDocumentFilters();
            }
            LevelOneController.prototype.alertTest = function () {
                alert("Test");
            };
            LevelOneController.prototype.toggleExpandingNav = function () {
                var menu = $('.expanding-nav');
                var contentArea = $('.content-area');
                var initialHeight = menu.height();
                menu.css("height", "auto");
                var menuHeight = menu.height();
                if (initialHeight) {
                    menu.animate({ "height": "0" }, 10);
                    contentArea.removeClass('content-area-open');
                    return;
                }
                menu.css("height", "0");
                menu.animate({ "height": menuHeight + "px" }, 10);
                contentArea.toggleClass('content-area-open');
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
            LevelOneController.prototype.mobileL1 = function (l1Nav, subNavIndex) {
                var _this = this;
                var allSubs = $('#levelOneDiv .mobile-l2');
                var nav = $('#levelOneDiv #' + subNavIndex + "-l1");
                allSubs.animate({ 'height': "0" }, 10);
                if (nav.hasClass('open-nav-item-mobile')) {
                    nav.removeClass('open-nav-item-mobile');
                    return;
                }
                this.loadNavItems(l1Nav)
                    .then(function (data) {
                    _this.$timeout(function () {
                        var subNav = $('#levelOneDiv #' + subNavIndex + "-l2");
                        subNav.css('height', 'auto');
                        var height = subNav.height();
                        subNav.css('height', '0');
                        subNav.animate({ 'height': height + "px" }, 10);
                    });
                });
                var allNavs = $('#levelOneDiv .mobile-row');
                allNavs.removeClass('open-nav-item-mobile');
                nav.toggleClass('open-nav-item-mobile');
            };
            LevelOneController.prototype.loadNavItems = function (item) {
                var _this = this;
                this.$scope.l3NavItems.length = 0;
                var deferred = this.$q.defer();
                this.dataService.getL3NavItems(item.Id)
                    .then(function (data) {
                    if (data.length == 0) {
                        deferred.resolve(false);
                    }
                    else {
                        deferred.resolve(true);
                        App.Common.replaceArrayContents(_this.$scope.l3NavItems, data);
                        for (var i = 0; i < _this.$scope.l3NavItems.length; i++) {
                            _this.$scope.l3NavItems[i].hasChildren = false;
                            _this.findl3Children(_this.$scope.l3NavItems[i]);
                        }
                    }
                });
                return deferred.promise;
            };
            LevelOneController.prototype.loadSectionItems = function (Id) {
                var _this = this;
                this.dataService.getSectionItemsById(Id)
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.sectionItems, data);
                    for (var i = 0; i < _this.$scope.sectionItems.length; i++) {
                        _this.$scope.sectionItems[i].hasChildren = false;
                        _this.findl3Children(_this.$scope.sectionItems[i]);
                    }
                });
            };
            LevelOneController.prototype.findl3Children = function (item) {
                this.dataService.getL3NavItems(item.Id)
                    .then(function (data) {
                    item.hasChildren = (data.length > 0);
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
            LevelOneController.prototype.loadDocumentFilters = function () {
                var _this = this;
                this.dataService.getDocumentTypeFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.documentTypes, data);
                    for (var i = 0; i < _this.$scope.documentTypes.length; i++) {
                        _this.$scope.documentTypes[i].Documents = [];
                        _this.loadDocumentForTag([_this.currentItemIdNav.Id, data[i].Tag], _this.$scope.documentTypes[i].Documents);
                    }
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
            LevelOneController.$inject = ['$scope', '$timeout', '$q', 'dataService'];
            return LevelOneController;
        }(App.BaseController));
        levelOne.LevelOneController = LevelOneController;
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map