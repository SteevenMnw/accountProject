import React from 'react';
import { IdentifiersForm } from '../components/IdentifiersForm';
import Lol from '../components/Lol';

const Account = () => {
    return (
        <div>
            {window.location.pathname === "/account/edit" ? <IdentifiersForm /> : window.location.pathname === "/address" ? <Lol /> : <label>lourd</label>}
        </div>
    );
};

export default Account;