

//Load page content graphs
function loadPage(id) {
  $(document).ready(function(){	
		$("#page").load("componentsPages/"+id+".html");	
});
}

//Load footer content 
function loadFooter(){

$(document).ready(function(){
   
   $('#contact').load("utilPages/contact.html");
   
   $('#footerContent').load("utilPages/footer.html");
   
    $('#page').load("componentsPages/ottda.html");

});
}

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

var addclass = 'color';

var $cols = $('.divs').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});








