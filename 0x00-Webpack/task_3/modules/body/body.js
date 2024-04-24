import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$('#button').click(() => {
  count++;
  $('.counter').text(`${count}`);
});