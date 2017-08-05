declare module '*.vue' {
  import Vue from 'vue'
  export default typeof Vue
}

declare module NodeJS {
  class Process {
    browser: string
  }
}
