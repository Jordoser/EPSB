module App {
  export class ApplicationsDatabase{
    public Applications;
    constructor(){
      this.Applications = {
        "Application1" : {
          "Id": "PowerTeacher",
          "Name" : "PowerTeacher",
          "Favorite": "true",
          "Tags" : ["School Administration"]
        },
        "Application2" : {
          "Id": "Pinpoint Student",
          "Name" : "Pinpoint Student",
          "Favorite": "true",
          "Tags" : ["School Administration"]
        },
        "Application3" : {
          "Id": "SchoolZone",
          "Name" : "SchoolZone",
          "Favorite" : "false",
          "Tags" : ["School Administration"]
        }
      }
    }
  }
}
