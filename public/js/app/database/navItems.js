var App;
(function (App) {
    var NavItemsDatabase = (function () {
        function NavItemsDatabase() {
            this.LevelOneNavItems = {
                "NavItem1": {
                    "Id": "School Administration",
                    "Name": "School Operations",
                    "ContentId": "School Administration"
                },
                "NavItem2": {
                    "Id": "Curriculum & Assessment",
                    "Name": "Curriculum & Assessment"
                },
                "NavItem3": {
                    "Id": "District Staff Resources",
                    "Name": "District Staff Resources"
                },
                "NavItem4": {
                    "Id": "Employee Essentials",
                    "Name": "Employee Essentials"
                },
                "NavItem5": {
                    "Id": "News & Events",
                    "Name": "News"
                },
                "NavItem6": {
                    "Id": "About EPS",
                    "Name": "About EPS"
                }
            };
            this.LevelTwoNavItems = {
                //BEGIN L2 ITEMS FOR SCHOOL ADMIN
                "l2NavItem1": {
                    "Id": "Budget & Finance",
                    "Name": "Budget & Finance",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "School Administration",
                    "ContentId": "Budget & Finance"
                },
                "l2NavItem2": {
                    "Id": "Classroom & Program",
                    "Name": "Classroom & Program",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "Classroom & Program"
                },
                "l2NavItem3": {
                    "Id": "Communications for Schools",
                    "Name": "Communications for Schools",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "Communications for Schools"
                },
                "l2NavItem4": {
                    "Id": "Custodial & Maintenance",
                    "Name": "Custodial & Maintenance",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Custodial & Maintenance"
                },
                "l2NavItem5": {
                    "Id": "Emergency & Security",
                    "Name": "Emergency & Security",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Emergency & Security"
                },
                "l2NavItem6": {
                    "Id": "Enrolment & Registration",
                    "Name": "Enrolment & Registration",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "Enrolment & Registration"
                },
                "l2NavItem7": {
                    "Id": "Facility Use",
                    "Name": "Facility Use",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "Facility Use"
                },
                "l2NavItem8": {
                    "Id": "Family & Community",
                    "Name": "Family & Community",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Family & Community"
                },
                "l2NavItem9": {
                    "Id": "Inclusive Learning",
                    "Name": "Inclusive Learning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Inclusive Learning"
                },
                "l2NavItem10": {
                    "Id": "Privacy & Safe Learning Environments",
                    "Name": "Privacy & Safe Learning Environments",
                    "Description": "Ut enim ad minim veniaiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "contentId": "Privacy & Safe Learning Environments"
                },
                "l2NavItem11": {
                    "Id": "School Events & Activities",
                    "Name": "School Events & Activities",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "School Events & Activities"
                },
                "l2NavItem12": {
                    "Id": "Staff Management & Hiring",
                    "Name": "Staff Management & Hiring",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Staff Management & Hiring"
                },
                "l2NavItem13": {
                    "Id": "Student Management",
                    "Name": "Student Management",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l1NavId": "School Administration",
                    "ContentId": "Student Management"
                },
                "l2NavItem14": {
                    "Id": "Supplies & Equipment",
                    "Name": "Supplies & Equipment",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentId": "Supplies & Equipment"
                },
                "l2NavItem15": {
                    "Id": "Technology",
                    "Name": "Technology",
                    "Description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l1NavId": "School Administration",
                    "ContentID": "Technology"
                }
            };
            this.LevelThreeNavItems = {
                //BEGIN L3 ITEMS FOR BUDGET & FINANCE
                "l3NavItem1": {
                    "Id": "Accounting & Auditing",
                    "Name": "Accounting & Auditing",
                    "l2NavId": "Budget & Finance"
                },
                "l3NavItem2": {
                    "Id": "Accounts Payable",
                    "Name": "Accounts Payable",
                    "l2NavId": "Budget & Finance"
                },
                "l3NavItem3": {
                    "Id": "Budgeting",
                    "Name": "Budgeting",
                    "l2NavId": "Budget & Finance"
                },
                "l3NavItem4": {
                    "Id": "Insurance",
                    "Name": "Insurance",
                    "l2NavId": "Budget & Finance"
                },
                "l3NavItem5": {
                    "Id": "Purchasing & Contracting",
                    "Name": "Purchasing & Contracting",
                    "l2NavId": "Budget & Finance"
                },
                "l3NavItem6": {
                    "Id": "Revenue",
                    "Name": "Revenue",
                    "l2NavId": "Budget & Finance"
                },
                //END L3 ITEMS FOR BUDGET & FINANCE
                //BEGIN L3 ITEMS FOR CLASSROOM & PROGRAM
                "l3NavItem7": {
                    "Id": "Class Size",
                    "Name": "Class Size",
                    "l2NavId": "Classroom & Program"
                },
                "l3NavItem8": {
                    "Id": "Instructional Time",
                    "Name": "Instructional Time",
                    "l2NavId": "Classroom & Program"
                },
                "l3NavItem9": {
                    "Id": "Pilot Programs",
                    "Name": "Pilot Programs",
                    "l2NavId": "Classroom & Program"
                },
                "l3NavItem10": {
                    "Id": "Pre-Enrolment",
                    "Name": "Pre-Enrolment",
                    "l2NavId": "Classroom & Program"
                },
                "l3NavItem11": {
                    "Id": "Special Programs",
                    "Name": "Special Programs",
                    "l2NavId": "Classroom & Program"
                },
                //END L3 ITEMS FOR CLASSROOM & PROGRAM
                //BEGIN L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS
                "l3NavItem13": {
                    "Id": "Brochures & Booklets",
                    "Name": "Brochures & Booklets",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem14": {
                    "Id": "Calendars",
                    "Name": "Calendars",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem15": {
                    "Id": "Media Relations",
                    "Name": "Media Relations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem16": {
                    "Id": "Open House Planning",
                    "Name": "Open House Planning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem17": {
                    "Id": "Posters",
                    "Name": "Posters",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem18": {
                    "Id": "Presentations",
                    "Name": "Presentations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem19": {
                    "Id": "Signage",
                    "Name": "Signage",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem20": {
                    "Id": "Stationery",
                    "Name": "Stationery",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                "l3NavItem21": {
                    "Id": "Style Guide & Logo",
                    "Name": "Style Guide & Logo",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools"
                },
                //END L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS
                //BEGIN L3 ITEMS FOR CUSTODIAL & MAINTENANCE
                "l3NavItem22": {
                    "Id": "Building & Systems",
                    "Name": "Building & Systems",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                "l3NavItem23": {
                    "Id": "Cleaning",
                    "Name": "Cleaning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                "l3NavItem24": {
                    "Id": "Custodial & Maintenance Equipment",
                    "Name": "Custodial & Maintenance Equipment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                "l3NavItem25": {
                    "Id": "Grounds & Outside Spaces",
                    "Name": "Grounds & Outside Spaces",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                "l3NavItem26": {
                    "Id": "Hazards & Assessments",
                    "Name": "Hazards & Assessments",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                "l3NavItem27": {
                    "Id": "Safe Working Conditions",
                    "Name": "Safe Working Conditions",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance"
                },
                //END L3 ITEMS FOR CUSTODIAL & MAINTENANCE
                //BEGIN L3 ITEMS FOR EMERGENCY & SECURITY
                "l3NavItem28": {
                    "Id": "Bomb Threats",
                    "Name": "Bomb Threats",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem29": {
                    "Id": "Emergency Communication",
                    "Name": "Emergency Communication",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem30": {
                    "Id": "Evacuation",
                    "Name": "Evacuation",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem31": {
                    "Id": "Fire",
                    "Name": "Fire",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem32": {
                    "Id": "Lockdown",
                    "Name": "Lockdown",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem33": {
                    "Id": "Missing Child",
                    "Name": "Missing Child",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem34": {
                    "Id": "Security",
                    "Name": "Security",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                "l3NavItem35": {
                    "Id": "Severe Weather",
                    "Name": "Severe Weather",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Emergency & Security"
                },
                //END L3 ITEMS FOR EMERGENCY & SECURITY
                //BEGIN L3 ITEMS FOR ENROLMENT & REGISTRATION
                "l3NavItem36": {
                    "Id": "Pre-Enrolment",
                    "Name": "Pre-Enrolment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Enrolment & Registration"
                },
                "l3NavItem37": {
                    "Id": "Registration",
                    "Name": "Registration",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Enrolment & Registration"
                },
                //END L3 ITEMS FOR ENROLMENT & REGISTRATION
                //BEGIN L3 ITEMS FOR FACILITY USE
                "l3NavItem38": {
                    "Id": "Community Use",
                    "Name": "Community Use",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Facility Use"
                },
                "l3NavItem39": {
                    "Id": "Surplus Space",
                    "Name": "Surplus Space",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Facility Use"
                },
                //END L3 ITEMS FOR FACILITY USE
                //BEGIN L3 ITEMS FOR FAMILY & COMMUNITY
                "l3NavItem40": {
                    "Id": "Communication",
                    "Name": "Communication",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community"
                },
                "l3NavItem41": {
                    "Id": "Tutoring",
                    "Name": "Tutoring",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community"
                },
                "l3NavItem42": {
                    "Id": "Volunteers",
                    "Name": "Volunteers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community"
                },
                //END L3 ITEMS FOR FAMILY & COMMUNITY
                //BEGIN L3 ITEMS FOR INCLUSIVE LEARNING
                "l3NavItem43": {
                    "Id": "Diverstiy",
                    "Name": "Diverstiy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem44": {
                    "Id": "Hearing Impairment",
                    "Name": "Hearing Impairment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem45": {
                    "Id": "Physical Therapy",
                    "Name": "Physical Therapy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem46": {
                    "Id": "Occupational Therapy",
                    "Name": "Occupational Therapy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem47": {
                    "Id": "Psychology",
                    "Name": "Psychology",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem48": {
                    "Id": "Social Work",
                    "Name": "Social Work",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem49": {
                    "Id": "Special Needs Assisted Placement (SNAP)",
                    "Name": "Special Needs Assisted Placement (SNAP)",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                "l3NavItem50": {
                    "Id": "Visual Impairment",
                    "Name": "Visual Impairment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning"
                },
                //END L3 ITEMS FOR INCLUSIVE LEARNING
                //BEGIN L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS
                "l3NavItem51": {
                    "Id": "Bullying Prevention",
                    "Name": "Bullying Prevention",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Privacy & Safe Learning Environments"
                },
                "l3NavItem52": {
                    "Id": "FOIP",
                    "Name": "FOIP",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Privacy & Safe Learning Environments"
                },
                "l3NavItem53": {
                    "Id": "Sexual Orientation & Gender Identity",
                    "Name": "Sexual Orientation & Gender Identity",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Privacy & Safe Learning Environments"
                },
                //END L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS
                //BEGIN L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES
                "l3NavItem54": {
                    "Id": "Field Trips",
                    "Name": "Field Trips",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities"
                },
                "l3NavItem55": {
                    "Id": "Interschool Activities",
                    "Name": "Interschool Activities",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities"
                },
                "l3NavItem56": {
                    "Id": "Off-Campus Education",
                    "Name": "Off-Campus Education",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities"
                },
                "l3NavItem57": {
                    "Id": "School Dances",
                    "Name": "School Dances",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities"
                },
                "l3NavItem58": {
                    "Id": "Student Organizations",
                    "Name": "Student Organizations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities"
                },
                //END L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES
                //BEGIN L3 ITEMS FOR STAFF MANAGEMENT & HIRING
                "l3NavItem59": {
                    "Id": "Hiring",
                    "Name": "Hiring",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                "l3NavItem60": {
                    "Id": "Intern Teachers",
                    "Name": "Intern Teachers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                "l3NavItem61": {
                    "Id": "New Employees",
                    "Name": "New Employees",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                "l3NavItem62": {
                    "Id": "Supervision & Evaluation",
                    "Name": "Supervision & Evaluation",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                "l3NavItem63": {
                    "Id": "Supply Staff",
                    "Name": "Supply Staff",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                "l3NavItem64": {
                    "Id": "Teacher Induction",
                    "Name": "Teacher Induction",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Staff Management & Hiring"
                },
                //END L3 ITEMS FOR STAFF MANAGEMENT & HIRING
                //BEGIN L3 ITEMS FOR STUDENT MANAGEMENT
                "l3NavItem65": {
                    "Id": "Attendance",
                    "Name": "Attendance",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem66": {
                    "Id": "Awards",
                    "Name": "Awards",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem67": {
                    "Id": "Behaviour & Discipline",
                    "Name": "Behaviour & Discipline",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem68": {
                    "Id": "Counselling",
                    "Name": "Counselling",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem69": {
                    "Id": "Health & Medical",
                    "Name": "Health & Medical",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem70": {
                    "Id": "International Students",
                    "Name": "International Students",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem71": {
                    "Id": "Legal Custody",
                    "Name": "Legal Custody",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem72": {
                    "Id": "Student Records",
                    "Name": "Student Records",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem73": {
                    "Id": "Supervision",
                    "Name": "Supervision",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                "l3NavItem74": {
                    "Id": "Student Transportation",
                    "Name": "Student Transportation",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Student Management"
                },
                //END L3 ITEMS FOR STUDENT MANAGEMENT
                //BEGIN L3 ITEMS FOR SUPPLIES & EQUIPMENT
                "l3NavItem75": {
                    "Id": "Distribution Centre",
                    "Name": "Distribution Centre",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment"
                },
                "l3NavItem76": {
                    "Id": "Purchasing Goods & Services",
                    "Name": "Purchasing Goods & Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment"
                },
                "l3NavItem77": {
                    "Id": "Surplus Disposal",
                    "Name": "Surplus Disposal",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment"
                },
                //END L3 ITEMS FOR SUPPLIES & EQUIPMENT
                //BEGIN L3 ITEMS FOR TECHNOLOGY
                "l3NavItem78": {
                    "Id": "Applications",
                    "Name": "Applications",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem79": {
                    "Id": "Computers & Tablets",
                    "Name": "Computers & Tablets",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem80": {
                    "Id": "E-Mail",
                    "Name": "E-Mail",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem81": {
                    "Id": "IT Services Store",
                    "Name": "IT Services Store",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem82": {
                    "Id": "IT Services Help Desk",
                    "Name": "IT Services Help Desk",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem83": {
                    "Id": "IT Technical Services",
                    "Name": "IT Technical Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem84": {
                    "Id": "Network Access",
                    "Name": "Network Access",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem85": {
                    "Id": "Printing Services",
                    "Name": "Printing Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                },
                "l3NavItem86": {
                    "Id": "Technology Incentive Program",
                    "Name": "Technology Incentive Program",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Technology"
                }
            };
            this.LevelFourNavItems = {
                //Begin L4 items for Equipment
                "l4NavItem1": {
                    "Id": "Appliances",
                    "Name": "Appliances",
                    "ContentId": "Appliances",
                    "l3NavId": "Equipment"
                },
                "l4NavItem2": {
                    "Id": "Electronics",
                    "Name": "Electronics",
                    "l3NavId": "Equipment"
                },
                "l4NavItem3": {
                    "Id": "Disposal and Surplus",
                    "Name": "Disposal and Surplus",
                    "l3NavId": "Equipment"
                },
                "l4NavItem4": {
                    "Id": "Leasing Services",
                    "Name": "Leasing Services",
                    "l3NavId": "Equipment"
                },
                "l4NavItem5": {
                    "Id": "Rental Services",
                    "Name": "Rental Services",
                    "ContentId": "Rental Services",
                    "l3NavId": "Equipment"
                },
                "l4NavItem6": {
                    "Id": "Small Engines",
                    "Name": "Small Engines",
                    "l3NavId": "Equipment"
                }
            };
        }
        return NavItemsDatabase;
    }());
    App.NavItemsDatabase = NavItemsDatabase;
})(App || (App = {}));
//# sourceMappingURL=navItems.js.map