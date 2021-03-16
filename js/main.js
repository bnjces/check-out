//formatter to show numbers as currency
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

function init() {
    console.log("The init function has been initialized. (What did you expect?)");
    updateCart();
}

function updateCart() {
    // zero out running totals
    var totalExtendedPrice = 0.0;
    var totalTax = 0.0;
    // find each <tr> except for first and last
    var rows = document.getElementsByTagName("tr");     // grabs all the table rows, returns node list
    console.log(rows);                                  // check to see if the rows have been grabbed
    for(let i = 1; i < rows.length - 1; i++){           // for loop on the rows, ignoring the first and last rows (first row is titles, last row is the total)
        console.log(rows[i]);                           // shows what the rows are, to check if the for loop was done correctly (it was!)
        var childNodes = rows[i].childNodes             // access child nodes in row (individual data points, price etc)
        console.log(childNodes);                        // check child nodes
         /*for(let j = 0; j < childNodes.length; j++){    // child nodes location finder
            console.log(childNodes[j].innerText);       // check text in child nodes to ascertain precise location of price, quantity, etc. 
         } */
        var itemPrice = parseFloat(childNodes[2].innerText.substring(1));        // grab the price, Math function takes string and makes it into number, start at 1 (to avoid the $)
        var qty = parseInt(childNodes[3].innerText);                            // grab the quantity of items
        var extendedPrice = itemPrice * qty;
        childNodes[5].innerText = formatter.format(extendedPrice);       // set the extended price in its place in the table row
        
            // to do  assume tax rate of 8% add tax value to row and running total tax: use switch
        var taxable = childNodes[6].innerText;
        var salesTax = 0.08;        
        switch (taxable) {
            case "Y":
                childNodes[7].innerText = formatter.format(extendedPrice * salesTax);
                break;
            case "N":
                childNodes[7].innerText = formatter.format(0);
                break;
        }
        // totalExtendedPrice = extendedPrice++
        // totalTax = 
    }
    
    // to do  place total price in <td> last row, total tax in <td> 
    // total extended price


}   
