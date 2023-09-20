<script setup lang="ts">
import { showCustomError, showCustomSuccess } from "@/Helpers/toasts.js";
import { useNoteStore } from "@/stores/notes.js";
import { ref } from 'vue';

const noteStore = useNoteStore();
const props = defineProps<{id:number}>()
const isLoading = ref(false)
const msgError = 'Ocurrio un problema :c'
const msgSuccess = 'Nota eliminada correctamente'

const deleteNote = async () => {
  const isConfirmed = window.confirm("¿Está seguro?");

  if (!isConfirmed) {
    return;
  }

  isLoading.value = true;
  const response = await noteStore.deleteNote(props.id);
  isLoading.value = false;

  if (response.status) {
    isLoading.value = true;
    await removeNote()
    isLoading.value = false;
    showCustomSuccess(msgSuccess)
  }else{
    showCustomError(msgError)
  }
};

const removeNote = () => {
  return new Promise((resolve) => {
    const index = noteStore.notes.findIndex((el) => el.id == props.id);
    if (index !== -1) {
      noteStore.notes.splice(index, 1);
      resolve(true); // Resuelve la promesa con true si la eliminación es exitosa
    } 
  });
};

</script>

<template>
    <v-loader v-if="isLoading"></v-loader>
    <button class="bg-rosa p-2 w-10 rounded-md hover:bg-red-200"
        @click="deleteNote"
    >X</button>

</template>

<style scoped>

</style>