function resultHandler(result, event) {
    if (event.status) {
        var html = "";
        result.forEach(function(contact) {
            html = html + "<div class='list-item'><a data-id='" + contact.Id + "'>" + contact.Name + "</a><p>" + contact.Phone + "</p></div>";
        });
        document.getElementById("list").innerHTML = html;
    } else if (event.type === "exception") {
        console.log(event.message + " : " + event.where);
    }
}

function findContact() {
    var key = document.getElementById("key").value;
    LCC.callApex("ContactController.getContactsByName",
        key,
        resultHandler,
        { escape: true });
}

function itemClicked(event) {
    var id = event.target.dataset.id;
    if (id) {
        var msg = {
            action: 'openDetails',
            id: id
        };
        LCC.sendMessage(msg);
    }
}

document.getElementById("key").addEventListener("input", findContact);
document.getElementById("list").addEventListener("click", itemClicked);