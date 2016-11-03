//$("#main").append("Joe Francis");

//var amazingThoughts = "I am Joe Francis and I am AMAZING!"

//console.log(amazingThoughts);

//var funThoughts = amazingThoughts.replace("amazing", "fun")

//$("#main").append(funThoughts);



var bio = {
  "name": "Joe Francis",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-762-9762",
    "email": "joefrancisjr@live.com",
    "github": "joefrancisjr",
    "twitter": "joefrancisjr",
    "location": "San Francisco"
  },
  "welcomeMessage": "Filler filler filler text text text text text.",
  "skills": [
    "large apetite", "burning desire", "fun soul", "ridiculous"
  ],
  "bioPic": "images/me.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
("#main").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
("#main").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
("#main").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
("#main").append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
("#main").append(formattedWelcomeMsg);

var formattedSkills = HTMLskills.replace("%data", bio.skills);
("#main").append(formattedSkills);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
("#main").append(formattedBioPic);
