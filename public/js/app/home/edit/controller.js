var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Home;
    (function (Home) {
        var Edit;
        (function (Edit) {
            "use strict";
            var HomeEditController = (function (_super) {
                __extends(HomeEditController, _super);
                function HomeEditController($scope, $timeout, dataService) {
                    var _this = _super.call(this, $scope, $timeout, dataService) || this;
                    _this.$scope = $scope;
                    _this.$timeout = $timeout;
                    _this.dataService = dataService;
                    _this.objectId = sessionStorage.getItem("Id");
                    sessionStorage.removeItem("Id");
                    if (_this.objectId) {
                        _this.loadObject();
                        _this.loadRelatedObjects();
                        _this.$scope.editObject = false;
                    }
                    else {
                        _this.$scope.editObject = true;
                        _this.objectId = App.Common.guid();
                        _this.$scope.object = {
                            Id: _this.objectId,
                            Description: "",
                            Name: "",
                            IsDeleted: false
                        };
                    }
                    _this.$scope.searchResults = [];
                    return _this;
                }
                HomeEditController.prototype.loadObject = function () {
                    var _this = this;
                    this.dataService.getTestItemById(this.objectId)
                        .then(function (data) {
                        _this.$scope.object = data[0];
                    })
                        .catch(function (ex) {
                        alert(ex);
                    });
                };
                HomeEditController.prototype.loadRelatedObjects = function () {
                    var _this = this;
                    this.dataService.getRelatedItemsForObject(this.objectId)
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
                HomeEditController.prototype.saveTestObject = function () {
                    this.dataService.saveTestObject(this.$scope.object);
                    this.$scope.editObject = false;
                    this.loadObject;
                };
                return HomeEditController;
            }(App.BaseController));
            HomeEditController.$inject = ['$scope', '$timeout', 'dataService'];
            Edit.HomeEditController = HomeEditController;
        })(Edit = Home.Edit || (Home.Edit = {}));
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map