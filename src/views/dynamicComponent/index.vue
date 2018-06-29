<template>
  <div class="dynamic-components_container-demo">
    {{test}}
    <div class="dynamic-inner">
      <span></span>
    </div>

  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        test: 'test'
      }
    },
    computed: {

    },
    mounted() {
      this.foo()
    },
    methods: {
       async foo() {
         let a = await new Promise((resolve) => {
           setTimeout(() => {
             resolve(23)
           }, 5000)
         })
         console.log(a, 'aa')
       },
       async getData() {
         let datal = await new Promise((resolve) => {
           setTimeout(() => {
             resolve('data1')
           }, 4000)
         })
         datal.then((res) => {
           console.log(res)
         })
       }
    }
  }
</script>
<style lang="scss">
  .dynamic-components_container-demo{
    width: 100%;
    height:100%;
    .dynamic-inner{
       width: 45px;
       height:45px;
       background: red;
    }
  }
</style>

