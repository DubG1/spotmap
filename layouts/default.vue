<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">SpotMap</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                    <li><NuxtLink to="/spotList">Spots</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/account/0">Account</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>