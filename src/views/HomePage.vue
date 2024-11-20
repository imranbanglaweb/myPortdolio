<template>
  <div class="HomePage">
    <!-- Heading -->
    <h1>Imran Rahman</h1>
    
    <!-- Typewriter Component -->
    <p>
     I am a <TypewriterComponent 
        text="Full Stack Developer with a focus on SAP ABAP and modern web technologies!" 
        :typingSpeed="60" 
        :loop="true" 
      />
    </p>
  </div>
</template>

<script>
import TypewriterComponent from '@/components/TypewriterComponent.vue';
export default {
  name: "HomePage",
  components: { TypewriterComponent },
};
</script>

<style scoped>
/* Reset Global Margins and Padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrolling outside the viewport */
}

/* HomePage Styling */
.HomePage {
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-image: url('@/assets/images/imran02.jpg'); /* Replace with your image path */
  background-size: cover; /* Ensure the image covers the entire viewport */
  background-position: right top; /* Center the image */
  background-repeat: no-repeat; /* Prevent tiling */
  /*display: flex;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
}

/* Heading Styles */
.HomePage h1 {
  font-size: 5rem; /* Large font size for desktop */
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  word-wrap: break-word; /* Ensure heading breaks properly on smaller screens */
}

/* Paragraph/Typewriter Text Styles */
.HomePage p {
  font-size: 1.7rem; /* Adjusted for desktop */
  color: yellow;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  max-width: 90%; /* Prevents text from stretching too wide */
  margin: 0 auto;
  line-height: 1.5;
  word-wrap: break-word; /* Ensure text breaks properly on smaller screens */
}

/* Media Queries for Responsiveness */

/* Tablet and below */
@media (max-width: 1024px) {
  .HomePage h1 {
    font-size: 3rem; /* Smaller font for tablet */
  }
  .HomePage p {
    font-size: 1.4rem; /* Slightly smaller text for tablets */
  }
}

/* Mobile devices (portrait and smaller screens) */
@media (max-width: 768px) {
  .HomePage h1 {
    font-size: 2.5rem; /* Smaller font for mobile */
  }
  .HomePage p {
    font-size: 1.2rem; /* Slightly smaller text for mobile */
    padding: 0 15px; /* Add some padding for better readability */
  }
}

/* Extra small screens (e.g., small phones) */
@media (max-width: 480px) {
  .HomePage h1 {
    font-size: 2rem; /* Adjust the font size even smaller for extra small screens */
  }
  .HomePage p {
    font-size: 1rem; /* Further reduce the paragraph text */
    padding: 0 10px; /* Add some padding for better readability */
  }
}
</style>
