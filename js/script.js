document.getElementById('transaction-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var type = document.getElementById('type').value;
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;

    if (type && name && amount) {
        addTransaction(type, name, amount);
    } else {
        alert('Please fill in all fields');
    }
});

function addTransaction(type, name, amount) {
    var table = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>$${amount}</td>
        <td><button class="delete-btn" onclick="deleteTransaction(this)">Delete</button></td>
    `;
}

function deleteTransaction(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}