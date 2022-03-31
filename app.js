window.addEventListener('DOMContentLoaded',() => {

    const title =  document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    booklist = document.querySelector('#book-list');

    btn.addEventListener('click',(event) => {
        event.preventDefault();
        if(title.value == "" && author.value == "" && year.value == ""){
            alert('Please input your information')
        }
        else {
            const newrow = document.createElement('tr'),
            newtitle = document.createElement('td'),
            newauthor = document.createElement('td'),
            newyear = document.createElement('td');
            newtitle.innerHTML = title.value;
            newauthor.innerHTML  = author.value;
            newyear.innerHTML = year.value;
            newrow.appendChild(newtitle);
            newrow.appendChild(newauthor);
            newrow.appendChild(newyear);
            booklist.appendChild(newrow)
        }
    })
})
