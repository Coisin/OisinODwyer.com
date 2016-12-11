
var projectTypes = ["Creative", "Small", "Large", "Disgusting", "Okay", "Grand", "Fancy", "Cringy"];
var projectTypeIndex = 0;

var secondNames = ["O'Duibhir", "O'Dwyer", "The Fancy"];
var secondNameIndex = 0;

$(function() {
  initializeLayout();
});

function initializeLayout() {
  var numberOfProjects = 0;
  for(i in projectData) {
    if(numberOfProjects == 3)break;
    if(i == "default")continue;
    numberOfProjects++;
    $(".project-list").append("<tr><td><a href='project.html?p="+i+"' class='project-listing grey-trans'>" + projectData[i].name + "</a></td></tr>");
  }
  shuffle(projectTypes);
  setInterval(updateTransitions, 5000);
}

function updateTransitions() {
  projectTypeIndex++;
  if(projectTypeIndex >= projectTypes.length) {
    projectTypeIndex = 0;
  }
  var projectTypeName = $("#project-type-name");
  var projectTypeContainer = $(".typing-container:has(#project-type-name)");
  projectTypeName.fadeOut(function() {
    projectTypeName.remove()
    .appendTo(projectTypeContainer)
    .html(projectTypes[projectTypeIndex])
    .fadeIn();
  });
  secondNameIndex++;

  if(secondNameIndex >= secondNames.length) {
    secondNameIndex = 0;
  }
  var secondName = $("#second-name");
  var secondNameContainer = $(".typing-container:has(#second-name)");
  secondName.fadeOut(function() {
    secondName.remove()
    .appendTo(secondNameContainer)
    .html(secondNames[secondNameIndex])
    .fadeIn();
  });
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
