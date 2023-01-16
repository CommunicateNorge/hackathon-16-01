<template>
  <div>
    <SidebarMenu />
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import SidebarMenu from './layout/SidebarMenu.vue';

@Options({
  components: {
    HelloWorld,
    SidebarMenu
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
