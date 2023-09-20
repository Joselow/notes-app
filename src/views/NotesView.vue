<script setup lang="ts">
import { showCustomSuccess } from "@/Helpers/toasts.js";
import CardLayout from "@/components/Notes/Cards/CardLayout.vue";
import CreateNote from "@/components/Notes/CreateNote.vue";
import ListLayout from "@/components/Notes/Lists/ListLayout.vue";
import { useNoteStore } from "@/stores/notes";
import { ref, shallowRef } from "vue";

const noteStore = useNoteStore();
const isLoading = ref(false);

const listAllNotes = async() => {
  isLoading.value = true;
  await noteStore.getNotes();
  isLoading.value = false;
}
listAllNotes()


const messages = {
  errorMSG: "Ocurrrio un problema :C",
  storedMSG: "Registro guardado correctamente",
  updatedMSG: "Registro actualizado correctamente",
  deletedMSG: "Registro elimnado Correctamente",
};


const createdNote = () => {
  showCustomSuccess(messages.storedMSG);
  listAllNotes()
}

const currentComponet = shallowRef(CardLayout);

const changeComponet = (component: any) =>{
  currentComponet.value = component
}
</script>

<template>
  <v-loader v-if="isLoading"></v-loader>

  <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
    <div class="col-span-1 sm:col-span-1 md:col-span-1 rounded-lg bg-oscuro text-white max-h-40">
      <CreateNote @created="createdNote"></CreateNote>
    </div>

    <div class="col-span-1  sm:col-span-2 md:col-span-3">
      <div class="flex justify-center gap-6 mb-4">
        <button class=" hover:bg-red-400 px-5 rounded-md shadow-lg shadow-oscuro/30"
          :class="[currentComponet == CardLayout ? 'bg-rosa' : 'bg-red-300']"
          @click="changeComponet(CardLayout)"
          >Cards</button>
        <button class=" hover:bg-red-300 px-5 rounded-md shadow-lg shadow-oscuro/30"
        :class="[currentComponet == ListLayout ? 'bg-rosa' : 'bg-red-300']"
          @click="changeComponet(ListLayout)"
          >Lista</button>
      </div>
      
      <div class="flex justify-center bg-oscuro rounded-lg p-5 pt-8">
          <template v-if="noteStore.notes.length > 0">
              <!-- <transition name="change-component" -->
              >
                <component :is="currentComponet"
                  :notes="noteStore.notes"              
                  >
                </component>
              <!-- </tranFFsition> -->
          </template>
          <template v-else>
            <div class="text-white">
              <h3>Aun no hay Notas</h3>
            </div>
          </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

.change-component-enter-active,
.change-component-leave-active {
  transition: all 0.5s ease;
}
.change-component-enter-from,
.change-component-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
