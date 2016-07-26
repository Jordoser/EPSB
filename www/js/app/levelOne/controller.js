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
                this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[0];
                this.loadl1Item(this.currentItemIdNav.ContentId);
            }
            LevelOneController.prototype.loadl1Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                });
            };
            LevelOneController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelOneController;
        }(App.BaseController));
        levelOne.LevelOneController = LevelOneController;
    })(levelOne = App.levelOne || (App.levelOne = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map