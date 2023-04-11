<script>
  // Imported Modules
  import Router from "svelte-spa-router"

  // Imported Components
  import Footer from "./lib/layout/Footer.svelte"
  import Navbar from "./lib/layout/Navbar.svelte"

  // Imported Scripts and Variables
  import { routes } from "./lib/scripts/routes"
</script>

<Navbar />

<!-- Outer wrapper for the Router -->
<div class="outer-wrapper">
  <Router {routes} />
</div>

<Footer />
