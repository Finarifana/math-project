// Fungsi untuk menghitung GCD (PBB)
function calculateGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateGCD(b, a % b);
}

// Fungsi untuk menangani pengiriman formulir GCD
function handleGCDFormSubmit(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)
    var num1 = parseInt(document.getElementById('gcdNum1').value);
    var num2 = parseInt(document.getElementById('gcdNum2').value);
    var gcd = calculateGCD(num1, num2);
    document.getElementById('gcdResult').innerHTML = "GCD (PBB) dari " + num1 + " dan " + num2 + " adalah: " + gcd;
}

// Menangani pengiriman formulir GCD
document.getElementById('gcdForm').addEventListener('submit', handleGCDFormSubmit);

// Fungsi untuk membersihkan input GCD
function clearGCD() {
    document.getElementById('gcdNum1').value = '';
    document.getElementById('gcdNum2').value = '';
    document.getElementById('gcdResult').innerHTML = '';
}
// Fungsi untuk menghitung LCM (KPK)
function calculateLCM(a, b) {
    return (a * b) / calculateGCD(a, b);
}

// Fungsi untuk menangani pengiriman formulir LCM
function handleLCMFormSubmit(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)
    var num1 = parseInt(document.getElementById('lcmNum1').value);
    var num2 = parseInt(document.getElementById('lcmNum2').value);
    var lcm = calculateLCM(num1, num2);
    document.getElementById('lcmResult').innerHTML = "LCM (KPK) dari " + num1 + " dan " + num2 + " adalah: " + lcm;
}

// Menangani pengiriman formulir LCM
document.getElementById('lcmForm').addEventListener('submit', handleLCMFormSubmit);

// Fungsi untuk membersihkan input LCM
function clearLCD() {
    document.getElementById('lcmNum1').value = '';
    document.getElementById('lcmNum2').value = '';
    document.getElementById('lcmResult').innerHTML = '';
}
