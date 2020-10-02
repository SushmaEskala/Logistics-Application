import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';
import BILLING_ADDRESS from '@salesforce/schema/Account.BillingAddress';
import SHIPPING_ADDRESS from '@salesforce/schema/Account.ShippingAddress';

export default class CustomerForm extends LightningElement {
    accountName = ACCOUNT;
    fields = [NAME_FIELD, PHONE, BILLING_ADDRESS, SHIPPING_ADDRESS];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record Id: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}