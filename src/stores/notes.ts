import { type Note } from '@/Types/UserType';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from "./AuthStore.js";

export const useNoteStore = defineStore('notes', () => {
    const notes = ref<Note []>([]);
    const authStore = useAuthStore();
    const paths = {
        url:'http://127.0.0.1:8000/api',
        get : '/note',
        store: '/note',
        delete: '/delete-note',
    }
 
    async function getNotes() {
        try {
            const response = await fetch(paths.url + paths.get,{
                method:'GET',
                headers:{
                    Authorization: `Bearer ${authStore.authToken}`,
                }
            });            
            return notes.value = await response.json();            
        } catch (error) {
            return(error);          
        }
    }

    async function storeNote(data: Note) {
        try {
            const responseRaw = await fetch(paths.url + paths.store,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authStore.authToken}`,
                  },
                body: data ? JSON.stringify(data) : null,
            });    
            const response = await responseRaw.json();
            return response            
        } catch (error) {
            return(error);                    
        }
    }
    async function deleteNote (id:number) {        
        try {
            const responseRaw = await fetch(paths.url + paths.delete,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                    Authorization: `Bearer ${authStore.authToken}`, 
                  },
                body: id ? JSON.stringify({id}) : null,
            });    

            const response = await responseRaw.json();            
            return response;
        } catch (error) {
            return error ;
        }
    }
  
    return { notes, getNotes, storeNote, deleteNote }
}
)
