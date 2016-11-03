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
