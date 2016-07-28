var App;
(function (App) {
    var DocumentsDatabase = (function () {
        function DocumentsDatabase() {
            this.Documents = {
                "Document1": {
                    "Id": "FacilityForm.pdf",
                    "Name": "FacilityForm.pdf",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTRTNlVjhHS3RVcWc",
                    "Tags": ["Facilities & Equipment", "Forms"]
                },
                "Document2": {
                    "Id": "FacilityHazardousForm.pdf ",
                    "Name": "FacilityHazardousForm.pdf",
                    "Tags": ["Facilities & Equipment", "Hazardous Material", "Forms"]
                },
                "Document3": {
                    "Id": "FacilityManual.doc",
                    "Name": "FacilityManual.doc",
                    "Tags": ["Facilities & Equipment", "Manuals"]
                },
                "Document4": {
                    "Id": "EquippmentAndElectronicManual.docx",
                    "Name": "EquippmentAndElectronicManual.docx",
                    "Tags": ["Facilities & Equipment", "Appliances", "Equipment", "Manuals"]
                },
                "Document5": {
                    "Id": "FacilityPolicies.doc",
                    "Name": "FacilityPolicies.doc",
                    "Tags": ["Facilities & Equipment", "Policies"]
                },
                "Documents6": {
                    "Id": "SchoolZone",
                    "Name": "SchoolZone",
                    "Tags": ["School Administration"]
                },
                "Document7": {
                    "Id": "PowerTeacher",
                    "Name": "PowerTeacher",
                    "Tags": ["School Administration"]
                },
                "Document8": {
                    "Id": "Pinpoint Student",
                    "Name": "Pinpoint Student",
                    "Tags": ["School Administration"]
                },
                "Documents9": {
                    "Id": "SchoolZone",
                    "Name": "SchoolZone",
                    "Tags": ["School Administration"]
                }
            };
        }
        return DocumentsDatabase;
    }());
    App.DocumentsDatabase = DocumentsDatabase;
})(App || (App = {}));
//# sourceMappingURL=documents.js.map