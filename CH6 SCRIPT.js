
/* this is the java script section of chapter six, this part only contains the script/behavouir and technicalities for chapter 6  */
/* HTML is used to create a website's framework, CSS for style that framework, and JavaScript to introduce add interactivity and behaviour */

function calculateTotal() { /* create a java script funtion inorder to claculate the gas price */
    

    /* Get the inout values */

    /* let keyword used here to declare variables */
    /* parseFloat converts values into float/decimals (- - . - - / 0.00 )  */
    /* usage of "doc....getElementById" finds the input field with the id "costPerLiter" by getting value entered by the user in field */
    let costPerLiter = parseFloat(document.getElementById("costPerLiter").value);  /* this part basically is let the value of cost/liter be what the user has inputed */
    let liters = parseFloat(document.getElementById("liters").value); /* the same with the above line but this time let the value of amout(in liters) be what user inputed */

    /* multiple the cost/liter by amout(in liter) */
    let totalCost = costPerLiter * liters; /* let the total (result) be cost per liter times liters */

    /* here the "doc...getElementById("totalCost")" finds the span (the span tag in html) with the id "totalCost" and the text in the span is updated */
    /* "toFixed(2)" here makes sure that the result is presented in decimal points (0.00) */
    document.getElementById("totalCost").textContent = totalCost.toFixed(2); /* display the result "totalCos" */

    
}

