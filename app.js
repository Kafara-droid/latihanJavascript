// Scope & Arrow Function
const nama = 'John Doe';

const getNama = () => {
    console.log(nama);
};

getNama();

// JSON Parsing
const json = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(json);
console.log(obj.name);

// Data Mahasiswa
const dataMahasiswa = [
    { nama: 'John Doe', nim: '12345', jurusan: 'Teknik Informatika' },
    { nama: 'Jane Smith', nim: '54321', jurusan: 'Sistem Informasi' },
    { nama: 'Michael Johnson', nim: '67890', jurusan: 'Teknik Elektro' }
];

// Object Manipulation (LOOP, MAP, FILTER)
// Loop
dataMahasiswa.forEach(mahasiswa => {
    console.log(mahasiswa.nama);
});

// Map
const namaMahasiswa = dataMahasiswa.map(mahasiswa => mahasiswa.nama);
console.log(namaMahasiswa);

// Filter
const jurusanTeknik = dataMahasiswa.filter(mahasiswa => mahasiswa.jurusan === 'Teknik Informatika');
console.log(jurusanTeknik);

// Synchronous & Asynchronous using async & await
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data berhasil diambil');
        }, 2000);
    });
}

async function getData() {
    const resul = await fetchData();
    console.log(resul);
}

getData();

// Promise
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Data berhasil diambil');
    }, 2000);
});

promise.then(result => {
    console.log(result);
});

// Consume API using fetch()
fetch('https://dummyjson.com/products/5')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Using Apex chart to visualize data
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            name: 'Data Set 1',
            data: [10, 20, 30, 40, 50]
        },
        {
            name: 'Data Set 2',
            data: [5, 15, 25, 35, 45]
        }
    ]
};

new ApexCharts(document.getElementById('chart'), {
    series: chartData.datasets,
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: chartData.labels
    }
}).render();

// Render Mahasiswa Table
function renderMahasiswaTable() {
    const tableBody = document.getElementById('mahasiswa-table');
    tableBody.innerHTML = '';

    dataMahasiswa.forEach(mahasiswa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${mahasiswa.nama}</td>
            <td class="border px-4 py-2">${mahasiswa.nim}</td>
            <td class="border px-4 py-2">${mahasiswa.jurusan}</td>
        `;
        tableBody.appendChild(row);
    });
}

renderMahasiswaTable();
