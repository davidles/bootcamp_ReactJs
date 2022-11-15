import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact }) => {


    return (
        <div>
            <p>State: {contact.conencted ? "Connected" : "Disconnected"} </p>
            <h3>Name: {contact.name} {contact.lastName}</h3>
            <h4>Email: {contact.email} </h4>
            
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
