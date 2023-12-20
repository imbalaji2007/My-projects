function res() {
    const inp = document.getElementById('input2');
    const searchTerm = encodeURIComponent(inp.value);
    document.getElementById('res').innerHTML = "";

    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            // Display search results
            var resultsContainer = document.getElementById('res');
            data.query.search.forEach(result => {
                var resultItem = document.createElement('div');
                resultItem.innerHTML = `<h3><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}" target="_blank">${result.title}</a></h3><p>${result.snippet}</p>`;
                resultsContainer.appendChild(resultItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data from Wikipedia API:', error);
        });

        if (inp.value==="")
        {
            document.getElementById('para').textContent="search anything!!!"
        }
        if (inp.value!="")
        {
            document.getElementById('para').textContent=""
        }
}
function clr(){
    document.getElementById("input2").value=""
}