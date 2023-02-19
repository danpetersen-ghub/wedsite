/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // NOTE: keep this line:
    './src/**/*.{html,js,svelte,ts}',
    // Append the following for Skeleton:
    require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Keep any existing plugins present and append the following:
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
  darkMode: 'class'

};