module App {
  export class LevelOneContentDatabase{
    public LevelOneContent
    constructor(){
      this.LevelOneContent = {
        "LevelOneContent1":{
          "Id" : "School Operations",
          "Description": "<p>Information and resources you need to manage the daily operations for your school.<p>",
          "RelatedTopics" : "",
          "PageAuditId": "School Operations",
          "Tags" : ["School Operations"]
        },
        "LevelOneContent2":{
          "Id" : "Central Staff Resources",
          "Description": "Resources for central staff.",
          "RelatedTopics" : "",
          "PageAuditId": "Central Staff Resources",
          "Tags" : ["Central Staff Resources"]
        },
        "LevelOneContent3":{
          "Id" : "Employee Essentials",
          "Description": "Resources for central staff.",
          "RelatedTopics" : "",
          "PageAuditId": "Employee Essentials",
          "Tags" : ["Employee Essentials"]
        }
      }
    }
  }
}
