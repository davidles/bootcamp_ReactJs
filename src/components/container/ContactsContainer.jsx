import React from 'react'
import { Contact } from '../../models/Contact.class'
import ContactComponent from '../pure/ContactComponent'

function ContactsContainer() {

    const defaultContact = new Contact(
        "David",
        "Lescano",
        "asd@gmail.com",
        false
    )

  return (
    <div>
        <ContactComponent contact={defaultContact} />
    </div>
  )
}


export default ContactsContainer
