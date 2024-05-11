// Fungsi untuk menghitung GCD (PBB)
function calculateGCD() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    
    var gcd = calculate(num1, num2);
    
    document.getElementById('result').innerHTML = "GCD (PBB) of " + num1 + " and " + num2 + " is: " + gcd;
}

function calculate(a, b) {
    if (b === 0) {
        return a;
    }
    return calculate(b, a % b);
}

// Menangani pengiriman formulir
document.getElementById('gcdForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)
    calculateGCD(); // Panggil fungsi untuk menghitung GCD
});
