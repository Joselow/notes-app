<script lang="ts" setup>
withDefaults (defineProps<{ type?:string }>(),{
    type:'default'
});

</script>
<template>
    <div>
      <div class="overlay">
        <div :class="[type == 'login' ? 'login-loader' : 'loader']"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .overlay {
    z-index: 99;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.692);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .loader {
    margin-top: 15px;
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-width: 3px 2px 3px 2px;
    border-style: solid dotted solid dotted;
    border-color: #de3500 rgba(255, 255, 255,0.3) #fff rgba(151, 107, 93, 0.3);
    border-radius: 50%;
    box-sizing: border-box;
    animation: 1s rotate linear infinite;
 }
 .loader:before , .loader:after{
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color:#fff;
    transform: translate(-10px, 19px) rotate(-35deg);
  }
 .loader:after {
    border-color: #de3500 #0000 #0000 #0000 ;
    transform: translate(32px, 3px) rotate(-35deg);
  }
   @keyframes rotate {
    100%{    transform: rotate(360deg)}
  }
  
  .login-loader {
    margin-top: 15px;
    animation: rotatelogin 1s infinite;
    width: 50px;
    height: 50px;
    border: 3px solid #ff3d00;
    border-radius: 50%;
  }
  
  .login-loader:before,
  .login-loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  
  .login-loader:before {
    animation: ball1 1s infinite;
    background-color: #fff;
    box-shadow: 30px 0 0 #ff3d00;
    margin-bottom: 10px;
  }
  
  .login-loader:after {
    animation: ball2 1s infinite;
    background-color: #ff3d00;
    box-shadow: 30px 0 0 #fff;
  }
  
  @keyframes rotatelogin {
    0% {
      transform: rotate(0deg) scale(0.8);
    }
    50% {
      transform: rotate(360deg) scale(1.2);
    }
    100% {
      transform: rotate(720deg) scale(0.8);
    }
  }
  
  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #ff3d00;
    }
    50% {
      box-shadow: 0 0 0 #ff3d00;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #ff3d00;
      margin-bottom: 10px;
    }
  }
  
  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #fff;
    }
    50% {
      box-shadow: 0 0 0 #fff;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #fff;
      margin-top: 0;
    }
  }
  </style>