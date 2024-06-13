function calculateBill() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let totalWithoutGst = 0;

    checkboxes.forEach(checkbox => {
        totalWithoutGst += parseInt(checkbox.getAttribute('data-price'));
    });

    let gst = totalWithoutGst * 0.18;
    let total = totalWithoutGst + gst;

    let btn = document.getElementById("bill-details")
    btn.innerHTML = `
   Amount without Tax: Rs${totalWithoutGst};
    Tax Amount (18% GST): Rs${gst.toFixed(2)};
    Total Amount to be payed : Rs${total.toFixed(2)}`;
}