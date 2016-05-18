var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Receipts;
(function (Receipts) {
    Receipts[Receipts["ACCOUNT_BALANCE"] = 1] = "ACCOUNT_BALANCE";
    Receipts[Receipts["CASH_DEPOSIT"] = 2] = "CASH_DEPOSIT";
    Receipts[Receipts["CASH_WITHDRAW"] = 3] = "CASH_WITHDRAW";
    Receipts[Receipts["DPS_ACCOUNT"] = 4] = "DPS_ACCOUNT";
    Receipts[Receipts["FIXED_DEPOSIT"] = 5] = "FIXED_DEPOSIT";
    Receipts[Receipts["FUND_TRANSFER"] = 6] = "FUND_TRANSFER";
    Receipts[Receipts["ACCOUNT_OPENING"] = 7] = "ACCOUNT_OPENING";
    Receipts[Receipts["ATM_DEBIT_CARD_REQUEST"] = 8] = "ATM_DEBIT_CARD_REQUEST";
    Receipts[Receipts["ATM_DEBIT_CARD_DELIVERY"] = 9] = "ATM_DEBIT_CARD_DELIVERY";
    Receipts[Receipts["ATM_DEBIT_CARD_CANCEL"] = 10] = "ATM_DEBIT_CARD_CANCEL";
    Receipts[Receipts["CHEQUE_BOOK_REQUISITION"] = 11] = "CHEQUE_BOOK_REQUISITION";
    Receipts[Receipts["CHEQUE_BOOK_DELIVERY"] = 12] = "CHEQUE_BOOK_DELIVERY";
    Receipts[Receipts["CHEQUE_STOP_PAYMENT_SINGLE"] = 13] = "CHEQUE_STOP_PAYMENT_SINGLE";
    Receipts[Receipts["CHEQUE_STOP_PAYMENT_RANGE"] = 14] = "CHEQUE_STOP_PAYMENT_RANGE";
    Receipts[Receipts["CHEQUE_STOP_PAYMENT_SINGLE_CANCEL"] = 15] = "CHEQUE_STOP_PAYMENT_SINGLE_CANCEL";
    Receipts[Receipts["CHEQUE_STOP_PAYMENT_RANGE_CANCEL"] = 16] = "CHEQUE_STOP_PAYMENT_RANGE_CANCEL";
    Receipts[Receipts["MINI_STATEMENT"] = 17] = "MINI_STATEMENT";
    Receipts[Receipts["REMITTANCE_REQUEST"] = 18] = "REMITTANCE_REQUEST";
    Receipts[Receipts["REMITTANCE_DISBURSEMENT"] = 19] = "REMITTANCE_DISBURSEMENT";
})(Receipts || (Receipts = {}));
;
var LabelText = (function () {
    function LabelText() {
    }
    LabelText.accountNoLabelId = "accountNoLabel";
    LabelText.accountNumberId = "accountNumber";
    LabelText.accountTypeId = "accountType";
    LabelText.customerAddressId = "customerAddress";
    LabelText.linkAccountNumberColonId = "linkAccountNumberColon";
    LabelText.linkAccountNumberLabelId = "linkAccountNumberLabel";
    LabelText.linkAccountNumberId = "linkAccountNumber";
    LabelText.accountNumberText = "হিসাব নম্বর";
    LabelText.accountNameText = "হিসাবের নাম";
    LabelText.accountBalanceText = "ব্যালেন্স";
    LabelText.accountOpeningDateText = "হিসাব খোলার তারিখ";
    LabelText.accountOpeningRequest = "হিসাব খোলার অনুরোধঃ ";
    LabelText.accountTypeText = "হিসাবের ধরন";
    LabelText.accountStatement = "মিনিস্টেটমেন্ট";
    LabelText.addressLine1Text = "এজেন্ট ব্যাংকিং ডিভিশন";
    LabelText.addressLine2Text = "সিটি ব্যাংক লিঃ";
    LabelText.addressLine3Text = "সিটি ব্যাংক  সেন্টার ১৩৬";
    LabelText.addressLine4Text = "গুলশান এভিনিউ; ঢাকা-১২১২";
    LabelText.addressText = "ঠিকানা";
    LabelText.agentNameText = "এজেন্টের নাম";
    LabelText.amountText = "পরিমান";
    LabelText.atmDebitCardCancelText = "এটিএম / ডেবিট কার্ড বাতিলকরন";
    LabelText.atmDebitCardDeliveryText = "এটিএম / ডেবিট কার্ড হস্তান্তর";
    LabelText.atmDebitCardRequestText = "এটিএম / ডেবিটি কার্ডের অনুরোধ";
    LabelText.balanceAmountText = "ব্যালেন্সের পরিমান";
    LabelText.balanceDateText = "ব্যালেন্সের তারিখ";
    LabelText.chargeAndVatText = "চার্জ+ভ্যাট";
    LabelText.cashDepositText = "নগদ জমা";
    LabelText.cashWithdrawText = "নগদ উত্তোলন";
    LabelText.chequeBookDeliveryText = "চেক বই হস্তান্তর";
    LabelText.chequeBookRequisitionText = "চেক বই প্রদানের অনুরোধ";
    LabelText.chequeStopPaymentSingleCancelText = "চেক স্টপ পেমেন্ট - সিঙ্গেল নির্দেশনা বাতিলকরন";
    LabelText.chequeStopPaymentRangeCancelText = "চেক স্টপ পেমেন্ট - রেঞ্জ নির্দেশনা বাতিলকরন";
    LabelText.chequeStopPaymentRangeText = "চেক স্টপ পেমেন্ট নির্দেশনা - রেঞ্জ";
    LabelText.chequeStopPaymentSingleText = "চেক স্টপ পেমেন্ট নির্দেশনা - সিঙ্গেল";
    LabelText.fixedDepositText = "সিটি এজেন্ট ফিক্সড ডিপোজিট";
    LabelText.colonText = ":";
    LabelText.customerIdText = "গ্রাহক আইডি";
    LabelText.customerNameText = "গ্রাহকের নাম";
    LabelText.depositAmountText = "জমার পরিমান";
    LabelText.depositDateText = "জমার তারিখ";
    LabelText.emptyText = "";
    LabelText.fundTransferDateText = "ফান্ড ট্রান্সফারের তারিখ";
    LabelText.fundTransferText = "ফান্ড ট্রান্সফার";
    LabelText.gendertText = "লিঙ্গ";
    LabelText.generalDPSAccountText = "সাধারন ডিপিএস হিসাব";
    LabelText.initialDepositText = "প্রারম্ভিক জমার পরিমান";
    LabelText.inWordsText = "কথায়";
    LabelText.linkAccountNumberText = "লিংক হিসাব নম্বর";
    LabelText.maturityAmountText = "মেয়াদান্তে টাকার পরিমান";
    LabelText.maturityDateText = "মেয়াদান্তের তারিখ";
    LabelText.mobileNoText = "মোবাইল নং";
    LabelText.monthlyDepositText = "মাসিক জমা";
    LabelText.profitRateText = "মুনাফার হার";
    LabelText.printDateText = "প্রিন্টের তারিখ";
    LabelText.principalAmountText = "আসল টাকার পরিমান";
    LabelText.productTenorText = "মেয়াদ";
    LabelText.receiverAccountNoText = "প্রাপকের হিসাব নম্বর";
    LabelText.receiverAccountNameText = "প্রাপকের হিসাবের নাম";
    LabelText.senderAccountNoText = "প্রেরকের হিসাব নম্বর";
    LabelText.senderAccountNameText = "প্রেরকের হিসাবের নাম";
    LabelText.transferAmountText = "ট্রান্সফারের পরিমান";
    LabelText.transactionIdText = "লেনদেন আইডি";
    LabelText.userText = "ইউজার";
    LabelText.withdrawAmountText = "উত্তোলনের পরিমান";
    LabelText.withdrawDateText = "উত্তোলনের তারিখ";
    LabelText.cardTypeText = "কার্ডের ধরণ";
    LabelText.requestReceiveTimeText = "অনুরোধ গ্রহনের সময়";
    LabelText.requestIdText = "অনুরোধ আইডি";
    LabelText.cardTitleText = "কার্ড টাইটেল";
    LabelText.cardBrandText = "কার্ডের ব্রান্ড";
    LabelText.cardNumberText = "কার্ড নম্বর";
    LabelText.deliveryDateText = "হস্তান্তরের তারিখ";
    LabelText.noOfLeaveText = "পাতার সংখ্যা";
    LabelText.chequeLostReasonText = "চেকটি";
    LabelText.chequeLeafNumberText = "চেক পাতার নম্বর";
    LabelText.amountOfTkText = "টাকার পরিমান";
    LabelText.receiverNameText = "প্রাপকের নাম";
    LabelText.retrieveFromText = "পুনরুদ্ধার হয়েছে";
    LabelText.addressTextEnglish = "Address";
    LabelText.agentNameTextEnglish = "Agent Name";
    LabelText.amountInWordsTextEnglish = "Amount in Words";
    LabelText.approximateAmountTextEnglish = "Approximate  Amount";
    LabelText.currencyTextEnglish = "Currency";
    LabelText.exchangeRateTextEnglish = "Exchange Rate";
    LabelText.fxAmountTextEnglish = "Fx Amount";
    LabelText.iDTypeTextEnglish = "ID Type";
    LabelText.iDNumberTextEnglish = "ID Number";
    LabelText.inwardForeignRemittanceRequestTextEnglish = "Inward Foreign Remittance Request";
    LabelText.inwardForeignRemittanceDisbursementTextEnglish = "Inward Foreign Remittance Disbursement";
    LabelText.mobileNoTextEnglish = "Mobile No";
    LabelText.exchangeHouseNameEnglish = "Exchange House";
    LabelText.actualPayableAmountTextEnglish = "Actual Payable Amount";
    LabelText.pinNoTextEnglish = "Pin No";
    LabelText.printDateTextEnglish = "Print Date";
    LabelText.recipientNameTextEnglish = "Recipient Name";
    LabelText.senderCountryTextEnglish = "Sender Country";
    LabelText.senderNameTextEnglish = "Sender Name";
    LabelText.transactionIdTextEnglish = "Transaction Id";
    LabelText.userTextEnglish = "User";
    return LabelText;
}());
var Banks;
(function (Banks) {
    Banks[Banks["City"] = 0] = "City";
    Banks[Banks["Agrani"] = 1] = "Agrani";
})(Banks || (Banks = {}));
/// <reference path="banks.ts" />
var BankConstants = (function () {
    function BankConstants() {
    }
    BankConstants.general_template = "template.html";
    BankConstants.ministatement_template = "miniStatementTemplate.html";
    BankConstants.sub_folder = "city";
    BankConstants.bank_name = "City Bank";
    BankConstants.bank = Banks.City;
    return BankConstants;
}());
/// <reference path="receipts.ts" />
/// <reference path="label-text.ts" />
/// <reference path="bank-constants.ts" />
var ReceiptHelper = (function () {
    function ReceiptHelper() {
    }
    ReceiptHelper.prototype.setMockData = function (receipt) { };
    ReceiptHelper.prototype.replaceToken = function (receipt) { };
    ReceiptHelper.prototype.setAccountBalance = function () { };
    ReceiptHelper.prototype.setCashDeposit = function () { };
    ReceiptHelper.prototype.setCashWithdraw = function () { };
    ReceiptHelper.prototype.setDPSAccount = function () { };
    ReceiptHelper.prototype.setFixedDeposit = function () { };
    ReceiptHelper.prototype.setFundTransfer = function () { };
    ReceiptHelper.prototype.setAccountOpening = function () { };
    ReceiptHelper.prototype.setATMDebitCardRequest = function () { };
    ReceiptHelper.prototype.setATMDebitCardDelivery = function () { };
    ReceiptHelper.prototype.setATMDebitCardCancel = function () { };
    ReceiptHelper.prototype.setChequeBookRequisition = function () { };
    ReceiptHelper.prototype.setChequeBookDelivery = function () { };
    ReceiptHelper.prototype.setChequeStopPaymentSingle = function () { };
    ReceiptHelper.prototype.setChequeStopPaymentRange = function () { };
    ReceiptHelper.prototype.setChequeStopPaymentSingleCancel = function () { };
    ReceiptHelper.prototype.setChequeStopPaymentRangeCancel = function () { };
    ReceiptHelper.prototype.setMiniStatement = function () { };
    ReceiptHelper.prototype.setRemittanceRequest = function () { };
    ReceiptHelper.prototype.setRemittanceDisbursement = function () { };
    ReceiptHelper.prototype.replaceTableData = function (tableData) { };
    ReceiptHelper.doRowSpan = function (tableClassName, rowIndex, cellIndex, rowSpan) {
        if (rowSpan === void 0) { rowSpan = 2; }
        var table = document.getElementsByClassName(tableClassName)[0];
        var row = table.rows[rowIndex];
        var cell = row.cells[cellIndex];
        cell.rowSpan = 2;
        var nextrow = table.rows[++rowIndex];
        var bottomcell = nextrow.cells[cellIndex];
        bottomcell.remove();
    };
    ReceiptHelper.addImage = function (elementId, url, alternateUrl) {
        var elements = document.getElementsByClassName(elementId);
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                var imageElement = elements[i];
                if (imageElement.src != null) {
                    imageElement.src = url;
                    imageElement.onerror = function (ele) {
                        ele.srcElement.src = alternateUrl;
                    };
                }
            }
        }
    };
    ReceiptHelper.addClassText = function (elementId, innerHtml) {
        var elements = document.getElementsByClassName(elementId);
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = innerHtml;
            }
        }
    };
    ReceiptHelper.hideElementByClassName = function (elementId) {
        var elements = document.getElementsByClassName(elementId);
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        }
    };
    ReceiptHelper.addText = function (elementId, innerHtml) {
        var id = document.getElementById(elementId);
        if (id != null) {
            id.innerHTML = innerHtml;
        }
    };
    ReceiptHelper.addStyleSheet = function (href) {
        var head = document.head, link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = href;
        head.appendChild(link);
    };
    return ReceiptHelper;
}());
var CityMockupData = (function () {
    function CityMockupData() {
    }
    CityMockupData.miniStatement = {
        "user": "26160101 (NAME OF USER)",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "accountName": "JAMAL UDDIN City",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "statement": [
            ["Date", "Description", "Withdraw", "Deposit", "Balance"],
            ["", "Opening Balance", "", "", "4,231,594.17"],
            ["24-FEB-2016", "DR.TRAN FOR FUNDING A/C ZZ1323537", "3,500,000.00", "-", "731,594.17"],
            ["18-FEB-2016", "SUMON", "100, 000.00", "-", "631,594.17"],
            ["01-MAR-2016", "2801633560001: WTAX PDF", "185.43", "-", "631,408.74"],
            ["01-MAR-2016", "2801633560001: INT.PD:01-02 - 2016", "-", "1,236.22", "632,644.96"],
            ["15-MAR-2016", "TRTR/000043011856/15- 02 - 2016 15: 18:56/CBL", "-", "500.00", "633,144.96"]
        ],
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.accountBalance = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "balanceAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "balanceDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.atmDebitCardCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.atmDebitCardDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.atmDebitCardRequest = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.cashDeposit = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "depositAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "depositDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.cashWithdraw = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "withdrawAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "withdrawDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.chequeBookDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.chequeBookRequisition = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.chequeStopPaymentRange = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.chequeStopPaymentRangeCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.chequeStopPaymentSingle = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.chequeStopPaymentSingleCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    CityMockupData.dpsAccount = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "DPS",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "transactionDate": "19-JAN-2016"
    };
    CityMockupData.fixedDeposit = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "TERM DEPOSIT",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "transactionDate": "19-JAN-2016"
    };
    CityMockupData.fundTransfer = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "senderAccountNumber": "2001158500126",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "senderAccountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "receiverAccountNumber": "2801619598001",
        "receiverAccountName": "MD. ASHSAN HABIB ROCKY",
        "transferAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "fundTransferDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.remittanceDisbursement = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "exchangeHouse": "XPRESS MONEY",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.remittanceRequest = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "exchangeHouse": "XPRESS MONEY",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    CityMockupData.accountOpeningRequest = {
        "productName": "সিটি এজেন্ট সঞ্চয়ী হিসাব",
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "disclaimer": "DISCLAIMER:",
        "accountName": "JAMAL UDDIN",
        "gender": "Male",
        "mobileNo": "01915067740",
        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    return CityMockupData;
}());
var CityJsonContracts;
(function (CityJsonContracts) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(CityJsonContracts || (CityJsonContracts = {}));
/// <reference path="../receipt-helper.ts" />
/// <reference path="city-mockup-data.ts" />
/// <reference path="city-json-contracts.ts" />
var CityReceiptHelper = (function (_super) {
    __extends(CityReceiptHelper, _super);
    function CityReceiptHelper() {
        _super.apply(this, arguments);
    }
    CityReceiptHelper.prototype.setMockData = function (receipt) {
        switch (receipt) {
            case Receipts.ACCOUNT_BALANCE:
                global.data = CityMockupData.accountBalance;
                break;
            case Receipts.ATM_DEBIT_CARD_CANCEL:
                global.data = CityMockupData.atmDebitCardCancel;
                break;
            case Receipts.ATM_DEBIT_CARD_DELIVERY:
                global.data = CityMockupData.atmDebitCardDelivery;
                break;
            case Receipts.ATM_DEBIT_CARD_REQUEST:
                global.data = CityMockupData.atmDebitCardRequest;
                break;
            case Receipts.CASH_DEPOSIT:
                global.data = CityMockupData.cashDeposit;
                break;
            case Receipts.CASH_WITHDRAW:
                global.data = CityMockupData.cashWithdraw;
                break;
            case Receipts.CHEQUE_BOOK_DELIVERY:
                global.data = CityMockupData.chequeBookDelivery;
                break;
            case Receipts.CHEQUE_BOOK_REQUISITION:
                global.data = CityMockupData.chequeBookRequisition;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE:
                global.data = CityMockupData.chequeStopPaymentRange;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
                global.data = CityMockupData.chequeStopPaymentRangeCancel;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
                global.data = CityMockupData.chequeStopPaymentSingle;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
                global.data = CityMockupData.chequeStopPaymentSingleCancel;
                break;
            case Receipts.DPS_ACCOUNT:
                global.data = CityMockupData.dpsAccount;
                break;
            case Receipts.FIXED_DEPOSIT:
                global.data = CityMockupData.fixedDeposit;
                break;
            case Receipts.FUND_TRANSFER:
                global.data = CityMockupData.fundTransfer;
                break;
            case Receipts.REMITTANCE_DISBURSEMENT:
                global.data = CityMockupData.remittanceDisbursement;
                break;
            case Receipts.REMITTANCE_REQUEST:
                global.data = CityMockupData.remittanceRequest;
                break;
            case Receipts.ACCOUNT_OPENING:
                global.data = CityMockupData.accountOpeningRequest;
                break;
            case Receipts.MINI_STATEMENT:
                global.data = CityMockupData.miniStatement;
                break;
        }
    };
    CityReceiptHelper.prototype.replaceToken = function (receipt) {
        ReceiptHelper.addImage("agent_banking_logo", "file:///android_asset/" + BankConstants.sub_folder + "/AGENT-BANKING-LOGO_Small.png", "../../images/" + BankConstants.sub_folder + "/AGENT-BANKING-LOGO_Small.png");
        ReceiptHelper.addImage("logo", "file:///android_asset/" + BankConstants.sub_folder + "/logo.gif", "../../images/" + BankConstants.sub_folder + "/logo.gif");
        ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
        ReceiptHelper.addImage("customerPhoto", "photo.png", "../../images/photo.png");
        ReceiptHelper.addClassText("addressLine1Label", LabelText.addressLine1Text);
        ReceiptHelper.addClassText("addressLine2Label", LabelText.addressLine2Text);
        ReceiptHelper.addClassText("addressLine3Label", LabelText.addressLine3Text);
        ReceiptHelper.addClassText("addressLine4Label", LabelText.addressLine4Text);
        switch (receipt) {
            case 1:
                this.setAccountBalance();
                break;
            case 2:
                this.setCashDeposit();
                break;
            case 3:
                this.setCashWithdraw();
                break;
            case 4:
                this.setDPSAccount();
                break;
            case 5:
                this.setFixedDeposit();
                break;
            case 6:
                this.setFundTransfer();
                break;
            case 7:
                this.setAccountOpening();
                break;
            case 8:
                this.setATMDebitCardRequest();
                break;
            case 9:
                this.setATMDebitCardDelivery();
                break;
            case 10:
                this.setATMDebitCardCancel();
                break;
            case 11:
                this.setChequeBookRequisition();
                break;
            case 12:
                this.setChequeBookDelivery();
                break;
            case 13:
                this.setChequeStopPaymentSingle();
                break;
            case 14:
                this.setChequeStopPaymentRange();
                break;
            case 15:
                this.setChequeStopPaymentSingleCancel();
                break;
            case 16:
                this.setChequeStopPaymentRangeCancel();
                break;
            case 17:
                this.setMiniStatement();
                break;
            case 18:
                this.setRemittanceRequest();
                break;
            case 19:
                this.setRemittanceDisbursement();
                break;
            default:
                break;
        }
    };
    CityReceiptHelper.prototype.setAccountBalance = function () {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = [
            [[LabelText.balanceAmountText, data.balanceAmount], [LabelText.balanceDateText, data.balanceDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    };
    CityReceiptHelper.prototype.setCashDeposit = function () {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = [
            [[LabelText.depositAmountText, data.depositAmount], [LabelText.depositDateText, data.depositDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    };
    CityReceiptHelper.prototype.setCashWithdraw = function () {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = [
            [[LabelText.withdrawAmountText, data.withdrawAmount], [LabelText.withdrawDateText, data.withdrawDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 1, 2);
    };
    CityReceiptHelper.prototype.setDPSAccount = function () {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.linkAccountNumberText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.linkAccountNumber);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, data.accountName], [LabelText.productTenorText, data.productTenor]],
            [[LabelText.accountOpeningDateText, data.transactionDate], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.monthlyDepositText, data.depositAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.maturityAmountText, data.maturityAmount], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setFixedDeposit = function () {
        ReceiptHelper.addClassText("title", LabelText.fixedDepositText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.linkAccountNumberText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.linkAccountNumber);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, data.accountName], [LabelText.productTenorText, data.productTenor]],
            [[LabelText.accountOpeningDateText, data.transactionDate], [LabelText.maturityDateText, data.maturityDate]],
            [[LabelText.profitRateText, data.profitRate], [LabelText.maturityAmountText, data.maturityAmount]],
            [[LabelText.principalAmountText, data.principalAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setFundTransfer = function () {
        ReceiptHelper.addClassText("title", LabelText.fundTransferText);
        var data = global.data;
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.senderAccountNoText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.senderAccountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.senderAccountNameText);
        ReceiptHelper.addClassText("customerName", data.senderAccountName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        var tableData = [
            [[LabelText.receiverAccountNoText, data.receiverAccountNumber], [LabelText.fundTransferDateText, data.fundTransferDate]],
            [[LabelText.receiverAccountNameText, data.receiverAccountName], [LabelText.transactionIdText, data.transactionCode]],
            [[LabelText.transferAmountText, data.transferAmount], [LabelText.printDateText, data.printDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
        ReceiptHelper.doRowSpan("fourthTable", 3, 2);
    };
    CityReceiptHelper.prototype.setAccountOpening = function () {
        var data = global.data;
        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText("accountNumberColon", ":");
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerIdColon", ":");
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText("accountTypeColon", ":");
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText("linkAccountNumberLabel", '&nbsp');
        ReceiptHelper.addClassText("disclaimerLabel", data.disclaimer);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.gendertText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.gender);
        var tableData = [
            [[LabelText.initialDepositText, data.initialDeposit], [LabelText.accountOpeningDateText, data.accountOpeningDate]],
            [[LabelText.inWordsText, data.inWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, data.printDate]],
            [[LabelText.chargeAndVatText, data.chargeAndVat], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setATMDebitCardRequest = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardRequestText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.chargeAndVatText, global.data.charge]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setATMDebitCardDelivery = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardDeliveryText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.cardNumberText, global.data.cardNumber]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setATMDebitCardCancel = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardCancelText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.cardTypeText, global.data.cardType], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.cardBrandText, global.data.cardBrand], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.cardTitleText, global.data.accountName], [LabelText.cardNumberText, global.data.cardNumber]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeBookRequisition = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeBookRequisitionText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.noOfLeaveText, global.data.noOfLeave], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeBookDelivery = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeBookDeliveryText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.deliveryDateText, global.data.transactionDate]],
            [[LabelText.noOfLeaveText, global.data.noOfLeave], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeStopPaymentSingle = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.receiverNameText, global.data.receiverName]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.amountOfTkText, global.data.chequeAmount], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.chequeLostReasonText, global.data.chequeLostReason]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeStopPaymentRange = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.chequeLostReasonText, global.data.chequeLostReason]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeStopPaymentSingleCancel = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleCancelText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.receiverNameText, global.data.receiverName]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.amountOfTkText, global.data.chequeAmount], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.retrieveFromText, global.data.retrieveFrom]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setChequeStopPaymentRangeCancel = function () {
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", global.data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", global.data.userId);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", global.data.boothAddress);
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeCancelText);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", global.data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, global.data.accountNumber);
        ReceiptHelper.addClassText(LabelText.accountTypeId, global.data.savingsAccountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.emptyText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, LabelText.emptyText);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", global.data.customerName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", global.data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, global.data.customerAddress);
        var tableData = [
            [[LabelText.accountNameText, global.data.accountName], [LabelText.requestReceiveTimeText, global.data.transactionDate]],
            [[LabelText.chequeLeafNumberText, global.data.chequeLeafNumber], [LabelText.requestIdText, global.data.requestId]],
            [[LabelText.chargeAndVatText, global.data.charge], [LabelText.printDateText, global.data.printDate]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.retrieveFromText, global.data.retrieveFrom]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setMiniStatement = function () {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);
        var data = global.data;
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText(LabelText.accountNoLabelId, LabelText.accountNumberText);
        ReceiptHelper.addClassText(LabelText.accountNumberId, data.accountNumber);
        ReceiptHelper.addClassText("customerIdLabel", LabelText.customerIdText);
        ReceiptHelper.addClassText("customerId", data.customerId);
        ReceiptHelper.addClassText("accountTypeLabel", LabelText.accountTypeText);
        ReceiptHelper.addClassText(LabelText.accountTypeId, data.accountType);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberLabelId, LabelText.chargeAndVatText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberColonId, LabelText.colonText);
        ReceiptHelper.addClassText(LabelText.linkAccountNumberId, data.chargeAndVat);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.accountNameText);
        ReceiptHelper.addClassText("customerName", data.accountName);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoText);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.customerAddress);
        var tableData = data.statement;
        var fourthTable = document.getElementsByClassName('fourthTable')[0];
        for (var r in tableData) {
            for (var c in tableData[r]) {
                var row = fourthTable.rows[r];
                row.cells[c].innerHTML = tableData[r][c];
            }
        }
    };
    CityReceiptHelper.prototype.setRemittanceRequest = function () {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceRequestTextEnglish);
        var data = global.data;
        //ReceiptHelper.addClassText("userIdLabel", labelText.userTextEnglish);
        //ReceiptHelper.addClassText("userId", data.user);
        //ReceiptHelper.addClassText("agentNameLabel", labelText.agentNameTextEnglish);
        //ReceiptHelper.addClassText("agentName", data.agentName);
        //ReceiptHelper.addClassText("boothAddressLabel", labelText.addressTextEnglish);
        //ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.recipientNameTextEnglish);
        ReceiptHelper.addClassText("customerName", data.recipientName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.exchangeHouseNameEnglish);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.exchangeHouse);
        ReceiptHelper.addClassText("pinLabel", LabelText.pinNoTextEnglish);
        ReceiptHelper.addClassText("pinColon", LabelText.colonText);
        ReceiptHelper.addClassText("pin", data.pin);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoTextEnglish);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        var tableData = [
            [[LabelText.senderNameTextEnglish, data.senderName], [LabelText.iDTypeTextEnglish, data.idType]],
            [[LabelText.senderCountryTextEnglish, data.senderCountry], [LabelText.iDNumberTextEnglish, data.idNumber]],
            [[LabelText.approximateAmountTextEnglish, data.actualPayableAmount], [LabelText.printDateTextEnglish, data.printDate]],
            [[LabelText.amountInWordsTextEnglish, data.amountInWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.setRemittanceDisbursement = function () {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceDisbursementTextEnglish);
        var data = global.data;
        //ReceiptHelper.addClassText("userIdLabel", labelText.userTextEnglish);
        //ReceiptHelper.addClassText("userId", data.user);
        //ReceiptHelper.addClassText("agentNameLabel", labelText.agentNameTextEnglish);
        //ReceiptHelper.addClassText("agentName", data.agentName);
        //ReceiptHelper.addClassText("boothAddressLabel", labelText.addressTextEnglish);
        //ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("agentNameLabel", LabelText.agentNameText);
        ReceiptHelper.addClassText("agentName", data.agentName);
        ReceiptHelper.addClassText("userIdLabel", LabelText.userText);
        ReceiptHelper.addClassText("userId", data.user);
        ReceiptHelper.addClassText("boothAddressLabel", LabelText.addressText);
        ReceiptHelper.addClassText("boothAddress", data.boothAddress);
        ReceiptHelper.addClassText("customerNameLabel", LabelText.recipientNameTextEnglish);
        ReceiptHelper.addClassText("customerName", data.recipientName);
        ReceiptHelper.addClassText("customerAddressLabel", LabelText.exchangeHouseNameEnglish);
        ReceiptHelper.addClassText(LabelText.customerAddressId, data.exchangeHouse);
        ReceiptHelper.addClassText("pinLabel", LabelText.pinNoTextEnglish);
        ReceiptHelper.addClassText("pinColon", LabelText.colonText);
        ReceiptHelper.addClassText("pin", data.pin);
        ReceiptHelper.addClassText("mobileNoLabel", LabelText.mobileNoTextEnglish);
        ReceiptHelper.addClassText("mobileNo", data.mobileNo);
        var tableData = [
            [[LabelText.senderNameTextEnglish, data.senderName], [LabelText.iDTypeTextEnglish, data.idType]],
            [[LabelText.senderCountryTextEnglish, data.senderCountry], [LabelText.iDNumberTextEnglish, data.idNumber]],
            [[LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount], [LabelText.printDateTextEnglish, data.printDate]],
            [[LabelText.amountInWordsTextEnglish, data.amountInWords], [LabelText.emptyText, LabelText.emptyText]],
            [[LabelText.emptyText, LabelText.emptyText], [LabelText.emptyText, LabelText.emptyText]]
        ];
        this.replaceTableData(tableData);
    };
    CityReceiptHelper.prototype.replaceTableData = function (tableData) {
        var fourthTable = document.getElementsByClassName('fourthTable')[0];
        for (var i = 0; i < fourthTable.rows.length; i++) {
            var row = fourthTable.rows[i];
            for (var j = 0; j < row.cells.length; j++) {
                var text = tableData[i][j / 3][0];
                var value = tableData[i][j / 3][1];
                if (text) {
                    row.cells[j].innerHTML = text;
                    row.cells[++j].innerHTML = LabelText.colonText;
                }
                else {
                    row.cells[j].innerHTML = LabelText.emptyText;
                    row.cells[++j].innerHTML = LabelText.emptyText;
                }
                row.cells[++j].innerHTML = value;
            }
        }
    };
    return CityReceiptHelper;
}(ReceiptHelper));
var AgrainMockupData = (function () {
    function AgrainMockupData() {
    }
    AgrainMockupData.miniStatement = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "accountName": "JAMAL UDDIN Agrani",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "statement": [
            ["22-AUG-2015", "6598792141508220823344", "Cash Deposit", "(+500.00)"],
            ["22-AUG-2015", "7373822120150822054523", "Cash Withdrawal", "(-1.50)"],
            ["22-AUG-2015", "9325469871321673165405", "Cash Withdrawal", "(-8.50)"],
            ["22-AUG-2015", "6714654658792141803315", "Cash Withdrawal", "(-250.00)"],
            ["22-AUG-2015", "2233468794150822082323", "Cash Withdrawal", "(-566.00)"]
        ],
        "availableBalance": "Tk 4704.00",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.accountBalance = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "balanceAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "balanceDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.atmDebitCardCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.atmDebitCardDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.atmDebitCardRequest = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.cashDeposit = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "depositAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "depositDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.cashWithdraw = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "accountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "withdrawAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "withdrawDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.chequeBookDelivery = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.chequeBookRequisition = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.chequeStopPaymentRange = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.chequeStopPaymentRangeCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.chequeStopPaymentSingle = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.chequeStopPaymentSingleCancel = {
        "accountName": "MD Arif Gazi",
        "accountNumber": "2802183726001",
        "agentName": "BADRUL ALOM",
        "balanceAmount": "BDT 80,550.00",
        "balanceAmountInWords": "EIGHTY THOUSAND FIVE HUNDRED FIFTY ONLY",
        "boothAddress": "VAIRAB BAZAR, CHOWDHURYR HAT, SONAGAZI",
        "cardBrand": "VISA",
        "cardNumber": "1234 1234 1234 1234",
        "cardType": "ATM",
        "charge": "BDT 7.50",
        "chequeAmount": "BDT 10,000.00",
        "chequeLeafNumber": "123 456 789 123",
        "chequeLostReason": "Lost",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerId": "CB2183726",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "depositAmountInWords": "THREE THOUSAND ONLY",
        "dpsAccountType": "DPS", "linkAccountNumber": "2005246987526",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "noOfLeave": "10",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "receiverAccountName": "SUJON PATWARY",
        "receiverName": "Asadul Haque",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "retrieveFrom": "From Lost",
        "savingsAccountType": "Savings",
        "statement": [
            ["Date", "Description", "Deposit", "Withdraw", "Balance"],
            ["15-Dec-2016", "FT-School Fee", "", "500.00", "4500.00"],
            ["14-Dec-2016", "DEP Cash", "1500.00", "", "6000.00"],
            ["14-Dec-2016", "WDL-Cash", "", "2000.00", "4000.00"],
            ["13-Dec-2016", "FT-Other Bank", "", "2000.00", "2000.00"],
            ["12-Dec-2016", "DEP-Personal A/C", "7000.00", "", "9000.00"]
        ],
        "termDepositAccountType": "TERM DEPOSIT",
        "transactionCode": "TR222369",
        "transactionDate": "19-JAN-2016",
        "userId": "615001001 (NAIM ISLAM)",
        "withdrawAmount": "BDT 3,000.00 + 7.5 (Charge)",
        "withdrawsAmountInWords": "THREE THOUSAND SEVEN TAKA FIFTY PAISA ONLY"
    };
    AgrainMockupData.dpsAccount = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "DPS",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "transactionDate": "19-JAN-2016"
    };
    AgrainMockupData.fixedDeposit = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "customerId": "CB2183726",
        "accountType": "TERM DEPOSIT",
        "linkAccountNumber": "2005246987526",
        "accountName": "MD Arif Gazi",
        "customerAddress": "GREEN GADEN BUILDING, FLAT- D4, HOUSE- 12, ROAD- 10, BLOCK- C, MIRPUR, PS- MIRPUR, DHAKA",
        "customerName": "Md. Arif Gazi",
        "depositAmount": "BDT 3,000.00",
        "maturityAmount": "BDT 2,26,047.00",
        "maturityDate": "19-JAN-2021",
        "mobileNo": "01617877595",
        "photo": "",
        "principalAmount": "BDT 1,00,000.00",
        "printDate": "19-JAN-2016 13:13:15 PM",
        "productTenor": "5 Years",
        "profitRate": "8.85% (Yearly)",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "transactionDate": "19-JAN-2016"
    };
    AgrainMockupData.fundTransfer = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "senderAccountNumber": "2001158500126",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "senderAccountName": "JAMAL UDDIN",
        "customerAddress": "VILL-CHANDAL VOUGH, PO-NISHATNAGARPS-TURAGDHAKA",
        "mobileNo": "01915067740",
        "receiverAccountNumber": "2801619598001",
        "receiverAccountName": "MD. ASHSAN HABIB ROCKY",
        "transferAmount": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "fundTransferDate": "15-MAR-2016",
        "transactionCode": "73970008",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.remittanceDisbursement = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "exchangeHouse": "XPRESS MONEY",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.remittanceRequest = {
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "recipientName": "JAMAL UDDIN",
        "exchangeHouse": "XPRESS MONEY",
        "pin": "****2543",
        "mobileNo": "01915067740",
        "senderName": "MD. ASHSAN HABIB ROCKY",
        "senderCountry": "2801619598001",
        "actualPayableAmount": "BDT 1,256.00",
        "amountInWords": "ONE THOUSAND TWO HUNDRED FIFTY SIX TAKA ONLY",
        "idType": "NID",
        "idNumber": "19752698765626536",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    AgrainMockupData.accountOpeningRequest = {
        "productName": "সিটি এজেন্ট সঞ্চয়ী হিসাব",
        "user": "26160101",
        "agentName": "NAME OF AGENT",
        "boothAddress": "Outlet Name + District, Upzilla",
        "accountNumber": "2802183726001",
        "customerId": "CB2183726",
        "accountType": "SAVINGS ACCOUNT",
        "disclaimer": "DISCLAIMER:",
        "accountName": "JAMAL UDDIN",
        "gender": "Male",
        "mobileNo": "01915067740",
        "initialDeposit": "BDT 1,200.00",
        "inWords": "ONE THOUSAND TWO HUNDRED TAKA ONLY",
        "chargeAndVat": "BDT 10.00 + 1.50",
        "accountOpeningDate": "15-MAR-2016",
        "printDate": "15-MAR-2016 01:00:57 PM",
        "requestId": {
            "ac": "1234567890123",
            "trt": "IFR",
            "amt": "900",
            "tr": "CB1234567",
            "trace": "2132141234567123",
            "pin": "1234"
        },
        "photo": ""
    };
    return AgrainMockupData;
}());
var AgraniJsonContracts;
(function (AgraniJsonContracts) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
})(AgraniJsonContracts || (AgraniJsonContracts = {}));
/// <reference path="../receipt-helper.ts" />
/// <reference path="agrani-mockup-data.ts" />
/// <reference path="agrani-json-contracts.ts" />
var AgraniReceiptHelper = (function (_super) {
    __extends(AgraniReceiptHelper, _super);
    function AgraniReceiptHelper() {
        _super.apply(this, arguments);
    }
    AgraniReceiptHelper.prototype.setMockData = function (receipt) {
        switch (receipt) {
            case Receipts.ACCOUNT_BALANCE:
                global.data = AgrainMockupData.accountBalance;
                break;
            case Receipts.ATM_DEBIT_CARD_CANCEL:
                global.data = AgrainMockupData.atmDebitCardCancel;
                break;
            case Receipts.ATM_DEBIT_CARD_DELIVERY:
                global.data = AgrainMockupData.atmDebitCardDelivery;
                break;
            case Receipts.ATM_DEBIT_CARD_REQUEST:
                global.data = AgrainMockupData.atmDebitCardRequest;
                break;
            case Receipts.CASH_DEPOSIT:
                global.data = AgrainMockupData.cashDeposit;
                break;
            case Receipts.CASH_WITHDRAW:
                global.data = AgrainMockupData.cashWithdraw;
                break;
            case Receipts.CHEQUE_BOOK_DELIVERY:
                global.data = AgrainMockupData.chequeBookDelivery;
                break;
            case Receipts.CHEQUE_BOOK_REQUISITION:
                global.data = AgrainMockupData.chequeBookRequisition;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE:
                global.data = AgrainMockupData.chequeStopPaymentRange;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_RANGE_CANCEL:
                global.data = AgrainMockupData.chequeStopPaymentRangeCancel;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE:
                global.data = AgrainMockupData.chequeStopPaymentSingle;
                break;
            case Receipts.CHEQUE_STOP_PAYMENT_SINGLE_CANCEL:
                global.data = AgrainMockupData.chequeStopPaymentSingleCancel;
                break;
            case Receipts.DPS_ACCOUNT:
                global.data = AgrainMockupData.dpsAccount;
                break;
            case Receipts.FIXED_DEPOSIT:
                global.data = AgrainMockupData.fixedDeposit;
                break;
            case Receipts.FUND_TRANSFER:
                global.data = AgrainMockupData.fundTransfer;
                break;
            case Receipts.REMITTANCE_DISBURSEMENT:
                global.data = AgrainMockupData.remittanceDisbursement;
                break;
            case Receipts.REMITTANCE_REQUEST:
                global.data = AgrainMockupData.remittanceRequest;
                break;
            case Receipts.ACCOUNT_OPENING:
                global.data = AgrainMockupData.accountOpeningRequest;
                break;
            case Receipts.MINI_STATEMENT:
                global.data = AgrainMockupData.miniStatement;
                break;
        }
    };
    AgraniReceiptHelper.prototype.replaceToken = function (receipt) {
        ReceiptHelper.addImage("logo", "file:///android_asset/" + BankConstants.sub_folder + "/logo.png", "../../images/" + BankConstants.sub_folder + "/logo.png");
        //ReceiptHelper.addImage("qr", "qr.png", "../../images/qr.png");
        ReceiptHelper.addImage("agraniDoer", "file:///android_asset/" + BankConstants.sub_folder + "/agranidoer.png", "../../images/" + BankConstants.sub_folder + "/agranidoer.png");
        ReceiptHelper.addImage("poweredbycelloscope", "file:///android_asset/" + BankConstants.sub_folder + "/poweredbycelloscope.png", "../../images/" + BankConstants.sub_folder + "/poweredbycelloscope.png");
        switch (receipt) {
            case 1:
                this.setAccountBalance();
                break;
            case 2:
                this.setCashDeposit();
                break;
            case 3:
                this.setCashWithdraw();
                break;
            case 4:
                this.setDPSAccount();
                break;
            case 5:
                this.setFixedDeposit();
                break;
            case 6:
                this.setFundTransfer();
                break;
            case 7:
                this.setAccountOpening();
                break;
            case 8:
                this.setATMDebitCardRequest();
                break;
            case 9:
                this.setATMDebitCardDelivery();
                break;
            case 10:
                this.setATMDebitCardCancel();
                break;
            case 11:
                this.setChequeBookRequisition();
                break;
            case 12:
                this.setChequeBookDelivery();
                break;
            case 13:
                this.setChequeStopPaymentSingle();
                break;
            case 14:
                this.setChequeStopPaymentRange();
                break;
            case 15:
                this.setChequeStopPaymentSingleCancel();
                break;
            case 16:
                this.setChequeStopPaymentRangeCancel();
                break;
            case 17:
                this.setMiniStatement();
                break;
            case 18:
                this.setRemittanceRequest();
                break;
            case 19:
                this.setRemittanceDisbursement();
                break;
            default:
                break;
        }
    };
    AgraniReceiptHelper.prototype.setAccountBalance = function () {
        ReceiptHelper.addClassText("title", LabelText.accountBalanceText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.balanceDateText, data.balanceDate],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.balanceAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setCashDeposit = function () {
        ReceiptHelper.addClassText("title", LabelText.cashDepositText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.depositDateText, data.depositDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
        this.setTableBorder();
    };
    AgraniReceiptHelper.prototype.setCashWithdraw = function () {
        ReceiptHelper.addClassText("title", LabelText.cashWithdrawText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.withdrawDateText, data.withdrawDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.withdrawAmount],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
        this.setTableBorder();
    };
    AgraniReceiptHelper.prototype.setDPSAccount = function () {
        ReceiptHelper.addClassText("title", LabelText.generalDPSAccountText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            [LabelText.customerNameText, data.customerName],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.maturityAmountText, data.maturityAmount],
            [LabelText.productTenorText, data.productTenor],
            [LabelText.maturityDateText, data.maturityDate],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setFixedDeposit = function () {
        ReceiptHelper.addClassText("title", LabelText.fixedDepositText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountOpeningDateText, data.transactionDate],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.linkAccountNumberText, data.linkAccountNumber],
            //[LabelText.customerIdText, data.customerId],
            [LabelText.customerNameText, data.customerName],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.depositAmountText, data.depositAmount],
            [LabelText.maturityAmountText, data.maturityAmount],
            [LabelText.maturityDateText, data.maturityDate],
            [LabelText.principalAmountText, data.principalAmount],
            [LabelText.profitRateText, data.profitRate],
            [LabelText.productTenorText, data.productTenor],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setFundTransfer = function () {
        ReceiptHelper.addClassText("title", LabelText.fundTransferText);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.fundTransferDateText, data.fundTransferDate],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.senderAccountNoText, data.senderAccountNumber],
            [LabelText.receiverAccountNoText, data.receiverAccountNumber],
            [LabelText.amountText, data.transferAmount],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
        this.setTableBorder();
    };
    AgraniReceiptHelper.prototype.setAccountOpening = function () {
        var data = global.data;
        ReceiptHelper.addClassText("title", LabelText.accountOpeningRequest + data.productName);
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            //[LabelText.emptyText, data.disclaimer],
            [LabelText.accountOpeningDateText, data.accountOpeningDate],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.gendertText, data.gender],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.initialDepositText, data.initialDeposit],
            [LabelText.inWordsText, data.inWords],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setATMDebitCardRequest = function () {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardRequestText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setATMDebitCardDelivery = function () {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardDeliveryText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setATMDebitCardCancel = function () {
        ReceiptHelper.addClassText("title", LabelText.atmDebitCardCancelText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeBookRequisition = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeBookRequisitionText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeBookDelivery = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeBookDeliveryText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeStopPaymentSingle = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeStopPaymentRange = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeStopPaymentSingleCancel = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentRangeText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate],
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setChequeStopPaymentRangeCancel = function () {
        ReceiptHelper.addClassText("title", LabelText.chequeStopPaymentSingleCancelText);
        var data = global.data;
        var tableData = [
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.transactionIdText, data.transactionCode],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.amountText, data.depositAmount],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateText, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setMiniStatement = function () {
        ReceiptHelper.addClassText("title", LabelText.accountStatement);
        var data = global.data;
        var tableData = [
            [LabelText.userText, data.user],
            //[LabelText.agentNameText, data.agentName],
            //[LabelText.addressText, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.accountNameText, data.accountName],
            [LabelText.accountNumberText, data.accountNumber],
            //[LabelText.customerIdText, data.customerId],
            //[LabelText.mobileNoText, data.mobileNo],
            [LabelText.accountTypeText, data.accountType],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.chargeAndVatText, data.chargeAndVat],
            [LabelText.emptyText, LabelText.emptyText],
        ];
        this.replaceTableData(tableData);
        this.replaceMinistatementTableData(data.statement);
        ReceiptHelper.addClassText("availableBalance", data.availableBalance);
    };
    AgraniReceiptHelper.prototype.setRemittanceRequest = function () {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceRequestTextEnglish);
        var data = global.data;
        var tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentNameTextEnglish, data.agentName],
            [LabelText.addressTextEnglish, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            [LabelText.mobileNoTextEnglish, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.senderNameTextEnglish, data.senderName],
            [LabelText.senderCountryTextEnglish, data.senderCountry],
            [LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount],
            [LabelText.amountInWordsTextEnglish, data.amountInWords],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.iDTypeTextEnglish, data.idType],
            [LabelText.iDNumberTextEnglish, data.idNumber],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateTextEnglish, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.setRemittanceDisbursement = function () {
        ReceiptHelper.addClassText("title", LabelText.inwardForeignRemittanceDisbursementTextEnglish);
        var data = global.data;
        var tableData = [
            [LabelText.userTextEnglish, data.user],
            [LabelText.agentNameTextEnglish, data.agentName],
            [LabelText.addressTextEnglish, data.boothAddress],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.recipientNameTextEnglish, data.recipientName],
            [LabelText.exchangeHouseNameEnglish, data.exchangeHouse],
            [LabelText.pinNoTextEnglish, data.pin],
            [LabelText.mobileNoTextEnglish, data.mobileNo],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.senderNameTextEnglish, data.senderName],
            [LabelText.senderCountryTextEnglish, data.senderCountry],
            [LabelText.actualPayableAmountTextEnglish, data.actualPayableAmount],
            [LabelText.amountInWordsTextEnglish, data.amountInWords],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.iDTypeTextEnglish, data.idType],
            [LabelText.iDNumberTextEnglish, data.idNumber],
            [LabelText.emptyText, LabelText.emptyText],
            [LabelText.printDateTextEnglish, data.printDate]
        ];
        this.replaceTableData(tableData);
    };
    AgraniReceiptHelper.prototype.replaceTableData = function (tableData) {
        var tables = document.getElementsByClassName('dataTabel');
        for (var i = 0; i < tables.length; i += 1) {
            var table = tables[i];
            var tableBody = document.createElement('tbody');
            for (var _i = 0, tableData_1 = tableData; _i < tableData_1.length; _i++) {
                var rowData = tableData_1[_i];
                var row = document.createElement('tr');
                var firstCell = true;
                for (var _a = 0, rowData_1 = rowData; _a < rowData_1.length; _a++) {
                    var cellData = rowData_1[_a];
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(cellData));
                    row.appendChild(cell);
                    if (firstCell) {
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData ? ':' : '\xa0'));
                        row.appendChild(cell);
                        firstCell = false;
                    }
                }
                tableBody.appendChild(row);
            }
            table.appendChild(tableBody);
        }
    };
    AgraniReceiptHelper.prototype.setTableBorder = function () {
        var tables = document.getElementsByClassName('dataTabel');
        for (var i = 0; i < tables.length; i += 1) {
            var table = tables[i];
            var borderString = '3px solid black';
            var bottomRowIndex = 3;
            var bottomRow = table.rows[bottomRowIndex];
            for (var i_1 = 0; i_1 < 3; i_1 += 1) {
                var cell = bottomRow.cells[i_1];
                cell.style.borderBottom = borderString;
                if (i_1 == 0) {
                    cell.style.borderLeft = borderString;
                }
                else if (i_1 === 2) {
                    cell.style.borderRight = borderString;
                }
            }
            var topRowIndex = 2;
            var topRow = table.rows[topRowIndex];
            for (var i_2 = 0; i_2 < 3; i_2 += 1) {
                var cell = topRow.cells[i_2];
                cell.style.borderTop = borderString;
                if (i_2 == 0) {
                    cell.style.borderLeft = borderString;
                }
                else if (i_2 === 2) {
                    cell.style.borderRight = borderString;
                }
            }
        }
    };
    AgraniReceiptHelper.prototype.replaceMinistatementTableData = function (tableData) {
        var tables = document.getElementsByClassName('miniStatementTabel');
        for (var i = 0; i < tables.length; i += 1) {
            var table = tables[i];
            var tableBody = document.createElement('tbody');
            for (var _i = 0, tableData_2 = tableData; _i < tableData_2.length; _i++) {
                var rowData = tableData_2[_i];
                var count = 0;
                var row = void 0;
                var cell = void 0;
                for (var _a = 0, rowData_2 = rowData; _a < rowData_2.length; _a++) {
                    var cellData = rowData_2[_a];
                    count += 1;
                    if (count < 3) {
                        row = document.createElement('tr');
                        tableBody.appendChild(row);
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                        cell = document.createElement('td');
                        row.appendChild(cell);
                    }
                    else if (count == 3) {
                        row = document.createElement('tr');
                        tableBody.appendChild(row);
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                    }
                    else {
                        cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                    }
                }
            }
            table.appendChild(tableBody);
        }
    };
    return AgraniReceiptHelper;
}(ReceiptHelper));
/// <reference path="receipt-helper.ts" />
/// <reference path="city/city-receipt-helper.ts" />
/// <reference path="agrani/agrani-receipt-helper.ts" />
/// <reference path="banks.ts" />
/// <reference path="bank-constants.ts" />
var global, receipt = receipt || {};
global = window;
global.onload = function () {
    var receiptHelper;
    if (BankConstants.bank == Banks.City) {
        receiptHelper = new CityReceiptHelper();
    }
    else {
        receiptHelper = new AgraniReceiptHelper();
    }
    var url = global.location.search;
    url = url.replace("?", ''); // remove the ?
    if (!url) {
        url = receipt;
        global.data = JSON.parse(global.stringData);
    }
    else {
        receiptHelper.setMockData(parseInt(url));
    }
    ReceiptHelper.addStyleSheet("../../style_sheets/" + BankConstants.sub_folder + "/styles.css");
    ReceiptHelper.addStyleSheet("file:///android_asset/" + BankConstants.sub_folder + "/styles.css");
    receiptHelper.replaceToken(parseInt(url));
};
