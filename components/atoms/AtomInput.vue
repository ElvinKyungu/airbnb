<template>
    <div class="input-container">
      <input
        :type="type"
        :value="value"
        @input="updateValue"
        class="input-field"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AtomicInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      updateValue(event: Event) {
        this.$emit('input', (event.target as HTMLInputElement).value)
      }
    }
  })
  </script>
  
  <style scoped>
  .input-container {
    /* Utilisez UnoCSS pour le style, similaire à Airbnb */
  }
  .input-field {
    /* Utilisez UnoCSS pour le style, similaire à Airbnb */
  }
  </style>
  