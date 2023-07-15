<script lang="ts">
import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'button',
        },
        color: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'd',
        },
        block: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes(): string {
            return `btn btn-${this.color} btn-${this.size} ${this.block? 'btn-block' : ''} ${this.disabled? 'disabled' : ''}`;
        },
    },
    methods: {
        handleClick() {
            this.$emit('click');
        },
    },
  });
</script>
<template>
    <button :class="classes" @click="handleClick">{{ label }}</button>
</template>
