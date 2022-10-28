import React from "react";
import ContactsListItem from "./ContactsListItem";
import List from '@mui/material/List';

function ContactsList({ contacts, onSelect, onDelete, onEditOpen }) {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onSelect={onSelect}
          onDelete={onDelete}
          onEditOpen={onEditOpen} 
        />
      ))}
    </List>
  );
}

export default ContactsList;
