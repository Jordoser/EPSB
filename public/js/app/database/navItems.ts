module App {
  export class NavItemsDatabase{
    public LevelOneNavItems
    public LevelTwoNavItems
    public LevelThreeNavItems
    public LevelFourNavItems
    constructor(){
      this.LevelOneNavItems = {
        "NavItem1" : {
            "Id": "School Administration",
            "Name" : "School Operations",
            "ContentId" : "School Administration"
        },
        "NavItem2" : {
            "Id": "Curriculum & Assessment",
            "Name" : "Curriculum & Assessment"
        },
        "NavItem3" : {
            "Id": "District Staff Resources",
            "Name" : "District Staff Resources"
        },
        "NavItem4" : {
            
            "Id": "Employee Essentials",
            "Name" : "Employee Essentials"
        },
        "NavItem5" : {
            "Id": "News & Events",
            "Name" : "News"
        },
        "NavItem6" : {

            "Id": "About EPS",
            "Name" : "About EPS"
        },
      }
      this.LevelTwoNavItems = {
        //BEGIN L2 ITEMS FOR SCHOOL ADMIN
        "l2NavItem1" : {
            "Id" : "Budget & Finance",
            "Name" : "Budget & Finance",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "School Administration",
            "ContentId" : "Budget & Finance"
        },
        "l2NavItem2" : {
            "Id" : "Classroom & Program",
            "Name" : "Classroom & Program",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Classroom & Program"
        },
        "l2NavItem3" : {
            "Id" : "Communications for Schools",
            "Name" : "Communications for Schools",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Communications for Schools"
        },
        "l2NavItem4" : {
            "Id" : "Custodial & Maintenance",
            "Name" : "Custodial & Maintenance",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId" : "Custodial & Maintenance"
        },
        "l2NavItem5" : {
            "Id" : "Emergency & Security",
            "Name" : "Emergency & Security",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId" : "Emergency & Security"
        },
        "l2NavItem6" : {
            "Id" : "Enrolment & Registration",
            "Name" : "Enrolment & Registration",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Enrolment & Registration"
        },
        "l2NavItem7" : {
            "Id" : "Facility Use",
            "Name" : "Facility Use",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Facility Use"
        },
        "l2NavItem8" : {
            "Id" : "Family & Community",
            "Name" : "Family & Community",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId" : "Family & Community"
        },
        "l2NavItem9" : {
            "Id" : "Inclusive Learning",
            "Name" : "Inclusive Learning",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId" : "Inclusive Learning"
        },
        "l2NavItem10" : {
            "Id" : "Privacy & Safe Learning Environments",
            "Name" : "Privacy & Safe Learning Environments",
            "Description" : "Ut enim ad minim veniaiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "contentId" : "Privacy & Safe Learning Environments"
        },
        "l2NavItem11" : {
            "Id" : "School Events & Activities",
            "Name" : "School Events & Activities",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId": "School Events & Activities"
        },
        "l2NavItem12" : {
            "Id" : "Staff Management & Hiring",
            "Name" : "Staff Management & Hiring",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId": "Staff Management & Hiring"
        },
        "l2NavItem13" : {
            "Id" : "Student Management",
            "Name" : "Student Management",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "l1NavId": "School Administration",
            "ContentId" : "Student Management"
        },
        "l2NavItem14" : {
            "Id" : "Supplies & Equipment",
            "Name" : "Supplies & Equipment",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentId" : "Supplies & Equipment"
        },
        "l2NavItem15" : {
            "Id" : "Technology",
            "Name" : "Technology",
            "Description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l1NavId": "School Administration",
            "ContentID" : "Technology"
        },
        //END L2 ITEMS FOR SCHOOL ADMIN

        //BEGIN L2 ITEMS FOR EMPLOYEE ESSENTIALS
        "l2NavItem16" : {
            "Id" : "Awards",
            "Name" : "Awards",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem17" : {
            "Id" : "Benefits for Teachers",
            "Name" : "Benefits for Teachers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem18" : {
            "Id" : "Career Stages",
            "Name" : "Career Stages",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem19" : {
            "Id" : "Career Opportunities",
            "Name" : "Career Opportunities",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem20" : {
            "Id" : "Employement Contracts & Agreements",
            "Name" : "Employement Contracts & Agreements",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem21" : {
            "Id" : "Health & Safety",
            "Name" : "Health & Safety",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem22" : {
            "Id" : "Leaves of Absence for Teachers",
            "Name" : "Leaves of Absence for Teachers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem23" : {
            "Id" : "Modified Work Arrangements",
            "Name" : "Modified Work Arrangements",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem24" : {
            "Id" : "Pay & Expenses for Teachers",
            "Name" : "Pay & Expenses for Teachers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem25" : {
            "Id" : "Professional Development",
            "Name" : "Professional Development",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem26" : {
            "Id" : "Staff Conduct & Responsibility",
            "Name" : "Staff Conduct & Responsibility",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        "l2NavItem27" : {
            "Id" : "Vacation & Public Holidays for Teachers",
            "Name" : "Vacation & Public Holidays for Teachers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "Employee Essentials",
        },
        //BEGIN L2 ITEMS FOR DISTRICT STAFF RESOURCES
        "l2NavItem28" : {
            "Id" : "Archives & Museum",
            "Name" : "Archives & Museum",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem29" : {
            "Id" : "Communications Resources for District Staff",
            "Name" : "Communications Resources for District Staff",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem30" : {
            "Id" : "Distribution Centre",
            "Name" : "Distribution Centre",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem31" : {
            "Id" : "District Records",
            "Name" : "District Records",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem32" : {
            "Id" : "Emergency & Security",
            "Name" : "Emergency & Security",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem33" : {
            "Id" : "Facilities",
            "Name" : "Facilities",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem34" : {
            "Id" : "Budget & Finance",
            "Name" : "Budget & Finance",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem35" : {
            "Id" : "Home Education",
            "Name" : "Home Education",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem36" : {
            "Id" : "Legal Counsel",
            "Name" : "Legal Counsel",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem37" : {
            "Id" : "Purchasing & Contracting",
            "Name" : "Purchasing & Contracting",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem38" : {
            "Id" : "Staff Management & Hiring",
            "Name" : "Staff Management & Hiring",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        "l2NavItem39" : {
            "Id" : "Technology",
            "Name" : "Technology",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "District Staff Resources",
        },
        //END L2 ITEMS FOR DISTRICT STAFF RESOURCES

        //BEGIN L2 ITEMS FOR ABOUT EPS
        "l2NavItem40" : {
            "Id" : "Board",
            "Name" : "Board",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "About EPS",
        },
        "l2NavItem41" : {
            "Id" : "Departments",
            "Name" : "Departments",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "About EPS",
        },
        "l2NavItem42" : {
            "Id" : "Policies",
            "Name" : "Policies",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "About EPS",
        },
        "l2NavItem43" : {
            "Id" : "Strategic Plan",
            "Name" : "Strategic Plan",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "About EPS",
        },
        "l2NavItem44" : {
            "Id" : "Superintendent",
            "Name" : "Superintendent",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "l1NavId": "About EPS",
        }
        //BEGIN L2 ITEMS FOR ABOUT EPS
      }

      this.LevelThreeNavItems= {
        //BEGIN L3 ITEMS FOR BUDGET & FINANCE
        "l3NavItem1" : {
          "Id" : "Accounting & Auditing",
          "Name" : "Accounting & Auditing",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem2" : {
          "Id" : "Accounts Payable",
          "Name" : "Accounts Payable",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem3" : {
          "Id" : "Budgeting",
          "Name" : "Budgeting",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem4" : {
          "Id" : "Insurance",
          "Name" : "Insurance",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem5" : {
          "Id" : "Purchasing & Contracting",
          "Name" : "Purchasing & Contracting",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        "l3NavItem6" : {
          "Id" : "Revenue",
          "Name" : "Revenue",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "l2NavId" : "Budget & Finance"
        },
        //END L3 ITEMS FOR BUDGET & FINANCE

        //BEGIN L3 ITEMS FOR CLASSROOM & PROGRAM
        "l3NavItem7" : {
          "Id" : "Class Size",
          "Name" : "Class Size",
          "Description" : "Topic description",
          "l2NavId" : "Classroom & Program"
        },
        "l3NavItem8" : {
          "Id" : "Instructional Time",
          "Name" : "Instructional Time",
          "Description" : "Topic description",
          "l2NavId" : "Classroom & Program"
        },
        "l3NavItem9" : {
          "Id" : "Pilot Programs",
          "Name" : "Pilot Programs",
          "Description" : "Topic description",
          "l2NavId" : "Classroom & Program"
        },
        "l3NavItem10" : {
          "Id" : "Pre-Enrolment",
          "Name" : "Pre-Enrolment",
          "Description" : "Topic description",
          "l2NavId" : "Classroom & Program"
        },
        "l3NavItem11" : {
          "Id" : "Special Programs",
          "Name" : "Special Programs",
          "Description" : "Topic description",
          "l2NavId" : "Classroom & Program"
        },

        //END L3 ITEMS FOR CLASSROOM & PROGRAM

        //BEGIN L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS
        "l3NavItem13" :{
          "Id" : "Brochures & Booklets",
          "Name"  : "Brochures & Booklets",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "l2NavId": "Communications for Schools"
        },
        "l3NavItem14" :{
            "Id" : "Calendars",
            "Name"  : "Calendars",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem15" :{
            "Id" : "Media Relations",
            "Name"  : "Media Relations",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem16" :{
            "Id" : "Open House Planning",
            "Name"  : "Open House Planning",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem17" :{
            "Id" : "Posters",
            "Name"  : "Posters",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem18" :{
            "Id" : "Presentations",
            "Name"  : "Presentations",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools",
          },
          "l3NavItem19" :{
            "Id" : "Signage",
            "Name"  : "Signage",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem20" :{
            "Id" : "Stationery",
            "Name"  : "Stationery",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          "l3NavItem21" :{
            "Id" : "Style Guide & Logo",
            "Name"  : "Style Guide & Logo",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Communications for Schools"
          },
          //END L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS

          //BEGIN L3 ITEMS FOR CUSTODIAL & MAINTENANCE
          "l3NavItem22" :{
            "Id" : "Building & Systems",
            "Name"  : "Building & Systems",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          "l3NavItem23" :{
            "Id" : "Cleaning",
            "Name"  : "Cleaning",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          "l3NavItem24" :{
            "Id" : "Custodial & Maintenance Equipment",
            "Name"  : "Custodial & Maintenance Equipment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          "l3NavItem25" :{
            "Id" : "Grounds & Outside Spaces",
            "Name"  : "Grounds & Outside Spaces",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          "l3NavItem26" :{
            "Id" : "Hazards & Assessments",
            "Name"  : "Hazards & Assessments",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          "l3NavItem27" :{
            "Id" : "Safe Working Conditions",
            "Name"  : "Safe Working Conditions",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Custodial & Maintenance"
          },
          //END L3 ITEMS FOR CUSTODIAL & MAINTENANCE

          //BEGIN L3 ITEMS FOR EMERGENCY & SECURITY
          "l3NavItem28" :{
            "Id" : "Bomb Threats",
            "Name"  : "Bomb Threats",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem29" :{
            "Id" : "Emergency Communication",
            "Name"  : "Emergency Communication",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem30" :{
            "Id" : "Evacuation",
            "Name"  : "Evacuation",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem31" :{
            "Id" : "Fire",
            "Name"  : "Fire",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem32" :{
            "Id" : "Lockdown",
            "Name"  : "Lockdown",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem33" :{
            "Id" : "Missing Child",
            "Name"  : "Missing Child",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem34" :{
            "Id" : "Security",
            "Name"  : "Security",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },
          "l3NavItem35" :{
            "Id" : "Severe Weather",
            "Name"  : "Severe Weather",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Emergency & Security"
          },

          //END L3 ITEMS FOR EMERGENCY & SECURITY

          //BEGIN L3 ITEMS FOR ENROLMENT & REGISTRATION
          "l3NavItem36" :{
            "Id" : "Pre-Enrolment",
            "Name"  : "Pre-Enrolment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Enrolment & Registration"
          },
          "l3NavItem37" :{
            "Id" : "Registration",
            "Name"  : "Registration",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Enrolment & Registration"
          },
          //END L3 ITEMS FOR ENROLMENT & REGISTRATION

          //BEGIN L3 ITEMS FOR FACILITY USE
          "l3NavItem38" :{
            "Id" : "Community Use",
            "Name"  : "Community Use",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facility Use"
          },
          "l3NavItem39" :{
            "Id" : "Surplus Space",
            "Name"  : "Surplus Space",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Facility Use"
          },
          //END L3 ITEMS FOR FACILITY USE

          //BEGIN L3 ITEMS FOR FAMILY & COMMUNITY
          "l3NavItem40" :{
            "Id" : "Communication",
            "Name"  : "Communication",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Family & Community"
          },
          "l3NavItem41" :{
            "Id" : "Tutoring",
            "Name"  : "Tutoring",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Family & Community"
          },
          "l3NavItem42" :{
            "Id" : "Volunteers",
            "Name"  : "Volunteers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Family & Community"
          },
          //END L3 ITEMS FOR FAMILY & COMMUNITY

          //BEGIN L3 ITEMS FOR INCLUSIVE LEARNING
          "l3NavItem43" :{
            "Id" : "Diverstiy",
            "Name"  : "Diverstiy",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem44" :{
            "Id" : "Hearing Impairment",
            "Name"  : "Hearing Impairment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem45" :{
            "Id" : "Physical Therapy",
            "Name"  : "Physical Therapy",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem46" :{
            "Id" : "Occupational Therapy",
            "Name"  : "Occupational Therapy",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem47" :{
            "Id" : "Psychology",
            "Name"  : "Psychology",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem48" :{
            "Id" : "Social Work",
            "Name"  : "Social Work",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem49" :{
            "Id" : "Special Needs Assisted Placement (SNAP)",
            "Name"  : "Special Needs Assisted Placement (SNAP)",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          "l3NavItem50" :{
            "Id" : "Visual Impairment",
            "Name"  : "Visual Impairment",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Inclusive Learning"
          },
          //END L3 ITEMS FOR INCLUSIVE LEARNING

          //BEGIN L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS
          "l3NavItem51" :{
            "Id" : "Bullying Prevention",
            "Name"  : "Bullying Prevention",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Privacy & Safe Learning Environments"
          },
          "l3NavItem52" :{
            "Id" : "FOIP",
            "Name"  : "FOIP",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Privacy & Safe Learning Environments"
          },
          "l3NavItem53" :{
            "Id" : "Sexual Orientation & Gender Identity",
            "Name"  : "Sexual Orientation & Gender Identity",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Privacy & Safe Learning Environments"
          },
          //END L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS

          //BEGIN L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES
          "l3NavItem54" :{
            "Id" : "Field Trips",
            "Name"  : "Field Trips",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "School Events & Activities"
          },
          "l3NavItem55" :{
            "Id" : "Interschool Activities",
            "Name"  : "Interschool Activities",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "School Events & Activities"
          },
          "l3NavItem56" :{
            "Id" : "Off-Campus Education",
            "Name"  : "Off-Campus Education",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "School Events & Activities"
          },
          "l3NavItem57" :{
            "Id" : "School Dances",
            "Name"  : "School Dances",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "School Events & Activities"
          },
          "l3NavItem58" :{
            "Id" : "Student Organizations",
            "Name"  : "Student Organizations",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "School Events & Activities"
          },
          //END L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES

          //BEGIN L3 ITEMS FOR STAFF MANAGEMENT & HIRING
          "l3NavItem59" :{
            "Id" : "Hiring",
            "Name"  : "Hiring",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          "l3NavItem60" :{
            "Id" : "Intern Teachers",
            "Name"  : "Intern Teachers",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          "l3NavItem61" :{
            "Id" : "New Employees",
            "Name"  : "New Employees",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          "l3NavItem62" :{
            "Id" : "Supervision & Evaluation",
            "Name"  : "Supervision & Evaluation",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          "l3NavItem63" :{
            "Id" : "Supply Staff",
            "Name"  : "Supply Staff",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          "l3NavItem64" :{
            "Id" : "Teacher Induction",
            "Name"  : "Teacher Induction",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Staff Management & Hiring"
          },
          //END L3 ITEMS FOR STAFF MANAGEMENT & HIRING

          //BEGIN L3 ITEMS FOR STUDENT MANAGEMENT
          "l3NavItem65" :{
            "Id" : "Attendance",
            "Name"  : "Attendance",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem66" :{
            "Id" : "Awards",
            "Name"  : "Awards",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem67" :{
            "Id" : "Behaviour & Discipline",
            "Name"  : "Behaviour & Discipline",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem68" :{
            "Id" : "Counselling",
            "Name"  : "Counselling",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem69" :{
            "Id" : "Health & Medical",
            "Name"  : "Health & Medical",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem70" :{
            "Id" : "International Students",
            "Name"  : "International Students",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem71" :{
            "Id" : "Legal Custody",
            "Name"  : "Legal Custody",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem72" :{
            "Id" : "Student Records",
            "Name"  : "Student Records",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem73" :{
            "Id" : "Supervision",
            "Name"  : "Supervision",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          "l3NavItem74" :{
            "Id" : "Student Transportation",
            "Name"  : "Student Transportation",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Student Management"
          },
          //END L3 ITEMS FOR STUDENT MANAGEMENT

          //BEGIN L3 ITEMS FOR SUPPLIES & EQUIPMENT
          "l3NavItem75" :{
            "Id" : "Distribution Centre",
            "Name"  : "Distribution Centre",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Supplies & Equipment"
          },
          "l3NavItem76" :{
            "Id" : "Purchasing Goods & Services",
            "Name"  : "Purchasing Goods & Services",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Supplies & Equipment"
          },
          "l3NavItem77" :{
            "Id" : "Surplus Disposal",
            "Name"  : "Surplus Disposal",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Supplies & Equipment"
          },
          //END L3 ITEMS FOR SUPPLIES & EQUIPMENT

          //BEGIN L3 ITEMS FOR TECHNOLOGY
          "l3NavItem78" :{
            "Id" : "Applications",
            "Name"  : "Applications",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem79" :{
            "Id" : "Computers & Tablets",
            "Name"  : "Computers & Tablets",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem80" :{
            "Id" : "E-Mail",
            "Name"  : "E-Mail",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem81" :{
            "Id" : "IT Services Store",
            "Name"  : "IT Services Store",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem82" :{
            "Id" : "IT Services Help Desk",
            "Name"  : "IT Services Help Desk",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem83" :{
            "Id" : "IT Technical Services",
            "Name"  : "IT Technical Services",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem84" :{
            "Id" : "Network Access",
            "Name"  : "Network Access",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem85" :{
            "Id" : "Printing Services",
            "Name"  : "Printing Services",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          "l3NavItem86" :{
            "Id" : "Technology Incentive Program",
            "Name"  : "Technology Incentive Program",
            "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "l2NavId": "Technology"
          },
          //END L3 ITEMS FOR TECHNOLOGY

          //BEGIN L3 ITEMS FOR BENEFITS
          "l3NavItem87" : {
           "Id" : "ASEBP",
           "Name" : "ASEBP",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Benefits for Teachers"
          },
          "l3NavItem88" : {
           "Id" : "Employee & Family Assistance",
           "Name" : "Employee & Family Assistance",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Benefits for Teachers"
          },
          "l3NavItem89" : {
           "Id" : "Emplyee Health Services",
           "Name" : "Emplyee Health Services",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Benefits for Teachers"
          },
          "l3NavItem90" : {
           "Id" : "Fitness",
           "Name" : "Fitness",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Benefits for Teachers"
          },
          "l3NavItem91" : {
           "Id" : "Retirement & Pension",
           "Name" : "Retirement & Pension",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Benefits for Teachers"
          },
        //END L3 ITEMS FOR BENEFITS

        //BEGIN L3 ITEMS FOR CAREER STAGES
          "l3NavItem92" : {
           "Id" : "Changing Positions",
           "Name" : "Changing Positions",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          "l3NavItem93" : {
           "Id" : "Leaves of Absence",
           "Name" : "Leaves of Absence",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          "l3NavItem94" : {
           "Id" : "New Employees",
           "Name" : "New Employees",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          "l3NavItem95" : {
           "Id" : "Taking on Leadership",
           "Name" : "Taking on Leadership",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          "l3NavItem96" : {
           "Id" : "Teacher Induction",
           "Name" : "Teacher Induction",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          "l3NavItem97" : {
           "Id" : "Thinking About Retirement",
           "Name" : "Thinking About Retirement",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Career Stages"
          },
          //END L3 ITEMS FOR CAREER STAGES

          //BEGIN L3 ITEMS FOR HEALTH & SAFETY
          "l3NavItem98" : {
           "Id" : "Ergonomics",
           "Name" : "Ergonomics",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          "l3NavItem99" : {
           "Id" : "Hazards & Assessments",
           "Name" : "Hazards & Assessments",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          "l3NavItem100" : {
           "Id" : "Health Recovery",
           "Name" : "Health Recovery",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          "l3NavItem101" : {
           "Id" : "Incidents & Injuries",
           "Name" : "Incidents & Injuries",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          "l3NavItem102" : {
           "Id" : "Safe Working Conditions",
           "Name" : "Safe Working Conditions",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          "l3NavItem103" : {
           "Id" : "Workers' Compensation Board",
           "Name" : "Workers' Compensation Board",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Health & Safety"
          },
          //END L3 ITEMS FOR HEALTH & SAFETY

          //BEGIN L3 ITEMS FOR LEAVES OF ABSENCE
          "l3NavItem104" : {
           "Id" : "Community Service",
           "Name" : "Community Service",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem105" : {
           "Id" : "Jury Duty",
           "Name" : "Jury Duty",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem106" : {
           "Id" : "Military Service",
           "Name" : "Military Service",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem107" : {
           "Id" : "Maternity & Paternity",
           "Name" : "Maternity & Paternity",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem108" : {
           "Id" : "Personal Leave",
           "Name" : "Personal Leave",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem109" : {
           "Id" : "Professional Leave",
           "Name" : "Professional Leave",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          "l3NavItem110" : {
           "Id" : "Sickness",
           "Name" : "Sickness",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Leaves of Absence for Teachers"
          },
          //END L3 ITEMS FOR LEAVES OF ABSENCE

          //BEGIN L3 ITEMS FOR MODIFIED WORK ARRANGEMENTS
          "l3NavItem111" : {
           "Id" : "Deferred Salary",
           "Name" : "Deferred Salary",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Modified Work Arrangements"
          },
          "l3NavItem112" : {
           "Id" : "Exchanges & Secondments",
           "Name" : "Exchanges & Secondments",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Modified Work Arrangements"
          },
          "l3NavItem113" : {
           "Id" : "Job Sharing",
           "Name" : "Job Sharing",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Modified Work Arrangements"
          },
          //END L3 ITEMS FOR MODIFIED WORK ARRANGEMENTS

          //BEGIN L3 ITEMS FOR PAY & EXPENSES
          "l3NavItem114" : {
           "Id" : "Casual Pay",
           "Name" : "Casual Pay",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem115" : {
           "Id" : "Direct Deposit",
           "Name" : "Direct Deposit",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem116" : {
           "Id" : "Expenses",
           "Name" : "Expenses",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem117" : {
           "Id" : "Overtime",
           "Name" : "Overtime",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem118" : {
           "Id" : "RRSP",
           "Name" : "RRSP",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem119" : {
           "Id" : "Taxes",
           "Name" : "Taxes",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          "l3NavItem120" : {
           "Id" : "Time Reporting",
           "Name" : "Time Reporting",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Pay & Expenses for Teachers"
          },
          //END L3 ITEMS FOR PAY & EXPENSES

          //BEGIN L3 ITEMS FOR PROFESSIONAL DEVELOPMENT
          "l3NavItem121" : {
           "Id" : "Comprehensive School Health",
           "Name" : "Comprehensive School Health",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem122" : {
           "Id" : "Curriculum & Resource Support",
           "Name" : "Curriculum & Resource Support",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem123" : {
           "Id" : "Custodians",
           "Name" : "Custodians",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem124" : {
           "Id" : "Educational Assistants",
           "Name" : "Educational Assistants",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem125" : {
           "Id" : "First Nations, Metis, & Inuit Education",
           "Name" : "First Nations, Metis, & Inuit Education",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem126" : {
           "Id" : "Leadership",
           "Name" : "Leadership",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem127" : {
           "Id" : "Inclusive Learning",
           "Name" : "Inclusive Learning",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem128" : {
           "Id" : "Languages",
           "Name" : "Languages",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem129" : {
           "Id" : "Literacy",
           "Name" : "Literacy",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem130" : {
           "Id" : "Literacy Interventions",
           "Name" : "Literacy Interventions",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem131" : {
           "Id" : "Mentorship",
           "Name" : "Mentorship",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem132" : {
           "Id" : "Nonviolent Crisis Intervention (NVCI)",
           "Name" : "Nonviolent Crisis Intervention (NVCI)",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem133" : {
           "Id" : "Student Assessment",
           "Name" : "Student Assessment",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem134" : {
           "Id" : "Supply Staff",
           "Name" : "Supply Staff",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem135" : {
           "Id" : "Teacher Induction",
           "Name" : "Teacher Induction",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          "l3NavItem136" : {
           "Id" : "Technology",
           "Name" : "Technology",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Professional Development"
          },
          //END L3 ITEMS FOR PROFESSIONAL DEVELOPMENT

          //BEGIN L3 ITEMS FOR STAFF CONDUCT & RESPONSIBILITY
          "l3NavItem137" : {
           "Id" : "Code of Conduct",
           "Name" : "Code of Conduct",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          },
          "l3NavItem138" : {
           "Id" : "Grievances",
           "Name" : "Grievances",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          },
          "l3NavItem139" : {
           "Id" : "Public Interest",
           "Name" : "Public Interest",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          },
          "l3NavItem140" : {
           "Id" : "Record Checks",
           "Name" : "Record Checks",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          },
          "l3NavItem141" : {
           "Id" : "Respectful Working Environment",
           "Name" : "Respectful Working Environment",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          },
          "l3NavItem142" : {
           "Id" : "Workplace Violence",
           "Name" : "Workplace Violence",
           "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "l2NavId" : "Staff Conduct & Responsibility"
          }
          //END L3 ITEMS FOR STAFF CONDUCT & RESPONSIBILITY

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
