import { defineConfig } from 'vitepress'

const siteUrl = 'https://glenn-tugade-rabadon-biography.pages.dev/'
const pageDescription = 'Biography of Glenn Tugade Rabadon, a Filipino pilot, educator, entrepreneur, investor, and philanthropist.'
const socialImageUrl = 'https://glenn-tugade-rabadon-biography.pages.dev/images/og-glenn-tugade-rabadon.jpg'
const socialImageAlt = 'Glenn Tugade Rabadon — Biography & Profile'
const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Glenn Tugade Rabadon',
  alternateName: 'GTR',
  url: siteUrl,
  description: pageDescription
}

export default defineConfig({
  title: 'Glenn Tugade Rabadon - Wiki & Biography',
  description: pageDescription,
  lang: 'en-US',
  srcExclude: ['architecture-plan.md', 'biography-details.md'],
  sitemap: {
    hostname: 'https://glenn-tugade-rabadon-biography.pages.dev'
  },
  head: [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'google-site-verification', content: '4Jl0-6HHyxS2VSRDnyPlRnE2XblqHjG5gy3uQINP540' }],
    ['meta', { name: 'author', content: 'Glenn Tugade Rabadon' }],
    ['link', { rel: 'canonical', href: siteUrl }],
    ['meta', { property: 'og:type', content: 'profile' }],
    ['meta', { property: 'og:title', content: 'Glenn Tugade Rabadon - Wiki & Biography' }],
    ['meta', { property: 'og:description', content: pageDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: socialImageUrl }],
    ['meta', { property: 'og:image:alt', content: socialImageAlt }],
    ['meta', { property: 'og:image:width', content: '1733' }],
    ['meta', { property: 'og:image:height', content: '908' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Glenn Tugade Rabadon - Wiki & Biography' }],
    ['meta', { name: 'twitter:description', content: pageDescription }],
    ['meta', { name: 'twitter:image', content: socialImageUrl }],
    ['meta', { name: 'twitter:image:alt', content: socialImageAlt }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(personStructuredData)],
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
