import $ from 'jquery';
import debounce from 'lodash/debounce';

const updateCounter = _.debounce(() => {
    const count = parseInt($('#count').text()) || 0;
    $('#count').text(`${count + 1} clicks on the button`);
}, 500);

$(document).ready(function() {
    const $dashboard = $('<p>').text('Holberton Dashboard');
    const $data = $('<p>').text('Dashboard data for the students');
    const $button = $('<button>').text('Click here to get started');
    const $count = $('<p>').attr('id', 'count');
    const $copyright = $('<p>').text('Copyright - Holberton School');
    
    $('body').append($dashboard, $data, $button, $count, $copyright);

    $button.on('click', updateCounter);
});
