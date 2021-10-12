function getItems() {
    let item1 = {
        image: "https://picsum.photos/200/300?grayscale",
        description: "Parduodami",
        price: 1000,
        currensy: "Eur"
    }
    let item2 = {
        image: "https://picsum.photos/seed/picsum/200/300",
        description: "Parduodamas sklypas",
        price: 999,
        currensy: "Eur"

    }

    let item3 = {
        image: "https://picsum.photos/id/237/200/300",
        description: "Parduodamas ",
        price: 850,
        currensy: "Eur"

    }
    let item4 = {
        image: "https://picsum.photos/200/300/?blur",
        description: "Parduodamas ",
        price: 850.99,
        currensy: "Eur"
    }

    return [item1, item2, item3, item4];
}
function displayItems(items, container) {

    let allItems = "";

    for (let index = 0; index < items.length; index++) {

        const item = items[index];

        let template = '<div class="child"> <div class="content"> <img src="{{image}}" alt=""><p>{{description}}</p><p>Kaina{{price}} {{currensy}}.</p></div></div>';

        template = template.replace("{{image}}", item.image);
        template = template.replace("{{description}}", item.description);
        template = template.replace("{{price}}", item.price);
        template = template.replace("{{currensy}}", item.currensy);

        allItems += template;

    }

    container.innerHTML = allItems;
}