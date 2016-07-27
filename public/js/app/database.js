var App;
(function (App) {
    var JSONDatabase = (function () {
        function JSONDatabase() {
            var navItems = new App.NavItems();
            var levelOneContent = new App.LevelOneContent();
            this.LevelOneNavItems = navItems.LevelOneNavItems;
            this.LevelTwoNavItems = navItems.LevelTwoNavItems;
            this.LevelThreeNavItems = navItems.LevelThreeNavItems;
            this.LevelFourNavItems = navItems.LevelFourNavItems;
            this.LevelOneContent = levelOneContent.LevelOneContent;
            this.LevelTwoContent = {
                "LevelTwoContent1": {
                    "Id": "Facilities & Equipment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\
           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n\n\
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "RelatedTopics": "",
                    "PageAuditId": "Facilities & Equipment",
                }
            };
            this.LevelThreeContent = {
                "LevelThreeContent1": {
                    "Id": "Equipment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\
           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n\n\
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "RelatedTopics": "",
                    "PageAuditId": "Equipment",
                }
            };
            this.LevelFourContent = {
                "LevelFourContent1": {
                    "Id": "Appliances",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\
           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n\n\
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "RelatedTopics": "",
                    "PageAuditId": "Appliances",
                    "UserContacts": [
                        "Simon Greenfield",
                        "David Latter",
                        "Linda Jones",
                        "Shirley Chandler",
                        "Steve Larson"
                    ]
                },
                "LevelFourContent2": {
                    "Id": "Rental Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\
         nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n\n\
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "RelatedTopics": "",
                    "PageAuditId": "Rental Services",
                    "UserContacts": [
                        "Simon Greenfield",
                        "Shirley Chandler",
                        "Steve Larson"
                    ]
                }
            };
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
            this.UserContacts = {
                "Contact1": {
                    "Id": "Simon Greenfield",
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
            this.GradeFilters = {
                "Filter1": {
                    "Tag": "Early Childhood"
                },
                "Filter2": {
                    "Tag": "1-3"
                },
                "Filter3": {
                    "Tag": "4-6"
                },
                "Filter4": {
                    "Tag": "7-9"
                },
                "Filter5": {
                    "Tag": "10-12"
                }
            };
            this.SubjectFilters = {
                "Filter1": {
                    "Tag": "Aboriginal Studies"
                },
                "Filter2": {
                    "Tag": "Career and Life Managment"
                },
                "Filter3": {
                    "Tag": "Career and Technology Foundations / Studies"
                },
                "Filter4": {
                    "Tag": "English as a Second Language"
                },
                "Filter5": {
                    "Tag": "English Language Arts"
                },
                "Filter6": {
                    "Tag": "Enviromental & Outdoor Education"
                },
                "Filter7": {
                    "Tag": "Ethics"
                },
                "Filter8": {
                    "Tag": "Fine Arts"
                },
                "Filter9": {
                    "Tag": "French (FSL & Francisation)"
                },
                "Filter10": {
                    "Tag": "Health and Life Skills"
                },
                "Filter11": {
                    "Tag": "Information and Communication Tecnhology"
                },
                "Filter12": {
                    "Tag": "International Languages"
                },
                "Filter13": {
                    "Tag": "Knowledge and Employability"
                },
                "Filter14": {
                    "Tag": "Locally Developed Courses (LDCs)"
                },
                "Filter16": {
                    "Tag": "Mathematics"
                },
                "Filter17": {
                    "Tag": "Off-campus Education"
                },
                "Filter19": {
                    "Tag": "Physical Education"
                },
                "Filter20": {
                    "Tag": "Primary Grades (K-3)"
                },
                "Filter21": {
                    "Tag": "Science"
                },
                "Filter22": {
                    "Tag": "Social Science"
                },
                "Filter23": {
                    "Tag": "Social Studies"
                },
                "Filter24": {
                    "Tag": "Special Projects"
                }
            };
            this.ResourceTypeFilters = {
                "Filter1": {
                    "Tag": "Program of Studies",
                },
                "Filter2": {
                    "Tag": "Assessments",
                },
                "Filter3": {
                    "Tag": "Classroom Resources",
                },
                "Filter4": {
                    "Tag": "Competencies",
                },
                "Filter5": {
                    "Tag": "Focus on Reading",
                },
                "Filter6": {
                    "Tag": "Research & Support",
                }
            };
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
                    "Id": " 4th Grade Math and Science Research & Support",
                    "Name": "4th Grade Math and Science Research & Support",
                    "Description": "Research topic about math and science for fourth grade",
                    "MetadataId": "4th Grade Math and Science Research & Support Metadata",
                    "Tags": ["4-6", "Science", "Mathematics", "Research & Support"]
                }
            };
            this.Applications = {
                "Application1": {
                    "Id": "PowerTeacher",
                    "Name": "PowerTeacher",
                    "Tags": ["School Administration"]
                },
                "Application2": {
                    "Id": "Pinpoint Student",
                    "Name": "Pinpoint Student",
                    "Tags": ["School Administration"]
                },
                "Application3": {
                    "Id": "SchoolZone",
                    "Name": "SchoolZone",
                    "Tags": ["School Administration"]
                }
            };
            this.Metadata = {
                "Metadata1": {
                    "Id": "Math 30 Assessment Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata2": {
                    "Id": "Math 9 Classroom Resource Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata3": {
                    "Id": "Science 20 Research & Support Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata4": {
                    "Id": "Science 4 Assessment Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata5": {
                    "Id": "Math and Science Grade 10 Focus on Reading Metadata Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata6": {
                    "Id": "4th Grade Math and Science Research & Support Metadata",
                    "CreatedBy": "Jordan Service",
                    "CreatedOn": "July 4th, 2016 "
                },
                "Metadata7": {
                    "Id": "NewsItem1",
                    "CreatedBy": "Mitchell Szpytma",
                    "CreatedOn": "April 8th, 2013 "
                }
            };
        }
        return JSONDatabase;
    }());
    App.JSONDatabase = JSONDatabase;
})(App || (App = {}));
//# sourceMappingURL=database.js.map