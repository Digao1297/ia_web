<template>
  <header class="navbar">
    <section class="navbar-section">
      <a href="/" class="navbar-brand mr-2 text-bold"
        >Artificial intelligence
      </a>
      <router-link to="/" class="btn btn-link">Home</router-link>
      <router-link to="/result" class="btn btn-link">Results</router-link>
    </section>
    <section class="navbar-section">
      <div class="input-group input-inline">
        <a
          href="https://github.com/bed72/ia_web.git"
          class="btn btn-link"
          target="_blank"
          >GitHub <i class="icon icon-emoji"
        /></a>
      </div>
      <a href="http://127.0.0.1:8000/docs" class="btn btn-link" target="_blank"
        >Docs <i class="icon icon-flag"
      /></a>
    </section>
  </header>
  <body>
    <router-view />
  </body>
  <footer>
    <div class="text-center">Done with <strong>♥</strong></div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 0.5rem;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  font-weight: 500;
  text-align: center;
  background-color: white;
}
body {
  margin: 0 0 2rem 0;
}

strong {
  font-size: 16px;
  color: rgb(218, 49, 49);
}
</style>
