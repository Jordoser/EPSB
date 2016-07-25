var App;
(function (App) {
    var gradeAndSubject;
    (function (gradeAndSubject) {
        "use strict";
        angular.module('gradeAndSubjectApp', [])
            .controller('gradeAndSubjectController', gradeAndSubject.GradeAndSubjectController)
            .service('dataService', gradeAndSubject.GradeAndSubjectDataService);
    })(gradeAndSubject = App.gradeAndSubject || (App.gradeAndSubject = {}));
})(App || (App = {}));
//# sourceMappingURL=main.js.map