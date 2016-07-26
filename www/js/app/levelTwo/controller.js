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
                this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[1];
                this.loadl2Item(this.currentItemIdNav.ContentId);
            }
            LevelTwoController.prototype.loadl2Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                });
            };
            LevelTwoController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelTwoController;
        }(App.BaseController));
        levelTwo.LevelTwoController = LevelTwoController;
    })(levelTwo = App.levelTwo || (App.levelTwo = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map