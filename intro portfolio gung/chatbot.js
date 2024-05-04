
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

// Define a simple set of responses
const responses = [
  {
    input: '1',
    response: 'Halo'
  },
  {
    input:"3",
    response:'hobi'
  },
  {
    input: '5',
    response: 'barang apa yang kamu sukai'
  },

  {
    input: '7',
    response: 'kamu lagi suka sama siapa'
  },
  {
    input: '9',
    response: 'apa tujuan kamu'
  },
  
  {
    input: '12',
    response: 'hal apa yang kamu inginkan'
  },
  {
    input: '16',
    response: 'lucu'
  },
  {
    input: '14',
    response: 'apa yang buat kamu bertahan sampai sekarang'
  },
  {
    input: '20',
    response: 'apa keajaiban dunia'
  },
  {
    input: '18',
    response: 'ceritakan tentang diri anda'
  },
 



  {
    input: 'halo',
    response: 'halo juga,tumben nyapa ada maunya nih ya?'
  },
  {
    input: 'hobi',
    response: 'hobi saya memancing bro,,memancing si dia untuk datang lalu pergi dan menghilang,,jangan terlalu serius bro karena hidup ini rata-rata bercanda bro,jangan lupa tersenyum'
  },
 
  {
    input: 'barang apa yang kamu sukai',
    response: 'jam tangan,alasanya jam tangan sering digunakan sebagai pengingat akan waktu atau jadwal tertentu juga berfungsi sebagai pengingat hal hal penting contohnya jadwal ketemu mantan'
  },
  {
    input: 'kamu lagi suka sama siapa',
    response: 'lagi suka sama seseorang yang bisa menjaga hatinya dari godaan setan,,hheee'
  },
  {
    input: 'apa tujuan kamu',
    response: 'tujuan saya itu membahagiakan si dia,,tpi boong, tujuan saya adalah bisa membantu orang lain dan bisa membahagiakan kedua orang tua saya dan saya juga ya haha'
  },
  {
    input: 'hal apa yang kamu inginkan',
    response: 'bisa melihat kedua orang tua tersenyum di saat saya sukses'
  },
  {
    input: 'lucu',
    response: 'iyaa,lucu bro,,dipikir pikir ngomong sama bot,emng ga ada orang yang lu chat '
  },
  {
    input: 'apa yang buat kamu bertahan sampai sekarang',
    response: 'ada harapan orang tua yang sangat besar untuk anaknya'
  },
  {
    input: 'apa keajaiban dunia',
    response: 'bisa melihat,bisa mendengar,bisa menyentuh,bisa merasakan,bisa juga menyayangi kamu,'
  },
  {
    input: 'ceritakan tentang diri anda',
    response: 'sorrry bro lagi mless,lo aja we ya yg cerita gue dengerinn,emm'
  }
 
];

// Add an event listener to the submit button
submit.addEventListener('click', () => {
  const message = input.value.toLowerCase();
  input.value = '';

  // Check if the user's message matches any of the defined inputs
  const response = responses.find(res => res.input === message);

  // If a match is found, display the corresponding response
  if (response) {
    output.textContent = response.response;
  } else {
    output.textContent = 'Maaf Kawan Saya Tidak Bisa Menjawab Pertanyaan Anda Coba Pertanyaan Yang Lain Ya,,hhee';
  }
});
