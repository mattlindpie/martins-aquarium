import { database } from './aquariumData.js';

export const fishList = (variousFish) => {
    // Generate an HTML representation of each fish
    
    let fishHTML = `<h1><strong>Fish</strong></h1>`

    const result = variousFish.map(fish => 
            `<article class="fish">
                     <div class="fish__details">
                         <p class="fish__name">Name: ${fish.name}</p>
                         <p class=fish__species>Species: ${fish.species}</p>
                         <p class=fish__length>Length: ${fish.length}</p>
                         <p class=fish__location>Location: ${fish.location}</p>
                         <p class=fish__diet>Diet: ${fish.diet}</p>
                         <p class=fish__image>Image: ${fish.image}</p>
                     </div>
                     </article>
                         `).join('\n')
    

    return result
};