//$("#main").append("Joe Francis");

//var amazingThoughts = "I am Joe Francis and I am AMAZING!"

//console.log(amazingThoughts);

//var funThoughts = amazingThoughts.replace("amazing", "fun")

//$("#main").append(funThoughts);



var bio = {
  "name" : "Joe Francis",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "650-762-9762",
    "email" : "joefrancisjr@live.com",
    "github" : "joefrancisjr",
    "twitter" : "joefrancisjr",
    "location" : "San Francisco"
  },
  "welcomeMessage" : "Filler filler filler text text text text text.",
  "skills" : [
    "large apetite", "burning desire", "fun soul", "ridiculous"
  ],
  "bioPic" : "images/me.jpg"
};

var work = {};
work.position = "Sales Manager";
work.employer = "Wave";
work.years = 5;
work.city = "San Francisco";

//var education = {};
//education["name"] = "Udacity";
//education["years"] = "2016";
//education["city"] = "San Francisco";

$("#main").append(work["position"]);
//$("#main").append(education.name);

var education = {
  "schools": [
    {
      "school" : "Regional Technical Institute",
      "city" : "Reno, NV",
      "major" : "Hardware and Computer Networking",
      "minor" : "",
      "graduationYear" : "2005",
      "courseInfo" : "https://en.wikipedia.org/wiki/Academy_of_Arts,_Careers_and_Technology"
    },
    {
      "school" : "Truckee Meadows Community College",
      "city" : "Reno, NV",
      "major" : "Computer Networking",
      "minor" : "Web Design",
      "graduationYear" : "2007",
      "courseInfo" : "http://catalog.tmcc.edu/degrees-certificates/"
    },
    {
      "school" : "Udacity",
      "city" : "San Francisco, CA",
      "major" : "Front End Web Developer",
      "minor" : "",
      "graduationYear" : "2016",
      "courseInfo" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }
  ]
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedSkills = HTMLskills.replace("%data", bio.skills);
$("#header").append(formattedSkills);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
