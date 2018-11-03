import $ from 'jquery';

const loadCats = () => {
  const catPromise = new Promise((resolve, reject) => {
    $.get('https://random-dogs-api.herokuapp.com/cats/15')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return catPromise;
};

export default { loadCats };
