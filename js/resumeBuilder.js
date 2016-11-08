var work = {
  "jobs": [
    {
      "employer" : "Wave",
      "title" : "Manager, Regional Direct Sales",
      "location" : "San Francisco, CA",
      "dates" : "June 2011 - Current",
      "description" : "In my current role I am responsible for the success of a small team of Direct Sales Representatives. They sell high speed internet, digital cable, and telephone service to the residents of San Francisco and San Mateo County."
    },
    {
      "employer" : "7-Eleven",
      "title" : "Graveyard Cashier",
      "location" : "Reno, NV",
      "dates" : "April 2011 - May 2011",
      "description" : "As a Graveyard Cashier, I was responsible for helping customers and performing cleaning and stocking of the store."
    },
    {
      "employer" : "NCR",
      "title" : "Staging Tech",
      "location" : "Reno, NV",
      "dates" : "September 2010 - March 2011",
      "description" : "As a Staging Tech at NCR, I would pick orders for customers and configure it using a terminal so it would be ready when arriving to the customer."
    },
    {
      "employer" : "Arvato",
      "title" : "Contract Processor",
      "location" : "Reno, NV",
      "dates" : "September 2009 - August 2010",
      "description" : "I worked on a small team focused on processing credits for global customers of Microsoft running Office and Windows promotions with their customers. Day to day activity was heavily involved in Excel and communicating with management from various teams across the globe."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "October 2016",
      "description" : "A project created in Udacity's Front End Web Developer Nanodegree program. This is a display of HTML, CSS, and responsive deisgn.",
      "images" : [
        "http://image.com/image.jpg",
        "http://image.com/image.jpg"
      ]
    },
    {
      "title" : "Resume",
      "dates" : "November 2016",
      "description" : "Another FEND project. This displays use of Javascript.",
      "images" : [
        "http://image.com/image.jpg",
        "http://image.com/image.jpg"
      ]
    }
  ]
};

var bio = {
  "name" : "Joe Francis",
  "role" : "Web Developer",
  "welcomeMessage" : "Filler filler filler text text text text text.",
  "biopic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "650-762-9762",
    "email" : "joefrancisjr@live.com",
    "github" : "joefrancisjr",
    "twitter" : "joefrancisjr",
    "location" : "San Francisco, CA"
  },
  "skills" : [
    "HTML", "CSS", "JavaScript", "WordPress"
  ],
};

var nameHTML = HTMLheaderName.replace("%data%", bio.name);

$("#header").append(nameHTML);

if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

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
};
