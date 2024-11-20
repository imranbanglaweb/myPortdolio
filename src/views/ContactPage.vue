<template>

    <!-- Main Content Area -->
    <div class="container-fluid">
     
      
      <!-- Contact Form -->
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-5">
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
      <div class="col-md-6">
        <br>
        <h3>Connect Social Link</h3>
      <hr>
         <div class="social-icons">
  <ul>
          <li><a href=""> <font-awesome-icon :icon="['fab', 'facebook']" class="icon facebook" />  Facebook</a></li>
          <li><a href=""><font-awesome-icon :icon="['fab', 'linkedin']" class="icon linkedin" /> Linkdein</a></li>
          <li><a href=""><font-awesome-icon :icon="['fab', 'instagram']" class="icon instagram" /> Instagram</a></li>
          <li><a href="">  <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon instagram" /> Whatsup</a></li>
          <li><a href="">    <font-awesome-icon :icon="['fas', 'globe']" class="icon website" /> Website</a></li>
        </ul>
    <br>
  </div>
        <h3>You Can Reache me 24/7</h3>
        <hr>
        <ul style="list-style: none; ">
          <li><a style="text-decoration: none; color: #000" href=""><font-awesome-icon :icon="['fas', 'phone']" class="icon website" /> &nbsp;
         01918329829</a></li>
        </ul>
      </div>
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

 
};
</script>

<style type="text/css">


  /* Contact Form Styling */
.contact-form {
  max-width: 600px;
  margin: 20px auto;
    margin-left: 15px
}

.contact-form h2 {
  margin-bottom: 20px;
  margin-left: 15px
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

/* Base icon styling */
.social-icons {
  display: flex;
  gap: 1rem;
}
.social-icons ul{
  list-style: none
}
.social-icons ul li a {
    display: block;
    padding: 16px 2px 5px 5px;
    text-decoration: none;
    color: #6b290a;
}
.icon {
  font-size: 1.5rem; /* Adjust icon size */
  transition: color 0.3s ease, transform 0.3s ease;
  /*padding: 0 2px 0 0px*/
}

/* Specific brand colors */
.facebook {
  color: #4267B2;
}
.instagram {
  color: #1DA1F2;
}
.linkedin {
  color: #0077B5;
}

/* Hover effects */
.icon:hover {
  color: #333; /* Change color on hover */
  transform: scale(1.2); /* Slightly enlarge on hover */
}
</style>
