const API = 'https://swapi.dev/api/people';


export const getUsers = () => fetch(API)
    .then(data => data.json())
    .then(data => data.results);


export const getFilterUser = (user) => fetch(API + `/?search=${user}`)
    .then(data => data.json())
    .then(data => data.results);