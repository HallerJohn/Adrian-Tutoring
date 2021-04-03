const apiCall = new Fetch();
const ui = new UI();

const search = document.querySelector('.city-search');
const searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener('click', () => {
    const currCity = search.value;

    apiCall.getData(currCity).then((data) => {
        ui.populateUI(data, currCity);
    })
})
