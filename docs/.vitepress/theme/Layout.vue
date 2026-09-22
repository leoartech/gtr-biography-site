<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ProfileInfobox from './ProfileInfobox.vue'

const sections = [
  { text: 'Biography', href: '#biography' },
  { text: 'Aviation career', href: '#_23-years-in-the-sky-and-a-lifetime-of-aviation' },
  { text: 'Aviation business', href: '#aviation-business' },
  { text: 'Philanthropy', href: '#philanthropy' },
  { text: 'Source Notes', href: '#references' }
]

const isContentsOpen = ref(false)
const drawerRef = ref(null)
const menuButtonRef = ref(null)

function openContents() {
  isContentsOpen.value = true
}

function closeContents() {
  isContentsOpen.value = false
  nextTick(() => menuButtonRef.value?.focus())
}

function handleKeydown(event) {
  if (!isContentsOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeContents()
    return
  }

  if (event.key !== 'Tab' || !drawerRef.value) return

  const focusable = drawerRef.value.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  const items = [...focusable]
  if (!items.length) return

  const first = items[0]
  const last = items[items.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(isContentsOpen, async (open) => {
  document.body.classList.toggle('contents-open', open)
  if (open) {
    await nextTick()
    drawerRef.value?.querySelector('.drawer-close')?.focus()
  }
})

onMounted(() => document.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  document.body.classList.remove('contents-open')
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="wiki-app">
    <header class="site-header">
      <a class="site-brand" href="#glenn-tugade-rabadon" aria-label="Glenn Tugade Rabadon biography home">
        <span class="site-mark" aria-hidden="true">GTR</span>
        <span class="site-wordmark">
          <span class="site-title">Glenn Tugade Rabadon</span>
          <span class="site-descriptor">Biography &amp; Profile</span>
        </span>
      </a>

      <nav class="site-actions" aria-label="Primary navigation">
        <a href="#glenn-tugade-rabadon">Home</a>
        <a href="#biography">Biography</a>
        <a href="#aviation-business">Business</a>
        <a href="#philanthropy">Philanthropy</a>
        <a href="#references">Source Notes</a>
      </nav>

      <button
        ref="menuButtonRef"
        class="contents-trigger"
        type="button"
        aria-controls="article-contents-drawer"
        :aria-expanded="isContentsOpen"
        aria-label="Open article contents"
        @click="openContents"
      >
        <span class="contents-trigger-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>Article contents</span>
      </button>
    </header>

    <main class="wiki-shell">
      <aside class="toc-rail" aria-label="Article contents">
        <p class="rail-label">Biography</p>
        <p class="rail-title">Glenn Tugade Rabadon</p>
        <div class="rail-actions" aria-label="Article actions">
          <a href="#glenn-tugade-rabadon">Article</a>
          <a href="#references">Source Notes</a>
        </div>

        <nav class="toc-nav" aria-label="Table of contents">
          <p class="toc-label">Contents</p>
          <ol>
            <li v-for="section in sections" :key="section.href">
              <a :href="section.href">{{ section.text }}</a>
            </li>
          </ol>
        </nav>
      </aside>

      <article class="article-column" aria-label="Glenn Tugade Rabadon biography">
        <Content />
      </article>

      <aside class="profile-column" aria-label="Profile summary">
        <ProfileInfobox />
      </aside>
    </main>

    <Transition name="contents-drawer">
      <div v-if="isContentsOpen" class="contents-backdrop" @click.self="closeContents">
        <aside
          id="article-contents-drawer"
          ref="drawerRef"
          class="contents-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          <div class="drawer-heading">
            <div>
              <p class="rail-label">Biography</p>
              <h2 id="drawer-title">Glenn Tugade Rabadon</h2>
            </div>
            <button class="drawer-close" type="button" aria-label="Close article contents" @click="closeContents">×</button>
          </div>

          <div class="rail-actions" aria-label="Article actions">
            <a href="#glenn-tugade-rabadon" @click="closeContents">Article</a>
            <a href="#references" @click="closeContents">Source Notes</a>
          </div>

          <nav class="toc-nav" aria-label="Article table of contents">
            <p class="toc-label">Contents</p>
            <ol>
              <li v-for="section in sections" :key="section.href">
                <a :href="section.href" @click="closeContents">{{ section.text }}</a>
              </li>
            </ol>
          </nav>
        </aside>
      </div>
    </Transition>
  </div>
</template>
