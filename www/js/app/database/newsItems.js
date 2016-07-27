var App;
(function (App) {
    var NewsItemDatabase = (function () {
        function NewsItemDatabase() {
            this.NewsItems = {
                "NewsItem1": {
                    "Id": "News1",
                    "Name": "This is the news 1 Title the news here should be read",
                    "Description": "This is a breif description of the news item and what its all about",
                    "Tags": ["Appliances", "Rental Services", "School Administration"],
                    "MetadataId": "NewsItem1"
                },
                "NewsItem2": {
                    "Id": "News2",
                    "Name": "This is the news 2 Title",
                    "Description": "This is a breif description of the news item and what its all about",
                    "Tags": ["Rental Services"]
                },
                "NewsItem3": {
                    "Id": "News3",
                    "Name": "This is the news 3 Title",
                    "Description": "This is a breif description of the news item and what its all about",
                    "Tags": ["Appliances"]
                },
                "NewsItem4": {
                    "Id": "News4",
                    "Name": "This is the news 3 Title",
                    "Description": "This is a breif description of the news item and what its all about",
                    "Tags": ["Appliances"]
                }
            };
        }
        return NewsItemDatabase;
    }());
    App.NewsItemDatabase = NewsItemDatabase;
})(App || (App = {}));
//# sourceMappingURL=newsItems.js.map