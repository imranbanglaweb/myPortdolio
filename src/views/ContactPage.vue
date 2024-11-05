<template>
  <!-- Main Content Area -->
 
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
   
</template>

<script>
export default {
  // name: 'GridLayout',
  name: 'ContactPage',

};
</script>