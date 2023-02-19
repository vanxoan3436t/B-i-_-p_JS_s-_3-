
//bài 1:
document.getElementById('btn-ketQua1').onclick = function () {
    //input
    var diemMonThu1 = Number(domID('diemMonThu1').value);
    var diemMonThu2 = Number(domID('diemMonThu2').value);
    var diemMonThu3 = Number(domID('diemMonThu3').value);
    var khuVuc = Number(domID('listKhuVuc').value);
    var doiTuong = Number(domID('listDoiTuong').value);
    var diemChuan = Number(domID('diemChuan').value);
    //ouptut 
    var dauHoacRot = '';
    var diemTong = 0;
    //xủ lý
    if (checkNumber(diemMonThu1, diemMonThu2, diemMonThu3) == 0) {
        dauHoacRot = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng  '
    } else if ((diemTong = tinhTongDiem(diemMonThu1, diemMonThu2, diemMonThu3, khuVuc, doiTuong)) >= diemChuan) {
        dauHoacRot = 'Bạn đã đậu. Tổng điểm:';
    } else {
        diemTong < diemChuan;
        dauHoacRot = 'Bạn đã rớt. Tổng điểm:';
    }
    domID('ketQuaB1').innerHTML = dauHoacRot + diemTong;
}
/*bài 2 */
document.getElementById('btn-ketQua2').onclick = function () {
    //input
    var hoTen = domID('hoTen').value;
    var soKW = Number(domID('soKW').value);
    var so50KwDau = 500;//50
    var so50KwKe = 650;//100
    var so100KwKe = 850;//200
    var so150KwKe = 1100;//350
    var soConLai = 1300;
    //uotput
    hoTenInRa = hoTen;
    tienDien = 0;
    //process
    if (soKW == 0) {
        alert('Số kw không hợp lệ! Vui lòng nhập lại');
    } else {
        tienDien = calculateElectricityBill(soKW, so50KwDau, so50KwKe, so100KwKe, so150KwKe, soConLai);
    }
    domID('ketQuaB2').innerHTML = 'Họ Tên: ' + hoTenInRa + '; ' + 'Tiền điện: ' + tienDien.toLocaleString();
}
// bài 3
document.getElementById('btn-ketQua3').onclick = function () {
    //input
    var hoTenBai3 = domID('hoTenBai3').value;
    var tongThuNhapNam = Number(domID('tongThuNhapNam').value);
    var soNguoiPhuThuoc = Number(domID('soNguoiPhuThuoc').value);
    //ouptut
    var hoTenInRa = hoTenBai3;
    var tienThue = 0;
    //process
    tienThue = calculateTaxableIncome(tongThuNhapNam, soNguoiPhuThuoc);
    if (tienThue < 0 || tongThuNhapNam <= 4e+6) {
        alert('Số tiền thu nhập không hợp lệ');
        tienThue = 0;
    }
    domID('ketQuaB3').innerHTML = 'Họ tên:' + hoTenInRa + '; ' + 'Tiền thuế thu nhập cá nhân: ' + tienThue.toLocaleString() + 'VND';
}
//bài 4
function anHien() {//ẩn hiện input soKết nối
    var loaiKH = domID('mySelect').value;
    var show = domID('showHide');
    show.className = ' d-none';
    if (loaiKH === '2') {
        show.className = ' d-block';
    }

}

document.getElementById('btn-ketQua4').onclick = function () {
    //input
    var loaiKH = domID('mySelect').value;
    var maKhachHang = domID('maKhachHang').value;
    var soKenh = Number(domID('soKenhCC').value);
    var phiXuLyHoaDon = 4.5;
    var phiDichVu = 20.5;
    var thueKenh = 7.5;
    //output
    var maKhachHangInRa = maKhachHang;
    var tienCap = 0;
    //process
    if (loaiKH == '0') {
        alert('Hãy chọn loại khách hàng');
    } else if (loaiKH == '1') {
        tienCap = cable(phiXuLyHoaDon, phiDichVu, soKenh, thueKenh);
    } else {
        loaiKH == '2';
        var soKetNoi = Number(domID('soKetNoi').value)
        var phiXuLyHoaDonDN = 15;
        var phiDichVuDN = 75;
        var thueKenhDN = 50;
        if (soKetNoi <= 10) {
            tienCap = cable(phiXuLyHoaDonDN, phiDichVuDN, soKenh, thueKenhDN)
        } else if (soKetNoi > 10) {
            phiDichVuDN = 75 + (soKetNoi - 10) * 5;
            tienCap = cable(phiXuLyHoaDonDN, phiDichVuDN, soKenh, thueKenhDN)
        }
    }
    domID('ketQuaB4').innerHTML = 'Mã khách hàng: ' + maKhachHangInRa + 'Tiền cáp: $' + tienCap.toLocaleString() + '.00';
}