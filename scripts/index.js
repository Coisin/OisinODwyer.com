
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
}
