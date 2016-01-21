'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e){
		var projName = $("#project").val();
		var newWidth = $("#width").val();
		var description = $("#description").val();
		console.log(width + projName + description);

		$(projName).animate({
		      width: newWidth
		});

		$(projName + " .project-description").text(description);
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}