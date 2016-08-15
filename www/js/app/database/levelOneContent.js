var App;
(function (App) {
    var LevelOneContentDatabase = (function () {
        function LevelOneContentDatabase() {
            this.LevelOneContent = {
                "LevelOneContent1": {
                    "Id": "School Operations",
                    "Description": "Information and resources you need to manage the daily operations for your school.",
                    "RelatedTopics": "",
                    "PageAuditId": "School Operations",
                    "Tags": ["School Operations"]
                },
                "LevelOneContent2": {
                    "Id": "Central Staff Resources",
                    "Description": "Resources for central staff.",
                    "RelatedTopics": "",
                    "PageAuditId": "Central Staff Resources",
                    "Tags": ["Central Staff Resources"]
                }
            };
        }
        return LevelOneContentDatabase;
    }());
    App.LevelOneContentDatabase = LevelOneContentDatabase;
})(App || (App = {}));
//# sourceMappingURL=levelOneContent.js.map