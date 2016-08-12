module App {
  export class TagFilterDatabase{
    public GradeFilters;
    public SubjectFilters;
    public ResourceTypeFilters;
    public DocumentTypeFilters;
    public NewsFilters;
    public CurriculumSubjectFilters;
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
          "Tag" : "English Language Arts",
          "Core" : "true"
        },
        "Filter6" :{
          "Tag" : "Enviromental & Outdoor Education"
        },
        "Filter7" :{
          "Tag" : "Ethics"
        },
        "Filter8" :{
          "Tag" : "Fine Arts",
          "Core" : "true"
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
          "Tag" : "Mathematics",
          "Core" : "true"
        },
        "Filter17" :{
          "Tag" : "Off-campus Education"
        },
        "Filter19" :{
          "Tag" : "Physical Education",
          "Core" : "true"
        },
        "Filter20" :{
          "Tag" : "Primary Grades (K-3)"
        },
        "Filter21" :{
          "Tag" : "Science",
          "Core" : "true"
        },
        "Filter22" :{
          "Tag" : "Social Science",
          "Core" : "true"
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
          "Tag" : "Assessments",
        },
        "Filter2" : {
          "Tag" : "Instructional Resources",
        },
        "Filter3" : {
          "Tag" : "Lead Teacher Resources",
        },
        "Filter4" : {
          "Tag" : "Program of Studies",
        },
        "Filter6" : {
          "Tag" : "Research & Support",
        }
      }

//Todo change to content types
    this.DocumentTypeFilters ={
      "Filter1": {
         "Tag": "Applications"
      },
      "Filter2": {
         "Tag": "Calendars"
      },
      "Filter3": {
         "Tag": "Checklists"
      },
      "Filter4": {
         "Tag": "Contacts"
      },
      "Filter5": {
         "Tag": "Contracts & Agreements"
      },
      "Filter6": {
         "Tag": "External Sites"
      },
      "Filter7": {
         "Tag": "Forms & Templates"
      },
      "Filter8": {
         "Tag": "Images & Graphics"
      },
      "Filter9": {
         "Tag": "Manuals & Plans"
      },
      "Filter10": {
         "Tag": "News Articles"
      },
      "Filter11": {
         "Tag": "Policies"
      },
      "Filter12": {
         "Tag": "Presentations"
      },
      "Filter13": {
         "Tag": "Procedures"
      },
      "Filter14": {
         "Tag": "Reports"
      },
      "Filter15": {
         "Tag": "Standards & Guidelines"
      },
      "Filter16": {
         "Tag": "Videos"
      }
    }

    this.CurriculumSubjectFilters = {
      "Filter1": {
         "Tag": "Behaviour Management"
      },
      "Filter2": {
         "Tag": "Books & Libraries"
      },
      "Filter3": {
         "Tag": "Combined Grades"
      },
      "Filter4": {
         "Tag": "Competencies"
      },
      "Filter5": {
         "Tag": "Early Education"
      },
      "Filter6": {
         "Tag": "English Language Learning (ELL)"
      },
      "Filter7": {
         "Tag": "First Nations Metis & Inuit"
      },
      "Filter8": {
         "Tag": "Focus on Reading"
      },
      "Filter9": {
         "Tag": "Literacy"
      },
      "Filter10": {
         "Tag": "Literacy Interventions"
      },
      "Filter11": {
         "Tag": "Numeracy"
      },
      "Filter12": {
         "Tag": "Professional Development"
      },
      "Filter13": {
         "Tag": "Special Education"
      },
      "Filter14": {
         "Tag": "Teaching & Learning with Technology"
      },
      "Filter15": {
         "Tag": "Universal Design for Learning (UDL)"
      }
    }

    this.NewsFilters = {
      "Filter1" : {
        "Tag" : "Around the District",
      },
      "Filter2" : {
        "Tag" : "Budget & Finance",
      },
      "Filter3" : {
        "Tag" : "Centre for Education",
      },
      "Filter4" : {
        "Tag" : "Curriculum & Assessment",
      },
      "Filter5" : {
        "Tag" : "Employee Essentials",
      },
      "Filter6" : {
        "Tag" : "Health & Safety",
      },
      "Filter7" : {
        "Tag" : "Leadership",
      },
      "Filter8" : {
        "Tag" : "Professional Development",
      },
      "Filter9" : {
        "Tag" : "School Operations",
      },
      "Filter10" : {
        "Tag" : "Student Management",
      },
      "Filter11" : {
        "Tag" : "Technology",
      }
    }

    }
  }
}
