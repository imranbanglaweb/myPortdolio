<template>

    <!-- Main Content Area -->
    <div class="content" :class="{ 'content-expanded': isCollapsed }">
      <button @click="toggleSidebar" class="menu-toggle">Toggle Sidebar</button>
      
      <!-- Contact Form -->
      <div class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="handleSubmit">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
   
</template>

<script>

export default {
    name: 'ContactPage',
  data() {
    return {
      isCollapsed: window.innerWidth < 768,
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleResize() {
      this.isCollapsed = window.innerWidth < 768;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    handleSubmit() {
      // Process form submission (e.g., send data to a server or show a success message)
      alert(`Message sent by ${this.form.name}`);
      
      // Reset the form fields
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
 
};
</script>

<style type="text/css">
  /* Contact Form Styling */
.contact-form {
  max-width: 600px;
  margin: 20px auto;
}

.contact-form h2 {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-top: 10px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>
