<script setup lang="ts">
import { type Note } from "@/Types/UserType";
import CardItem from "./CardItem.vue";
defineProps<{
    notes : Note []
}>()
</script>

<template>
    <div class="w-full gap-10 flex justify-center flex-wrap">
        <!-- <transition-group name="list"> -->
            <CardItem v-for="item in notes"
                :note="item"
                :key="item.id"
            >             
            </CardItem>
        <!-- </transition-group> -->

    </div>
</template>

<style scoped>
/* .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
</style>