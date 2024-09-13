document.getElementById('fetch-data').addEventListener('click', fetchData);

async function fetchData() {
    const dataContainer = document.getElementById('data-container');
    const errorMessage = document.createElement('p');
    errorMessage.id = 'error-message';

    try {
        dataContainer.innerHTML = 'Loading...';
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        dataContainer.innerHTML = '';

        data.forEach(user => {
            const userDiv = document.createElement('div')
            userDiv.innerHTML = `Name: <strong>${user.name}</strong> Email: <strong>${user.email}</strong>`;
            dataContainer.appendChild(userDiv);
        });
    } 
    catch (error) {
        dataContainer.innerHTML = '';
        errorMessage.innerHTML = `Error: ${error.message}`;
        dataContainer.appendChild(errorMessage);
    }
}