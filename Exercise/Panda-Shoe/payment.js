const buyNewBtn = document.getElementsByClassName('btn-buy');

for(const buyBtn of buyNewBtn) {
    buyBtn.addEventListener('click', function() {
        window.location.href = 'payment.html';
    })
}

const cartNewBtn = document.getElementsByClassName('btn-cart');

for(const cartBtn of cartNewBtn) {
    cartBtn.addEventListener('click', function() {
        window.location.href = 'payment.html';
    })
}