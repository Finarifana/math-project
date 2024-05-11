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

// Fungsi untuk menghitung LCD (KPK)
function calculateLCD(a, b) {
    return (a * b) / calculateGCD(a, b);
}

// Fungsi untuk menangani pengiriman formulir LCD
function handleLCDFormSubmit(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)
    var num1 = parseInt(document.getElementById('lcdNum1').value);
    var num2 = parseInt(document.getElementById('lcdNum2').value);
    var lcd = calculateLCD(num1, num2);
    document.getElementById('lcdResult').innerHTML = "LCD (KPK) dari " + num1 + " dan " + num2 + " adalah: " + lcd;
}

// Menangani pengiriman formulir LCD
document.getElementById('lcdForm').addEventListener('submit', handleLCDFormSubmit);

// Fungsi untuk membersihkan input LCD
function clearLCD() {
    document.getElementById('lcdNum1').value = '';
    document.getElementById('lcdNum2').value = '';
    document.getElementById('lcdResult').innerHTML = '';
}
