<script>
  // Imported Modules
  import { location } from "svelte-spa-router" // For "active" classes on nav links.

  // Internal Variables
  let isMenuOpen = false // Is the nav menu open on mobile?

  // Internal Functions
  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }
</script>

<!-- Navbar begins here -->
<nav class="navbar">
  <!-- Internal wrapper for home button and links wrapper -->
  <div class="nav-wrapper">
    <!-- Home Button on desktop displays, style to hide on mobile screens -->
    <a
      href="/#/"
      class="nav-link home desktop"
      class:active={$location === "/"}
    >
      Home <!-- Swap this out with whatever you want -->
    </a>

    <!-- Button to toggle nav links menu on mobile screens -->
    <div class="button-wrapper">
      <button type="button" class="menu-btn" class:open={isMenuOpen}>
        <span class="menu-btn-burger" />
        <!-- Turn this into a burger icon -->
      </button>
    </div>

    <!-- Wrapper for Nav Links -->
    <nav class="nav-links-wrapper" class:open={isMenuOpen}>
      <nav class="inner-wrapper">
        <a
          href="/#/"
          class="nav-link home-mobile"
          class:active={$location === "/"}
          on:click={toggleMenu}
        >
          Home <!-- Swap this out with whatever you want -->
        </a>
      </nav>
    </nav>
  </div>
</nav>
