import store from "./store.js";
import { getPlanetsWithResidents } from "./planet.js";
import './style.css';

//executes task 1
const state = store.getState();
console.log('current State:', state);

store.subscribe(newState => {
  console.log("State updated:", newState);
});
// end task 1

// executes task2:
getPlanetsWithResidents()
  .then(planets => {
    console.log("Planets with reptile residents:", planets);
    store.setState(planets);
  })
  .catch(error => {
    console.error("Error:", error);
  });


let cards = '';
store.subscribe(newState => {
  if (Array.isArray(newState)) {
    cards = newState?.map((item, index) => {
      return `
          <div class="card bg-grayDark flex flex-col justify-start w-full sm:w-1/2 px-3 py-2 gap-2">
              <div class="w-full flex text-orange flex-row justify-between items-start">
                  <span>Planet.Created</span>
                  <span>${item.created}</span>
              </div>
               <div class="w-full flex  flex-row justify-between items-baseline">
                  <div class="h-10 w-10 rounded-lg bg-grayMeduim"></div>
                      <div class="flex flex-1 flex-col justify-start items-start">
                        <div class="w-full flex flex-row justify-between items-start">
                            <span class="text-white">Planet.Name</span>
                            <span class="text-grayMeduim">${item.name}</span>
                        </div>
                        <div class="w-full flex flex-row justify-between items-start">
                            <span class="text-white">Planet.films</span>
                            <span class="text-grayMeduim">${item.films[0].name}</span>
                        </div>
                      </div>
               </div>
           </div>
        `;
    }).join('');
    updateUI(cards);

  }
});

function updateUI(cardsWarrper) {
  const App = () => {
    return `
     
        ${cardsWarrper}
   
    `;
  };

  root.innerHTML = App();
}
updateUI(`<button type="button" class="bg-indigo-500 text-white rounded-sm w-20" disabled>
Loading...
</button>`);

