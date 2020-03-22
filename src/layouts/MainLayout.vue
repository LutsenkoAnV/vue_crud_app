<template>
  <div class="app-main-layout">
    <nav class="navbar light-green darken-2 lighten-1">
      <router-link class="nav-heading" to="/">Vue.js CRUD Application</router-link>
    </nav>
    <main class="app-content">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
