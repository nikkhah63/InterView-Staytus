const baseUrlApi="https://swapi.dev/api"
//this is a chain promise,output first promise is income data for next promise
export const getPlanetsWithResidents = () => {
  return fetch(`${baseUrlApi}/planets`)
    .then(response => response.json())
    .then(data => {
      const planetsPromises = data.results.map(async planet => {
        const residentsPromises = planet.residents.map(async residentUrl => {
          const response = await fetch(residentUrl);
          const residentData = await response.json();
          return residentData;
        });

        const residents = await Promise.all(residentsPromises);
        if (residents && residents.find(e => e.species.length > 0)) {
          planet.residents = residents.filter(resident => resident.species.length > 0);
          return planet
        } else
          return null
      });

      return Promise.all(planetsPromises).then(planets => {
        return planets.filter(planet => planet !== null);
      });
    });
}

