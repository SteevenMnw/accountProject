import React from 'react';
import AccountCatalogRequest from '../components/Account/AccountCatalogRequest';
import AccountDeliveryAddress from '../components/Account/AccountDeliveryAddress';
import AccountLogOut from '../components/Account/AccountLogOut';
import AccountManageSubscription from '../components/Account/AccountManageSubscription';
import AccountMyAccount from '../components/Account/AccountMyAccount';
import AccountOrder from '../components/Account/AccountOrder';
import AccountPersonnalInformation from '../components/Account/AccountPersonnalInformation';
import AccountRecap from '../components/Account/AccountRecap';

const Account = () => {
    return (
        <div>
            <label><AccountMyAccount /></label>
            {
                window.location.pathname === "/customer/account/" ? <AccountRecap /> : 
                window.location.pathname === "/customer/account/edit/" ? <AccountPersonnalInformation /> : 
                window.location.pathname === "/customer/address/" ? <AccountDeliveryAddress /> : 
                window.location.pathname === "/sales/order/history/" ? <AccountOrder /> :
                window.location.pathname === "/catalogrequest/" ? <AccountCatalogRequest /> :
                window.location.pathname === "/newsletter/manage/" ? <AccountManageSubscription /> :
                window.location.pathname === "/customer/account/logoutSuccess/" ? <AccountLogOut /> :
                <label>Erreur</label>
            }
        </div>
    );
};

export default Account;