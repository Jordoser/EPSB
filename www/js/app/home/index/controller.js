var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Home;
    (function (Home) {
        var Index;
        (function (Index) {
            "use strict";
            var HomeIndexController = (function (_super) {
                __extends(HomeIndexController, _super);
                function HomeIndexController($scope, $timeout, dataService) {
                    _super.call(this, $scope, $timeout, dataService);
                    this.$scope = $scope;
                    this.$timeout = $timeout;
                    this.dataService = dataService;
                    this.$scope.name = "Search Database";
                    this.$scope.searchString = "";
                    this.$scope.searchResults = [];
                    $(".custom-container").css("margin-top", "160px");
                    this.$scope.newsItems = [];
                    this.loadNewsitems();
                    this.$scope.currentUser = sessionStorage.getItem("CurrentUser");
                    if (!this.$scope.currentUser) {
                        this.$scope.currentUser = "Samantha Nugent";
                    }
                }
                HomeIndexController.prototype.alert = function () {
                    var _this = this;
                    this.dataService.getTestItemById(this.$scope.searchString)
                        .then(function (data) {
                        _this.$scope.searchResults.length = 0;
                        for (var i = 0; i < data.length; i++) {
                            _this.$scope.searchResults.push(data[i]);
                        }
                    })
                        .catch(function (ex) {
                        alert(ex);
                    });
                };
                HomeIndexController.prototype.redirectToObject = function (id) {
                    if (id) {
                        sessionStorage.setItem("Id", id);
                    }
                    window.location.href = "editTestItem.html";
                };
                HomeIndexController.prototype.loadNewsitems = function () {
                    var _this = this;
                    this.dataService.getNewsItems()
                        .then(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Tags.indexOf("Featured") > -1 && !_this.$scope.featuredStory) {
                                _this.$scope.featuredStory = data[i];
                                var truncate = data[i].Description.length > 125;
                                if (truncate) {
                                    _this.$scope.featuredStory.Description = _this.$scope.featuredStory.Description.substring(0, 125) + " ...";
                                }
                                _this.loadMetadata(_this.$scope.featuredStory);
                            }
                            else {
                                _this.$scope.newsItems.push(data[i]);
                                var indexOf = _this.$scope.newsItems.indexOf(data[i]);
                                _this.loadMetadataForArray(data[i], indexOf, _this.$scope.newsItems);
                            }
                        }
                    });
                };
                HomeIndexController.prototype.loadMetadataForArray = function (resource, index, returnArray) {
                    this.dataService.getMetadata(resource).then(function (data) {
                        returnArray[index].Metadata = data[0];
                    });
                };
                HomeIndexController.prototype.loadMetadata = function (item) {
                    this.dataService.getMetadata(item).then(function (data) {
                        item.Metadata = data[0];
                    });
                };
                HomeIndexController.$inject = ['$scope', '$timeout', 'dataService'];
                return HomeIndexController;
            }(App.BaseController));
            Index.HomeIndexController = HomeIndexController;
        })(Index = Home.Index || (Home.Index = {}));
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map