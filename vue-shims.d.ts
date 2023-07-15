import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $emit: (event: string, ...args: any[]) => void;
  }
}