import { readFile, writeFile } from 'fs';

// Read from input.txt
readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Data read from input.txt:', data);

        // Write to output.txt
        writeFile('output.txt', data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Data written to output.txt');
            }
        });
    }
});
