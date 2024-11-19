<template>

<PerfectScrollbar>
  <div class="container-fluid">
    <h2 class="mb-4">My Awsome Projects</h2>
    <hr>
    <p><strong>Welcome to my project showcase</strong>! As a Full Stack Developer with expertise in both SAP ABAP and modern web technologies, I have had the opportunity to work on diverse projects, each designed to solve unique challenges and deliver impactful results. My portfolio spans from enterprise applications to web-based solutions, leveraging frameworks like Vue, Node.js, and SAP ABAP to create efficient, scalable, and user-friendly experiences.</p>

<!-- <p>Each project in this portfolio demonstrates my commitment to clean, maintainable code and effective problem-solving. Explore the tabs to see specific project details, including the technologies used, project goals, and outcomes. Whether it's creating custom solutions for client requirements or building responsive web applications, I’m excited to share my journey and the work I’m passionate about.</p> -->
<br>
    <!-- Nav Tabs -->
    <ul class="nav nav-tabs text-center" id="projectTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active" 
          id="projectall-tab"
          data-bs-toggle="tab"
          data-bs-target="#projectall"
          type="button"
          role="tab"
          aria-controls="projectall"
          aria-selected="true"
        >
          All Projects
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link " 
          id="laravel-tab"
          data-bs-toggle="tab"
          data-bs-target="#laravel"
          type="button"
          role="tab"
          aria-controls="laravel"
          aria-selected="true"
        >
          Laravel
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="Codeiniter-tab"
          data-bs-toggle="tab"
          data-bs-target="#Codeiniter"
          type="button"
          role="tab"
          aria-controls="Codeiniter"
          aria-selected="false"
        >
          Codeiniter
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="vuejs-tab"
          data-bs-toggle="tab"
          data-bs-target="#vuejs"
          type="button"
          role="tab"
          aria-controls="vuejs"
          aria-selected="false"
        >
          Vue JS & Nuxt Js
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="project3-tab"
          data-bs-toggle="tab"
          data-bs-target="#project3"
          type="button"
          role="tab"
          aria-controls="project3"
          aria-selected="false"
        >
          SAP Abap Programming
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="project3-tab"
          data-bs-toggle="tab"
          data-bs-target="#project3"
          type="button"
          role="tab"
          aria-controls="project3"
          aria-selected="false"
        >
          Website
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="project3-tab"
          data-bs-toggle="tab"
          data-bs-target="#project3"
          type="button"
          role="tab"
          aria-controls="project3"
          aria-selected="false"
        >
          Hosting & Domain
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="project3-tab"
          data-bs-toggle="tab"
          data-bs-target="#project3"
          type="button"
          role="tab"
          aria-controls="project3"
          aria-selected="false"
        >
          SSL
        </button>
      </li>

      
    </ul>

    <!-- Tab Panes -->
    <div class="tab-content" id="projectTabContent">
      <!-- Project 1 Content -->
      <div
        class="tab-pane fade show active"
        id="projectall"
        role="tabpanel"
        aria-labelledby="projectall-tab"
      >
        <div class="row"> <div class="col-md-4"><div class="p-4">
          <p>Land Software With Laravel</p>
            <img :src="require('@/assets/images/land.png')" :width="'300'" :height="'300'" alt="My Image" />
        </div></div><div class="col-md-4"><div class="p-4">
          <p>Parking Managemant Software</p>
            <img :src="require('@/assets/images/parking.jpg')"  :width="'300'" :height="'auto'" alt="My Image" />
        </div></div><div class="col-md-4">
          <div class="p-4">
          <p>Inventory Managemant  System</p>
            <img :src="require('@/assets/images/inventory.png')"  :width="'300'" :height="'auto'" alt="My Image">
        </div></div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Diognostic System</p>
            <img :src="require('@/assets/images/diognostic.jpg')" :width="'300'" height="'300'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>HRMS System</p>
            <img :src="require('@/assets/images/empressupdated.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Automation School MIS Software</p>
            <img :src="require('@/assets/images/school.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Univesity Result System</p>
            <img :src="require('@/assets/images/result.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>HR Survey System</p>
            <img :src="require('@/assets/images/surveveysystem.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Social Network Apps</p>
            <img :src="require('@/assets/images/social-apps.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Developed Microfinance Erp Report</p>
            <img :src="require('@/assets/images/erp.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Manpower Managemant System</p>
            <img :src="require('@/assets/images/manpower.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Covid-19 Software</p>
            <img :src="require('@/assets/images/covidproject.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Video Calling Apps</p>
            <img :src="require('@/assets/images/video-calling.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Ecomerce System</p>
            <img :src="require('@/assets/images/ecommerce.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
      </div>
      </div>

      <!-- Project 2 Content -->
      <div
        class="tab-pane fade"
        id="laravel"
        role="tabpanel"
        aria-labelledby="laravel-tab"
      >
        <div class="row"> <div class="col-md-4"><div class="p-4">
          <p>Land Software With Laravel</p>
            <img :src="require('@/assets/images/land.png')" :width="'300'" :height="'300'" alt="My Image" />
        </div></div><div class="col-md-4"><div class="p-4">
          <p>Parking Managemant Software</p>
            <img :src="require('@/assets/images/parking.jpg')"  :width="'300'" :height="'auto'" alt="My Image" />
        </div></div><div class="col-md-4">
          <div class="p-4">
          <p>Inventory Managemant  System</p>
            <img :src="require('@/assets/images/inventory.png')"  :width="'300'" :height="'auto'" alt="My Image">
        </div></div>
          <div class="col-md-4">
          <div class="p-4">
          <p>HR Survey System</p>
            <img :src="require('@/assets/images/surveveysystem.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Social Network Apps</p>
            <img :src="require('@/assets/images/social-apps.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Developed Microfinance Erp Report</p>
            <img :src="require('@/assets/images/erp.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
      </div>
      </div>

      <!-- Project 3 Content -->
      <div
        class="tab-pane fade"
        id="Codeiniter"
        role="tabpanel"
        aria-labelledby="Codeiniter-tab"
      >
       <div class="row">
           <div class="col-md-4">
          <div class="p-4">
          <p>Automation School MIS Software</p>
            <img :src="require('@/assets/images/school.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Univesity Result System</p>
            <img :src="require('@/assets/images/result.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>HR Survey System</p>
            <img :src="require('@/assets/images/surveveysystem.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Social Network Apps</p>
            <img :src="require('@/assets/images/social-apps.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Developed Microfinance Erp Report</p>
            <img :src="require('@/assets/images/erp.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Manpower Managemant System</p>
            <img :src="require('@/assets/images/manpower.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Covid-19 Software</p>
            <img :src="require('@/assets/images/covidproject.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
       </div>
      </div>
      <!-- vuejs Content -->
      <div
        class="tab-pane fade"
        id="vuejs"
        role="tabpanel"
        aria-labelledby="vuejs-tab"
      >
       <div class="row">
          
   
        <div class="col-md-4">
          <div class="p-4">
          <p>HR Survey System</p>
            <img :src="require('@/assets/images/surveveysystem.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
        <div class="col-md-4">
          <div class="p-4">
          <p>Social Network Apps</p>
            <img :src="require('@/assets/images/social-apps.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
  

        <div class="col-md-4">
          <div class="p-4">
          <p>Covid-19 Software</p>
            <img :src="require('@/assets/images/covidproject.jpg')" :width="'300px'" height="'auto'" alt="My Image" />
        </div>
         </div>
       </div>
      </div>
    </div>

</div>
</PerfectScrollbar>
</template>

<script>
export default {
  name: 'MyProjects',


}
</script>

<style scoped>


#projectTabContent img {
  border:1px solid #666;
  padding: 5px;
  box-shadow: 2px 3px 5px #eee;
  border-radius: 30%
}
</style>
