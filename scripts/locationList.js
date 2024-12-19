import { database } from './aquariumData.js';

export const locationList = () => {

    // for (const location of database.locations) {

    const result = database.locations.map(location => 
        `<article class="location">
                <div class="location__details">
                    <p class="location__name">Location Name: ${location.name}</p>
                    <p class=location__country>Location Country: ${location.country}</p>
                    <p class=location__description>Description: ${location.description}</p>
                </div>
            </article>

        `).join('\n')
    

    return result
}