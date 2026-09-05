<script setup>
import { ref, computed } from 'vue'
import { gitLessons } from './data.js'

const activeLessonId = ref(gitLessons[0].id)
const isSidebarOpen = ref(false)
const currentLang = ref('en')

const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'km' : 'en'
}

const selectLesson = (id) => {
  activeLessonId.value = id
  isSidebarOpen.value = false
}

const activeLesson = computed(() => {
  return gitLessons.find(lesson => lesson.id === activeLessonId.value)
})

const copyCode = (code, event) => {
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target
    btn.textContent = currentLang.value === 'en' ? 'Copied!' : 'បានចម្លង!'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = currentLang.value === 'en' ? 'Copy' : 'ចម្លង'
      btn.classList.remove('copied')
    }, 2000)
  })
}
</script>

<template>
  <div class="dashboard-container">
    <!-- Mobile Header -->
    <header class="mobile-header">
      <h1 class="sidebar-title" @click="selectLesson(gitLessons[0].id)" style="margin: 0; cursor: pointer;">
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
        Git Mastery
      </h1>
      <div class="header-actions">
        <!-- This is the button that opens the sidebar when clicked -->
        <button class="hamburger-btn" @click="isSidebarOpen = true">
          <!-- This SVG is the drawing of the 3 horizontal lines -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>

    <!-- Overlay -->
    <div :class="['sidebar-overlay', { open: isSidebarOpen }]" @click="isSidebarOpen = false"></div>

    <!-- Sidebar -->
    <aside :class="['sidebar', { open: isSidebarOpen }]">
      <h1 class="sidebar-title" @click="selectLesson(gitLessons[0].id)" style="cursor: pointer;">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
        Git Mastery
      </h1>
      
      <div class="sidebar-actions">
        <button class="lang-toggle-btn" @click="toggleLang">
          {{ currentLang === 'en' ? 'Khmer' : 'English' }}
        </button>
      </div>

      <nav>
        <ul class="nav-list">
          <li v-for="lesson in gitLessons" :key="lesson.id" class="nav-item">
            <button 
              @click="selectLesson(lesson.id)"
              :class="['nav-button', { active: activeLessonId === lesson.id }]"
            >
              {{ lesson.title[currentLang] }}
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">

      <div class="content-wrapper" v-if="activeLesson">
        <header class="lesson-header">
          <h2 class="lesson-title">{{ activeLesson.title[currentLang] }}</h2>
          <p v-if="activeLesson.description" class="lesson-description">
            {{ activeLesson.description[currentLang] }}
          </p>
        </header>

        <section v-for="(section, index) in activeLesson.sections" :key="index" class="lesson-section">
          <h3 v-if="section.subtitle" class="section-subtitle">{{ section.subtitle[currentLang] }}</h3>
          <p v-if="section.text" class="section-text">{{ section.text[currentLang] }}</p>

          <div class="commands-list">
            <div 
              v-for="(cmd, cmdIndex) in section.commands" 
              :key="cmdIndex" 
              class="command-card">
              
              <p class="command-desc">{{ cmd.desc[currentLang] }}</p>
              <div class="code-wrapper">
                <button class="copy-btn" @click="copyCode(cmd.code, $event)">
                  {{ currentLang === 'en' ? 'Copy' : 'ចម្លង' }}
                </button>
                <pre><code>{{ cmd.code }}</code></pre>
              </div>
            </div>
          </div>

        </section>

        <!-- ADD THIS FOOTER CODE HERE -->
        <footer class="app-footer">
          <p>&copy; 2026 Vath. All rights reserved.</p>
        </footer>

      </div>
    </main>
  </div>
</template>