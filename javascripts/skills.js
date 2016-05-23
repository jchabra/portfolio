// Web Development
var webDev=new Array("HTML5", "CSS3", "SASS", "Responsive Design", "JavaScript", "jQuery", "AJAX", "JSON", "Ruby on Rails", "WCAG 2.0");

for(var i=0; i<webDev.length; i++)
    $('#skills').find("div.webDevSkills").append('<div class="skillContainer grid-33 mobile-grid-50"><div class="skillBox">' + webDev[i] + '</div></div>');

// Design
var design=new Array("Axure", "Pop App", "InVision", "Sketch", "Photoshop", "Illustrator", "InDesign",  "Adobe XD", "Keynote");

for(var i=0; i<design.length; i++)
    $('#skills').find("div.designSkills").append('<div class="skillContainer grid-33 mobile-grid-50"><div class="skillBox">' + design[i] + '</div></div>');

// Management
var management=new Array("Github", "FogBugz", "Trello", "Pivotal Tracker", "Cyberduck", "MS Office");

for(var i=0; i<management.length; i++)
    $('#skills').find("div.managementSkills").append('<div class="skillContainer grid-33 mobile-grid-50"><div class="skillBox">' + management[i] + '</div></div>');

// Database
var database=new Array("PostgreSQL", "Oracle SQL");

for(var i=0; i<database.length; i++)
    $('#skills').find("div.databaseSkills").append('<div class="skillContainer grid-33 mobile-grid-50"><div class="skillBox">' + database[i] + '</div></div>');

// Cloud Applications
var cloud=new Array("Heroku", "Amazon S3", "Google Cloud");

for(var i=0; i<cloud.length; i++)
    $('#skills').find("div.cloudSkills").append('<div class="skillContainer grid-33 mobile-grid-50"><div class="skillBox">' + cloud[i] + '</div></div>');


