# Advanced Usage of Arrow Functions in JavaScript

## Objective

Deepen your understanding of arrow functions in JavaScript by exploring their specific features and limitations. This assignment will help you understand how arrow functions differ from regular functions, especially in the context of `this` and `arguments`. You'll apply these concepts in various scenarios to reinforce your understanding.

## Instructions

### 1. Understand the Key Concepts

Arrow functions in JavaScript have some important characteristics that set them apart from regular functions:

- **No `this` Binding:** Arrow functions don’t have their own `this`. Instead, they inherit `this` from the outer lexical context.
- **No `arguments` Object:** Arrow functions do not have their own `arguments` object.
- **Not Usable as Constructors:** Arrow functions cannot be used as constructors and cannot be called with `new`.

### 2. Implement a Method Using Arrow Functions

You will implement an object method that uses arrow functions to demonstrate the difference in how `this` is handled compared to regular functions.

Use `console.log` to print the result to the console.

## Example Usage

```javascript
// Step 1: Create an object with a method using arrow functions
const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  displayMembers() {
    // Implement logic here
  },
};

// Test displayMembers method
team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
```

# Penggunaan Fungsi Panah Tingkat Lanjut di JavaScript

## Tujuan

Perdalam pemahaman Anda tentang fungsi panah di JavaScript dengan menjelajahi fitur dan batasan spesifiknya. Tugas ini akan membantu Anda memahami perbedaan fungsi panah dari fungsi biasa, terutama dalam konteks `ini` dan `argumen`. Anda akan menerapkan konsep-konsep ini dalam berbagai skenario untuk memperkuat pemahaman Anda.

## Petunjuk

### 1. Memahami Konsep Utama

Fungsi panah di JavaScript memiliki beberapa karakteristik penting yang membedakannya dari fungsi biasa:

- **Tidak Ada Pengikatan `ini`:** Fungsi panah tidak memiliki `ini` sendiri. Sebaliknya, mereka mewarisi `ini` dari konteks leksikal luar.
- **Tidak Ada Objek `argumen`:** Fungsi panah tidak memiliki objek `argumen` sendiri.
- **Tidak Dapat Digunakan sebagai Konstruktor:** Fungsi panah tidak dapat digunakan sebagai konstruktor dan tidak dapat dipanggil dengan `baru`.

### 2. Menerapkan Metode Menggunakan Fungsi Panah

Anda akan mengimplementasikan metode objek yang menggunakan fungsi panah untuk mendemonstrasikan perbedaan cara `ini` ditangani dibandingkan dengan fungsi biasa.

Gunakan `console.log` untuk mencetak hasilnya ke konsol.

## Contoh Penggunaan

```javascript
// Langkah 1: Buat objek dengan metode menggunakan fungsi panah
tim const = {
  nama: 'Tim Pengembang',
  anggota: ['Alice', 'Bob', 'Charlie'],

  anggota tampilan() {
    // Terapkan logika di sini
  },
};

// Uji metode displayMembers
tim.displayMembers();
// Keluaran yang diharapkan:
// Tim Pengembang: Alice
// Tim Pengembang: Bob
// Tim Pengembang: Charlie
```
