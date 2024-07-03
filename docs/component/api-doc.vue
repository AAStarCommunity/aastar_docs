<template>
    <div id="redoc-container"></div>
  </template>
  
  <script>
  export default {
    name: 'RedocComponent',
    mounted() {
      const script = document.createElement('script');
      script.src = "https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js";
      script.onload = () => {
        Redoc.init('/swagger.json', {}, document.getElementById('redoc-container'));
      };
      document.body.appendChild(script);
    }
  }
  </script>
  
  <style scoped>
  </style>
  