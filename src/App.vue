<template>
  <header class="navbar">
    <section class="navbar-section">
      <a href="/" class="navbar-brand mr-2 text-bold"
        >Artificial intelligence
      </a>
      <router-link to="/" class="btn btn-link">Home</router-link>
      <router-link to="/result" class="btn btn-link">Result</router-link>
    </section>
    <section class="navbar-section">
      <div class="input-group input-inline">
        <a
          href="https://github.com/bed72/ia_web.git"
          class="btn btn-link"
          target="_blank"
          >GitHub</a
        >
      </div>
    </section>
  </header>
  <router-view />
</template>

<style scoped>
header {
  padding: 0.5rem;
}
</style>