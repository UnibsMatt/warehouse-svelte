import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

export default {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};
