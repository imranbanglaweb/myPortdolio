<template>
<div class="container-fluid">
  <div class="HomePage">

  <h1>Imran Rahman</h1>
   <p> <TypewriterComponent text="I am a Full Stack Developer with a focus on SAP ABAP and modern web technologies!" :typingSpeed="60" :loop="true" /> </p>   

  </div>
  
</div>
</template>

<script>

	import TypewriterComponent from '@/components/TypewriterComponent.vue'
export default {
  name: "HomePage",
  components: { TypewriterComponent },
};
</script>
<style>
.HomePage {
	width: 100%;
  height: 180vh; 
    background-image: url('@/assets/images/imran02.jpg'); 
  background-size: cover; /* Cover the entire area */
  background-position: bottom right; /* Center the image */
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0.1);
}
.HomePage h1{
	width: 100%;
	font-size: 45px;
  padding: 10px;
	color: #fff;
  opacity: 1
}
.HomePage p{
  width: 100%;
  font-size: 35px;
  padding: 10px;
  color: yellow
}
</style>

