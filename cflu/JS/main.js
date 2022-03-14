const convert = new Vue({
    el: ".converter",
    data () {
        return {
            formSubmited: false,
            fields: {
                amount: "",
                total: "",
                address: "",           
            },
            i18n: {
                // Title
                lang_title:       "Welcome to Coinfluence",
                lang_title2:      "Confirmation",
                // Fields
                lang_summary:     "Summary",
                lang_numberUsd:   "Number of USD",
                lang_totalMAT:    "Total Amount (MATIC)",
                lang_totalMATIC:  "Total MATIC",
                lang_address:     "Binance smart chain address",
                lang_depAdress:   "Polygon Deposit Address",
                lang_placeholder: "Tokens will be transferred to this BSC address",
                lang_rate:        "Rate",
                lang_payment:     "Payment method",
                lang_totalUSD:    "Total USD",
                lang_payMethod:   "Metamask",
                lang_currency:    "Currency",
                lang_curValue:    "MATIC",
                lang_token:       "1 Тoken = $ 0.02",
                // Buttons
                lang_btnReset:    "Reset",
                lang_btnByNow:    "Buy Now",
                lang_btnBack:     "Back",
                lang_btnConf:     "Confirm",
                // Errors
                lang_allFields:   "Enter all fields!",
                lang_enterNum:    "Enter the number",
                lang_minDeposit:  "Minimum deposit amount 10$ !",
                lang_maxDeposit:  "The deposit amount is not more than $10,000 !",
                lang_integer:     "Enter an integer !",
                lang_errorAdress: "Please enter valid adress !"
            },
            error: ""
        }
    },
    methods: {
        resetForm: function() {
            this.fields.amount  = "";
            this.fields.address = "";
        },

        backForm: function() {
            this.formSubmited = false
        },

        lastForm: function() {
            this.error = "";
            const {amount}  = this.fields;
            const {address} = this.fields;
            const fields = Object.values(this.fields).every(el => el != '');
            const regexp = /[A-z0-9]{40}/;

            if(!fields) {
                this.error = this.i18n.lang_allFields;
                return false
            }
            if(typeof(amount) !== 'number') {
                this.error = this.i18n.lang_enterNum;
                return false
            } else if (amount < 10) {
                this.error = this.i18n.lang_minDeposit;
                return false
            } else if(amount > 10000) {
                this.error = this.i18n.lang_maxDeposit;
                return false
            } else if (Number.isInteger(amount) == false) {
                this.error = this.i18n.lang_integer;
                return false
            } else if (regexp.test(address) == false) {
                this.error = this.i18n.lang_errorAdress;
                return false
            }
            this.formSubmited = true
        }     
    },
    computed: {
        finalamount: function() {
            this.fields.total = this.fields.amount / 0.02;
        },
    },
})
