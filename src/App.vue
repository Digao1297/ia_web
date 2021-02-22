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
  <body>
    <router-view />
  </body>
  <footer>
    <div class="text-center">Done with <strong>♥</strong></div>
  </footer>
</template>

<style scoped>
header {
  padding: 0.5rem;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  font-weight: 500;
}

strong {
  color: rgb(218, 49, 49);
  font-size: 16px;
}
</style>