var App;
(function (App) {
    var ResourcesDatabase = (function () {
        function ResourcesDatabase() {
            this.Resources = {
                "Resource1": {
                    "Id": "General Performance Rubric for Mathematics",
                    "Name": "General Performance Rubric for Mathematics",
                    "Description": "The criteria in the general rubric were selected to align with process skills outlined\
           in the revised Program of Studies for Mathematics.",
                    "MetadataId": "General Performance Rubric for Mathematics Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Mathematics", "Assessments"]
                },
                "Resource2": {
                    "Id": "Omar’s Balance Beam – Exemplar",
                    "Name": "Omar’s Balance Beam – Exemplar",
                    "Description": "GR 7 – Specific Outcome: Demonstrate an understanding of preservation of equality by:\
           1) modelling preservation of equality, concretely, pictorially and symbolically; 2) applying\
            preservation of equality to solve equations.",
                    "MetadataId": "Omar’s Balance Beam – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource3": {
                    "Id": "Shopping with Allie – Exemplar",
                    "Name": "Shopping with Allie – Exemplar",
                    "Description": "GR 7 – Specific Outcome: Solve problems involving percents from 1% to 100%.",
                    "MetadataId": "Shopping with Allie – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource4": {
                    "Id": "What's the mass of the container? – Exemplar",
                    "Name": "What's the mass of the container? – Exemplar",
                    "Description": "GR 7 – Specific Outcome: Create a table of values from a linear relation,\
           graph the table of values, and analyze the graph to draw conclusions and solve problems.",
                    "MetadataId": "What's the mass of the container? – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource5": {
                    "Id": "Have you lost your marbles? – Exemplar",
                    "Name": "Have you lost your marbles? – Exemplar",
                    "Description": "GR 8 – Specific Outcome: Graph and analyze two-variable linear relations.",
                    "MetadataId": "Have you lost your marbles? – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource6": {
                    "Id": "Helping Harold – Exemplar",
                    "Name": "Helping Harold – Exemplar",
                    "Description": "GR 8 – Specific Outcome: Demonstrate an understanding of percents greater\
           than or equal to 0%, including greater than 100%.",
                    "MetadataId": "Helping Harold – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource7": {
                    "Id": "Claim the Prize – Exemplar",
                    "Name": "Claim the Prize – Exemplar",
                    "Description": "GR 9 – Specific Outcome: Explain and apply the order of operations, \
          including exponents, with and without technology.",
                    "MetadataId": "Claim the Prize – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource8": {
                    "Id": "Dollars and Sense – Exemplar",
                    "Name": "Dollars and Sense – Exemplar",
                    "Description": "GR 9 – Specific Outcomes: 1) Generalize a pattern arising from a problem-solving\
           context, using a linear equation, and verify by substitution. 2) Graph a linear relation, analyze\
            the graph, and interpolate or extrapolate to solve problems.",
                    "MetadataId": "Dollars and Sense – Exemplar Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource9": {
                    "Id": "Quest A+",
                    "Name": "Quest A+",
                    "Description": "Quest A+ is Alberta Education's digital testing solution. \
          This application contains released tests for Grade 9 PATs.",
                    "MetadataId": "Quest A+ Metadata",
                    "Tags": ["7-9", "Mathematics", "Assessments"]
                },
                "Resource10": {
                    "Id": "Alberta Assessment Consortium Performance Assessments",
                    "Name": "Alberta Assessment Consortium Performance Assessments",
                    "Description": "This is a searchable database of authentic performance assessments\
           including tasks for Grades 1-3.  These tasks are based on Alberta curriculum and \
           include student materials, outcomes & criteria, competency connections, and student exemplars.",
                    "MetadataId": "Alberta Assessment Consortium Performance Assessments Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Mathematics", "Assessments"]
                },
                "Resource11": {
                    "Id": "Alberta Cross-Curricular Competencies",
                    "Name": "Alberta Cross-Curricular Competencies",
                    "Description": "Basic list of Alberta Education's Cross-Curricular Competencies",
                    "MetadataId": "Alberta Cross-Curricular Competencies Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource12": {
                    "Id": "Curriculum Development Indicator Guide",
                    "Name": "Curriculum Development Indicator Guide",
                    "Description": "Alberta Education's Cross-curricular Competencies and Draft Competency Indicators.",
                    "MetadataId": "Curriculum Development Indicator Guide Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource13": {
                    "Id": "Edmonton Regional Learning Consortium Cross-curricular Competency Overview",
                    "Name": "Edmonton Regional Learning Consortium Cross-curricular Competency Overview",
                    "Description": "This collection of Cross-curricular Competency overview documents was developed \
          by the Edmonton Regional Learning Consortium as a result of a grant from Alberta Education to support\
           implementation. Each document provides an overview of one Cross-curricular Competency along with key\
            understandings, implications for planning and instruction and questions for reflections and discussions.",
                    "MetadataId": "Edmonton Regional Learning Consortium Cross-curricular Competency Overview Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource14": {
                    "Id": "Critical Thinking – Competency",
                    "Name": "Critical Thinking – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Critical Thinking – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource15": {
                    "Id": "Communication – Competency",
                    "Name": "Communication – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Communication – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource16": {
                    "Id": "Problem Solving – Competency",
                    "Name": "Problem Solving – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Problem Solving – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Instructional Resources"]
                },
                "Resource17": {
                    "Id": "Collaboration – Competency",
                    "Name": "Collaboration – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Collaboration – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Assessments"]
                },
                "Resource18": {
                    "Id": "Manage Information – Competency",
                    "Name": "Manage Information – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Manage Information – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Assessments"]
                },
                "Resource19": {
                    "Id": "Cultural & Global Citizenship – Competency",
                    "Name": "Cultural & Global Citizenship – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Cultural & Global Citizenship – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Research & Support"]
                },
                "Resource20": {
                    "Id": "Creativity & Innovation – Competency",
                    "Name": "Creativity & Innovation – Competency",
                    "Description": "Students may learn about competencies in various learning environments.\
           Students need to understand the common language of the competencies across all grades and subjects.",
                    "MetadataId": "Creativity & Innovation – Competency Metadata",
                    "Tags": ["1-3", "4-6", "7-9", "10-12", "Competencies", "Research & Support"]
                }
            };
        }
        return ResourcesDatabase;
    }());
    App.ResourcesDatabase = ResourcesDatabase;
})(App || (App = {}));
//# sourceMappingURL=resources.js.map