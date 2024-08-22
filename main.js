const axios = require('axios');
const ExcelJS = require('exceljs');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}

function parseData(html) {
    // Пример парсинга: извлечение всех ссылок из HTML (измените это по вашему требованию)
    const links = [];
    const regex = /href="([^"]*)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        links.push(match[1]);
    }
    return links;
}

async function saveToExcel(data, fileName) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    worksheet.columns = [
        { header: 'Links', key: 'link', width: 50 }
    ];

    data.forEach(item => {
        worksheet.addRow({ link: item });
    });

    await workbook.xlsx.writeFile(fileName);
    console.log('Файл сохранен:', fileName);
}

async function main() {
    const url = 'https://example.com'; // Замените на нужный URL
    const html = await fetchData(url);
    const data = parseData(html);
    await saveToExcel(data, 'results.xlsx');
}

main();
