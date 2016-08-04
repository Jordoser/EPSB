module App {
  export class DocumentsDatabase{
    public Documents;
    constructor(){
      this.Documents = {
        "Document1" : {
          "Id": "FacilityForm.pdf",
          "Name" : "FacilityForm.pdf",
          "Description" : "Stuff and things",
          "Link" : "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTRTNlVjhHS3RVcWc",
          "MetadataId" : "FacilityForm.pdf Metadata",
          "Tags" : ["Bullying Prevention","Forms & Templates"]
        },
        "Document2" : {
          "Id": "FacilityHazardousForm.pdf ",
          "Name" : "FacilityHazardousForm.pdf",
          "Description" : "Stuff and things",
          "Link" : "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTMkRQRnBhV1F6NHc",
          "MetadataId" : "FacilityHazardousForm.pdf Metadata",
          "Tags" : ["Facilities & Equipment","Hazardous Material","Forms"]
        },
        "Document3" : {
          "Id": "FacilityManual.doc",
          "Name" : "FacilityManual.doc",
          "Description" : "Stuff and things",
          "Link" : "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYUxLbUhwTEFOU00",
          "MetadataId" : "FacilityManual.doc Metadata",
          "Tags" : ["Facilities & Equipment","Manuals"]
        },
        "Document4" : {
          "Id": "EquippmentAndElectronicManual.docx",
          "Name" : "EquippmentAndElectronicManual.docx",
          "Description" : "This is a Description",
          "Link" : "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYVZERERZd0psbkE",
          "MetadataId" : "EquippmentAndElectronicManual.docx Metadata",
          "Tags" : ["Facilities & Equipment","Appliances","Equipment","Manuals"]
        },
        "Document5" : {
          "Id": "FacilityPolicies.doc",
          "Name" : "FacilityPolicies.doc",
          "Description" : "Policies",
          "Link" : "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
          "MetadataId" : "FacilityPolicies.doc Metadata",
          "Tags" : ["Facilities & Equipment","Policies"]
        }
      }
    }
  }
}
