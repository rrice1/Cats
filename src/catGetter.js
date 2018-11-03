import axios from 'axios';

const getCats = () => axios.get('https://random-dogs-api.herokuapp.com/cats/15');

export default getCats;
