module App {
  export class TagFilterDatabase{
    public GradeFilters;
    public SubjectFilters;
    public ResourceTypeFilters;
    constructor(){
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

    }
  }
}
