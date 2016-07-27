module App {
  export class NavItemsDatabase{
    public LevelOneNavItems
    public LevelTwoNavItems
    public LevelThreeNavItems
    public LevelFourNavItems
    constructor(){
      this.LevelOneNavItems = {
        "NavItem1" : {
            "Id": "Employee Essentials",
            "Name" : "Employee Essentials"
        },
        "NavItem2" : {
            "Id": "News & Events",
            "Name" : "News"
        },
        "NavItem3" : {
            "Id": "Learning Initiatives",
            "Name" : "Learning Initiatives"
        },
        "NavItem4" : {
            "Id": "Curriculum & Assessment",
            "Name" : "Curriculum & Assessment"
        },
        "NavItem5" : {
            "Id": "School Administration",
            "Name" : "School Administration",
            "ContentId" : "School Administration"
        },
        "NavItem6" : {
            "Id": "Facilities & Custodial",
            "Name" : "Facilities & Custodial"
        },
        "NavItem7" : {
            "Id": "About",
            "Name" : "About"
        },
      }
      this.LevelTwoNavItems = {
        //BEGIN L2 ITEMS FOR SCHOOL ADMIN
        "l2NavItem1" : {
            "Id" : "Budget & Finance",
            "Name" : "Budget & Finance",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        },
        "l2NavItem2" : {
            "Id" : "Enrollment",
            "Name" : "Enrollment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        },
        "l2NavItem3" : {
            "Id" : "Facilities & Equipment",
            "Name" : "Facilities & Equipment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Facilities & Equipment"
        },
        "l2NavItem4" : {
            "Id" : "FOIP",
            "Name" : "FOIP",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        },
        "l2NavItem5" : {
            "Id" : "Students",
            "Name" : "Students",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        },
        "l2NavItem16" : {
            "Id" : "Transportation",
            "Name" : "Transportation",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        },
        "l2NavItem7" : {
            "Id" : "Volunteers",
            "Name" : "Volunteers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration"
        }
        //END L2 ITEMS FOR SCHOOL ADMIN
      }

      this.LevelThreeNavItems= {
        //BEGIN L3 ITEMS FOR BUDGET & FINANCE
        "l3NavItem1" : {
          "Id" : "Accounting",
          "Name" : "Accounting",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem2" : {
          "Id" : "Audits",
          "Name" : "Audits",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem3" : {
          "Id" : "Banking",
          "Name" : "Banking",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem5" : {
          "Id" : "Budgeting",
          "Name" : "Budgeting",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem6" : {
          "Id" : "Contracts / Agreements",
          "Name" : "Contracts / Agreements",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem7" : {
          "Id" : "Fundraising & Donations",
          "Name" : "Fundraising & Donations",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem8" : {
          "Id" : "Insurance - General",
          "Name" : "Insurance - General",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem9" : {
          "Id" : "Service Agreements",
          "Name" : "Service Agreements",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem10" : {
          "Id" : "Taxation",
          "Name" : "Taxation",
          "l2NavId" : "Budget & Finance"
        },
        //END L3 ITEMS FOR BUDGET & FINANCE

        //BEGIN L3 ITEMS FOR ENROLMENT
        "l3NavItem11" : {
          "Id" : "Pre-enrolment",
          "Name" : "Pre-enrolment",
          "l2NavId" : "Enrollment"
        },
        "l3NavItem12" : {
          "Id" : "Registration",
          "Name" : "Registration",
          "l2NavId" : "Enrollment"
        },

        //END L3 ITEMS FOR ENROLMENT

        //BEGIN L3 ITEMS FOR Facilities and Equipment
        "l3NavItem13" :{
          "Id" : "Buildings & Grounds",
          "Name"  : "Buildings & Grounds",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "l2NavId": "Facilities & Equipment"
        },
        "l3NavItem14" :{
            "Id" : "Custodial",
            "Name"  : "Custodial",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment"
          },
          "l3NavItem15" :{
            "Id" : "Facility Use",
            "Name"  : "Facility Use",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment"
          },
          "l3NavItem16" :{
            "Id" : "Hazardous Material",
            "Name"  : "Hazardous Material",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment"
          },
          "l3NavItem17" :{
            "Id" : "Parking",
            "Name"  : "Parking",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment"
          },
          "l3NavItem18" :{
            "Id" : "Equipment",
            "Name"  : "Equipment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment",
            "ContentId" : "Equipment"
          },
          "l3NavItem19" :{
            "Id" : "Utilities",
            "Name"  : "Utilities",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facilities & Equipment"
          }
      }

      this.LevelFourNavItems = {
        //Begin L4 items for Equipment
        "l4NavItem1" : {
          "Id" : "Appliances",
          "Name" : "Appliances",
          "ContentId" : "Appliances",
          "l3NavId" : "Equipment"
        },
        "l4NavItem2" : {
          "Id" : "Electronics",
          "Name" : "Electronics",
          "l3NavId" : "Equipment"
        },
        "l4NavItem3" : {
          "Id" : "Disposal and Surplus",
          "Name" : "Disposal and Surplus",
          "l3NavId" : "Equipment"
        },
        "l4NavItem4" : {
          "Id" : "Leasing Services",
          "Name" : "Leasing Services",
          "l3NavId" : "Equipment"
        },
        "l4NavItem5" : {
          "Id" : "Rental Services",
          "Name" : "Rental Services",
          "ContentId" : "Rental Services",
          "l3NavId" : "Equipment"
        },
        "l4NavItem6" : {
            "Id" : "Small Engines",
            "Name" : "Small Engines",
            "l3NavId" : "Equipment"
          }
      }
    }
  }
}
