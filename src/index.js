import store from "./store.js";
import { getPlanetsWithResidents } from "./planet.js";
import './styles.css';

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
      return index % 2 === 0 ? `
      <div class="card bg-grayDark flex flex-col justify-start rounded-md w-full sm:w-1/2 px-3 py-2 gap-2 mb-2">
      <div class="w-full flex text-orange flex-row justify-between items-start">
        <span>Planet.Created</span>
        <span>${item.created}</span>
      </div>
      <div class="w-full flex  flex-row justify-centerr items-center gap-2">
        <div class="h-10 w-10 flex  justify-center items-center rounded-lg bg-grayLight"><img height='20px'  width='20px'  src='./img.png'/></div>
        <div class="flex flex-1 flex-col justify-start items-start">
          <div class="w-full flex flex-row justify-between items-start">
            <span class="text-white">Planet.Name</span>
            <span class="text-grayMeduim">${item.name}</span>
          </div>
          <div class="w-full flex flex-row justify-between items-start">
            <span class="text-white">Planet.films</span>
            <span class="text-grayMeduim">${item.films[0]}</span>
          </div>
        </div>
      </div>
    </div>
        ` :
        `
        <div class="card bg-grayLight flex flex-col justify-start rounded-md w-full sm:w-1/2 px-3 py-2 gap-2 mb-2">
              <div class="w-full flex text-orange flex-row justify-between items-start">
                <span>Planet.Created</span>            
              </div>
                <div class="w-full flex  flex-row justify-between items-center gap-2">
                      <div class="h-10 w-10 flex  justify-center items-center rounded-full text-white font-bold bg-gray text-lg">B</div>

                      <div class="w-full flex-1 flex flex-col justify-between items-start">
                        <span class="text-white">Planet.Name</span>
                        <span class="text-grayMeduim">${item.name}</span>
                       </div>

                      <img height='20px'  width='20px'  src='./img.png'/>
                </div>                                                                                                               

            <div class="w-full flex flex-row justify-between items-start">             
              <span class="text-white">${item.films[0]}</span>
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

