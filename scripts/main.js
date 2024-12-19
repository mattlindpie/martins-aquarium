import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHoly } from './fishFilter.js'
import { lessHoly } from './fishFilter.js'
import { unworthy } from './fishFilter.js'

const mostHolyFish = mostHoly()
const lessHolyFish = lessHoly()
const unworthyFish = unworthy()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const theFishElement = document.querySelector("#fishList")
theFishElement.innerHTML = `${mostHolyFish}${lessHolyFish}${unworthyFish}`

const theTipsElement = document.querySelector("#tipList")
theTipsElement.innerHTML = tipHTML

const theLocationElement = document.querySelector("#locationList")
theLocationElement.innerHTML = locationHTML