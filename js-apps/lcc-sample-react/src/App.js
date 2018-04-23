import React from "react";
import LCC from 'lightning-container';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
            contacts: []
        }
    }

    searchKeyChange(event) {
        let searchKey = event.target.value;
        LCC.callApex("ContactController.getContactsByName",
            searchKey,
            (result, event) => {
                if (event.status) {
                    this.setState({searchKey: searchKey, contacts: result });
                } else if (event.type === "exception") {
                    console.log(event.message + " : " + event.where);
                }
            
            },
            { escape: true });
    }

    itemClicked(event) {
        var id = event.target.dataset.id;
        if (id) {
            var msg = {
                action: 'openDetails',
                id: id
            };
            LCC.sendMessage(msg);
        }
    }

    render() {
        let contacts = this.state.contacts.map(contact =>
            <div key={contact.Id} className='list-item'><a data-id={contact.Id} onClick={this.itemClicked.bind(this)}>{contact.Name}</a><p>{contact.Phone}</p></div>
        );
        return <div>
                <input id="key" type="text" className="slds-input" placeholder="Enter contact name..."
                    onChange={this.searchKeyChange.bind(this)}/>
                {contacts}
            </div>;
    }

}

export default App;