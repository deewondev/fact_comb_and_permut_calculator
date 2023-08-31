// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get all tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Set a default active tab
const defaultActiveTabID = 'tab1';

const showTab = (tabID) => {
    // Remove 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    })
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
    })
    // Find the active link
    const activeLink = document.getElementById(tabID);
    // Find the active content
    const activeContent = document.getElementById(`content-${tabID}`); // Corrected ID here
    // Add 'active' class to the link and show content
    activeLink.classList.add('active');
    activeContent.classList.add('active');
}

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    // Show the clicked tab
    showTab(link.id);
    });
});
// Show default active tab
showTab(defaultActiveTabID);