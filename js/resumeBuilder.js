//$("#main").append("Joe Francis");

//var amazingThoughts = "I am Joe Francis and I am AMAZING!"

//console.log(amazingThoughts);

//var funThoughts = amazingThoughts.replace("amazing", "fun")

//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Joe Francis")

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer")

$("#header").prepend(formattedName, formattedRole);

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
