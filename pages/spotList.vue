<template>
  <div>
    <h2 class="font-bold text-xl">List of Spots</h2>

        <span>{{ spotData }}</span>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const spotData = ref({});

onMounted(async () => {
  try {
    const response = await useFetch('/api/get_spots')
    spotData.value = response;
  } catch (error) {
    console.error('Error fetching spots:', error);
  }
});

</script>
