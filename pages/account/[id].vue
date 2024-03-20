<template>
    <div>
        <p>base for {{ id }}</p>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    
    const { id } = useRoute().params
    
</script>

<style scoped>

</style>