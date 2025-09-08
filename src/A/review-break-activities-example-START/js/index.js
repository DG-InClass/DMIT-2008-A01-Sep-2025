/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
const myForm = document.querySelector('form');

const handleSubmit = function(evt) {
    // client-side only
    evt.preventDefault(); // stop the POST to the webserver
    console.log('Form submit event', evt);
    const targetForm = evt.target;
    const textInput = targetForm.elements['new-topic'];
    console.log('The user typed:', textInput.value);

    if(textInput.value.trim() !== '') {
        // Good, I have text...
        const list = document.querySelector('ul');
        list.innerHTML += `<li>${textInput.value.trim()}</li>`;
        textInput.value = ''; // clear the input
    } else {
        // Bad input 😢

    }
}

myForm.addEventListener('submit', handleSubmit);
