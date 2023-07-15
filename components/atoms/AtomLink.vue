<template>
    <NuxtLink :to="to" class="atom-link" @click="emitClickEvent">
        {{ label }}
    </NuxtLink>
  </template>
  
  <script lang="ts">
    import { Vue, Component, Prop } from 'nuxt-property-decorator';
    
    @Component
    export default class AtomLink extends Vue {
      @Prop({ required: true }) readonly to!: string;
      @Prop({ required: true }) readonly label!: string;
    
      emitClickEvent() {
        this.$emit('clicked');
      } 
    }
  </script>
  
  <style scoped>
  .atom-link {
    color: #0076ff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  </style>