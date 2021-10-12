function removeItemFromArray(array, item) {

    let arrayWithouItems = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element != item) {
            arrayWithouItems.push(element);
        }

    }
    return arrayWithouItems;
}
function displayItems(array, container) {//containar turi buti html elementas
    let innerItems = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        innerItems += "<div>" + element + "</div>";

    }

    container.innerHTML = innerItems;
}