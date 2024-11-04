<template>
  <div class="container">
    <h1 class="text-left">About Me</h1>
    <p>I specialize in JavaScript frameworks such as Vue.js and React, as well as backend technologies like Laravel and SAP ABAP.My toolkit also includes HTML, CSS, SQL, and cloud services such as AWS and Azure.
    </p>
    <!-- Row 1 -->
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
             <img :src="require('@/assets/profile.png')" :width="'240px'" alt="My Image" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My Core Skills</h5>
           <ul><li>Laravel</li><li>PHP</li><li>Vue JS</li><li>Jquery</li><li>Javascript</li><li>Nuxt JS</li><li>Json</li><li>Postgre SQL</li> 
           </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My Core Skills</h5>
           <ul><li>SAP ABAP Programming</li><li>Data Dictionary & Object-Oriented ABAP</li><li>Reports and Forms</li><li>Enhancements</li><li>BAPI/RFC and IDocs</li><li>BADI</li><li>BUg Fixing</li><li>InterfaceL</li> 
           </ul>
          </div>
        </div>
      </div>

    </div>

  
  </div>
</template>

<script>
export default {
  // name: 'GridLayout',
  name: 'AboutUs',

};
</script>



