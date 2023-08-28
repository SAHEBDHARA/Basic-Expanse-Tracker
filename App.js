document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const btn = document.getElementById('btn');
    const userList = document.getElementById('userList');

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const expanseAmount = document.getElementById('expanseAmount').value;
        const descriptioin = document.getElementById('descriptioin').value;
        const catagory = document.getElementById('Catagory').value;

        const userData = {
            expanseAmount: expanseAmount,
            descriptioin: descriptioin,
            catagory: catagory,
        };

        localStorage.setItem('expenscies', JSON.stringify(userData));
        console.log(localStorage.expenscies);

        // Call createListItem function to display the new item
        createListItem(userData);
    });

    function createListItem(data) {

        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `Expenses: ${data.expanseAmount}, Desc: ${data.descriptioin}, Category: ${data.catagory}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            localStorage.removeItem('expenscies');
            userList.removeChild(li);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', function() {
            // Update the form fields with stored data
            document.getElementById('expanseAmount').value = data.expanseAmount;
            document.getElementById('descriptioin').value = data.descriptioin;
            document.getElementById('Catagory').value = data.catagory;
            userList.removeChild(li);
        });

        li.appendChild(deleteButton);
        li.appendChild(editButton);

        userList.appendChild(li);
    }

    // Load stored data from local storage and create list items
    const storedData = JSON.parse(localStorage.getItem('expenscies'));
    if (storedData) {
        createListItem(storedData);
    }

});
