

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
    totalCost = totalCost + (numSmaPlain*5)
} 
if (numSmaPaint !== 0){
    console.log(numSmaPaint + " Small Painted Gadget(s): $" +numSmaPaint*6)
    totalCost = totalCost + (numSmaPaint*6)
} 
if (numSmaPlate !== 0){
    console.log(numSmaPlate + " Small Plated Gadget(s): $" +numSmaPlate*7)
    totalCost = totalCost + (numSmaPlate*7)
} 
if (numMedPlain !== 0){
    console.log(numMedPlain + " Medium Plain Gadget(s): $" +numMedPlain*8)
    totalCost = totalCost + (numMedPlain*8)
}
if (numMedPaint !== 0){
    console.log(numMedPaint + " Medium Painted Gadget(s): $" +numMedPaint*9)
    totalCost = totalCost + (numMedPaint*9)
} 
if (numMedPlate !== 0){
    console.log(numMedPlate + " Medium Plated Gadget(s): $" +numMedPlate*10)
    totalCost = totalCost + (numMedPlate*10)
}
if (numLarPlain !== 0){
    console.log(numLarPlain + " Large Plain Gadget(s): $" +numLarPlain*11)
    totalCost = totalCost + (numLarPlain*11)
} 
if (numLarPaint !== 0){
    console.log(numLarPaint + " Large Painted Widget(s): $" +numLarPaint*12)
    totalCost = totalCost + (numMedPaint*12)
}
if (numLarPlate !== 0){
    console.log(numLarPlate + " Large Plated Widget(s): $" +numLarPlate*13)
    totalCost = totalCost + (numMedPlate*13)
}
console.log("Your total cost is $ " + totalCost)

}









purchaseOrder = ["(1) Medium Painted Gadget @   $9.00", "(1) Medium Plated Gadget @   $10.00", "(1) Large Plated Gadget @   $13.00", "(1) Large Plain Gadget @   $11.00"]
sumOrder(purchaseOrder)
console.log(numSmaPlain)
console.log(numLarPaint)