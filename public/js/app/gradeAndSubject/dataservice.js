var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var gradeAndSubject;
    (function (gradeAndSubject) {
        var GradeAndSubjectDataService = (function (_super) {
            __extends(GradeAndSubjectDataService, _super);
            function GradeAndSubjectDataService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                return _this;
            }
            GradeAndSubjectDataService.prototype.getGradeFilters = function () {
                return this.getItems("GradeFilters");
            };
            GradeAndSubjectDataService.prototype.getSubjectFilters = function () {
                return this.getItems("SubjectFilters");
            };
            GradeAndSubjectDataService.prototype.getTypeFilters = function () {
                return this.getItems("ResourceTypeFilters");
            };
            GradeAndSubjectDataService.prototype.getResources = function (filters) {
                return this.getItemsByTag(filters, "Resources");
            };
            GradeAndSubjectDataService.prototype.getMetadata = function (item) {
                return this.expandPropery([item.MetadataId], "Metadata", "Id");
            };
            return GradeAndSubjectDataService;
        }(App.BaseJsonDataService));
        gradeAndSubject.GradeAndSubjectDataService = GradeAndSubjectDataService;
    })(gradeAndSubject = App.gradeAndSubject || (App.gradeAndSubject = {}));
})(App || (App = {}));
//# sourceMappingURL=dataservice.js.map