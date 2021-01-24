export function exportCSVFile(items: any[], fileTitle: string, emptyCellFiller: string = '-') {
    const csv = ConvertToCSV(normalizeObjectArray(items, emptyCellFiller));

    const exportedFileName = fileTitle + '.csv' || 'export.csv';

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFileName);
    } else {
        const link = document.createElement('a');
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', exportedFileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

export function ConvertToCSV(objArray: any[]) {
    const rows = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let header = '';
    Object.keys(rows[0]).map(pr => (header += pr + ';'));

    let str = '';
    rows.forEach((row: any) => {
        let line = '';
        const columns =
            typeof row !== 'object' ? JSON.parse(row) : Object.values(row);
        columns.forEach((column: any) => {
            if (line !== '') {
                line += ';';
            }
            if (typeof column === 'object') {
                line += JSON.stringify(column);
            } else {
                line += column;
            }
        });
        str += line + '\r\n';
    });
    return header + '\r\n' + str;
}


// https://stackoverflow.com/questions/29866160/add-missing-properties-to-an-object-with-a-blank-value-if-they-dont-exist
// ads blank value if keys are missing 
export function normalizeObjectArray(originalArray: any[], emptyCellFiller: string) {
    const normalizedArray: any[] = [];
    const keysSet = new Set();
    const pushWithFill = function (newObject: any) {
        // add keys from the new obj to the dictionary
        // and add missing properties to this object
        keysSet.forEach(function (key: any) {
            if (!newObject.hasOwnProperty(key)) {
                newObject[key] = emptyCellFiller;
            }
        });
        // tslint:disable-next-line:forin
        for (const property in newObject) {
            keysSet.add(property);
        }

        // process all stored objects to add keys from the new one to them
        normalizedArray.forEach(function (storedObj, index) {
            for (const property in newObject) {
                if (!storedObj.hasOwnProperty(property)) {
                    storedObj[property] = emptyCellFiller;
                }
            }
        });

        normalizedArray.push(newObject);
    };

    for (const record of originalArray) {
        pushWithFill(record);
    }
    return normalizedArray;
}