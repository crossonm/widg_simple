//This version outputs to the HTML page
/* v5 additions: to include display of current order as made   */

//the var part
var purchaseOrder=[];

//the adding-stuff-to-the-order function part
function addGadget(pick){
       purchaseOrder.push(pick)
       console.log(purchaseOrder)
}


//the summarizing-the-order-in-the-div function part
function sumOrder(){
    numPurchases = purchaseOrder.length
    for (i=0; i < numPurchases; i++){
    //console.log(purchaseOrder[i])
    //document.getElementById("orderDisplay").innerHTML += ("<hr>"+="<br>"+="Your new order: " += "<br>");
    document.getElementById("orderDisplay").innerHTML += (purchaseOrder[i] +"<br>");
}
}


//the resetting-the-order function part 
function resetOrder(){
    purchaseOrder=[]
    document.getElementById("writeHere").innerHTML = ("Order cleared. Your shopping cart is now empty." + "<br>");
}

//the printing-the-order part, taken from stackoverflow.com
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

//the finalizing-the-order function part
function finalOrder(purchaseOrder){
    // initialize the shit out of the counters
    numSmaPlain = 0
    numSmaPaint = 0
    numSmaPlate = 0
    numMedPlain = 0
    numMedPaint = 0
    numMedPlate = 0
    numLarPlain = 0
    numLarPaint = 0
    numLarPlate = 0
    
    // count instances of each gadget in the order 
    for (i = 0; i < purchaseOrder.length; i++) {
         if (purchaseOrder[i] == "(1) Small Plain Gadget @   $5.00")
         {numSmaPlain = numSmaPlain+1}
          else if (purchaseOrder[i] == "(1) Small Painted Gadget @   $6.00")
            {numSmaPaint = numSmaPaint + 1}
          else if (purchaseOrder[i] == "(1) Small Plated Gadget @   $7.00")
            {numSmaPlate = numSmaPlate + 1}
          else if (purchaseOrder[i] == "(1) Medium Plain Gadget @   $8.00")
            {numMedPlain = numMedPlain + 1}
          else if (purchaseOrder[i] == "(1) Medium Painted Gadget @   $9.00")
            {numMedPaint = numMedPaint + 1}
          else if (purchaseOrder[i] == "(1) Medium Plated Gadget @   $10.00")
            {numMedPlate = numMedPlate + 1}
          else if (purchaseOrder[i] == "(1) Large Plain Gadget @   $11.00")
            {numLarPlain = numLarPlain + 1}
          else if (purchaseOrder[i] == "(1) Large Painted Gadget @   $12.00")
            {numLarPaint = numLarPaint + 1}
          else if (purchaseOrder[i] == "(1) Large Plated Gadget @   $13.00")
            {numLarPlate = numLarPlate + 1}
    }
    //summarize the order 
    var totalCost = 0.00
    if (numSmaPlain !== 0){
        console.log(numSmaPlain + " Small Plain Gadget(s): $" +numSmaPlain*5)
        document.getElementById("finalOrderDisplay").innerHTML += (numSmaPlain + " Small Plain Gadget(s): $" +numSmaPlain*5 +"<br>");
        totalCost = totalCost + (numSmaPlain*5)
    } 
    if (numSmaPaint !== 0){
        console.log(numSmaPaint + " Small Painted Gadget(s): $" +numSmaPaint*6)
        document.getElementById("finalOrderDisplay").innerHTML += (numSmaPaint + " Small Painted Gadget(s): $" +numSmaPaint*6 +"<br>");
        totalCost = totalCost + (numSmaPaint*6)
    } 
    if (numSmaPlate !== 0){
        console.log(numSmaPlate + " Small Plated Gadget(s): $" +numSmaPlate*7)
        document.getElementById("finalOrderDisplay").innerHTML += (numSmaPlate + " Small Plated Gadget(s): $" +numSmaPlate*7 +"<br>");
        totalCost = totalCost + (numSmaPlate*7)
    } 
    if (numMedPlain !== 0){
        console.log(numMedPlain + " Medium Plain Gadget(s): $" +numMedPlain*8)
        document.getElementById("finalOrderDisplay").innerHTML += (numMedPlain + " Medium Plain Gadget(s): $" +numMedPlain*8 +"<br>");
        totalCost = totalCost + (numMedPlain*8)
    }
    if (numMedPaint !== 0){
        console.log(numMedPaint + " Medium Painted Gadget(s): $" +numMedPaint*9)
        totalCost = totalCost + (numMedPaint*9)
        document.getElementById("finalOrderDisplay").innerHTML += (numMedPaint + " Medium Painted Gadget(s): $" +numMedPaint*9 +"<br>");
    } 
    if (numMedPlate !== 0){
        console.log(numMedPlate + " Medium Plated Gadget(s): $" +numMedPlate*10)
        document.getElementById("finalOrderDisplay").innerHTML += (numMedPlate + " Medium Plated Gadget(s): $" +numMedPlate*10 +"<br>");
        totalCost = totalCost + (numMedPlate*10)
    }
    if (numLarPlain !== 0){
        console.log(numLarPlain + " Large Plain Gadget(s): $" +numLarPlain*11)
        document.getElementById("finalOrderDisplay").innerHTML += (numLarPlain + " Large Plain Gadget(s): $" +numLarPlain*11 +"<br>");
        totalCost = totalCost + (numLarPlain*11)
    } 
    if (numLarPaint !== 0){
        console.log(numLarPaint + " Large Painted Widget(s): $" +numLarPaint*12)
        document.getElementById("finalOrderDisplay").innerHTML += (numLarPaint + " Large Painted Widget(s): $" +numLarPaint*12 +"<br>");
        totalCost = totalCost + (numMedPaint*12)
    }
    if (numLarPlate !== 0){
        console.log(numLarPlate + " Large Plated Widget(s): $" +numLarPlate*13)
        document.getElementById("finalOrderDisplay").innerHTML += (numLarPlate + " Large Plated Widget(s): $" +numLarPlate*13 +"<br>");
        totalCost = totalCost + (numMedPlate*13)
    }
    console.log("Your total cost is $ " + totalCost)
    document.getElementById("finalOrderDisplay").innerHTML += ("Your total cost is $ " + totalCost +"<br>");
   
    }
    
 
    function showOrder(){
        numPurchases = purchaseOrder.length
        document.getElementById("writeHere").innerHTML = ""; //clear existing text
        for (i=0; i < numPurchases; i++){ //write current order
        document.getElementById("writeHere").innerHTML += (purchaseOrder[i] +"<br>");
    }
    }

    function clearLast() {
        purchaseOrder.pop(); //delete last item in purchase
        showOrder(); //rewrite the new order
    }
  

// Stuff I'm not using 

/* //the summarizing-the-order-right-on-the-page part
function printOrderToPage(){
numPurchases = purchaseOrder.length
for (i=0; i<numPurchases; i++) {
    document.writeln(purchaseOrder[i])
 }
} */



/*some trash data for testing
addGadget(7)
addGadget("small_plain_gadget")
addGadget(14)
addGadget("something")

//write out the order
sumOrder() */