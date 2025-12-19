/* ============================================
   WEEK 01 PROJECT - INTERACTIVE BUSINESS CARD
   Student Starter File
   ============================================

   INSTRUCTIONS:
   1. Complete all TODO sections marked below
   2. Use ONLY ES6+ features learned this week:
      - const/let (never var)
      - Template literals
      - Arrow functions
      - Destructuring
   3. Test your code frequently in the browser
   4. Compare with solution only after trying yourself

   ============================================ */

// ============================================
// TODO 1: Create the user data object
// ============================================
// Create a constant object called 'userData' with the following properties:
// - name (string): Your full name
// - title (string): Your job title or role
// - location (string): Your city and country
// - email (string): Your email address
// - phone (string): Your phone number
// - bio (string): A short description about yourself (2-3 sentences)
// - avatar (string): URL to your profile image (you can use https://i.pravatar.cc/150?img=X where X is 1-70)
// - skills (array): Array of skill objects, each with:
//   - name (string): Skill name
//   - level (number): 1-100
//   - category (string): 'frontend', 'backend', 'tools', etc.
// - social (array): Array of social media objects, each with:
//   - platform (string): Platform name
//   - url (string): Your profile URL
//   - icon (string): Emoji icon
// - stats (object): Statistics with:
//   - projects (number): Number of projects completed
//   - experience (number): Years of experience
//   - clients (number): Number of clients
//   - coffee (number): Cups of coffee consumed

const userData = {
  // TODO: Add your data here
};

// ============================================
// TODO 2: DOM Element References
// ============================================
// Get references to all necessary DOM elements using const
// Hint: Use document.getElementById() or document.querySelector()
// You'll need references for:
// - userName, userTitle, userLocation, userEmail, userPhone
// - userBio, avatarImg, skillsList, socialLinks, stats
// - themeToggle, copyEmailBtn, toggleSkills, toast, toastMessage

// TODO: Add your DOM references here

// ============================================
// TODO 3: Render Basic Information
// ============================================
// Create an arrow function called 'renderBasicInfo' that:
// 1. Destructures name, title, location, email, phone, bio, avatar from userData
// 2. Updates the corresponding DOM elements with template literals
// 3. Sets the avatar image src

const renderBasicInfo = () => {
  // TODO: Destructure userData properties
  // TODO: Update DOM elements with the data
};

// ============================================
// TODO 4: Render Skills
// ============================================
// Create an arrow function called 'renderSkills' that:
// 1. Takes a parameter 'showAll' (default false)
// 2. Filters skills to show only first 4 if showAll is false
// 3. Uses map() to create HTML for each skill
// 4. Uses template literals to generate the HTML structure
// 5. Updates skillsList.innerHTML with the generated HTML
//
// HTML structure for each skill:
// <div class="skill-item">
//   <div class="skill-name">{name}</div>
//   <div class="skill-level">
//     <span>{level}%</span>
//     <div class="skill-bar">
//       <div class="skill-bar-fill" style="width: {level}%"></div>
//     </div>
//   </div>
// </div>

const renderSkills = (showAll = false) => {
  // TODO: Implement skill rendering logic
};

// ============================================
// TODO 5: Render Social Links
// ============================================
// Create an arrow function called 'renderSocialLinks' that:
// 1. Destructures the social array from userData
// 2. Uses map() to create HTML for each social link
// 3. Uses template literals to generate anchor tags
// 4. Updates socialLinks.innerHTML
//
// HTML structure for each link:
// <a href="{url}" class="social-link" target="_blank" rel="noopener noreferrer">
//   <span>{icon}</span>
//   <span>{platform}</span>
// </a>

const renderSocialLinks = () => {
  // TODO: Implement social links rendering
};

// ============================================
// TODO 6: Calculate and Render Statistics
// ============================================
// Create an arrow function called 'renderStats' that:
// 1. Destructures the stats object from userData
// 2. Creates an array of stat objects with label and value
// 3. Uses map() to generate HTML for each stat
// 4. Uses template literals for the HTML structure
// 5. Updates stats.innerHTML
//
// HTML structure for each stat:
// <div class="stat-item">
//   <span class="stat-value">{value}</span>
//   <span class="stat-label">{label}</span>
// </div>

const renderStats = () => {
  // TODO: Implement statistics rendering
};

// ============================================
// TODO 7: Theme Toggle Functionality
// ============================================
// Create an arrow function called 'toggleTheme' that:
// 1. Gets the current theme from document.documentElement.dataset.theme
// 2. Calculates the new theme (if current is 'dark', new is 'light' and vice versa)
// 3. Updates document.documentElement.dataset.theme
// 4. Updates the theme icon (🌙 for light mode, ☀️ for dark mode)
// 5. Saves the preference to localStorage
//
// Also create 'loadTheme' function to:
// 1. Get saved theme from localStorage
// 2. Apply it if it exists

const toggleTheme = () => {
  // TODO: Implement theme toggle logic
};

const loadTheme = () => {
  // TODO: Implement theme loading from localStorage
};

// ============================================
// TODO 8: Copy Email Functionality
// ============================================
// Create an arrow function called 'copyEmail' that:
// 1. Uses navigator.clipboard.writeText() to copy the email
// 2. Shows a success toast notification
// 3. Uses the showToast helper function
//
// Helper function to show toast (already implemented below)

const copyEmail = () => {
  // TODO: Implement email copy functionality
};

// Helper function to show toast notifications
const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// TODO 9: Toggle Skills Visibility
// ============================================
// Create an arrow function called 'handleToggleSkills' that:
// 1. Keeps track of whether all skills are shown (use a variable)
// 2. Toggles the visibility
// 3. Calls renderSkills with the appropriate parameter
// 4. Updates button text ("Show More" / "Show Less")

let showingAllSkills = false;

const handleToggleSkills = () => {
  // TODO: Implement skills toggle logic
};

// ============================================
// TODO 10: Event Listeners
// ============================================
// Add event listeners for:
// 1. Theme toggle button click -> toggleTheme
// 2. Copy email button click -> copyEmail
// 3. Toggle skills button click -> handleToggleSkills

// TODO: Add event listeners here

// ============================================
// TODO 11: Initialize the Application
// ============================================
// Create an arrow function called 'init' that:
// 1. Calls loadTheme()
// 2. Calls renderBasicInfo()
// 3. Calls renderSkills()
// 4. Calls renderSocialLinks()
// 5. Calls renderStats()
// 6. Logs a success message to console

const init = () => {
  // TODO: Initialize all components
};

// Call init when DOM is ready
init();

// ============================================
// TESTING CHECKLIST
// ============================================
// After completing all TODOs, verify:
// ✓ All personal information displays correctly
// ✓ Skills show with proper levels and bars
// ✓ Social links work and open in new tabs
// ✓ Statistics display correctly
// ✓ Theme toggle switches between light/dark
// ✓ Email copy button works and shows notification
// ✓ Show More/Less skills button works
// ✓ All features use ES6+ syntax (no var, no old functions)
// ✓ Template literals used for all string interpolation
// ✓ Arrow functions used throughout
// ✓ Destructuring used where appropriate
