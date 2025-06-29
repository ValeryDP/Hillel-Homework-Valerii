import axios from 'axios';

export const fetchPeopleAPI = async () => {
  const response = await axios.get('https://swapi.tech/api/people/');
  const peopleBasic = response.data.results;

  const peopleDetailed = await Promise.all(
    peopleBasic.map(async (person) => {
      const detailResponse = await axios.get(person.url);
      const data = detailResponse.data.result.properties;

      return {
        name: data.name,
        gender: data.gender,
        skin_color: data.skin_color,
        hair_color: data.hair_color,
        height: data.height,
        eye_color: data.eye_color,
        mass: data.mass,
        birth_year: data.birth_year,
      };
    })
  );

  return peopleDetailed;
};
