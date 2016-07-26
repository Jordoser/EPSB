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
                this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[2];
                this.loadl3Item(this.currentItemIdNav.ContentId);
            }
            LevelThreeController.prototype.loadl3Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                });
            };
            LevelThreeController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelThreeController;
        }(App.BaseController));
        levelThree.LevelThreeController = LevelThreeController;
    })(levelThree = App.levelThree || (App.levelThree = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map