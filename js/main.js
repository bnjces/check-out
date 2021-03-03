//formatter to show numbers as currency
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

function init() {
    console.log("init");
}

function updateCart() {
    // zero out running totals
    var extendPrice = 0.0;
    var tax = 0.0;
    // find each <tr> except for first and last

    // to do  assume tax rate of 8% add tax value to row and running total tax
    
    // to do  place total price in <td> last row, total tax in <td>
    
}
