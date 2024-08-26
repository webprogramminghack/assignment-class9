# Advanced Function Closures and Lexical Environment in JavaScript

## Objective

Understand how JavaScript's lexical environment works by creating functions that return other functions. This assignment will challenge you to work with closures, demonstrating how inner functions can retain access to variables in their outer lexical environment even after the outer function has returned.

## Instructions

### 1. Understand the Lexical Environment

JavaScript functions create a new lexical environment each time they are invoked. This environment allows inner functions to access variables declared in the outer function, even after the outer function has finished executing. This is known as a closure.

### 2. Implement a Function that Returns a Function

You will implement a function called `createCounter` that:

- Accepts an initial value as its argument.
- Returns an inner function that can increment, decrement, or reset the counter.
- The returned function should be able to:
  - Increment the counter by a given value.
  - Decrement the counter by a given value.
  - Reset the counter to its initial value.

### 3. Add a Logging Feature

Enhance the `createCounter` function so that it also logs each operation (increment, decrement, reset) and the resulting counter value. The logs should be stored and accessible via a method on the returned function.

## Example Usage

```javascript
// Step 1: Implement the createCounter function
function createCounter(initialValue) {
  // Implement logic here
}

// Test createCounter
const counter = createCounter(10);
counter.increment(5); // Counter: 15
counter.decrement(3); // Counter: 12
counter.reset(); // Counter: 10
console.log(counter.getLogs()); // this should produce the following
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
```

# Penutupan Fungsi Tingkat Lanjut dan Lingkungan Leksikal dalam JavaScript

## Tujuan

Pahami cara kerja lingkungan leksikal JavaScript dengan membuat fungsi yang mengembalikan fungsi lainnya. Tugas ini akan menantang Anda untuk bekerja dengan penutupan, menunjukkan bagaimana fungsi dalam dapat mempertahankan akses ke variabel dalam lingkungan leksikal luarnya bahkan setelah fungsi luarnya kembali.

## Petunjuk

### 1. Memahami Lingkungan Leksikal

Fungsi JavaScript menciptakan lingkungan leksikal baru setiap kali dipanggil. Lingkungan ini memungkinkan fungsi dalam untuk mengakses variabel yang dideklarasikan dalam fungsi luar, bahkan setelah fungsi luar selesai dijalankan. Ini dikenal sebagai penutupan.

### 2. Mengimplementasikan Fungsi yang Mengembalikan Fungsi

Anda akan mengimplementasikan fungsi bernama `createCounter` yang:

- Menerima nilai awal sebagai argumennya.
- Mengembalikan fungsi dalam yang dapat menambah, mengurangi, atau mengatur ulang penghitung.
- Fungsi yang dikembalikan harus dapat:
  - Tingkatkan penghitung dengan nilai tertentu.
  - Kurangi penghitung dengan nilai tertentu.
  - Reset penghitung ke nilai awalnya.

### 3. Tambahkan Fitur Pencatatan

Tingkatkan fungsi `createCounter` sehingga ia juga mencatat setiap operasi (penambahan, pengurangan, pengaturan ulang) dan nilai penghitung yang dihasilkan. Log harus disimpan dan dapat diakses melalui metode pada fungsi yang dikembalikan.

## Contoh Penggunaan

```javascript
// Langkah 1: Implementasikan fungsi createCounter
fungsi createCounter(Nilai Awal) {
  // Terapkan logika di sini
}

// Uji buatCounter
const counter = createCounter(10);
counter.kenaikan(5); // Penghitung: 15
counter.penurunan(3); // Penghitung: 12
counter.reset(); // Penghitung: 10
konsol.log(penghitung.getLogs()); // ini akan menghasilkan yang berikut ini
// [
// "Bertambah 5, nilai baru: 15",
// "Berkurang 3, nilai baru: 12",
// "Penghitung reset ke nilai awal: 10"
// ]
```
