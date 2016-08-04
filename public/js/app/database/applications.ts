module App {
  export class ApplicationsDatabase{
    public Applications;
    constructor(){
      this.Applications = {
        "Application1" : {
          "Id": "PowerTeacher",
          "Name" : "Power Teacher",
          "Description": "A short description about the application and its purpose",
          "Favorite": "true",
          "Tags" : ["School Administration"]
        },
        "Application2" : {
          "Id": "Pinpoint Student",
          "Name" : "Pinpoint Student",
          "Description": "A short description about the application and its purpose",
          "Favorite": "true",
          "Tags" : ["School Administration"]
        },
        "Application3" : {
          "Id": "SchoolZone",
          "Name" : "School Zone",
          "Description": "A short description about the application and its purpose",
          "Favorite" : "false",
          "Tags" : ["School Administration","Teacher"]
        }
      }
    }
  }
}
