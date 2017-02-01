var App;
(function (App) {
    var NavItemsDatabase = (function () {
        function NavItemsDatabase() {
            this.LevelOneNavItems = {
                "NavItem0": {
                    "Id": "Meadowlark School",
                    "Name": "Meadowlark School",
                    "ContentId": "Meadowlark School",
                    "Blurb": "Resources specific to your school/location all stored in one easy to find place."
                },
                "NavItem1": {
                    "Id": "School Operations",
                    "Name": "School Operations",
                    "ContentId": "School Operations",
                    "Blurb": "Everything you need to know about your school and how to operate it."
                },
                "NavItem2": {
                    "Id": "Curriculum & Assessment",
                    "Name": "Curriculum & Assessment",
                    "PageUrl": "resourceRedirect.html",
                    "Blurb": "Edmonton Public School offical content for curriculm and student assesment."
                },
                "NavItem3": {
                    "Id": "Central Staff Resources",
                    "Name": "Central Staff Resources",
                    "ContentId": "Central Staff Resources",
                    "Blurb": "Resources for central staff."
                },
                "NavItem4": {
                    "Id": "Employee Essentials",
                    "Name": "Employee Essentials",
                    "ContentId": "Employee Essentials",
                    "Blurb": "Everything you need to know about your employment in one place."
                },
                "NavItem5": {
                    "Id": "News & Events",
                    "Name": "News",
                    "PageUrl": "news.html"
                },
                "NavItem6": {
                    "Id": "About EPS",
                    "Name": "About EPS",
                    "ContentId": "About EPS",
                    "Blurb": "Blurb about the about EPS nav item .... blurb."
                }
            };
            this.LevelTwoNavItems = {
                //BEGIN L2 ITEMS FOR MEADOWLARK SCHOOL
                "l2NavItem-1": {
                    "Id": "Documents",
                    "Name": "Documents",
                    "Description": "Document storage for local school content.",
                    "l1NavId": "Meadowlark School",
                    "PageUrl": "schoolDocuments.html"
                },
                "l2NavItem-2": {
                    "Id": "Principals Message",
                    "Name": "Principals Message",
                    "Description": "Document storage for local school content.",
                    "l1NavId": "Meadowlark School",
                    "PageUrl": "principalsMessage.html"
                },
                //BEGIN L2 ITEMS FOR SCHOOL OPERATIONS
                "l2NavItem1": {
                    "Id": "Budget & Finance",
                    "Name": "Budget & Finance",
                    "Description": "Accounting & auditing, budgeting, purchasing & contracting, paying bills, and revenue.",
                    "l1NavId": "School Operations",
                    "ContentId": "Budget & Finance"
                },
                "l2NavItem2": {
                    "Id": "Classroom & Programs",
                    "Name": "Classroom & Programs",
                    "Description": "Class size, instructional time, and special programs.",
                    "l1NavId": "School Operations",
                    "ContentId": "Classroom & Programs"
                },
                "l2NavItem3": {
                    "Id": "Communications for Schools",
                    "Name": "Communications for Schools",
                    "Description": "Templates and communications resources for schools.",
                    "l1NavId": "School Operations",
                    "ContentId": "Communications for Schools"
                },
                "l2NavItem4": {
                    "Id": "Custodial & Maintenance",
                    "Name": "Custodial & Maintenance",
                    "Description": "Building & systems, cleaning, grounds and outside spaces, hazards, and safety information.",
                    "l1NavId": "School Operations",
                    "ContentId": "Custodial & Maintenance"
                },
                "l2NavItem5": {
                    "Id": "Emergency & Security",
                    "Name": "Emergency & Security",
                    "Description": "Emergency procedures, and security information, including building access and crime prevention.",
                    "l1NavId": "School Operations",
                    "ContentId": "Emergency & Security"
                },
                "l2NavItem6": {
                    "Id": "Enrolment & Registration",
                    "Name": "Enrolment & Registration",
                    "Description": "Enrolment, pre-enrolment, and registration.",
                    "l1NavId": "School Operations",
                    "ContentId": "Enrolment & Registration"
                },
                "l2NavItem7": {
                    "Id": "Facility Use",
                    "Name": "Facility Use",
                    "Description": "Community use of the building and surplus space.",
                    "l1NavId": "School Operations",
                    "ContentId": "Facility Use"
                },
                "l2NavItem8": {
                    "Id": "Family & Community",
                    "Name": "Family & Community",
                    "Description": "Parents, families, volunteers, and tutoring.",
                    "l1NavId": "School Operations",
                    "ContentId": "Family & Community"
                },
                "l2NavItem9": {
                    "Id": "Inclusive Learning",
                    "Name": "Inclusive Learning",
                    "Description": "Diverstiy resources; physical, social, and psychological supports for students.",
                    "l1NavId": "School Operations",
                    "ContentId": "Inclusive Learning"
                },
                "l2NavItem10": {
                    "Id": "Privacy & Safe Learning Environments",
                    "Name": "Privacy & Safe Learning Environments",
                    "Description": "FOIP, bullying prevention, and sexual orientation & identity.",
                    "l1NavId": "School Operations",
                    "ContentId": "Privacy & Safe Learning Environments"
                },
                "l2NavItem11": {
                    "Id": "School Events & Activities",
                    "Name": "School Events & Activities",
                    "Description": "Field trips, student organizations, dances, and other activities.",
                    "l1NavId": "School Operations",
                    "ContentId": "School Events & Activities"
                },
                "l2NavItem12": {
                    "Id": "Staff Management & Hiring",
                    "Name": "Staff Management & Hiring",
                    "Description": "Hiring, supply staff, new employees, and supervision & evaluation.",
                    "l1NavId": "School Operations",
                    "ContentId": "Staff Management & Hiring"
                },
                "l2NavItem13": {
                    "Id": "Student Management",
                    "Name": "Student Management",
                    "Description": "Attendance, behaviour management, health, supervision, and transportation.",
                    "l1NavId": "School Operations",
                    "ContentId": "Student Management"
                },
                "l2NavItem14": {
                    "Id": "Supplies & Equipment",
                    "Name": "Supplies & Equipment",
                    "Description": "Distribution centre, purchasing & contracting, and surplus disposal.",
                    "l1NavId": "School Operations",
                    "ContentId": "Supplies & Equipment"
                },
                "l2NavItem15": {
                    "Id": "Technology",
                    "Name": "Technology",
                    "Description": "Software, computers, IT services, network access, and printing.",
                    "l1NavId": "School Operations",
                    "ContentId": "Technology"
                },
                //END L2 ITEMS FOR SCHOOL OPERATIONS
                //BEGIN L2 ITEMS FOR EMPLOYEE ESSENTIALS
                "l2NavItem16": {
                    "Id": "Awards",
                    "Name": "Awards",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Awards"
                },
                "l2NavItem17": {
                    "Id": "Benefits for Teachers",
                    "Name": "Benefits for Teachers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Benefits for Teachers"
                },
                "l2NavItem18": {
                    "Id": "Career Stages",
                    "Name": "Career Stages",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Career Stages"
                },
                "l2NavItem19": {
                    "Id": "Career Opportunities",
                    "Name": "Career Opportunities",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Career Opportunities"
                },
                "l2NavItem20": {
                    "Id": "Employement Contracts & Agreements",
                    "Name": "Employement Contracts & Agreements",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Employment Contracts & Agreements"
                },
                "l2NavItem21": {
                    "Id": "Health & Safety",
                    "Name": "Health & Safety",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Health & Safety"
                },
                "l2NavItem22": {
                    "Id": "Leaves of Absence for Teachers",
                    "Name": "Leaves of Absence for Teachers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Leaves of Absence for Teachers"
                },
                "l2NavItem23": {
                    "Id": "Modified Work Arrangements",
                    "Name": "Modified Work Arrangements",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Modified Work Arrangements"
                },
                "l2NavItem24": {
                    "Id": "Pay & Expenses for Teachers",
                    "Name": "Pay & Expenses for Teachers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Pay & Expenses for Teachers"
                },
                "l2NavItem25": {
                    "Id": "Professional Development",
                    "Name": "Professional Development",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Professional Development"
                },
                "l2NavItem26": {
                    "Id": "Staff Conduct & Responsibility",
                    "Name": "Staff Conduct & Responsibility",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Staff Conduct & Responsibility"
                },
                "l2NavItem27": {
                    "Id": "Vacation & Public Holidays for Teachers",
                    "Name": "Vacation & Public Holidays for Teachers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Employee Essentials",
                    "ContentId": "Vacation & Public Holidays for Teachers"
                },
                //BEGIN L2 ITEMS FOR CENTRAL STAFF RESOURCES
                "l2NavItem29": {
                    "Id": "Communications Resources for Central Staff",
                    "Name": "Communications Resources for Central Staff",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Communications Resources for Central Staff"
                },
                "l2NavItem31": {
                    "Id": "District Records",
                    "Name": "District Records",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "District Records"
                },
                "l2NavItem32": {
                    "Id": "Emergency & Security",
                    "Name": "Emergency & Security",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Emergency & Security"
                },
                "l2NavItem33": {
                    "Id": "Home Education",
                    "Name": "Home Education",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Home Education"
                },
                "l2NavItem34": {
                    "Id": "Legal Counsel",
                    "Name": "Legal Counsel",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Legal Counsel"
                },
                "l2NavItem35": {
                    "Id": "New School & renovation Planning",
                    "Name": "New School & renovation Planning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "New School & renovation Planning"
                },
                "l2NavItem36": {
                    "Id": "Staff Management & Hiring",
                    "Name": "Staff Management & Hiring",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Staff Management & Hiring"
                },
                "l2NavItem37": {
                    "Id": "Supplies & Equipment",
                    "Name": "Supplies & Equipment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Supplies & Equipment"
                },
                "l2NavItem38": {
                    "Id": "Technology",
                    "Name": "Technology",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "Central Staff Resources",
                    "ContentId": "Technology"
                },
                //END L2 ITEMS FOR CENTRAL STAFF RESOURCES
                //BEGIN L2 ITEMS FOR ABOUT EPS
                "l2NavItem40": {
                    "Id": "Board",
                    "Name": "Board",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "About EPS",
                    "ContentId": "Board"
                },
                "l2NavItem41": {
                    "Id": "Departments",
                    "Name": "Departments",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "About EPS",
                    "ContentId": "Departments"
                },
                "l2NavItem42": {
                    "Id": "Policies",
                    "Name": "Policies",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "About EPS",
                    "ContentId": "Policies"
                },
                "l2NavItem43": {
                    "Id": "Strategic Plan",
                    "Name": "Strategic Plan",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "About EPS",
                    "ContentId": "Strategic Plan"
                },
                "l2NavItem44": {
                    "Id": "Superintendent",
                    "Name": "Superintendent",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l1NavId": "About EPS",
                    "ContentId": "Superintendent"
                }
            };
            this.LevelThreeNavItems = {
                //BEGIN L3 ITEMS FOR BUDGET & FINANCE
                "l3NavItem1": {
                    "Id": "Accounting & Auditing",
                    "Name": "Accounting & Auditing",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Accounting & Auditing"
                },
                "l3NavItem2": {
                    "Id": "Accounts Payable",
                    "Name": "Accounts Payable",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Accounts Payable"
                },
                "l3NavItem3": {
                    "Id": "Budgeting",
                    "Name": "Budgeting",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Budgeting"
                },
                "l3NavItem4": {
                    "Id": "Insurance",
                    "Name": "Insurance",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Insurance"
                },
                "l3NavItem5": {
                    "Id": "Purchasing & Contracting",
                    "Name": "Purchasing & Contracting",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Purchasing & Contracting"
                },
                "l3NavItem6": {
                    "Id": "Revenue",
                    "Name": "Revenue",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    "l2NavId": "Budget & Finance",
                    "ContentId": "Revenue"
                },
                //END L3 ITEMS FOR BUDGET & FINANCE
                //BEGIN L3 ITEMS FOR CLASSROOM & PROGRAM
                "l3NavItem7": {
                    "Id": "Class Size",
                    "Name": "Class Size",
                    "Description": "Topic description",
                    "l2NavId": "Classroom & Programs",
                    "ContentId": "Class Size"
                },
                "l3NavItem8": {
                    "Id": "Instructional Time",
                    "Name": "Instructional Time",
                    "Description": "Topic description",
                    "l2NavId": "Classroom & Programs",
                    "ContentId": "Instructional Time"
                },
                "l3NavItem9": {
                    "Id": "Pilot Programs",
                    "Name": "Pilot Programs",
                    "Description": "Topic description",
                    "l2NavId": "Classroom & Programs",
                    "ContentId": "Pilot Programs"
                },
                "l3NavItem11": {
                    "Id": "Special Programs",
                    "Name": "Special Programs",
                    "Description": "Topic description",
                    "l2NavId": "Classroom & Programs",
                    "ContentId": "Special Programs"
                },
                //END L3 ITEMS FOR CLASSROOM & PROGRAM
                //BEGIN L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS
                "l3NavItem13": {
                    "Id": "Brochures & Booklets",
                    "Name": "Brochures & Booklets",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Brochures & Booklets"
                },
                "l3NavItem14": {
                    "Id": "Calendars",
                    "Name": "Calendars",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Calendars"
                },
                "l3NavItem15": {
                    "Id": "Media Relations",
                    "Name": "Media Relations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Media Relations"
                },
                "l3NavItem16": {
                    "Id": "Open House Planning",
                    "Name": "Open House Planning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Open House Planning"
                },
                "l3NavItem17": {
                    "Id": "Posters",
                    "Name": "Posters",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Posters"
                },
                "l3NavItem18": {
                    "Id": "Presentations",
                    "Name": "Presentations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Presentations"
                },
                "l3NavItem19": {
                    "Id": "Signage",
                    "Name": "Signage",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Signage"
                },
                "l3NavItem20": {
                    "Id": "Stationery",
                    "Name": "Stationery",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Stationery"
                },
                "l3NavItem21": {
                    "Id": "Style Guide & Logo",
                    "Name": "Style Guide & Logo",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Communications for Schools",
                    "ContentId": "Style Guide & Logo"
                },
                //END L3 ITEMS FOR COMMUNICATIONS FOR SCHOOLS
                //BEGIN L3 ITEMS FOR CUSTODIAL & MAINTENANCE
                "l3NavItem22": {
                    "Id": "Building & Systems",
                    "Name": "Building & Systems",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Building & Systems"
                },
                "l3NavItem23": {
                    "Id": "Cleaning",
                    "Name": "Cleaning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Cleaning"
                },
                "l3NavItem24": {
                    "Id": "Custodial & Maintenance Equipment",
                    "Name": "Custodial & Maintenance Equipment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Custodial & Maintenance Equipment"
                },
                "l3NavItem25": {
                    "Id": "Grounds & Outside Spaces",
                    "Name": "Grounds & Outside Spaces",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Grounds & Outside Spaces"
                },
                "l3NavItem26": {
                    "Id": "Hazards & Assessments",
                    "Name": "Hazards & Assessments",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Hazards & Assessments"
                },
                "l3NavItem27": {
                    "Id": "Safe Working Conditions",
                    "Name": "Safe Working Conditions",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Custodial & Maintenance",
                    "ContentId": "Safe Working Conditions"
                },
                //END L3 ITEMS FOR CUSTODIAL & MAINTENANCE
                //BEGIN L3 ITEMS FOR EMERGENCY & SECURITY
                "l3NavItem28": {
                    "Id": "Bomb Threats",
                    "Name": "Bomb Threats",
                    "Description": "Procedures to follow in the event of a bomb threat.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Bomb Threats"
                },
                "l3NavItem29": {
                    "Id": "Emergency Communication",
                    "Name": "Emergency Communication",
                    "Description": "Communicating with staff and families during emergencies.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Emergency Communication"
                },
                "l3NavItem30": {
                    "Id": "Evacuation",
                    "Name": "Evacuation",
                    "Description": "Building evacuation procedures.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Evacuation"
                },
                "l3NavItem31": {
                    "Id": "Fire",
                    "Name": "Fire",
                    "Description": "Drills and fire procedures.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Fire"
                },
                "l3NavItem32": {
                    "Id": "Lockdown",
                    "Name": "Lockdown",
                    "Description": "When and how to initiate a lockdown.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Lockdown"
                },
                "l3NavItem33": {
                    "Id": "Missing Child",
                    "Name": "Missing Child",
                    "Description": "Procedures to follow if a student is missing.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Missing Child"
                },
                "l3NavItem34": {
                    "Id": "Security",
                    "Name": "Security",
                    "Description": "Building access, crime prevention, and vandalism.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Security"
                },
                "l3NavItem35": {
                    "Id": "Severe Weather",
                    "Name": "Severe Weather",
                    "Description": "Tornado and sever weather procedures.",
                    "l2NavId": "Emergency & Security",
                    "ContentId": "Severe Weather"
                },
                //END L3 ITEMS FOR EMERGENCY & SECURITY
                //BEGIN L3 ITEMS FOR ENROLMENT & REGISTRATION
                "l3NavItem36": {
                    "Id": "Pre-Enrolment",
                    "Name": "Pre-Enrolment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Enrolment & Registration",
                    "ContentId": "Pre-Enrolment"
                },
                "l3NavItem37": {
                    "Id": "Registration",
                    "Name": "Registration",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Enrolment & Registration",
                    "ContentId": "Registration"
                },
                //END L3 ITEMS FOR ENROLMENT & REGISTRATION
                //BEGIN L3 ITEMS FOR FACILITY USE
                "l3NavItem38": {
                    "Id": "Community Use",
                    "Name": "Community Use",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Facility Use",
                    "ContentId": "Community Use"
                },
                "l3NavItem39": {
                    "Id": "Surplus Space",
                    "Name": "Surplus Space",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Facility Use",
                    "ContentId": "Surplus Space"
                },
                //END L3 ITEMS FOR FACILITY USE
                //BEGIN L3 ITEMS FOR FAMILY & COMMUNITY
                "l3NavItem40": {
                    "Id": "Communication",
                    "Name": "Communication",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community",
                    "ContentId": "Communication"
                },
                "l3NavItem41": {
                    "Id": "Tutoring",
                    "Name": "Tutoring",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community",
                    "ContentId": "Tutoring"
                },
                "l3NavItem42": {
                    "Id": "Volunteers",
                    "Name": "Volunteers",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Family & Community",
                    "ContentId": "Volunteers"
                },
                //END L3 ITEMS FOR FAMILY & COMMUNITY
                //BEGIN L3 ITEMS FOR INCLUSIVE LEARNING
                "l3NavItem43": {
                    "Id": "Diverstiy",
                    "Name": "Diverstiy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Diverstiy"
                },
                "l3NavItem44": {
                    "Id": "Hearing Impairment",
                    "Name": "Hearing Impairment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Hearing Impairment"
                },
                "l3NavItem45": {
                    "Id": "Physical Therapy",
                    "Name": "Physical Therapy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Physical Therapy"
                },
                "l3NavItem46": {
                    "Id": "Occupational Therapy",
                    "Name": "Occupational Therapy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Occupational Therapy"
                },
                "l3NavItem47": {
                    "Id": "Psychology",
                    "Name": "Psychology",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Psychology"
                },
                "l3NavItem48": {
                    "Id": "Social Work",
                    "Name": "Social Work",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Social Work"
                },
                "l3NavItem49": {
                    "Id": "Special Needs Assisted Placement (SNAP)",
                    "Name": "Special Needs Assisted Placement (SNAP)",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Special Needs Assisted Placement (SNAP)"
                },
                "l3NavItem50": {
                    "Id": "Visual Impairment",
                    "Name": "Visual Impairment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Inclusive Learning",
                    "ContentId": "Visual Impairment"
                },
                //END L3 ITEMS FOR INCLUSIVE LEARNING
                //BEGIN L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS
                "l3NavItem51": {
                    "Id": "Bullying Prevention",
                    "Name": "Bullying Prevention",
                    "Description": "The District has identified a variety of support material to help staff, parents and students prevent and address bullying behaviour.",
                    "l2NavId": "Privacy & Safe Learning Environments",
                    "ContentId": "Bullying Prevention"
                },
                "l3NavItem52": {
                    "Id": "FOIP",
                    "Name": "FOIP",
                    "Description": "Edmonton Public Schools is committed to privacy protection for staff, students, and families.",
                    "l2NavId": "Privacy & Safe Learning Environments",
                    "ContentId": "FOIP"
                },
                "l3NavItem53": {
                    "Id": "Sexual Orientation & Gender Identity",
                    "Name": "Sexual Orientation & Gender Identity",
                    "Description": "Edmonton Public Schools is proud of its commitment to support our sexual and gender minority (LGBTQ) students, staff, and families through our policies, \
            regulations, and ongoing opportunities for meaningful engagement.",
                    "l2NavId": "Privacy & Safe Learning Environments",
                    "ContentId": "Sexual Orientation & Gender Identity"
                },
                //END L3 ITEMS FOR PRIVACY & SAFE LEARNING ENVIRONMENTS
                //BEGIN L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES
                "l3NavItem54": {
                    "Id": "Field Trips",
                    "Name": "Field Trips",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities",
                    "ContentId": "Field Trips"
                },
                "l3NavItem55": {
                    "Id": "Interschool Activities",
                    "Name": "Interschool Activities",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities",
                    "ContentId": "Interschool Activities"
                },
                "l3NavItem56": {
                    "Id": "Off-Campus Education",
                    "Name": "Off-Campus Education",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities",
                    "ContentId": "Off-Campus Education"
                },
                "l3NavItem57": {
                    "Id": "School Dances",
                    "Name": "School Dances",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities",
                    "ContentId": "School Dances"
                },
                "l3NavItem58": {
                    "Id": "Student Organizations",
                    "Name": "Student Organizations",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "School Events & Activities",
                    "ContentId": "Student Organizations"
                },
                //END L3 ITEMS FOR PRIVACY & SCHOOL EVENTS & ACTIVITIES
                //BEGIN L3 ITEMS FOR STAFF MANAGEMENT & HIRING
                "l3NavItem59": {
                    "Id": "Hiring",
                    "Name": "Hiring",
                    "Description": "Appeals, job evaluations, and position descriptions.",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "Hiring"
                },
                "l3NavItem60": {
                    "Id": "Intern Teachers",
                    "Name": "Intern Teachers",
                    "Description": "",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "Intern Teachers"
                },
                "l3NavItem61": {
                    "Id": "New Employees",
                    "Name": "New Employees",
                    "Description": "Orientation resources for people who are new to EPS.",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "New Employees"
                },
                "l3NavItem62": {
                    "Id": "Supervision & Evaluation",
                    "Name": "Supervision & Evaluation",
                    "Description": "",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "Supervision & Evaluation"
                },
                "l3NavItem63": {
                    "Id": "Supply Staff",
                    "Name": "Supply Staff",
                    "Description": "Assignments and descriptions of supply staff duties.",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "Supply Staff"
                },
                "l3NavItem64": {
                    "Id": "Teacher Induction",
                    "Name": "Teacher Induction",
                    "Description": "Helping new teachers get their start.",
                    "l2NavId": "Staff Management & Hiring",
                    "ContentId": "Teacher Induction"
                },
                //END L3 ITEMS FOR STAFF MANAGEMENT & HIRING
                //BEGIN L3 ITEMS FOR STUDENT MANAGEMENT
                "l3NavItem65": {
                    "Id": "Attendance",
                    "Name": "Attendance",
                    "Description": "",
                    "l2NavId": "Student Management",
                    "ContentId": "Attendance"
                },
                "l3NavItem66": {
                    "Id": "Awards",
                    "Name": "Awards",
                    "Description": "",
                    "l2NavId": "Student Management",
                    "ContentId": "Awards"
                },
                "l3NavItem67": {
                    "Id": "Behaviour & Discipline",
                    "Name": "Behaviour & Discipline",
                    "Description": "Behaviour management, police investigations, suspensions & expulsions.",
                    "l2NavId": "Student Management",
                    "ContentId": "Behaviour & Discipline"
                },
                "l3NavItem68": {
                    "Id": "Counselling",
                    "Name": "Counselling",
                    "Description": "Intervention, staff or student suicide.",
                    "l2NavId": "Student Management",
                    "ContentId": "Counselling"
                },
                "l3NavItem69": {
                    "Id": "Health & Medical",
                    "Name": "Health & Medical",
                    "Description": "Communicable diseases, prescription meds, and student health emergencies.",
                    "l2NavId": "Student Management",
                    "ContentId": "Health & Medical"
                },
                "l3NavItem70": {
                    "Id": "International Students",
                    "Name": "International Students",
                    "Description": "",
                    "l2NavId": "Student Management",
                    "ContentId": "International Students"
                },
                "l3NavItem71": {
                    "Id": "Legal Custody",
                    "Name": "Legal Custody",
                    "Description": "",
                    "l2NavId": "Student Management",
                    "ContentId": "Legal Custody"
                },
                "l3NavItem72": {
                    "Id": "Student Records",
                    "Name": "Student Records",
                    "Description": "Administrative file, transferring.",
                    "l2NavId": "Student Management",
                    "ContentId": "Student Records"
                },
                "l3NavItem73": {
                    "Id": "Supervision",
                    "Name": "Supervision",
                    "Description": "",
                    "l2NavId": "Student Management",
                    "ContentId": "Supervision"
                },
                "l3NavItem74": {
                    "Id": "Student Transportation",
                    "Name": "Student Transportation",
                    "Description": "Buses, school vehicles, and volunteer drivers.",
                    "l2NavId": "Student Management",
                    "ContentId": "Student Transportation"
                },
                //END L3 ITEMS FOR STUDENT MANAGEMENT
                //BEGIN L3 ITEMS FOR SUPPLIES & EQUIPMENT
                "l3NavItem75": {
                    "Id": "Distribution Centre",
                    "Name": "Distribution Centre",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment",
                    "ContentId": "Distribution Centre"
                },
                "l3NavItem76": {
                    "Id": "Purchasing Goods & Services",
                    "Name": "Purchasing Goods & Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment",
                    "ContentId": "Purchasing Goods & Services"
                },
                "l3NavItem77": {
                    "Id": "Surplus Disposal",
                    "Name": "Surplus Disposal",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "l2NavId": "Supplies & Equipment",
                    "ContentId": "Surplus Disposal"
                },
                //END L3 ITEMS FOR SUPPLIES & EQUIPMENT
                //BEGIN L3 ITEMS FOR TECHNOLOGY
                "l3NavItem78": {
                    "Id": "Applications",
                    "Name": "Applications",
                    "Description": "Access to all district software applications. Some may require sign in.",
                    "l2NavId": "Technology",
                    "ContentId": "Applications",
                    "PageUrl": "applications.html"
                },
                "l3NavItem79": {
                    "Id": "Computers & Tablets",
                    "Name": "Computers & Tablets",
                    "Description": "Computer, Chrombook, and tablet support.",
                    "l2NavId": "Technology",
                    "ContentId": "Computers & Tablets"
                },
                "l3NavItem80": {
                    "Id": "E-Mail",
                    "Name": "E-Mail",
                    "Description": "Setting up and managing G-Mail.",
                    "l2NavId": "Technology",
                    "ContentId": "E-Mail"
                },
                "l3NavItem81": {
                    "Id": "IT Services Store",
                    "Name": "IT Services Store",
                    "Description": "Purchasing, service, and repair for your technology.",
                    "l2NavId": "Technology",
                    "ContentId": "IT Services Store"
                },
                "l3NavItem82": {
                    "Id": "IT Services Help Desk",
                    "Name": "IT Services Help Desk",
                    "Description": "Application, software and hardware support.",
                    "l2NavId": "Technology",
                    "ContentId": "IT Services Help Desk"
                },
                "l3NavItem83": {
                    "Id": "IT Technical Services",
                    "Name": "IT Technical Services",
                    "Description": "Internet & web services, software programming, planning, training, and technical support.",
                    "l2NavId": "Technology",
                    "ContentId": "IT Technical Services"
                },
                "l3NavItem84": {
                    "Id": "Network Access",
                    "Name": "Network Access",
                    "Description": "Getting set up on the EPS network.",
                    "l2NavId": "Technology",
                    "ContentId": "Network Access"
                },
                "l3NavItem85": {
                    "Id": "Printing Services",
                    "Name": "Printing Services",
                    "Description": "Large volume printing, binding, laminating, and more.",
                    "l2NavId": "Technology",
                    "ContentId": "Printing Services"
                },
                "l3NavItem86": {
                    "Id": "Technology Incentive Program",
                    "Name": "Technology Incentive Program",
                    "Description": "Description.",
                    "l2NavId": "Technology",
                    "ContentId": "Technology Incentive Program"
                },
                //END L3 ITEMS FOR TECHNOLOGY
                //BEGIN L3 ITEMS FOR BENEFITS
                "l3NavItem87": {
                    "Id": "ASEBP",
                    "Name": "ASEBP",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "ASEBP"
                },
                "l3NavItem88": {
                    "Id": "Employee & Family Assistance",
                    "Name": "Employee & Family Assistance",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "Employee & Family Assistance"
                },
                "l3NavItem89": {
                    "Id": "Employee Health Services",
                    "Name": "Employee Health Services",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "Employee Health Services"
                },
                "l3NavItem90": {
                    "Id": "Fitness",
                    "Name": "Fitness",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "Fitness"
                },
                "l3NavItem91": {
                    "Id": "Retirement & Pension",
                    "Name": "Retirement & Pension",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "Retirement & Pension"
                },
<<<<<<< HEAD
                "l3NavItem450": {
                    "Id": "RRSP",
                    "Name": "RRSP",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Benefits for Teachers",
                    "ContentId": "RRSP"
                },
=======
                //END L3 ITEMS FOR BENEFITS
                //BEGIN L3 ITEMS FOR CAREER STAGES
>>>>>>> origin/master
                "l3NavItem92": {
                    "Id": "Changing Positions",
                    "Name": "Changing Positions",
                    "Description": "Information for moving from one job or job level to another.",
                    "l2NavId": "Career Stages",
                    "ContentId": "Changing Positions"
                },
                "l3NavItem93": {
                    "Id": "Leaves of Absence",
                    "Name": "Leaves of Absence",
                    "Description": "Resources to help you understand your options if you need to be away for an extended period.",
                    "l2NavId": "Career Stages",
                    "ContentId": "Leaves of Absence"
                },
                "l3NavItem94": {
                    "Id": "New Employees",
                    "Name": "New Employees",
                    "Description": "Orientation resources for people who are new to EPS.",
                    "l2NavId": "Career Stages",
                    "ContentId": "New Employees"
                },
                "l3NavItem95": {
                    "Id": "Taking on Leadership",
                    "Name": "Taking on Leadership",
                    "Description": "Resources to help you as you take on a leadership role.",
                    "l2NavId": "Career Stages",
                    "ContentId": "Taking on Leadership"
                },
                "l3NavItem96": {
                    "Id": "Teacher Induction",
                    "Name": "Teacher Induction",
                    "Description": "Helping new teachers get their start.",
                    "l2NavId": "Career Stages",
                    "ContentId": "Teacher Induction"
                },
                "l3NavItem97": {
                    "Id": "Thinking About Retirement",
                    "Name": "Thinking About Retirement",
                    "Description": "Resources to help you plan for the big day.",
                    "l2NavId": "Career Stages",
                    "ContentId": "Thinking About Retirement"
                },
                //END L3 ITEMS FOR CAREER STAGES
                //BEGIN L3 ITEMS FOR HEALTH & SAFETY
                "l3NavItem98": {
                    "Id": "Ergonomics",
                    "Name": "Ergonomics",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Ergonomics"
                },
                "l3NavItem99": {
                    "Id": "Hazards & Assessments",
                    "Name": "Hazards & Assessments",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Hazards & Assessments"
                },
                "l3NavItem100": {
                    "Id": "Health Recovery",
                    "Name": "Health Recovery",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Health Recovery"
                },
                "l3NavItem101": {
                    "Id": "Incidents & Injuries",
                    "Name": "Incidents & Injuries",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Incidents & Injuries"
                },
                "l3NavItem102": {
                    "Id": "Safe Working Conditions",
                    "Name": "Safe Working Conditions",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Safe Working Conditions"
                },
                "l3NavItem103": {
                    "Id": "Workers' Compensation Board",
                    "Name": "Workers' Compensation Board",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Health & Safety",
                    "ContentId": "Workers' Compensation Board"
                },
                //END L3 ITEMS FOR HEALTH & SAFETY
                //BEGIN L3 ITEMS FOR LEAVES OF ABSENCE
                "l3NavItem104": {
                    "Id": "Community Service",
                    "Name": "Community Service",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Community Service"
                },
                "l3NavItem105": {
                    "Id": "Jury Duty",
                    "Name": "Jury Duty",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ConetentId": "Jury Duty"
                },
                "l3NavItem401": {
                    "Id": "Leave For The Arrival of a Child",
                    "Name": "Leave For The Arrival of a Child",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Leave For The Arrival of a Child"
                },
                "l3NavItem106": {
                    "Id": "Military Service",
                    "Name": "Military Service",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Military Service"
                },
                "l3NavItem107": {
                    "Id": "Maternity Leave",
                    "Name": "Maternity & Paternity",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Maternity & Paternity"
                },
                "l3NavItem400": {
                    "Id": "Parental / Adoptive Leave",
                    "Name": "Parental / Adoptive Leave",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Parental / Adoptive Leave"
                },
                "l3NavItem108": {
                    "Id": "Personal Leave",
                    "Name": "Personal Leave",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Personal Leave"
                },
                "l3NavItem109": {
                    "Id": "Professional Improvement Leave",
                    "Name": "Professional Improvement Leave",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Professional Improvement Leave"
                },
                "l3NavItem110": {
                    "Id": "Sick Leave",
                    "Name": "Sick Leave",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Leaves of Absence for Teachers",
                    "ContentId": "Sick Leave"
                },
                //END L3 ITEMS FOR LEAVES OF ABSENCE
                //BEGIN L3 ITEMS FOR MODIFIED WORK ARRANGEMENTS
                "l3NavItem111": {
                    "Id": "Deferred Salary",
                    "Name": "Deferred Salary",
                    "Description": "",
                    "l2NavId": "Modified Work Arrangements",
                    "ContentId": "Deferred Salary"
                },
                "l3NavItem112": {
                    "Id": "Exchanges & Secondments",
                    "Name": "Exchanges & Secondments",
                    "Description": "",
                    "l2NavId": "Modified Work Arrangements",
                    "ContentId": "Exchanges & Secondments"
                },
                "l3NavItem113": {
                    "Id": "Job Sharing",
                    "Name": "Job Sharing",
                    "Description": "",
                    "l2NavId": "Modified Work Arrangements",
                    "ContentId": "Job Sharing"
                },
<<<<<<< HEAD
                "l3NavItem1151": {
                    "Id": "Casual Pay",
                    "Name": "Casual Pay",
                    "Description": "Information for people who work on a casual basis or when teachers work outside regular hour and/or when school is out of sessions.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Casual Pay"
                },
=======
                //END L3 ITEMS FOR MODIFIED WORK ARRANGEMENTS
                //BEGIN L3 ITEMS FOR PAY & EXPENSES
>>>>>>> origin/master
                "l3NavItem115": {
                    "Id": "Direct Deposit",
                    "Name": "Direct Deposit",
                    "Description": "Procedures for signing up for or altering direct deposit.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Direct Deposit"
                },
                "l3NavItem116": {
                    "Id": "Expenses",
                    "Name": "Expenses",
                    "Description": "Information on expense reimbursement and advances.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Expenses"
                },
                "l3NavItem118": {
                    "Id": "Overtime",
                    "Name": "Overtime",
                    "Description": "Pay options when working during the summer, Christmas, spring or any other natural breaks at the \
           request of the Superintendent.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Overtime"
                },
                "l3NavItem119": {
                    "Id": "Taxes",
                    "Name": "Taxes",
                    "Description": "Information on taxes.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Taxes"
                },
                "l3NavItem120": {
                    "Id": "Time Reporting",
                    "Name": "Time Reporting",
                    "Description": "Procedures and forms for time reporting.",
                    "l2NavId": "Pay & Expenses for Teachers",
                    "ContentId": "Time Reporting"
                },
                //END L3 ITEMS FOR PAY & EXPENSES
                //BEGIN L3 ITEMS FOR PROFESSIONAL DEVELOPMENT
                "l3NavItem121": {
                    "Id": "Comprehensive School Health",
                    "Name": "Comprehensive School Health",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Comprehensive School Health"
                },
                "l3NavItem122": {
                    "Id": "Curriculum & Resource Support",
                    "Name": "Curriculum & Resource Support",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Curriculum & Resource Support"
                },
                "l3NavItem123": {
                    "Id": "Custodians",
                    "Name": "Custodians",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Custodians"
                },
                "l3NavItem124": {
                    "Id": "Educational Assistants",
                    "Name": "Educational Assistants",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Educational Assistants"
                },
                "l3NavItem125": {
                    "Id": "First Nations, Metis, & Inuit Education",
                    "Name": "First Nations, Metis, & Inuit Education",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "First Nations, Metis, & Inuit Education"
                },
                "l3NavItem126": {
                    "Id": "Leadership",
                    "Name": "Leadership",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Leadership"
                },
                "l3NavItem127": {
                    "Id": "Inclusive Learning",
                    "Name": "Inclusive Learning",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Inclusive Learning"
                },
                "l3NavItem128": {
                    "Id": "Languages",
                    "Name": "Languages",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Languages"
                },
                "l3NavItem129": {
                    "Id": "Literacy",
                    "Name": "Literacy",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Literacy"
                },
                "l3NavItem130": {
                    "Id": "Literacy Interventions",
                    "Name": "Literacy Interventions",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Literacy Interventions"
                },
                "l3NavItem131": {
                    "Id": "Mentorship",
                    "Name": "Mentorship",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Mentorship"
                },
                "l3NavItem132": {
                    "Id": "Nonviolent Crisis Intervention (NVCI)",
                    "Name": "Nonviolent Crisis Intervention (NVCI)",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Nonviolent Crisis Intervention (NVCI)"
                },
                "l3NavItem133": {
                    "Id": "Student Assessment",
                    "Name": "Student Assessment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Student Assessment"
                },
                "l3NavItem134": {
                    "Id": "Supply Staff",
                    "Name": "Supply Staff",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Supply Staff"
                },
                "l3NavItem135": {
                    "Id": "Teacher Induction",
                    "Name": "Teacher Induction",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Teacher Induction"
                },
                "l3NavItem136": {
                    "Id": "Technology",
                    "Name": "Technology",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Professional Development",
                    "ContentId": "Technology"
                },
                //END L3 ITEMS FOR PROFESSIONAL DEVELOPMENT
                //BEGIN L3 ITEMS FOR STAFF CONDUCT & RESPONSIBILITY
                "l3NavItem137": {
                    "Id": "Code of Conduct",
                    "Name": "Code of Conduct",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Code of Conduct"
                },
                "l3NavItem138": {
                    "Id": "Grievances",
                    "Name": "Grievances",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Grievances"
                },
                "l3NavItem139": {
                    "Id": "Public Interest",
                    "Name": "Public Interest",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Public Interest"
                },
                "l3NavItem140": {
                    "Id": "Record Checks",
                    "Name": "Record Checks",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Record Checks"
                },
                "l3NavItem141": {
                    "Id": "Respectful Working Environment",
                    "Name": "Respectful Working Environment",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Respectful Working Environment"
                },
                "l3NavItem142": {
                    "Id": "Workplace Violence",
                    "Name": "Workplace Violence",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "l2NavId": "Staff Conduct & Responsibility",
                    "ContentId": "Workplace Violence"
                }
            };
            this.LevelFourNavItems = {
                //BEGIN L4 ITEMS FOR STUDENT TRANSPORTATION
                "l4NavItem1": {
                    "Id": "Buses",
                    "Name": "Buses",
                    "Description": "Yellow buses and charters.",
                    "ContentId": "Buses",
                    "l3NavId": "Student Transportation"
                },
                "l4NavItem2": {
                    "Id": "School Vehicles",
                    "Name": "School Vehicles",
                    "Description": "Use of school owned vehicles for transporting students.",
                    "ContentId": "School Vehicles",
                    "l3NavId": "Student Transportation"
                },
                "l4NavItem3": {
                    "Id": "Volunteer Drivers",
                    "Name": "Volunteer Drivers",
                    "Description": "Transporting students with volunteer drivers.",
                    "ContentId": "Volunteer Drivers",
                    "l3NavId": "Student Transportation"
                },
                "l4NavItem4": {
                    "Id": "Building Access",
                    "Name": "Building Access",
                    "ContentId": "Building Access",
                    "l3NavId": "Security"
                },
                "l4NavItem5": {
                    "Id": "Crime Prevention",
                    "Name": "Crime Prevention",
                    "ContentId": "Crime Prevention",
                    "l3NavId": "Security"
                },
                "l4NavItem6": {
                    "Id": "Electronic Surveillance",
                    "Name": "Electronic Surveillance",
                    "ContentId": "Electronic Surveillance",
                    "l3NavId": "Security"
                },
                "l4NavItem7": {
                    "Id": "Vandalism",
                    "Name": "Vandalism",
                    "ContentId": "Vandalism",
                    "l3NavId": "Security"
                }
            };
        }
        return NavItemsDatabase;
    }());
    App.NavItemsDatabase = NavItemsDatabase;
})(App || (App = {}));
//# sourceMappingURL=navItems.js.map