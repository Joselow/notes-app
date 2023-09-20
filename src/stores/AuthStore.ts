import { type UserType } from '@/Types/UserType.js';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useAuthStore = defineStore('login', () => {
  const authToken = ref('');
  const paths = {
    url: 'http://127.0.0.1:8000/api/auth',
    login: '/login',
    register: '/register',
  }
  const initialStateUser: UserType = {
    id: 0,
    name: null,
    email: null,
    password: null,
  };
  const user: UserType = reactive({...initialStateUser});
  
  async function login(data: UserType) {
    try {
        const responseRaw = await fetch( paths.url + paths.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: data ? JSON.stringify(data) : null,
        });

        console.log(responseRaw);
        
        const response = await responseRaw.json();

        if (response.status) {
            authToken.value = response.token;
            Object.assign(user, response.user);
            return response;
        } 
        return response;

    } catch (error) {
      console.log(error);
        console.error('Error al iniciar sesión:', error);
    }
  }

  async function register(data: UserType) {
    const  responseRaw = await fetch( paths.url + paths.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: data ? JSON.stringify(data) : null,
    })


    const response = await responseRaw.json();
    console.log(response);
    

    if (response.status) {
        authToken.value = response.token;
        return response
    }      
    return response
  }

  function setUser(data: UserType){
    Object.assign(user, data)
  }

  function destroyUser(){
    console.log('usuario Destruido');
    deleteToken();
    Object.assign(user, initialStateUser)
  }

  function deleteToken() {
    authToken.value = '';
  }


  return { authToken, login, register, deleteToken, setUser, user, destroyUser }
},
{
  persist: true,
},)
