// em có chèn nghĩa tiếng Việt vào vì em mụ tịt tiếng anh 
//Viết hàm trả về 1 thẻ sau khi dom
function domID(id) {
    return document.getElementById(id);
}
//Sử dụng cho bài 1:
function checkNumber(so1, so2, so3) {
    var khongHayKhong = (so1 > 0 && so2 > 0 && so3 > 0)
    return khongHayKhong;
}

//tính tổng điểm
function tinhTongDiem(diem1, diem2, diem3, diem4, diem5) {
    var tongDiem = 0;
    tongDiem = diem1 + diem2 + diem3 + diem4 + diem5;
    return tongDiem;
}
//Bài 2:tên hàm: tính hóa đơn tiền điện
function calculateElectricityBill(no_KWInput,no_KW1,no_KW2,no_KW3,no_KW4,no_KW5) {
    var electrical = 0;
     if (no_KWInput > 0 && no_KWInput <= 50) {
        electrical = no_KWInput * no_KW1;
    } else if (no_KWInput > 50 && no_KWInput <= 100) {
        electrical = (50 * no_KW1) + (no_KWInput - 50) * no_KW2;
    } else if (no_KWInput > 100 && no_KWInput <= 200) {
        electrical = (50 * no_KW1) + (50 * no_KW2) + (no_KWInput - 100) * no_KW3;
    } else if (no_KWInput > 200 && no_KWInput <= 350) {
        electrical = (50 * no_KW1) + (50 * no_KW2) + (100 * no_KW3) + (no_KWInput - 200) * no_KW4;
    } else {
        electrical = (50 * no_KW1) + (50 * no_KW2) + (100 * no_KW3) + (150 * no_KW4) + (no_KWInput - 350) * no_KW5;
    }
    return electrical;
}
//bài 3: tên hàm :tính thuế thu nhập cá nhân
function calculateTaxableIncome(income, numberOfdependents) {//bài 3; income: thu nhập, numberOfdependents: số người phụ thuộc
    var taxable = 0;
    if (income > 4e+6 && income <= 60e+6) {
        taxable = ((income - 4e+6) * 0.05) - (numberOfdependents * 1.6e+6 * 0.05);
    } else if (income > 60e+6 && income <= 120e+6) {
        taxable = ((income - 4e+6) * 0.1) - (numberOfdependents * 1.6e+6 * 0.1);
    } else if (income > 120e+6 && income <= 210e+6) {
        taxable = ((income - 4e+6) * 0.15) - (numberOfdependents * 1.6e+6 * 0.15);
    } else if (income > 210e+6 && income <= 384e+6) {
        taxable = ((income - 4e+6) * 0.2) - (numberOfdependents * 1.6e+6 * 0.2);
    } else if (income > 384e+6 && income <= 624e+6) {
        taxable = ((income - 4e+6) * 0.25) - (numberOfdependents * 1.6e+6 * 0.25);
    } else if (income > 624e+6 && income <= 960e+6) {
        taxable = ((income - 4e+6) * 0.3) - (numberOfdependents * 1.6e+6 * 0.3);
    } else {
        taxable = ((income - 4e+6) * 0.35) - (numberOfdependents * 1.6e+6 * 0.35);
    }
    return taxable;
}
//bài 4: 
function cable(billFee, serviceCharge, numberChannel, rentalFee) {//billFee: phí hóa đơn ;serviceCharge:phí dịch vụ ;rentalFee : phí thuê ;cable: cáp
    var cableMoney = 0;
    cableMoney = Number(billFee) + Number(serviceCharge) + ((Number(numberChannel) * rentalFee));
    return cableMoney;
}