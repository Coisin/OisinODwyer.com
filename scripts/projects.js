$(function() {
  preProject();
  initializeLayout();
  postInitialization();
});

function preProject() {
  projectType = getQueryVariable("p");
  project = projectData[projectType];
}

function initializeLayout() {
  $(".project-title").text(project.name);
  $(".project-description").html(project.description);
  $(".project-favicon").attr("href", project.favicon);
  for(var i = 0;i < project.links.length;i++) {
    $(".availability-table").append("<tr><td><a href='"+project.links[i]+"' class='project-link'>"+project.linkDisplays[i]+"</a></td></tr>");
  }
  $(".project-stylesheet").attr("href", project.stylesheet);
  for(var i = 1;i <= project.numRows;i++) {
    $(".container-fluid").append("<div class='row hero"+(i % 2 == 0?" scroll-fixed":"")+"' id='"+projectType+"-"+i+"'></div>");
    $("#"+projectType+"-"+i).html(project.rows[i - 1].content);
  }
}

function postInitialization() {
  Prism.highlightAll();

  totalFadeHeight = 400;
  setOverlayOpacity();

}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
