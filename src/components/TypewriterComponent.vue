<!-- src/components/Typewriter.vue -->
<template>
  <span>{{ displayedText }}</span>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    typingSpeed: {
      type: Number,
      default: 100, // Adjust the speed (in ms) of each character display
    },
    loop: {
      type: Boolean,
      default: false, // Set to true if you want the typewriter effect to loop
    },
  },
  setup(props) {
    const displayedText = ref('')
    let charIndex = 0
    let typingTimeout

    const typeWriterEffect = () => {
      if (charIndex < props.text.length) {
        displayedText.value += props.text.charAt(charIndex)
        charIndex++
        typingTimeout = setTimeout(typeWriterEffect, props.typingSpeed)
      } else if (props.loop) {
        // Reset for looping effect
        setTimeout(() => {
          displayedText.value = ''
          charIndex = 0
          typeWriterEffect()
        }, 1000) // Delay before restarting the loop
      }
    }

    onMounted(typeWriterEffect)

    // Cleanup on component unmount
  watch(displayedText, (newVal) => {
  if (newVal.length === props.text.length && !props.loop) {
    clearTimeout(typingTimeout)
  }
})

    return { displayedText }
  },
}
</script>

<style scoped>
/* Optional: Customize the typewriter cursor */
span {
  border-right: 2px solid;
  padding-right: 5px;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
