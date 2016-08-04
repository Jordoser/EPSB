var App;
(function (App) {
    var DocumentsDatabase = (function () {
        function DocumentsDatabase() {
            this.Documents = {
                "Document1": {
                    "Id": "FacilityForm.pdf",
                    "Name": "FacilityForm.pdf",
                    "Description": "Stuff and things",
                    "MetadataId": "FacilityForm.pdf Metadata",
                    "Tags": ["Facilities & Equipment", "Forms"],
                    "Name": "NoBullyingYouLoser.pdf",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTRTNlVjhHS3RVcWc",
                    "MetadataId": "NoBullyingYouLoser.pdf Metadata",
                    "Tags": ["Bullying Prevention", "Forms & Templates"]
                },
                "Document2": {
                    "Tags": ["Facilities & Equipment", "Hazardous Material", "Forms"],
                    "Name": "FacilityHazardousForm.pdf",
                    "Description": "Stuff and things",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTMkRQRnBhV1F6NHc",
                    "MetadataId": "FacilityHazardousForm.pdf Metadata",
                    "Tags": ["Building & Systems", "Hazardous Material", "Forms & Templates"]
                },
                "Document3": {
                    "Tags": ["Facilities & Equipment", "Manuals"],
                    "Name": "FacilityManual.doc",
                    "Description": "Stuff and things",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYUxLbUhwTEFOU00",
                    "MetadataId": "FacilityManual.doc Metadata",
                    "Tags": ["Facilities & Equipment", "Manuals & Plans"]
                },
                "Document4": {
                    "Id": "EquippmentAndElectronicManual.docx",
                    "Name": "EquippmentAndElectronicManual.docx",
                    "Description": "This is a Description",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYVZERERZd0psbkE",
                    "MetadataId": "EquippmentAndElectronicManual.docx Metadata",
                    "Tags": ["Facilities & Equipment", "Appliances", "Equipment", "Manuals"]
                },
                "Document5": {
                    "Id": "FacilityPolicies.doc",
                    "Name": "FacilityPolicies.doc",
                    "Description": "Policies",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "FacilityPolicies.doc Metadata",
                    "Tags": ["Facilities & Equipment", "Policies"]
                }
            };
        }
        return DocumentsDatabase;
    }());
    App.DocumentsDatabase = DocumentsDatabase;
})(App || (App = {}));
//# sourceMappingURL=documents.js.map