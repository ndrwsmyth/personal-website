import './style.css'
import { prepare, layout } from '@chenglou/pretext'

interface Project {
  description: string
  name: string
  link?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    description: 'Working on applied AI + other things at',
    name: 'Willow Labs',
  },
  {
    description: 'Working on creative + design at',
    name: 'Oxy',
    link: 'https://oxy.co',
    linkLabel: 'oxy.co',
  },
  {
    description: 'Working on jewelry with',
    name: 'Razza Pazza',
    link: 'https://razzapazza.com',
    linkLabel: 'razzapazza.com',
  },
  {
    description: 'Working on',
    name: 'Inkra',
  },
  {
    description: 'Working on',
    name: 'Memories',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!

// Heading
const h1 = document.createElement('h1')
h1.textContent = 'Andrew Smyth'
app.appendChild(h1)

// Project list
const ul = document.createElement('ul')
ul.className = 'projects'

for (const project of projects) {
  const li = document.createElement('li')

  const text = document.createElement('span')
  text.className = 'project-description'
  text.textContent = `${project.description} `

  const name = document.createElement('span')
  name.className = 'project-name'
  name.textContent = project.name

  text.appendChild(name)
  li.appendChild(text)

  if (project.link && project.linkLabel) {
    const linkSeparator = document.createTextNode(' — ')
    li.appendChild(linkSeparator)

    const a = document.createElement('a')
    a.href = project.link
    a.target = '_blank'
    a.rel = 'noopener'
    a.className = 'project-link'
    a.textContent = project.linkLabel
    li.appendChild(a)
  }

  ul.appendChild(li)
}

app.appendChild(ul)

// Pretext: subtle layout measurement
// Use prepare + layout to compute precise text heights on resize
// This avoids DOM reflow for any future dynamic layout needs
const font = '18px "Source Serif 4"'

function measureLayout() {
  const items = ul.querySelectorAll('li')
  const containerWidth = ul.clientWidth

  items.forEach((item) => {
    const textContent = item.textContent || ''
    const prepared = prepare(textContent, font)
    const result = layout(prepared, containerWidth, 1.65 * 18)

    // Set precise height — eliminates layout shift on resize
    item.style.height = `${result.height + 1.2 * 18}px` // text height + padding
  })
}

// Run on load and resize
measureLayout()

const resizeObserver = new ResizeObserver(() => {
  measureLayout()
})
resizeObserver.observe(ul)
