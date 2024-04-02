// Contents of upload-file.ts

import * as fetch from "node-fetch";

async function uploadFileToPrintful(fileBuffer, fileName) {
    const response = await fetch("https://api.printful.com/files", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_PRINTFUL_API_KEY_HERE',
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify({
            file: fileBuffer,
            filename: fileName
        })
    });

    return response.json();
}

export { uploadFileToPrintful };
