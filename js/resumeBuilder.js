//$("#main").append("Joe Francis");

//var amazingThoughts = "I am Joe Francis and I am AMAZING!"

//console.log(amazingThoughts);

//var funThoughts = amazingThoughts.replace("amazing", "fun")

//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Joe Francis")

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer")

$("#header").prepend(formattedName, formattedRole);
