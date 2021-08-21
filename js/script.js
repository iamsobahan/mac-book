// function declaration of memory cost count

function extraMemoryCost(memoryCost) {
    const exMemoCost = document.getElementById('extraMemoCost');
    exMemoCost.innerText = memoryCost;

}

// function declaration of storage cost count

function extraStorageCost(storageCost) {
    const exStoCost = document.getElementById('extrastorage')
    exStoCost.innerText = storageCost;

}


// function declaration of delivery cost count

function extraDeliveryCost(deliveryCost) {
    const exDeliveryCost = document.getElementById('extraDeliveryCost');
    exDeliveryCost.innerText = deliveryCost;

}

// function declaration for promo code 

function promoCode() {
    const promoInput = document.getElementById('inputPromo');
    if (promoInput.value == 'stevekaku') {
        const subTotal = document.getElementById('lastTotal');
        const totalPriceAmount = document.getElementById('totalAmount');
        const subTotalInner = parseInt(totalPriceAmount.innerText);
        const promoCount = subTotalInner / 20;
        const TotalValue = subTotalInner - promoCount;
        subTotal.innerText = Math.round(TotalValue);
        promoInput.value = '';

    }

}

// function declaration for Counting total Price

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



// memory cost count addeventlistener for 180 and calling function inside

document.getElementById('sixteenmemory').addEventListener('click', function () {
    extraMemoryCost(180);
    totalPrice();
})

// memory cost count addeventlistener f0r 0 and calling function inside
document.getElementById('eightmemory').addEventListener('click', function () {
    extraMemoryCost(0);
    totalPrice();
})


// storage cost count addeventlistener f0r 0 and calling function inside
document.getElementById('regulerstorage').addEventListener('click', function () {
    extraStorageCost(0);
    totalPrice();
})

// storage cost count addeventlistener f0r 100 and calling function inside
document.getElementById('mediumstorage').addEventListener('click', function () {
    extraStorageCost(100);
    totalPrice();
})

// storage cost count addeventlistener f0r 180 and calling function inside
document.getElementById('highstorage').addEventListener('click', function () {
    extraStorageCost(180);
    totalPrice();
})

// reguler delivery  cost count addeventlistener f0r 0 and calling function inside
document.getElementById('regulerDeliCost').addEventListener('click', function () {
    extraDeliveryCost(0);
    totalPrice();
})

// reguler delivery  cost count addeventlistener f0r 20  and calling function inside

document.getElementById('primeDeliCost').addEventListener('click', function () {
    extraDeliveryCost(20);
    totalPrice();
})

// promocode code addEventListener and created a function by promocode on the top

document.getElementById('promobtn').addEventListener('click', function () {
    promoCode();
})