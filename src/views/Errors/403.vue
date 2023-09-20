<template>
    <div class="error-page">
      <h1>403</h1>
      <h2>Acceso Prohibido</h2>
      <p>Lo sentimos, no tienes permiso para acceder a esta página.</p>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <style scoped>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f8f8;
  }
  
  h1 {
    font-size: 4rem;
    color: #ff4444;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  router-link {
    font-size: 1rem;
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
    transition: color 0.2s;
  }
  
  router-link:hover {
    color: #0056b3;
  }
  </style>
  