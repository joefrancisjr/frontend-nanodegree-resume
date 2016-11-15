var work = {
  "jobs": [
    {
      "employer" : "Wave",
      "title" : "Manager, Regional Direct Sales",
      "location" : "200 Paul Ave, San Francisco, CA 94124",
      "dates" : "June 2011 - in progress",
      "description" : "In my current role I am responsible for the success of a small team of Direct Sales Representatives. They sell high speed internet, digital cable, and telephone service to the residents of San Francisco and San Mateo County."
    },
    {
      "employer" : "7-Eleven",
      "title" : "Graveyard Cashier",
      "location" : "12605 S Virginia St, Reno, NV 89511",
      "dates" : "April 2011 - May 2011",
      "description" : "As a Graveyard Cashier, I was responsible for helping customers and performing cleaning and stocking of the store."
    },
    {
      "employer" : "NCR",
      "title" : "Staging Tech",
      "location" : "5360 Capital Ct, Reno, NV 89502",
      "dates" : "September 2010 - March 2011",
      "description" : "As a Staging Tech at NCR, I would pick orders for customers and configure it using a terminal so it would be ready when arriving to the customer."
    },
    {
      "employer" : "Arvato",
      "title" : "Contract Processor",
      "location" : "6100 Neil Rd, Reno, NV 89511",
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
      "image" : [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    },
    {
      "title" : "Resume",
      "dates" : "November 2016",
      "description" : "Another FEND project. This displays use of Javascript.",
      "image" : [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    }
  ]
};

var bio = {
  "name" : "Joe Francis",
  "role" : "Web Developer",
  "welcomeMessage" : "Welcome to my resume. This is an exampe of Javascript and how it can be used to populate a page.",
  "biopic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "650-123-4567",
    "email" : "joefrancisjr@email.com",
    "github" : "joefrancisjr",
    "twitter" : "joefrancisjr",
    "location" : "420 A St, Daly City, CA 94014"
  },
  "skills" : [
    "HTML", "CSS", "JavaScript", "WordPress"
  ],
};

var education = {
  "schools": [
    {
      "school" : "Regional Technical Institute",
      "location" : "380 Edison Way, Reno, NV 89502",
      "major" : "Hardware and Computer Networking",
      "minor" : "",
      "dates" : "2005",
    },
    {
      "school" : "Truckee Meadows Community College",
      "location" : "7000 Dandini Blvd, Reno, NV 89512",
      "major" : "Computer Networking",
      "minor" : "Web Design",
      "dates" : "2007",
    }
  ],
  "online": [
    {
      "school" : "Udacity",
      "title" : "Front End Web Developer",
      "url" : "https://www.udacity.com",
      "dates" : "2016",
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMesg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMesg);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedgithub);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedlocation);

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

function displayWork() {
  work.jobs.forEach(function(job, index) {
    if (work.jobs.length > 0) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  });
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);


projects.display = function () {
  for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);

      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);

      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);

      if(projects.projects[project].image.length > 0) {
        for (image in projects.projects[project].image) {
          var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
          $(".project-entry:last").append(formattedProjectImage);
        }
      }
    }
  };

projects.display();

education.display = function () {
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedSchoolMajor);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
    };
    for (onlineClass in education.online) {
      $("#education").append(HTMLonlineClassesStart);
      $(".online-classes:last").append(HTMLonlineClasses);
      var onlineSchoolName = HTMLonlineSchool.replace("%data%", education.online[onlineClass].school);
      $(".online-classes:last").append(HTMLonlineClasses);

      var onlineSchoolTitle = HTMLonlineTitle.replace("%data%", education.online[onlineClass].title);
      $(".online-classes:last").append(HTMLonlineTitle);

      var onlineSchoolURL = HTMLonlineURL.replace("%data%", education.online[onlineClass].url);
      $(".online-classes:last").append(HTMLonlineURL);

      var onlineSchoolDates = HTMLonlineDates.replace("%data%", education.online[onlineClass].dates);
      $(".online-classes:last").append(HTMLonlineDates);
    }
};

education.display();

$("#mapDiv").append(googleMap);
