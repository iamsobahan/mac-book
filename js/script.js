function extraMemoryCost(memoryCost) {
    const exMemoCost = document.getElementById('extraMemoCost');
    exMemoCost.innerText = memoryCost;

}

function extraStorageCost(storageCost) {
    const exStoCost = document.getElementById('extrastorage')
    exStoCost.innerText = storageCost;

}

function extraDeliveryCost(deliveryCost) {
    const exDeliveryCost = document.getElementById('extraDeliveryCost');
    exDeliveryCost.innerText = deliveryCost;


}

function promoCode() {
    const promoInput = document.getElementById('inputPromo');
    if (promoInput.value == 'stevekaku ') {
        const subTotal = document.getElementById('lastTotal');
        const subTotalInner = parseInt(subTotal.innerText);
        const promoCount = subTotalInner / 20;
        const TotalValue = subTotalInner - promoCount;
        subTotal.innerText = Math.round(TotalValue);
        promoInput.value = '';
        promoInput.setAttribute('disabled', true);
        promoInput.setAttribute('title', "You can use Promo code Once");

    }

}

function totalPrice() {
    const bestpriceValue = document.getElementById('bestPrice');
    const totalPriceAmount = document.getElementById('totalAmount');
    const exMemoCost = parseInt(document.getElementById('extraMemoCost').innerText);
    const exStoCost = parseInt(document.getElementById('extrastorage').innerText);
    const exDeliveryCost = parseInt(document.getElementById('extraDeliveryCost').innerText);
    const bestpriceValueNum = parseInt(bestpriceValue.innerText);
    const total = bestpriceValueNum + exMemoCost + exStoCost + exDeliveryCost;
    totalPriceAmount.innerText = total;
    document.getElementById('lastTotal').innerText = total;

}

document.getElementById('sixteenmemory').addEventListener('click', function () {
    extraMemoryCost(180);
    totalPrice();
})


document.getElementById('eightmemory').addEventListener('click', function () {
    extraMemoryCost(0);
    totalPrice();
})

document.getElementById('regulerstorage').addEventListener('click', function () {
    extraStorageCost(0);
    totalPrice();
})


document.getElementById('mediumstorage').addEventListener('click', function () {
    extraStorageCost(100);
    totalPrice();
})


document.getElementById('highstorage').addEventListener('click', function () {
    extraStorageCost(180);
    totalPrice();
})


document.getElementById('regulerDeliCost').addEventListener('click', function () {
    extraDeliveryCost(0);
    totalPrice();
})

document.getElementById('primeDeliCost').addEventListener('click', function () {
    extraDeliveryCost(20);
    totalPrice();
})

document.getElementById('promobtn').addEventListener('click', function () {
    promoCode();
})