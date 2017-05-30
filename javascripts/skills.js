// Web Development
var webDev=new Array("HTML5,&nbsp;", "CSS3,&nbsp;", "SASS,&nbsp;", "Responsive Design,&nbsp;", "JavaScript,&nbsp;", "jQuery,&nbsp;", "WCAG 2.0,&nbsp;", "508 Guidelines,&nbsp;","Foundation,&nbsp;", "Bootstrap,&nbsp;", "Unsemantic");

for(var i=0; i<webDev.length; i++)
    $('#skills').find("div.webDevSkills").append('<div class="skillContainer"><div class="skillName">' + webDev[i] + '</div></div>');

// Design
var design=new Array("Axure,&nbsp;", "Sketch,&nbsp;", "InVision,&nbsp;", "Photoshop,&nbsp;", "Illustrator,&nbsp;", "InDesign,&nbsp;",  "Adobe XD,&nbsp;", "Keynote,&nbsp;", "Unity 3D");

for(var i=0; i<design.length; i++)
    $('#skills').find("div.designSkills").append('<div class="skillContainer"><div class="skillName">' + design[i] + '</div></div>');

// Management
var management=new Array("Github,&nbsp;", "FogBugz,&nbsp;", "Trello,&nbsp;", "Pivotal Tracker,&nbsp;", "Cyberduck,&nbsp;", "MS Office");

for(var i=0; i<management.length; i++)
    $('#skills').find("div.managementSkills").append('<div class="skillContainer"><div class="skillName">' + management[i] + '</div></div>');

// Database
var database=new Array("PostgreSQL,&nbsp;", "Oracle SQL");

for(var i=0; i<database.length; i++)
    $('#skills').find("div.databaseSkills").append('<div class="skillContainer"><div class="skillName">' + database[i] + '</div></div>');

// Cloud Applications
var cloud=new Array("Heroku,&nbsp;", "Amazon S3,&nbsp;", "Google Cloud");

for(var i=0; i<cloud.length; i++)
    $('#skills').find("div.cloudSkills").append('<div class="skillContainer"><div class="skillName">' + cloud[i] + '</div></div>');


