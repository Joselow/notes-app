<script setup lang="ts">

import { type Note } from '@/Types/UserType';
import { computed } from 'vue';
import BtnDeleteNote from '../BtnDeleteNote.vue';

const props = defineProps<{
    note: Note
}>()

const dateFormated = computed(() => {
const date = new Date(props.note?.updated_at);
const dia = date.getDate().toString().padStart(2, '0');
const mes = (date.getMonth() + 1).toString().padStart(2, '0'); 
const anio = date.getFullYear();

 const fechaConvertida = `${dia}/${mes}/${anio}`;
 return fechaConvertida
})


</script>

<template>

    <div class="bg-amarillo w-60 rounded-lg shadow-lg shadow-oscuro/30 ">
        <div class=" w-full flex bg-yellow-100 rounded-t-lg  ps-2 justify-between">
            <h6 class="font-semibold">{{ dateFormated }}  </h6>
            <BtnDeleteNote :id="note.id"></BtnDeleteNote>
        </div>
        <div class="p-2 text-center">
            <p> {{note.content }} </p>
        </div>
    </div>

</template>

<style scoped>

</style>