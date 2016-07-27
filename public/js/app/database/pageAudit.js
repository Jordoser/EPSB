var App;
(function (App) {
    var PageAuditDatabase = (function () {
        function PageAuditDatabase() {
            this.PageAudits = {
                "PageAudit1": {
                    "Id": "Appliances",
                    "LastUpdatedDate": "5/17/2016",
                    "LastUpdatedBy": "Cindy Blackwell"
                },
                "PageAudit2": {
                    "Id": "Rental Services",
                    "LastUpdatedDate": "2/22/2014",
                    "LastUpdatedBy": "Mitchell Stevens"
                }
            };
        }
        return PageAuditDatabase;
    }());
    App.PageAuditDatabase = PageAuditDatabase;
})(App || (App = {}));
//# sourceMappingURL=pageAudit.js.map