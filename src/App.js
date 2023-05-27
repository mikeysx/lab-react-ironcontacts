import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const randomContact = () => {
    const randomNumber = Math.floor(Math.random() * contactsData.length);
    const updatedContacts = [...contacts];
    updatedContacts.push(contactsData[randomNumber]);
    setContacts(updatedContacts);
  };

  const sortName = () => {
    const updatedContacts = [...contacts];
    updatedContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(updatedContacts);
  };

  const sortPop = () => {
    const updatedContacts = [...contacts];
    updatedContacts.sort((b, a) => a.popularity - b.popularity);
    setContacts(updatedContacts);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={randomContact} className="btn">
        add random contact
      </button>
      <button onClick={sortName} className="btn">
        sort by name
      </button>
      <button onClick={sortPop} className="btn">
        sort by popularity
      </button>

      <table>
        <tr>
          <td>pic</td>
          <td>name</td>
          <td>popularity</td>
          <td>won oscar</td>
          <td>won emmy</td>
          <td>actions</td>
          <br></br>
        </tr>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img
                src={contact.pictureUrl}
                alt={contact.id}
                className="photo"
              />
            </td>
            <td>
              <h3>{contact.name}</h3>
            </td>
            <td>
              <h3>{contact.popularity}</h3>
            </td>
            <td>
              <h3>
                {contact.wonOscar && <p>🎀</p>}
                {!contact.wonOscar && <p>😿</p>}
              </h3>
            </td>
            <td>
              <h3>
                {contact.wonEmmy && <p>🎀</p>}
                {!contact.wonEmmy && <p>😿</p>}
              </h3>
            </td>
            <td>
              <h3>
                <button key= {contact.id} onClick={() => deleteContact(contact.id)} className= "btn" >
                  delete
                </button>
              </h3>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
