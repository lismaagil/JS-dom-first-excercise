

document.querySelector('form').onsubmit = function userCheck  ()  {

    const name = document.querySelector('#name').value;

    if (name.length > 3) {
        
        alert (`Welcome, ${name}`)

    }
    else {
        alert ("Username length has to be more than 3 characters")
    }
}
