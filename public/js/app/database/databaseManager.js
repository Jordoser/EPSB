var App;
(function (App) {
    var JSONDatabase = (function () {
        function JSONDatabase() {
            var navItems = new App.NavItemsDatabase();
            this.LevelOneNavItems = navItems.LevelOneNavItems;
            this.LevelTwoNavItems = navItems.LevelTwoNavItems;
            this.LevelThreeNavItems = navItems.LevelThreeNavItems;
            this.LevelFourNavItems = navItems.LevelFourNavItems;
            var levelOneContent = new App.LevelOneContentDatabase();
            this.LevelOneContent = levelOneContent.LevelOneContent;
            var levelTwoContent = new App.LevelTwoContentDatabase();
            this.LevelTwoContent = levelTwoContent.LevelTwoContent;
            var levelThreeContent = new App.LevelThreeContentDatabase();
            this.LevelThreeContent = levelThreeContent.LevelThreeContent;
            var levelFourContent = new App.LevelFourContentDatabase();
            this.LevelFourContent = levelFourContent.LevelFourContent;
            var pageAudits = new App.PageAuditDatabase();
            this.PageAudits = pageAudits.PageAudits;
            var userContacts = new App.UserContactDatabase();
            this.UserContacts = userContacts.UserContacts;
            var newsItems = new App.NewsItemDatabase();
            this.NewsItems = newsItems.NewsItems;
            var tagFilters = new App.TagFilterDatabase();
            this.ResourceTypeFilters = tagFilters.ResourceTypeFilters;
            this.GradeFilters = tagFilters.GradeFilters;
            this.SubjectFilters = tagFilters.SubjectFilters;
            this.DocumentTypeFilters = tagFilters.DocumentTypeFilters;
            var resources = new App.ResourcesDatabase();
            this.Resources = resources.Resources;
            var applications = new App.ApplicationsDatabase();
            this.Applications = applications.Applications;
            var metadata = new App.MetadataDatabase();
            this.Metadata = metadata.Metadata;
        }
        return JSONDatabase;
    }());
    App.JSONDatabase = JSONDatabase;
})(App || (App = {}));
//# sourceMappingURL=databaseManager.js.map