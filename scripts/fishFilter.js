import { database } from "./aquariumData.js"
import { fishList } from "./fishList.js"

const allFish = database.fish

export const mostHoly = () => {

    const fish = allFish.filter(fish => fish.length % 3 === 0)

    const holyFish = fishList(fish)

    return holyFish
}

export const lessHoly = () => {
    const fish = allFish.filter(fish => fish.length % 5 === 0 && fish.length % 3 !== 0)

    const lessHolyFish = fishList(fish)

    return lessHolyFish
}

export const unworthy = () => {
    const fish = allFish.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0)

const unworthyFish = fishList(fish)

return unworthyFish

}
