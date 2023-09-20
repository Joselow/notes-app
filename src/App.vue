<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/AuthStore';

const route = useRouter();
const loginStore = useAuthStore();


const logout = ()=>{
  loginStore.destroyUser();

  route.push({ 
    name:'home',
    replace: true,                
  })
}

</script>

<template>
  <header>
    <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white py-1 text-2xl font-semibold">
        <router-link :to="{name:'home'}" class=" hover:bg-red-200 hover:text-black rounded-md px-2" 
        :class="{ 'bg-rosa text-black ': route.currentRoute.value.name == 'home' }"

        >  Mi Aplicación</router-link>
      </div>
      <ul class="flex space-x-4 text-white">
        <li>
          <router-link class="" :to="{name:'notes'}" v-show="loginStore.authToken">
            <span class="px-3 py-1 hover:bg-red-200 hover:text-black rounded-md "
            :class="{ 'bg-rosa text-black ': route.currentRoute.value.name == 'notes' }"

            >
              <v-icon name="fc-accept-database"></v-icon>  
              Notas 
            </span>          
          </router-link></li>
        <template v-if="!loginStore.authToken">
          <li><router-link :to="{name:'login'}"  class=" hover:bg-red-200 hover:text-black rounded-md px-2 py-1" 
            :class="{ 'bg-rosa text-black ': route.currentRoute.value.name == 'login' }"
            >Login</router-link></li>
          <li><router-link :to="{name:'register'}" class=" hover:bg-red-200 hover:text-black rounded-md px-2 py-1" 
            :class="{ 'bg-rosa text-black ': route.currentRoute.value.name == 'register' }"
            >
            Register</router-link></li>
        </template>
        <template v-else>
          <li>
            <v-icon name="la-user-circle-solid" :scale="1.3"></v-icon><h3>{{ loginStore.user.name }}</h3>

          </li>
          <li>
            <button class="px-6 hover:bg-rosa hover:text-black rounded-md" @click="logout">Salir            
              <v-icon name="la-sign-out-alt-solid" :scale="1" ></v-icon>
            </button>
          </li>

        </template>
       
      </ul>
    </div>
  </nav>

  </header>
  <div class="flex justify-center items-center  flex-col">
    <!-- {{ loginStore.authToken }} -->
    <RouterView />
  </div>
</template>

<style scoped>
</style>
