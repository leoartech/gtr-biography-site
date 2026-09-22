import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Glenn Tugade Rabadon - Wiki & Biography',
  description: 'Biography of Glenn Tugade Rabadon, a Filipino pilot, educator, entrepreneur, investor, and philanthropist.',
  lang: 'en-US',
  srcExclude: ['architecture-plan.md', 'biography-details.md'],
  sitemap: {
    hostname: 'https://glenn-tugade-rabadon-biography.pages.dev'
  },
  head: [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Glenn Tugade Rabadon' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap',
      media: 'print',
      onload: "this.media='all'"
    }]
  ],
  themeConfig: {
    logo: { src: '/logo.svg', alt: 'Glenn Tugade Rabadon Biography' },
    nav: [
      { text: 'Home', link: '#top' },
      { text: 'Biography', link: '#biography' },
      { text: 'Aviation Business', link: '#aviation-business' },
      { text: 'Philanthropy', link: '#philanthropy' },
      { text: 'Source Notes', link: '#references' }
    ],
    sidebar: [
      {
        text: 'Glenn Tugade Rabadon',
        items: [
          { text: 'Biography', link: '#biography' },
          { text: 'Aviation Business', link: '#aviation-business' },
          { text: 'Philanthropy', link: '#philanthropy' },
          { text: 'Source Notes', link: '#references' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'Nilalaman' },
    docFooter: { prev: 'Nakaraang pahina', next: 'Susunod na pahina' }
  }
})
