function update(type) {
    const name = document.getElementById('plan-name');
    const price = document.getElementById('btn-price');
    const inst = document.getElementById('inst-val');
    
    if(type === 'lite') {
        name.innerText = "WEEKLY MEMBERSHIP LITE";
        price.innerText = "50.00";
        inst.innerText = "20";
    } else if(type === 'weekly') {
        name.innerText = "WEEKLY MEMBERSHIP";
        price.innerText = "159.00";
        inst.innerText = "200";
    } else {
        name.innerText = "MONTHLY MEMBERSHIP";
        price.innerText = "799.00";
        inst.innerText = "1000";
    }
}

function showPayment() { document.getElementById('pay-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('pay-modal').style.display = 'none'; }
