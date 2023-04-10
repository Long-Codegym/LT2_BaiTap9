

/*bài tập1*/
function degreeCtoF() {
    let degreeC;
    let degreeF;
    degreeC = document.getElementById("doC").value;
    let C = parseInt(degreeC);
    let F = parseInt(degreeF);
    let CtoF = 9 / 5 * C + 32;
    document.getElementById("kq1").innerHTML = "F = " + CtoF + " độ F";
}


/*bài tập2*/
function bt2() {
    let m = parseFloat(document.getElementById("length").value);
    let kqbt2;
    if (m < 0) {
        kqbt2 = "số liệu không chính xác";
    }else {
        kqbt2 = m * 3.2808;
    }
    document.getElementById("kqbt2").innerHTML = "feet = " + kqbt2;
}

/*bài tập3*/
function bt3() {
    let a = parseFloat(document.getElementById("lengtha").value);
    let kqbt3;
    if (a < 0) {
        kqbt3 = "kích thước không được phép nhỏ hơn 0";
    }else {
        kqbt3 = a * a + "m^2";
    }
    document.getElementById("kqbt3").innerHTML = kqbt3
}


/*bài tập4*/
function bt4() {
    let d1 = parseFloat(document.getElementById("daia").value);
    let r1 = parseFloat(document.getElementById("daib").value);
    let kqbt4;
    if (d1 > 0 ) {
        if (r1 > 0){
            kqbt4 = "diện tích hcn là: " + d1 * r1;
        }else {
            kqbt4 = "độ dài cạnh không chính xác";
        }
    }else {
        kqbt4 = "độ dài cạnh không chính xác";
    }
    document.getElementById("kqbt4").innerHTML = kqbt4;
}


/*bài tập5*/
function bt5() {
    let a1 = parseFloat(document.getElementById("canha1").value);
    let b1 = parseFloat(document.getElementById("canhb1").value);
    let kqbt5;
    if (a1 > 0 ) {
        if (b1 > 0){
            kqbt5 = "diện tích hình tam giác vuông là: " + 1/2 * a1 * b1;
        }else {
            kqbt5 = "độ dài cạnh không chính xác";
        }
    }else {
        kqbt5 = "độ dài cạnh không chính xác";
    }
    document.getElementById("kqbt5").innerHTML = kqbt5;
}

/*bài tập6*/
function bt6() {
    let soA = Number(document.getElementById("soa").value);
    let soB = Number(document.getElementById("sob").value);
    let kqbt6;
    if (soA == 0 && soB ==0 ){
        kqbt6 = "phương trình có vố số nghiệm";
    }else if (soA != 0 && soB == 0) {
        kqbt6 = "phương trình có nghiệm x=0";
    }else if (soA == 0 && soB != 0) {
        kqbt6 = "phương trình vô nghiệm";
    }else {
        kqbt6 = "phương trình có nghiệm x = " + -soB / soA;
    }
    document.getElementById("kqbt6").innerHTML = kqbt6;
}

/*bải tap7*/
function bt7() {
    let x = Number(document.getElementById("so_a").value);
    let y = Number(document.getElementById("so_b").value);
    let z = Number(document.getElementById("so_c").value);
    let delta = y*y-4*x*z;
    let x1, x2;
    let kqbt7;
    if (x !=0) {
        if (delta == 0) {
            kqbt7 = "phương trình có nghiệm kép x1=x2 " + -y / (2 * x);
            document.getElementById("kqbt7").innerHTML = kqbt7;
        } else if (delta > 0) {
            kqbt7 = "phương trình có 2 nghiệm" + "x1 =" + (-y + Math.sqrt(delta)) / (2 * x) + " x2 =" + ( -y - Math.sqrt(delta)) / (2 * x);
            document.getElementById("kqbt7").innerHTML = kqbt7;
        } else {
            kqbt7 = "phương trình vô nghiệm";
        }
    }else {
        kqbt7 = "phương trình có 1 nghiệm x= " + (-z/y);
    }
        document.getElementById("kqbt7").innerHTML = kqbt7;
}

/*bài tập8*/
function bt8() {
let agee = parseInt(document.getElementById("age").value);
let kqbt8;
if (0 < agee && agee < 120){
    if (agee < 18) {
        kqbt8 = "trẻ vị thành niên";
    } else if (agee < 40) {
        kqbt8 = "thanh niên";
    } else if (agee < 60) {
        kqbt8 = "trung niên";
    } else {
        kqbt8 = "Lão niên";
    }
}else {
    kqbt8 = "không xác định được";
}
    document.getElementById("kqbt8").innerHTML = kqbt8;
}

/*bài tập 9*/
function bt9() {
    let CA = parseFloat(document.getElementById("11").value);
    let CB = parseFloat(document.getElementById("22").value);
    let CC = parseFloat(document.getElementById("33").value);
    let kqbt9;
    if (CA>0 && CB>0 && CC>0){
        if (CA+CB>CC && CB+CC>CA && CA+CC>CB){
            kqbt9 = "là 3 cạnh của tam giác";
        }else {
            kqbt9 = "ko phải 3 cạnh của tam giác";
        }
    }else {
        kqbt9 = "ko phải 3 cạnh của tam giác";
    }
    document.getElementById("kqbt9").innerHTML = kqbt9;
}

/*bài tập10*/
function bt10() {
    let bac1 = 1678;
    let bac2 = 1734;
    let bac3 = 2014;
    let bac4 = 2536;
    let bac5 = 2834;
    let bac6 = 2927;
    let sotien;
    let kWh = parseInt(document.getElementById("electric").value);
    if (kWh >0){
        if (kWh <= 50){
            sotien = kWh * bac1;
        }else if (kWh <=100){
            sotien = (50*bac1) + (kWh-50)*bac2;
        }else if (kWh <=200){
            sotien = (50*bac1) + (50*bac2)+ (kWh-100)*bac3;
        }else if (kWh <=300){
            sotien = (50*bac1) + (50*bac2) + (100*bac3) + (kWh-200)*bac4;
        }else if (kWh <=400){
            sotien = (50*bac1) + (50*bac2) + (100*bac3) + (100*bac4) + (kWh-300)*bac5;
        }else {
            sotien = (50*bac1) + (50*bac2) + (100*bac3) + (100*bac4) + (100*bac5) + (kWh-400)*bac6;
        }
    }else {
        sotien = "số kWh không được nhỏ hơn không";
    }
    document.getElementById("moneyel").innerHTML = "số tiền phải trả: " + sotien + " VND";
}


/*bai tap11*/
function bt11() {
    let S = parseInt(document.getElementById("thunhap").value);
    let TCN;
    if (S >0){
        if (S >5000000){
            TCN = 250000 + (5/100 * S);
        }else if (S >10000000){
            TCN = 750000 + (15/100 * S);
        }else if (S >18000000){
            TCN = 1950000 + (20/100 * S);
        }else if (S >32000000){
            TCN = 4750000 + (25/100 * S);
        }else if (S >52000000){
            TCN = 9750000 + (30/100 * S);
        }else if (S >80000000){
            TCN = 18150000 + (35/100 * S);
        }else {
            TCN = 0 + (5/100 * S);
        }
    }else {
        TCN = "không phải nộp thuế"
    }
    document.getElementById("thue").innerHTML = "Thuế các nhân phải nộp là: " + TCN + " VND";
}

/*bài tập12*/
function bt12() {

}