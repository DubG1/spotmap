<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/account">SpotMap Accounts</NuxtLink>
            </nav>
        </header>

        <!-- output -->
        <div>
            <slot />
        </div>
        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/account/0">Account</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
 .router-link-exact-active {
     color: #12b488;
 }
</style>