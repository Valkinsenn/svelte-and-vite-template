import preprocess from "svelte-preprocess"
import nested from "postcss-nested"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: {
      plugins: [nested()]
    }
  })
}

export default config
