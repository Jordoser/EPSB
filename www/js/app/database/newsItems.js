var App;
(function (App) {
    var NewsItemDatabase = (function () {
        function NewsItemDatabase() {
            this.NewsItems = {
                "NewsItem1": {
                    "Id": "News1",
                    "Name": "Dunluce students celebrate their reading goal with 'pie in the face' event",
                    "Description": "Students from Dunluce School collectively read more than 1.1 million minutes this last school year and celebrated by\
           holding an event where they could throw pies at their principal or homeroom teachers. Students threw pies at Bryan Evans ...",
                    "Tags": ["Around the District", "Featured"],
                    "Image": "http://gossipandgab.com/wp-content/uploads/2015/01/High-School-Teacher-and-Students-Dance-To-Uptown-Funk-500x282.jpg",
                    "MetadataId": "NewsItem1"
                },
                "NewsItem2": {
                    "Id": "News2",
                    "Name": "Distribution Centre closed for inventory August 15–19",
                    "Description": "The Distribution Centre will be closed for inventory count for the week of August 15–19. No orders will be processed during this time.",
                    "Tags": ["School Operations"],
                    "MetadataId": "NewsItem2"
                },
                "NewsItem3": {
                    "Id": "News3",
                    "Name": "Important PeopleSoft 9.2 upgrade information for District staff",
                    "Description": "The PeopleSoft 9.2 upgrade remains on schedule and the transition to the new version of PeopleSoft will still take place over the August long weekend.",
                    "Tags": ["Employee Essentials"],
                    "MetadataId": "NewsItem3"
                },
                "NewsItem4": {
                    "Id": "News4",
                    "Name": "Year-end message from the Superintendent",
                    "Description": "It's the last week of school. To wrap up everything on a good note, here are a few words from the Superintendent. Have a great summer everyone!",
                    "Tags": ["Superintendent"],
                    "MetadataId": "NewsItem4"
                },
                "NewsItem5": {
                    "Id": "News5",
                    "Name": "Prescription and Non-Prescription Medication Management Policy Update",
                    "Description": "The Prescription and Non-Prescription Medication Management Policy has been revised to align with changes to the way medical management information will be collected and documented, which will now include non-prescription medication.",
                    "Tags": ["Student Management"],
                    "MetadataId": "NewsItem4"
                },
                "NewsItem6": {
                    "Id": "News6",
                    "Name": "Alberta Education announcement: new curriculum development",
                    "Description": "On June 15, 2016, the Minister of Education announced a new plan for provincial curriculum development.",
                    "Tags": ["Curriculum & Assessment"],
                    "MetadataId": "NewsItem4"
                },
                "NewsItem7": {
                    "Id": "News7",
                    "Name": "Updated lists of authorized locally developed courses for 2016–2017",
                    "Description": "Throughout 2015–2016, locally developed courses (LDCs) have been revised, newly acquired or discontinued. A complete and updated list of all locally developed courses authorized for use in the District for 2016–2017 is available.",
                    "Tags": ["Curriculum & Assessment"],
                    "MetadataId": "NewsItem4"
                }
            };
        }
        return NewsItemDatabase;
    }());
    App.NewsItemDatabase = NewsItemDatabase;
})(App || (App = {}));
//# sourceMappingURL=newsItems.js.map