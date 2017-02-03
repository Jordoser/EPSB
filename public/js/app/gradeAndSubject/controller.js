var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var gradeAndSubject;
    (function (gradeAndSubject) {
        "use strict";
        var GradeAndSubjectController = (function (_super) {
            __extends(GradeAndSubjectController, _super);
            function GradeAndSubjectController($scope, $timeout, dataService) {
                _super.call(this, $scope, $timeout, $timeout);
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.dataService = dataService;
                this.$scope.resourceArray = [];
                this.$scope.gradeArray = [];
                this.$scope.subjectArray = [];
                this.$scope.typeArray = [];
                this.$scope.gradeFilter = "";
                this.$scope.subjectFilter = "";
                this.$scope.typeFilter = "";
                this.loadGradeFilters();
                this.loadSubjectFilters();
                this.loadTypeFilters();
            }
            GradeAndSubjectController.prototype.loadGradeFilters = function () {
                var _this = this;
                this.dataService.getGradeFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.gradeArray, data);
                });
            };
            GradeAndSubjectController.prototype.loadTypeFilters = function () {
                var _this = this;
                this.dataService.getTypeFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.typeArray, data);
                });
            };
            GradeAndSubjectController.prototype.loadSubjectFilters = function () {
                var _this = this;
                this.dataService.getSubjectFilters()
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.subjectArray, data);
                });
            };
            GradeAndSubjectController.prototype.loadResources = function () {
                var _this = this;
                if (this.$scope.gradeFilter == "" && this.$scope.subjectFilter == "" && this.$scope.typeFilter == "") {
                    this.$scope.resourceArray.length = 0;
                    return;
                }
                this.dataService.getResources([this.$scope.gradeFilter, this.$scope.subjectFilter, this.$scope.typeFilter])
                    .then(function (data) {
                    App.Common.replaceArrayContents(_this.$scope.resourceArray, data);
                    for (var i = 0; i < _this.$scope.resourceArray.length; i++) {
                        _this.loadMetadata(_this.$scope.resourceArray[i], i);
                    }
                });
            };
            GradeAndSubjectController.prototype.loadMetadata = function (resource, index) {
                var _this = this;
                this.dataService.getMetadata(resource)
                    .then(function (data) {
                    _this.$scope.resourceArray[index].Metadata = data[0];
                });
            };
            GradeAndSubjectController.$inject = ['$scope', '$timeout', 'dataService'];
            return GradeAndSubjectController;
        }(App.BaseController));
        gradeAndSubject.GradeAndSubjectController = GradeAndSubjectController;
    })(gradeAndSubject = App.gradeAndSubject || (App.gradeAndSubject = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map