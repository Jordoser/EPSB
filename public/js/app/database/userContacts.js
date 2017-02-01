var App;
(function (App) {
    var UserContactDatabase = (function () {
        function UserContactDatabase() {
            this.UserContacts = {
                "Contact1": {
                    "Id": "Simon Greefield",
                    "Name": "Simon Greenfield",
                    "PositionId": "Equipment Manager",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com",
                    "Tags": ["School Operations"]
                },
                "Contact2": {
                    "Id": "David Latter",
                    "Name": "David Latter",
                    "PositionId": "Equipment Manager",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com",
                    "Tags": ["Budget & Finance"]
                },
                "Contact3": {
                    "Id": "Linda Jones",
                    "Name": "Linda Jones",
                    "PositionId": "Rental Services",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com",
                    "Tags": ["Building & Systems"]
                },
                "Contact4": {
                    "Id": "Shirley Chandler",
                    "Name": "Shirley Chandler",
                    "PositionId": "Rental Services",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com",
                    "Tags": ["Vandalism"]
                },
                "Contact5": {
                    "Id": "Steve Larson",
                    "Name": "Steve Larson",
                    "PositionId": "Position Title",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com",
                    "Tags": [""]
                }
            };
        }
        return UserContactDatabase;
    }());
    App.UserContactDatabase = UserContactDatabase;
})(App || (App = {}));
//# sourceMappingURL=userContacts.js.map