<template>
<div class="">

  <div class="HomePage">
<!-- <button @click="isCollapsed = !isCollapsed">
        Toggle Sidebar
      </button> -->
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
  height: 100vh; 
    background-image: url('@/assets/images/imran02.jpg'); 
  background-size: cover; /* Cover the entire area */
  background-position: top center; /* Center the image */
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  position: relative;
}
.HomePage h1{
	/*width: 100%;*/
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


/* Adjust for smaller screens */
/*@media (max-width: 1024px) {
  .HomePage h1 {
    font-size: 2rem;
  }
  .HomePage p {
    font-size: 0.9rem;
  }
}*/

/*@media (max-width: 768px) {
  .HomePage h1 {
    font-size: 1.75rem;
    text-align: center;
    margin-left: 15px
  }
  .HomePage p {
    font-size: 0.85rem;
    text-align: center;
    margin-left: 15px
  }
}*/

/*@media (max-width: 480px) {
  .HomePage h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .HomePage p {
    font-size: 0.8rem;
    text-align: center;
    margin-left: 15px
  }
}
*/
</style>

