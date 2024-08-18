function calculate(){
    console.log('abc');
    const weightInGram = document.getElementById('weightInGram').value;
    const weightInPae = weightInGram / 1.0205;
    document.getElementById('weightInPae').textContent = weightInPae.toFixed(2);

    //actualGoldPrice   // currentPrice
    const  currentPrice = document.getElementById('currentPrice').value;
    const actualGoldPrice = weightInPae * (currentPrice / 16 );
    document.getElementById('actualGoldPrice').textContent = actualGoldPrice.toFixed(0);

    // serviceCharge //salePrice

    const salePrice = document.getElementById('salePrice').value;
    const serviceCharges = salePrice - actualGoldPrice;
    document.getElementById('serviceCharges').textContent = serviceCharges.toFixed(0);

}