import { database } from './aquariumData.js';

export const tipList = () =>{

    const result = database.tips.map(tip => 
        `
            <article class="tips">
                <div class="tip__details">
                    <dt class=tip__topic>Topic: ${tip.topic}</dt>
                    <dd class=tip__text>${tip.text}</dd>
                </div>
            </article>
        `
    ).join('\n')

    return result
}
