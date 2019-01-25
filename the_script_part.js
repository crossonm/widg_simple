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
    console.log(purchaseOrder[i])
}
}
//some trash data for testing
addGadget(7)
addGadget("small_plin_gadget")
addGadget(14)
addGadget("something")

//write out the order
sumOrder()