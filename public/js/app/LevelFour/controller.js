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
                this.currentItemIdNav = JSON.parse(sessionStorage.getItem("NavArray"))[3];
                this.$scope.documentTypes = [];
                this.loadl4Item(this.currentItemIdNav.ContentId);
                this.loadDocumentFilters();
            }
            LevelFourController.prototype.loadl4Item = function (Id) {
                var _this = this;
                this.dataService.loadItemById(Id)
                    .then(function (data) {
                    _this.$scope.currentItem = data[0];
                });
            };
            LevelFourController.prototype.loadDocumentFilters = function () {
                var _this = this;
                this.dataService.getDocumentTypeFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.documentTypes, data);
                });
            };
            LevelFourController.$inject = ['$scope', '$timeout', 'dataService'];
            return LevelFourController;
        }(App.BaseController));
        levelFour.LevelFourController = LevelFourController;
    })(levelFour = App.levelFour || (App.levelFour = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map