<template>
  <div class="AboutUs">
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
         <ul style="list-style: none" class="coreskills">
            <li> <font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Laravel</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> PHP</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Vue JS</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Jquery</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> avascript</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Nuxt JS</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Json</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Postgre SQL</li> 
           </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sap Abap</h5>
           <ul style="list-style: none" class="coreskills">
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon"  /> SAP ABAP Programming</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Data Dictionary & OOP ABAP</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Reports and Forms</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Enhancements</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> BAPI/RFC and IDocs</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> BADI</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> Bug Fixing</li>
            <li><font-awesome-icon :icon="['fas', 'check']" class="custom-icon" /> InterfaceL</li> 
           </ul>
          </div>
        </div>
      </div>

    </div>
<!-- <hr> -->
<br>
<br>
<br>
<div class="col-md-12 col-sm-12">
   <div class="card-body">
             <img  class="img-responsive text-center" :src="require('@/assets/images/Web-Tools.jpg')" :width="'600'" alt="My Image" style="text-align: center; margin: 0 auto;border-radius: 10px;display: block;padding: 10px; border:1px solid #ddd" />
          </div>
          <br>
          <br>
          <br>
</div>
  
  </div>
</template>

<script>
export default {
  // name: 'GridLayout',
  name: 'AboutUs',

};
</script>

<style type="text/css">
  
  .AboutUs{
    width: 100%
  }
  .AboutUs h1{
  width: 100%;
  font-size: 45px;
  /*padding: 10px;*/
  color: #fff;
  opacity: 1
}
.AboutUs p{
  width: 100%;
  font-size: 15px;
  padding: 10px;
  color: black;
  margin-left: 10px
}
.coreskills li .custom-icon{
  color: skyblue
}
</style>



