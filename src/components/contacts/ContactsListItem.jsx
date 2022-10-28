import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import ButtonStack from "../buttons/ButtonStack";

function ContactsListItem({ contact, onDelete, onSelect, onEditOpen }) {
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(contact);
  };
  
  const onEditClick = () => {
    onEditOpen();
    onSelect(contact);
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          {contact.name[0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${contact.name} ${contact.surname} - ${contact.phone}`}
      />
      <ButtonStack onEditClick={onEditClick} onDeleteClick={onDeleteClick}/>
    </ListItem>
  );
}

export default ContactsListItem;
