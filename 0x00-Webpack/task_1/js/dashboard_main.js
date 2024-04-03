import $ from 'jquery';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id=\'count\'></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});

function updateCounter() {
    let count = parseInt(document.getElementById(count).innerText);
    count++;
    document.getElementById('count').innerText = count + ' clicks on the button';
}

const debounceUpdateCounter = _.debounce(updateCounter, 300);

document.getElementById('clickButton').addEventListener('click', debounceUpdateCounter);
