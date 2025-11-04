document.addEventListener("DOMContentLoaded", function() {

    // Get all menu items that have a sub-menu
    var parentItems = document.querySelectorAll(".menu-item-has-children");

    parentItems.forEach(function(item) {
        
        // Find the <a> tag inside
        var link = item.querySelector('a');
        
        link.addEventListener("click", function(event) {
            
            // This stops the page from jumping if the link is "#"
            event.preventDefault();

            // Find the sub-menu *directly inside* this item
            var subMenu = item.querySelector('.sub-menu');
            
            // Toggle the 'active' class on it
            if (subMenu) {
                subMenu.classList.toggle("active");
            }
            
            // --- Bonus: Close other open menus ---
            // This finds all *other* sub-menus at the same level
            // and closes them, so only one is open at a time.
            var siblings = getSiblings(item);
            siblings.forEach(function(sibling) {
                if (sibling.classList.contains('menu-item-has-children')) {
                    var otherSubMenu = sibling.querySelector('.sub-menu');
                    if (otherSubMenu) {
                        otherSubMenu.classList.remove('active');
                    }
                }
            });
        });
    });

    // Helper function to get siblings
    function getSiblings(elem) {
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    }
});
// --- Hamburger Menu Toggle ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Find the hamburger button and the nav menu
    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector("nav");

    // Add a click listener to the hamburger
    hamburger.addEventListener("click", function() {
        
        // Toggle the 'active' class on the nav menu
        navMenu.classList.toggle("active");
    });
});