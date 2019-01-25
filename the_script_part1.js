//This version outputs to the HTML page

//the var part
var purchaseOrder=[];

//the adding-stuff-to-the-order function part
function addGadget(pick){
       purchaseOrder.push(pick)
       console.log(purchaseOrder)
}

//the summarizing-the-order function part
function sumOrder(){
    numPurchases = purchaseOrder.length
    for (i=0; i < numPurchases; i++){
    //console.log(purchaseOrder[i])
    document.getElementById("orderDisplay").innerHTML = purchaseOrder[i];
}
}

//the printing-the-order part, taken from stackoverflow.com
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

/*some trash data for testing
addGadget(7)
addGadget("small_plain_gadget")
addGadget(14)
addGadget("something")

//write out the order
sumOrder() */