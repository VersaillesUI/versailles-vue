import Vue from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    square?: true | false;
    elevation?: Number;
    component?: String;
  }
}

export default class TabPanel extends Vue {
  
}