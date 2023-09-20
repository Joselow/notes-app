<script setup lang="ts">
import { type Note } from "@/Types/UserType";
import ListItem from "./ListItem.vue";
defineProps<{
    notes : Note []
}>()
</script>

<template>

    <div class="w-full">
        <!-- <transition-group > -->
            <ListItem v-for="item in notes"
                :note="item"
                :key="item.id"
            >             
            </ListItem>
        <!-- </transition-group> -->
    </div>

</template>

<style scoped>

</style>