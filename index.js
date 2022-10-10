var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){

    var ip = Number(initialPrice.value);
    var qty  = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if (initialPrice.value == "" || stocksQuantity.value == "" || currentPrice.value == "") {
    showOutput("Field should not be empty" , "red");
  } else if (ip <= 0 || qty <= 0 || curr < 0) {
    showOutput("Price and Quantity should be greater than zero" , "red");
  } else {

    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial , quantity , current){
    if (initial > current){
        var loss = (initial - current) * quantity;
       var lossPercentage = (loss * 100) / (initial * quantity);

        showOutput(
          `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`,"red"
        );
    }else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit * 100) / (initial * quantity);

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`,"green"
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`, "green");
  }
}

function showOutput(message , color) {
  outputBox.innerHTML = message;
  outputBox.style.color = color;
}

}