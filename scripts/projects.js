$(function() {
  preProject();
  initializeLayout();
  postInitialization();
});

function preProject() {
  projectType = getQueryVariable("p") || "default";
  project = projectData[projectType];
}

function initializeLayout() {
  $(".project-title").text(project.name);
  $(".project-description").html(project.description);
  $(".project-favicon").attr("href", project.favicon);
  if(project.linkDisplays != null) {
    for(var i = 0;i < project.links.length;i++) {
      $(".availability-table").append("<tr><td><a href='"+project.links[i]+"' class='project-link light-grey-trans'>"+project.linkDisplays[i]+"</a></td></tr>");
    }
  } else {
    $("#title-link").hide();
  }
  $(".project-stylesheet").attr("href", project.stylesheet);
  for(var i = 1;i <= project.numRows;i++) {
    $(".container-fluid").append("<div class='row hero " + (project.rows[i - 1].class == null?"":project.rows[i - 1].class + " ") +(i % 2 == 0?"scroll-fixed":"")+"' id='"+projectType+"-"+i+"'></div>");
    $("#"+projectType+"-"+i).html(project.rows[i - 1].content);
  }
  if(project.creators != null && project.creators.length != 0) {
    $(".container-fluid").append("<div class='row hero hero-flexible' id='team-list'><h1 id='developers-title'>Developers.</h1><hr><table class='project-list project-list-lg team-listing'></table></div>");
    project.creators.forEach(function(creatorObject, index) {
      $(".team-listing").append("<tr><td><a href='"+creatorObject.link+"' >"+creatorObject.name+"<span class='emphasis seperator'>/</span><span class='list-hover'>"+creatorObject.role+"</span></a></td></tr>");
    });
  }
  $(".btn-return").attr("href", project.returnLink).html(project.returnDisplay);
  for(var i = 0;i < project.postFunctions.length;i++) {
    project.postFunctions[i]();
  }
  if(project.links.length == 0) {
    $("#title-link").hide();
  }
  if(projectType == "default") {

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
