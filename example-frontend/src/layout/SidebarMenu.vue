<template>
    <div>
        <img src="../assets/Evidi-logo.png" />
        <router-link class="router-button" :to="'/'">
            Hello world
        </router-link>
        <router-link class="router-button" :to="'/hello-world-2'">
            Different Hello World
        </router-link>
        <a class="router-button" href="https://vg.no" target="_blank">
            Redirect somewhere else
        </a>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SidebarMenu extends Vue {
    
}
</script>

<style scoped>
div {
    left: 0;
    position: absolute;
    width: 15%;
    background-color: #42b983;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
}

.router-button {
    width: 100%;
    padding: 0.5rem 0;
    background-color: transparent;
    border: none;
    color: white;
    border-bottom: 1px solid #3aa575;
    text-decoration: none;
}

img {
    max-width: 10rem;
    margin: 2rem auto;
}
    
</style>