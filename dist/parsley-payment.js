/*!
* Parsley-Payment.js
* Version 1.0.1
* http://github.com/cmer/parsley-payment
* Carl Mercier - <foss@carlmercier.com>
* MIT Licensed
*/

(function () {
    'use strict';

    window.Parsley.addValidator('creditcard',
        function (value, requirement) {
            var valid = jQuery.payment.validateCardNumber(value);

            // Checks for specific brands
            if(valid && requirement.length){
                var valid_cards = requirement.split(','),
                    valid = false,
                    card = jQuery.payment.cardType(value);

                if(requirement.indexOf(card) > -1) {
                    valid = true;
                }
            }
            return valid;
        },32)
        .addMessage('en', 'creditcard', 'This credit card number is invalid or this brand is not supported.')
        .addMessage('fr', 'creditcard', 'Ce numéro de carte de crédit est invalide ou ce type de carte n\'est pas supporté');


    window.Parsley.addValidator('cvv',
        function (value) {
            var valid = jQuery.payment.validateCardCVC(value);
            return valid;
        }, 32)
        .addMessage('en', 'cvv', 'This value should be a valid CVV number')
        .addMessage('fr', 'cvv', 'Cette valeur doit être un code de vérification CVV valide');


    window.Parsley.addValidator('cardexpiry',
        function (value) {
            if(value.indexOf('/') === -1) {
                return false;
            }

            var date = $.payment.cardExpiryVal(value),
                month = date.month,
                year  = date.year;

            var valid = jQuery.payment.validateCardExpiry(month, year);
            return valid;
        }, 32)
        .addMessage('en', 'cardexpiry', 'This value should be a valid date')
        .addMessage('fr', 'cardexpiry', 'Cette valeur doit être une date valide');
}());
