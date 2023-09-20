<script setup lang="ts">
import { showErrorForm } from "@/Helpers/toasts.js";
import { type UserType } from '@/Types/UserType';
import { useAuthStore } from '@/stores/AuthStore';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter()
const isLoading = ref(false)
const registerStore = useAuthStore()

const registerData : UserType = reactive({
    name: null,
    email:null,
    password: null,
})

const register = async() => {
  const response = await registerStore.register(registerData);
  if(registerStore.authToken){
    route.push({
      name: 'notes',
      replace: true,                
    })
    registerStore.setUser(registerData);
  }
  else if(response.errors){
    showErrorForm(response.errors);
  }

}

</script>

<template>
<v-loader v-if="isLoading" type="login"></v-loader>

  <div class="bg-oscuro text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full mt-10">
      <h2 class="text-2xl font-semibold mb-4">Registrarse</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="nombre">Nombre</label>
          <input v-model="registerData.name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" >
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="email">Email</label>
          <input v-model="registerData.email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" >
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="password">Contraseña</label>
          <input v-model="registerData.password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña">
        </div>
        <div class="flex justify-end">
          <div class="flex items-center justify-between">
            <button class="bg-celeste hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
</template>

<style scoped>

</style>@/stores/AuthStore