// @ts-check
import { defineConfig } from 'astro/config';

// -----------------------------------------------------------------------------
// GitHub Pages deploy settings.
//
// When you're ready to publish, set these to match your repo:
//
//   * USER/ORG site  (repo named  ForrestLasiter.github.io):
//       site: 'https://forrestlasiter.github.io'
//       base: '/'            <-- leave base out / '/'
//
//   * PROJECT site   (repo named  portfolio):
//       site: 'https://forrestlasiter.github.io'
//       base: '/portfolio'   <-- the repo name
//
// Until then these defaults just let the site build & preview locally.
// -----------------------------------------------------------------------------
export default defineConfig({
  site: 'https://forrestlasiter.github.io',
  base: '/portfolio',
});
