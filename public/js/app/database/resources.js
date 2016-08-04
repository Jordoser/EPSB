var App;
(function (App) {
    var ResourcesDatabase = (function () {
        function ResourcesDatabase() {
            this.Resources = {
                "Resource1": {
                    "Id": "Math 30 Assessment",
                    "Name": "Math 30 Assessment",
                    "Description": "Assesment guide for Math 30 course",
                    "MetadataId": "Math 30 Assessment Metadata",
                    "Tags": ["10-12", "Mathematics", "Assessments"]
                },
                "Resource2": {
                    "Id": "Math 9 Classroom Resource",
                    "Name": "Math 9 Classroom Resource",
                    "Description": "Resource for in class use regarding the course: Math 9",
                    "MetadataId": "Math 9 Classroom Resource Metadata",
                    "Tags": ["7-9", "Mathematics", "Classroom Resources"]
                },
                "Resource3": {
                    "Id": "Science 20 Research & Support",
                    "Name": "Science 20 Research & Support",
                    "Description": "Research project for Science 20 Curriculum",
                    "MetadataId": "Science 20 Research & Support Metadata",
                    "Tags": ["10-12", "Science", 'Research & Support']
                },
                "Resource4": {
                    "Id": "Science 4 Assessment",
                    "Name": "Science 4 Assessment",
                    "Description": "Assesment guide for Science 4 course",
                    "MetadataId": "Science 4 Assessment Metadata",
                    "Tags": ["4-6", "Science", "Assessments"]
                },
                "Resource5": {
                    "Id": "Math and Science Grade 10 Focus on Reading",
                    "Name": "Math and Science Grade 10 Focus on Reading",
                    "Description": "This is a Math and Science focus on reading topic for grade 10 students",
                    "MetadataId": "Math and Science Grade 10 Focus on Reading Metadata",
                    "Tags": ["10-12", "Science", "Mathematics", "Focus on Reading"]
                },
                "Resource6": {
                    "Id": "4th Grade Math and Science Research & Support",
                    "Name": "4th Grade Math and Science Research & Support",
                    "Description": "Research topic about math and science for fourth grade",
                    "MetadataId": "4th Grade Math and Science Research & Support Metadata",
                    "Tags": ["4-6", "Science", "Mathematics", "Research & Support"]
                }
            };
        }
        return ResourcesDatabase;
    }());
    App.ResourcesDatabase = ResourcesDatabase;
})(App || (App = {}));
//# sourceMappingURL=resources.js.map