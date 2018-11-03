import $ from 'jquery';
import 'bootstrap';


import './index.scss';


$('#click-button').click(() => {
  $('#important-text').append('<p>Hello World</p>');
});

$('#cats').show();
