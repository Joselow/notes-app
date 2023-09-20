
<script lang="ts" setup>
import { showCustomError } from "@/Helpers/toasts.js";
import { type Note } from "@/Types/UserType";
import { useNoteStore } from "@/stores/notes";
import { reactive, ref } from "vue";

const noteStore = useNoteStore();
const isLoading = ref(false);

const note: Note = reactive({
  id: 0,
  content: null,
});
const msgError = 'Ocurrio un problema :c'
const emits = defineEmits(['created'])

const addNote = async () => {
  isLoading.value = true;
  const response = await noteStore.storeNote(note);
  isLoading.value = false;

  if (response.status) {
    emits('created');
  }else{
    showCustomError(msgError)
  }
};
</script>
<template>
<v-loader v-if="isLoading"></v-loader>

<div class="p-6">

        <form action="" @submit.prevent="addNote">
          <div class="">
            <label
              class=" font-bold"
              for="loginPassword"
              >Contenido</label
            >
            </div>
            <div class="grid grid-cols-3 mt-6">
            <div class="col-span-2  ">
                <input
                  v-model="note.content"
                  class=" border rounded w-full py-2 px-3
                   text-gray-700 leading-tight focus:outline-celeste "
                  id="loginPassword"
                  type="text"
                  placeholder="nota de..."
                  required
                />
              </div>
              <div class="flex justify-center col-span-1  ">
                  <button
                    class="w-full bg-celeste hover:bg-blue-700 text-white font-bold  px-6 py-1 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
        
                  <div>
                    <v-icon name="io-add-circle-sharp"  :scale=".8"/> Crear
                  </div>
                  </button>
              </div>
            </div>
        </form>
      </div>


</template>