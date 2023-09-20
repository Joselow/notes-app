<script setup lang="ts">
import { showCustomError, showErrorForm } from "@/Helpers/toasts.js";
import { type UserType } from '@/Types/UserType.js';
import { useAuthStore } from "@/stores/AuthStore.js";
import { reactive, ref } from 'vue';

import { useRouter } from 'vue-router';

const route = useRouter()



const loginStore = useAuthStore()
const isLoading = ref(false)

const loginData : UserType = reactive({
    email: null,
    password: null
})

const login = async() => {
    isLoading.value = true;
    const response = await loginStore.login(loginData);
    isLoading.value = false;

    if(loginStore.authToken){
      route.push({
          name: 'notes',
          replace: true,                
        })
    } else if(response.errors){
      showErrorForm(response.errors);
    }else if(response.message){
      showCustomError(response.message)
    }
}

</script>

<template>        
<v-loader v-if="isLoading" type="login"></v-loader>

 <div class="mt-10 bg-oscuro text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
      <h2 class="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="loginEmail">Email</label>
          <input v-model="loginData.email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loginEmail" type="text" placeholder="Email" >
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="loginPassword">Contraseña</label>
          <input v-model="loginData.password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loginPassword" type="password" placeholder="Contraseña" >
        </div>
        <div class="flex justify-end">
          <div class="flex items-center justify-between">
          <button class="bg-celeste hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Iniciar Sesión
          </button>
        </div>
        </div>
       
      </form>
    </div>
</template>

<style scoped>

</style>