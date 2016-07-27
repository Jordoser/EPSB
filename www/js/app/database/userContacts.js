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
                    "Email": "first.last@domain.com"
                },
                "Contact2": {
                    "Id": "David Latter",
                    "Name": "David Latter",
                    "PositionId": "Equipment Manager",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com"
                },
                "Contact3": {
                    "Id": "Linda Jones",
                    "Name": "Linda Jones",
                    "PositionId": "Rental Services",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com"
                },
                "Contact4": {
                    "Id": "Shirley Chandler",
                    "Name": "Shirley Chandler",
                    "PositionId": "Rental Services",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com"
                },
                "Contact5": {
                    "Id": "Steve Larson",
                    "Name": "Steve Larson",
                    "PositionId": "IT Support",
                    "PhoneNumber": "780.444.2222 Ext. 123",
                    "Email": "first.last@domain.com"
                }
            };
        }
        return UserContactDatabase;
    }());
    App.UserContactDatabase = UserContactDatabase;
})(App || (App = {}));
//# sourceMappingURL=userContacts.js.map