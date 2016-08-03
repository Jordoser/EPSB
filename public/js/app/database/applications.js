var App;
(function (App) {
    var ApplicationsDatabase = (function () {
        function ApplicationsDatabase() {
            this.Applications = {
                "Application1": {
                    "Id": "PowerTeacher",
                    "Name": "PowerTeacher",
                    "Favorite": "true",
                    "Tags": ["School Administration"]
                },
                "Application2": {
                    "Id": "Pinpoint Student",
                    "Name": "Pinpoint Student",
                    "Favorite": "true",
                    "Tags": ["School Administration"]
                },
                "Application3": {
                    "Id": "SchoolZone",
                    "Name": "SchoolZone",
                    "Favorite": "false",
                    "Tags": ["School Administration"]
                }
            };
        }
        return ApplicationsDatabase;
    }());
    App.ApplicationsDatabase = ApplicationsDatabase;
})(App || (App = {}));
//# sourceMappingURL=applications.js.map