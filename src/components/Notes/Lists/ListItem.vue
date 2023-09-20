<script setup lang="ts">
import { type Note } from '@/Types/UserType';
import { computed } from 'vue';
import BtnDeleteNote from '../BtnDeleteNote.vue';

const props = defineProps<{
    note: Note
}>()

const dateFormated = computed(() => {
    const dateFromProps = props.note?.updated_at;
    const date = new Date(dateFromProps);

    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const anio = date.getFullYear();

 const fechaConvertida = `${dia}/${mes}/${anio}`;
 return fechaConvertida
})
</script>

<template>
    <div class="text-white flex justify-evenly">
        <span> {{ dateFormated }}  </span>
        <span>  {{note.content }}  </span>
        <BtnDeleteNote :id="note.id"></BtnDeleteNote>
    </div>
    <hr class="bg-rosa">

</template>

<style scoped>

</style>