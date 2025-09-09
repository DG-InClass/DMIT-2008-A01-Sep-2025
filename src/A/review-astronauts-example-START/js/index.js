// js here.
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAstronautList } from './api/astronaut';
import { renderAstronautListItem } from './dom/astronaut';

const unorderedList = document.querySelector('ul');

getAstronautList().then(data => {
    // console.log(data);
    data.results.forEach(item => {
        console.log(item);
        renderAstronautListItem(item, unorderedList);
    })
});
