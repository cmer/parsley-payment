# Parsley.js - Credit Card Validator
A credit card validator for [Parsley.js](http://parsleyjs.org/), based on the excellent [jQuery-Payment](https://github.com/stripe/jquery.payment) library by [Stripe](https://www.stripe.com)

Rather than reinventing the wheel, this library uses the validation logic from jQuery-Payment. It was also heavily inspired by [parsley.js-credit-card-validator](https://github.com/gpassarelli/parsley.js-credit-card-validator/). It is meant to be as simple, straightforward and powerful as possible.

# Brands Validation
This plugins offers validation for the following credit card brands:
* Visa
* MasterCard
* American Express
* Diners Club
* Discover
* UnionPay
* JCB
* Maestro
* Forbrugsforeningen
* Dankort

Additional brands can be supported by extending jquery-payment's `$.payment.cards` array.

# Usage

#### Credit Card Number

`<input required="required" data-parsley-creditcard="" type="tel">`

#### Credit Card Number for specific brands

`<input required="required" data-parsley-creditcard="visa,mastercard" type="tel">`

#### Card CVC

`<input required="required" data-parsley-cvv="" type="tel">`

#### Card Expiry Date

`<input required="required" data-parsley-cardexpiry="" type="tel">`
