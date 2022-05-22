class conNguoi {
    constructor(ten, tuoi, gioiTinh, diaChi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    gt() {
        if (this.gioiTinh == 1) {
            return "Nam";
        }
        else if (this.gioiTinh) {
            return "Nu";
        }
        else {
            return "Gioi tinh thu 3";
        }
    }
    hienThiThongTin() {
        var tbody = document.getElementById('tbody');
        tbody.innerHTML +=
            `<tr>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.gt()}</td>
            <td>${this.diaChi}</td>
        </tr>`;
    }
}
var conNguoi1 = new conNguoi('VanA', 18, 2, 'Ha Noi');
conNguoi1.hienThiThongTin();
var conNguoi2 = new conNguoi('VanB', 18, 1, 'Ha Noi');
conNguoi2.hienThiThongTin();
var conNguoi3 = new conNguoi('VanC', 16, 3, 'Ha Noi');
conNguoi3.hienThiThongTin();
class sinhVien extends conNguoi {
    constructor(ten, tuoi, gioiTinh, diaChi, msv, diemToan, diemLy, diemHoa) {
        super(ten, tuoi, gioiTinh, diaChi);
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    diemTB() {
        return ((this.diemToan + this.diemLy + this.diemHoa) / 3);
    }
    ;
    checkDiemTB() {
        let xepLoai = this.diemTB();
        if (xepLoai < 5) {
            return 'Kem';
        }
        else if (xepLoai >= 5 && xepLoai < 8) {
            return 'Kha';
        }
        else {
            return 'Gioi';
        }
    }
    showSinhVien() {
        var tbody_sv = document.getElementById("tbody-sv");
        tbody_sv.innerHTML += `
            <tr>
                <td>${this.msv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>
                <td>${this.diemToan}</td>
                <td>${this.diemLy}</td>
                <td>${this.diemHoa}</td>
                <td>${this.diemTB().toFixed(2)}</td>
                <td>${this.checkDiemTB()}</td>
            </tr>
        `;
    }
}
var sinhvien1 = new sinhVien('VanA', 18, 2, 'Ha Noi', 'A2110H1', 9, 8, 9);
sinhvien1.showSinhVien();
var sinhvien2 = new sinhVien('VanB', 18, 2, 'Ha Noi', 'B2110H1', 7, 9, 6);
sinhvien2.showSinhVien();
var sinhvien3 = new sinhVien('VanC', 19, 2, 'Ha Noi', 'C2110H1', 4, 8, 4);
sinhvien3.showSinhVien();
class nhanVien extends conNguoi {
    constructor(ten, tuoi, gioiTinh, diaChi, mnv, luongCB, soNgayCong) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.gt();
        this.mnv = mnv;
        this.luongCB = luongCB;
        this.soNgayCong = soNgayCong;
    }
    tinhLuong() {
        return this.luongCB * this.soNgayCong;
    }
    checkLuong() {
        var tongLuong = this.tinhLuong();
        if (tongLuong <= 5000000) {
            return "Nhan vien moi";
        }
        else if (tongLuong > 5000000 && tongLuong < 10000000) {
            return "Nhan vien chinh thuc";
        }
        else {
            return "Nhan vien lau nam";
        }
    }
    showNhanVien() {
        var tbody_gv = document.getElementById("tbody-gv");
        tbody_gv.innerHTML += `
            <tr>
                <td>${this.mnv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>
                <td>${this.soNgayCong}</td>
                <td>${this.luongCB}</td>
                <td>${this.tinhLuong()}</td>
                <td>${this.checkLuong()}</td>
            </tr>
        `;
    }
}
var nhanVien1 = new nhanVien('VanA', 18, 2, 'Ha Noi', 'A2110H1', 500000, 12);
nhanVien1.showNhanVien();
var nhanVien2 = new nhanVien('VanB', 19, 1, 'Ha Noi', 'B2110H1', 1000000, 30);
nhanVien2.showNhanVien();
