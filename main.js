const link =
"https://spreadsheets.google.com/feeds/list/1KUUS60hB30lyP2puoffj-KusIJlhi0F7me8zyiOz_Vo/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData);
 }

function showData(singleRowData) {
    console.log('singleRowData - console');
    console.log(singleRowData.gsx$europe.$t);

    const template = document.querySelector('template').content;
    const clone = template.cloneNode(true);
    const h2 = clone.querySelector('h2');
    h2.textContent = singleRowData.gsx$europe.$t;

//    const Image = clone.querySelector('image');
//    Image.textContent = singleRowData.gsx$image.$t;

    const h3 = clone.querySelector('h3');
    h3.textContent = singleRowData.gsx$accommondation.$t;

    const p = clone.querySelector('p');
    p.textContent = singleRowData.gsx$shortDescripstion.$t;
    console.log(singleRowData.gsx$shortDescripstion.$t)

    document.querySelector('main').appendChild(clone);
}
