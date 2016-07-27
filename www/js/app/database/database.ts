module App {
  export class JSONDatabase{
    public LevelOneNavItems
    public LevelTwoNavItems
    public LevelThreeNavItems
    public LevelFourNavItems
    public UserContacts

    public LevelOneContent;
    public LevelTwoContent;
    public LevelThreeContent;
    public LevelFourContent;

    public PageAudits;
    public NewsItems;


    //Used for grade and Resources
    public Resources;
    public Metadata;
    public Users;

    public Applications;

    public GradeFilters;
    public SubjectFilters;
    public ResourceFilters;
    public ResourceTypeFilters;

    constructor(){
      var navItems = new NavItemsDatabase();
      this.LevelOneNavItems = navItems.LevelOneNavItems;
      this.LevelTwoNavItems = navItems.LevelTwoNavItems;
      this.LevelThreeNavItems= navItems.LevelThreeNavItems;
      this.LevelFourNavItems = navItems.LevelFourNavItems;


      var levelOneContent = new LevelOneContentDatabase();
      this.LevelOneContent = levelOneContent.LevelOneContent;

      var levelTwoContent = new LevelTwoContentDatabase();
      this.LevelTwoContent = levelTwoContent.LevelTwoContent;

      var levelThreeContent = new LevelThreeContentDatabase();
      this.LevelThreeContent = levelThreeContent.LevelThreeContent;

      var levelFourContent = new LevelFourContentDatabase();
      this.LevelFourContent = levelFourContent.LevelFourContent;

      var pageAudits = new PageAuditDatabase();
      this.PageAudits = pageAudits.PageAudits;

      var userContacts = new UserContactDatabase();
      this.UserContacts = userContacts.UserContacts;

    var newsItems = new NewsItemDatabase();
    this.NewsItems = newsItems.NewsItems;


      this.GradeFilters = {
        "Filter1" :{
          "Tag" : "Early Childhood"
        },
        "Filter2" :{
          "Tag" : "1-3"
        },
        "Filter3" :{
          "Tag" : "4-6"
        },
        "Filter4" :{
          "Tag" : "7-9"
        },
        "Filter5" :{
          "Tag" : "10-12"
        }
      }

      this.SubjectFilters = {
        "Filter1" :{
          "Tag" : "Aboriginal Studies"
        },
        "Filter2" :{
          "Tag" : "Career and Life Managment"
        },
        "Filter3" :{
          "Tag" : "Career and Technology Foundations / Studies"
        },
        "Filter4" :{
          "Tag" : "English as a Second Language"
        },
        "Filter5" :{
          "Tag" : "English Language Arts"
        },
        "Filter6" :{
          "Tag" : "Enviromental & Outdoor Education"
        },
        "Filter7" :{
          "Tag" : "Ethics"
        },
        "Filter8" :{
          "Tag" : "Fine Arts"
        },
        "Filter9" :{
          "Tag" : "French (FSL & Francisation)"
        },
        "Filter10" :{
          "Tag" : "Health and Life Skills"
        },
        "Filter11" :{
          "Tag" : "Information and Communication Tecnhology"
        },
        "Filter12" :{
          "Tag" : "International Languages"
        },
        "Filter13" :{
          "Tag" : "Knowledge and Employability"
        },
        "Filter14" :{
          "Tag" : "Locally Developed Courses (LDCs)"
        },
        "Filter16" :{
          "Tag" : "Mathematics"
        },
        "Filter17" :{
          "Tag" : "Off-campus Education"
        },
        "Filter19" :{
          "Tag" : "Physical Education"
        },
        "Filter20" :{
          "Tag" : "Primary Grades (K-3)"
        },
        "Filter21" :{
          "Tag" : "Science"
        },
        "Filter22" :{
          "Tag" : "Social Science"
        },
        "Filter23" :{
          "Tag" : "Social Studies"
        },
        "Filter24" :{
          "Tag" : "Special Projects"
        }
      }

      this.ResourceTypeFilters = {
        "Filter1" : {
          "Tag" : "Program of Studies",
        },
        "Filter2" : {
          "Tag" : "Assessments",
        },
        "Filter3" : {
          "Tag" : "Classroom Resources",
        },
        "Filter4" : {
          "Tag" : "Competencies",
        },
        "Filter5" : {
          "Tag" : "Focus on Reading",
        },
        "Filter6" : {
          "Tag" : "Research & Support",
        }
      }

      this.Resources = {
        "Resource1" :{
          "Id" : "Math 30 Assessment",
          "Name" : "Math 30 Assessment",
          "Description": "Assesment guide for Math 30 course",
          "MetadataId" : "Math 30 Assessment Metadata",
          "Tags": ["10-12", "Mathematics","Assessments"]
        },
        "Resource2" :{
          "Id" : "Math 9 Classroom Resource",
          "Name" : "Math 9 Classroom Resource",
          "Description": "Resource for in class use regarding the course: Math 9",
          "MetadataId" : "Math 9 Classroom Resource Metadata",
          "Tags": ["7-9", "Mathematics","Classroom Resources"]
        },
        "Resource3" :{
          "Id" : "Science 20 Research & Support",
          "Name" : "Science 20 Research & Support",
          "Description": "Research project for Science 20 Curriculum",
          "MetadataId" : "Science 20 Research & Support Metadata",
          "Tags": ["10-12", "Science",'Research & Support']
        },
        "Resource4" :{
          "Id" : "Science 4 Assessment",
          "Name" : "Science 4 Assessment",
          "Description": "Assesment guide for Science 4 course",
          "MetadataId" : "Science 4 Assessment Metadata",
          "Tags": ["4-6", "Science","Assessments"]
        },
        "Resource5" :{
          "Id" : "Math and Science Grade 10 Focus on Reading",
          "Name" : "Math and Science Grade 10 Focus on Reading",
          "Description": "This is a Math and Science focus on reading topic for grade 10 students",
          "MetadataId" : "Math and Science Grade 10 Focus on Reading Metadata",
          "Tags": ["10-12", "Science","Mathematics","Focus on Reading"]
        },
        "Resource6" :{
          "Id" : " 4th Grade Math and Science Research & Support",
          "Name" : "4th Grade Math and Science Research & Support",
          "Description": "Research topic about math and science for fourth grade",
          "MetadataId" : "4th Grade Math and Science Research & Support Metadata",
          "Tags": ["4-6", "Science", "Mathematics", "Research & Support"]
        }
      }

      this.Applications = {
        "Application1" : {
          "Id": "PowerTeacher",
          "Name" : "PowerTeacher",
          "Tags" : ["School Administration"]
        },
        "Application2" : {
          "Id": "Pinpoint Student",
          "Name" : "Pinpoint Student",
          "Tags" : ["School Administration"]
        },
        "Application3" : {
          "Id": "SchoolZone",
          "Name" : "SchoolZone",
          "Tags" : ["School Administration"]
        }
      }

        this.Metadata = {
          "Metadata1" : {
            "Id":"Math 30 Assessment Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata2" : {
            "Id":"Math 9 Classroom Resource Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata3" : {
            "Id":"Science 20 Research & Support Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata4" : {
            "Id":"Science 4 Assessment Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata5" : {
            "Id":"Math and Science Grade 10 Focus on Reading Metadata Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata6" : {
            "Id":"4th Grade Math and Science Research & Support Metadata",
            "CreatedBy": "Jordan Service",
            "CreatedOn": "July 4th, 2016 "
          },
          "Metadata7" : {
            "Id": "NewsItem1",
            "CreatedBy": "Mitchell Szpytma",
            "CreatedOn": "April 8th, 2013 "
          }
        }







    }
  }
}
