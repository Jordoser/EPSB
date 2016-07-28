module App {
  export class ApplicationsDatabase{
    public Applications;
    constructor(){
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
    }
  }
}
