
/**
 * [{a:"A"}, {b: "B"}]
 * 
 */
function createXls(ArrayJsonData, sheetName="sheetNewName"){
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const XLSX = require('xlsx');
    const ws = XLSX.utils.json_to_sheet(ArrayJsonData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
    const ts = +new Date();
    const fileName = ts+'_'+sheetName+'_export.xlsx';
    // XLSX.writeFile(wb, fileName);

    const excelBuffer = XLSX.write(wb, { type: 'buffer' });
    
//     aa =new Blob([new Uint8Array(data)], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'})
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(aa);
// link.click();
    return {fileName, buffer: excelBuffer};
}


module.exports = {
    createXls
};