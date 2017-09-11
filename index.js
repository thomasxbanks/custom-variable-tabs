'use strict'

document.documentElement.classList.add('is-js')

const tabNavs = document.querySelectorAll('.tab-nav')
const tabs = document.querySelectorAll('.tabbed-content article')
tabNavs.forEach((tabNav) => {
  tabNav.addEventListener('click', (e) => {
    let target = e.currentTarget.getAttribute('data-target')
    tabs.forEach((tab) => {
      tab.setAttribute('data-state', 'not-visible')
    })
    document.querySelector(`article[data-target="${target}"]`).setAttribute('data-state', 'is-visible')
    tabNavs.forEach((tabNav) => {
      tabNav.setAttribute('data-state', 'not-active')
    })
    document.querySelector(`li[data-target="${target}"]`).setAttribute('data-state', 'is-active')
  })
})