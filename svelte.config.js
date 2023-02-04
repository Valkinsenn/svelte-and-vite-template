import preprocess from "svelte-preprocess"
import nesting from "postcss-nesting"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: {
      plugins: [nesting()]
    }
  })
}

export default config
