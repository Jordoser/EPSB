var App;
(function (App) {
    var DocumentsDatabase = (function () {
        function DocumentsDatabase() {
            this.Documents = {
                "Document1": {
                    "Id": "Move to Action: Bullying Prevention Toolkit",
                    "Name": "Move to Action: Bullying Prevention Toolkit",
                    "Description": "Information and tools to successfully create and sustain a positive school environment.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTRTNlVjhHS3RVcWc",
                    "MetadataId": "Move to Action: Bullying Prevention Toolkit Metadata",
                    "Tags": ["Bullying Prevention", "Manuals & Plans"]
                },
                "Document2": {
                    "Id": "Assessment Toolkit (Canadian Public Health Association)",
                    "Name": "Assessment Toolkit (Canadian Public Health Association)",
                    "Description": "Individual checklists for students, parents, teachers and administrators.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTMkRQRnBhV1F6NHc",
                    "MetadataId": "Assessment Toolkit (Canadian Public Health Association) Metadata",
                    "Tags": ["Bullying Prevention", "Manuals & Plans"]
                },
                "Document3": {
                    "Id": "Safe School Survey (Canadian Public Health Association)",
                    "Name": "Safe School Survey (Canadian Public Health Association)",
                    "Description": "Assessment toolkit for bullying, harrassment, and peer relations at school.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYUxLbUhwTEFOU00",
                    "MetadataId": "Safe School Survey (Canadian Public Health Association) Metadata",
                    "Tags": ["Bullying Prevention", "Manuals & Plans"]
                },
                "Document4": {
                    "Id": "The Fourth R: Strategies for healthy youth relationships",
                    "Name": "EquippmentAndElectronicManual.docx",
                    "Description": "Evidence-based resource with strategies for supporting youth to develop healthy communication, conflict resolution and risk reduction skills.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTYVZERERZd0psbkE",
                    "MetadataId": "EquippmentAndElectronicManual.docx Metadata",
                    "Tags": ["Bullying Prevention", "External Sites"]
                },
                "Document5": {
                    "Id": "Olweus Bullying Prevention Program",
                    "Name": "Olweus Bullying Prevention Program",
                    "Description": "Evidence-based program proven to enhance student relationships, by addressing situations in our culture such as bullying, anti social behaviours and aggression.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "FacilityPolicies.doc Metadata",
                    "Tags": ["Bullying Prevention", "External Sites"]
                },
                "Document6": {
                    "Id": "Everyone Is In: Move to Action – Bullying Prevention",
                    "Name": "Everyone Is In: Move to Action – Bullying Prevention",
                    "Description": "Powerpoint presentation by Sherry Melney, M.Ed. September, 2012.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Everyone Is In: Move to Action – Bullying Prevention Metadata",
                    "Tags": ["Bullying Prevention", "Presentations"]
                },
                "Document7": {
                    "Id": "The Cyberbullying Virus",
                    "Name": "The Cyberbullying Virus",
                    "Description": "Video on online bullying – Duration: 4:31",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "The Cyberbullying Virus Metadata",
                    "Tags": ["Bullying Prevention", "Videos"]
                },
                "Document8": {
                    "Id": "Student Bullying-Prevention Artwork",
                    "Name": "Student Bullying-Prevention Artwork",
                    "Description": "Grade 2 and 4 artwork from Virgina Park School.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Student Bullying-Prevention Artwork Metadata",
                    "Tags": ["Bullying Prevention", "Images & Graphics"]
                },
                "Document9": {
                    "Id": "Volunteers - Registration and Records Checks Policy",
                    "Name": "Volunteers - Registration and Records Checks Policy",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Volunteers - Registration and Records Checks Policy Metadata",
                    "Tags": ["Volunteers", "School Operations", "Policies"]
                },
                "Document10": {
                    "Id": "Liability Insurance of Volunteer Drivers Policy",
                    "Name": "Liability Insurance of Volunteer Drivers Policy",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Volunteers - Registration and Records Checks Policy Metadata",
                    "Tags": ["Volunteers", "Policies", "Volunteer Drivers"]
                },
                "Document11": {
                    "Id": "Job-Share Plan Information and Agreement",
                    "Name": "Job-Share Plan Information and Agreement",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Job-Share Plan Information and Agreemen Metadata",
                    "Tags": ["Job Sharing", "Forms & Templates"]
                },
                "Document12": {
                    "Id": "Alberta Teachers' Association Collective Agreement",
                    "Name": "Alberta Teachers' Association Collective Agreement",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Alberta Teachers' Association Collective Agreement Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document13": {
                    "Id": "Canadian Union of Public Employees Local 474 Collective Agreement (Custodians)",
                    "Name": "Canadian Union of Public Employees Local 474 Collective Agreement (Custodians)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Canadian Union of Public Employees Local 474 Collective Agreement (Custodians) Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document14": {
                    "Id": "Exempt Management - Terms and Conditions of Employment",
                    "Name": "Exempt Management - Terms and Conditions of Employment",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Exempt Management - Terms and Conditions of Employment Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document15": {
                    "Id": "Canadian Union of Public Employees Local 784 Collective Agreement (Maintenance)",
                    "Name": "Canadian Union of Public Employees Local 784 Collective Agreement (Maintenance)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Canadian Union of Public Employees Local 784 Collective Agreement (Maintenance) Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document16": {
                    "Id": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support)",
                    "Name": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support) Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document17": {
                    "Id": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support)",
                    "Name": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Canadian Union of Public Employees Local 3550 Collective Agreement (Support) Metadata",
                    "Tags": ["Employment Contracts & Agreements", "Contracts & Agreements"]
                },
                "Document18": {
                    "Id": "Missing child.doc",
                    "Name": "Missing child.doc",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Missing child.doc Metadata",
                    "Tags": ["Missing Child", "Forms & Templates"]
                },
                "Document19": {
                    "Id": "Fixed Route Kindergarten Application 2015-16 (Print on pink paper)",
                    "Name": "Fixed Route Kindergarten Application 2015-16 (Print on pink paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Fixed Route Kindergarten Application 2015-16 (Print on pink paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document20": {
                    "Id": "Fixed Route Application 2015-16 (Print on green paper)",
                    "Name": "Fixed Route Application 2015-16 (Print on green paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Fixed Route Application 2015-16 (Print on green paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document21": {
                    "Id": "Conditional Application 2015-16 (Print on white paper)",
                    "Name": "Conditional Application 2015-16 (Print on white paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Conditional Application 2015-16 (Print on white paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document22": {
                    "Id": "Fixed Route Kindergarten Application 2016-17 (Print on pink paper)",
                    "Name": "Fixed Route Kindergarten Application 2016-17 (Print on pink paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Fixed Route Kindergarten Application 2016-17(Print on pink paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document23": {
                    "Id": "Fixed Route Application 2016-17 (Print on green paper)",
                    "Name": "Fixed Route Application 2016-17 (Print on green paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Fixed Route Application 2016-17 (Print on green paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document24": {
                    "Id": "Conditional Application 2016-17 (Print on white paper)",
                    "Name": "Conditional Application 2016-17 (Print on white paper)",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Conditional Application 2016-17 (Print on white paper) Metadata",
                    "Tags": ["Buses", "Forms & Templates"]
                },
                "Document26": {
                    "Id": "EPS New Employee Guide",
                    "Name": "EPS New Employee Guide",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "EPS New Employee Guide Metadata",
                    "Tags": ["New Employees", "Manuals & Plans"]
                },
                "Document27": {
                    "Id": "Application for Direct Deposit of Pay",
                    "Name": "Application for Direct Deposit of Pay",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Application for Direct Deposit of Pay Metadata",
                    "Tags": ["New Employees", "Forms & Templates"]
                },
                "Document28": {
                    "Id": "District Staff Code of Conduct",
                    "Name": "District Staff Code of Conduct",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "District Staff Code of Conduct Metadata",
                    "Tags": ["New Employees", "Policies"]
                },
                "Document29": {
                    "Id": "Board and Staff Relations",
                    "Name": "Board and Staff Relations",
                    "Description": "",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["New Employees", "Policies"]
                },
                "Document30": {
                    "Id": "Benefits for Teachers from Collective Agreement",
                    "Name": "Benefits for Teachers from Collective Agreement",
                    "Description": "Outlines the District’s contribution to your benefits plan.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "Group Insurance", "Contracts & Agreements"]
                },
                "Document31": {
                    "Id": "Employee and Family Assistance (EFAP) Welcome Letter",
                    "Name": "Employee and Family Assistance (EFAP) Welcome Letter",
                    "Description": "Learn more about EFAP services available for you and your dependents.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "ASEBP", "Employee & Family Assistance", "Overviews"]
                },
                "Document32": {
                    "Id": "Employee and Family Assistance (EFAP) Brochure",
                    "Name": "Employee and Family Assistance (EFAP) Brochure",
                    "Description": "Learn more about EFAP services available for you and your dependents.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "ASEBP", "Employee & Family Assistance", "Overviews"]
                },
                "Document33": {
                    "Id": "EPS–ATA Collective Agreement 2012-2016",
                    "Name": "EPS–ATA Collective Agreement 2012-2016",
                    "Description": "Full Collective Agreement.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "ASEBP", "Contracts & Agreements"]
                },
                "Document34": {
                    "Id": "Employee and Family Assistance (EFAP) FAQs",
                    "Name": "Employee and Family Assistance (EFAP) FAQs",
                    "Description": "Learn more about EFAP services available for you and your dependents.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "ASEBP", "Employee & Family Assistance", "Overviews"]
                },
                "Document35": {
                    "Id": "Employee and Family Assistance (EFAP) Member Services Information",
                    "Name": "Employee and Family Assistance (EFAP) FAQs",
                    "Description": "Learn more about EFAP services available for you and your dependents.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "ASEBP", "Employee & Family Assistance", "Overviews"]
                },
                "Document36": {
                    "Id": "Employee Health Services Brochure",
                    "Name": "Employee Health Services Brochure",
                    "Description": "Health services information, including Employee and Family Assistance , Health Recovery, WCB reporting, and Occupational Health and Safety.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "Employee Health Services", "Overviews"]
                },
                "Document37": {
                    "Id": "City of Edmonton Corporate Wellness Program",
                    "Name": "City of Edmonton Corporate Wellness Program",
                    "Description": "Health services information, including Employee and Family Assistance , Health Recovery, WCB reporting, and Occupational Health and Safety.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Benefits for Teachers", "Fitness", "External Sites"]
                },
                "Document38": {
                    "Id": "Resignation/Retirement Form",
                    "Name": "Resignation/Retirement Form",
                    "Description": "Fill in this form if you’re resigning or retiring.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Retirement & Pension", "Forms & Templates"]
                },
                "Document39": {
                    "Id": "Alberta Teachers’ Retirement Fund",
                    "Name": "Alberta Teachers’ Retirement Fund",
                    "Description": "Fill in this form if you’re resigning or retiring.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Retirement & Pension", "External Sites"]
                },
                "Document40": {
                    "Id": "Request for Group RRSP Payroll Deduction",
                    "Name": "Request for Group RRSP Payroll Deduction",
                    "Description": "Fill in this form if you’d like to have your RRSP contributions deposited directly to your financial institution through payroll deductions.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["RRSP", "Forms & Templates"]
                },
                "Document41": {
                    "Id": "One Time Payment Form",
                    "Name": "One Time Payment Form",
                    "Description": "Use this form to pay wages or “honoraria” pay for people who do work for the District on a casual basis.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Casual Pay", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document42": {
                    "Id": "Teacher Supplementary Pay Report Instructions",
                    "Name": "Teacher Supplementary Pay Report Instructions",
                    "Description": "Use this form when teachers have worked during Christmas Break, Spring Break and Summer Break.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Casual Pay", "Pay & Expenses For Teachers", "Overtime", "Forms & Templates"]
                },
                "Document43": {
                    "Id": "Direct Deposit Enrolment Form",
                    "Name": "Direct Deposit Enrolment Form",
                    "Description": "Use this form to have your pay deposited into your bank account. Provide a void cheque if you’d \
          like your pay deposited into a chequing account, or have your financial institution fill out Section C of this form.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Direct Deposit", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document44": {
                    "Id": "Advance on Expenses Form",
                    "Name": "Advance on Expenses Form",
                    "Description": "Use this form when requesting funds for expenses related to travel within the city, including: fuel, repairs, \
          lease payments, insurance and license, car washes, and parking while on district business or on professional development.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Expenses", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document45": {
                    "Id": "Teacher Supplementary Pay Report Instructions",
                    "Name": "Teacher Supplementary Pay Report Instructions",
                    "Description": "Use this form when teachers have worked during Christmas Break, Spring Break and Summer Break.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Casual Pay", "Overtime", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document46": {
                    "Id": "TD1 Federal Personal Tax Credit Returns",
                    "Name": "TD1 Federal Personal Tax Credit Returns",
                    "Description": "This form is used to determine the amount of tax to be deducted from your employment income.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Taxes", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document47": {
                    "Id": "TD1ab Alberta Personal Tax Credit Returns",
                    "Name": "TD1ab Alberta Personal Tax Credit Returns",
                    "Description": "If you’re claiming more than the basic personal amount, fill out this provincial TD1 form to \
          determine the amount of tax to be deducted from your employment income.",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Taxes", "Pay & Expenses For Teachers", "Forms & Templates"]
                },
                "Document48": {
                    "Id": "2016/2017 Timesheets – Teachers",
                    "Name": "2016/2017 Timesheets – Teachers",
                    "Description": "Fill in your timesheet and submit to your Supervisor at the end of each reporting period. Make \
          sure you record any times you were away during the reporting period. ",
                    "Link": "https://drive.google.com/uc?export=download&id=0B0TA8UeyyQlTNl9pa3pfSFk2QlU",
                    "MetadataId": "Board and Staff Relations Metadata",
                    "Tags": ["Time Reporting For Teachers", "Pay & Expenses For Teachers", "Forms & Templates"]
                }
            };
        }
        return DocumentsDatabase;
    }());
    App.DocumentsDatabase = DocumentsDatabase;
})(App || (App = {}));
//# sourceMappingURL=documents.js.map