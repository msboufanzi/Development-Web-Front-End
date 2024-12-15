var verbs=[
    ["h0","h1" ,"h2"],  ["0","1" ,"2"], ["0","1" ,"2"]

]


// affiche table de verbs
function displayNames() {
    var table = document.getElementById("data_table");
    var table_content = `
    <tr>
        <th>${verbs[0][0]}</th>
        <th>${verbs[0][1]}</th>
        <th>${verbs[0][2]}</th>
        <th>Actions</th>
    </tr>`;

    verbs.slice(1).forEach((verb, index) => {
        table_content += `
        <tr>
            <td>${verb[0]}</td>
            <td>${verb[1]}</td>
            <td>${verb[2]}</td>
           
            <td>
                <button onClick='viewVerbDetails(${index + 1})'>Edit</button>
                <button onClick='prepareUpdateVerb(${index + 1})'>update</button>
                <button onClick='confirmDelete(${index + 1})'>Delete</button>
            </td>
        </tr>`;
    });

    table.innerHTML = table_content;
}
window.onload= displayNames();
   