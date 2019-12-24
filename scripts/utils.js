

//page loader
function loadPage(div,id) {
  $(document).ready(function(){	
		$(div).load(id);	
});
}


// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open(div1,div2) {
	var mySidebar = document.getElementById(div1);
	var overlayBg = document.getElementById(div2);	
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}



var addclass = 'color';

var $cols = $('.divs').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});








