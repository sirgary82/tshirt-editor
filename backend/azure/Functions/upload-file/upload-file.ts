import fetch from "node-fetch";
import FormData from "form-data";

export async function uploadFileToPrintful(fileBuffer: Buffer, fileName: string) {
    const formData = new FormData();
    formData.append("file", fileBuffer, { filename: fileName });

    const response = await fetch("https://api.printful.com/files", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`, // Use environment variables
            ...formData.getHeaders() // Automatically sets the Content-Type to multipart/form-data with boundary
        },
        body: formData
    });

    return response.json();
}
