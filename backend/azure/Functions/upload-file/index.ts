import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { uploadFileToPrintful } from "./upload-file";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        const fileBuffer = req.body.file; // You'll need to adjust this based on how the file is being sent
        const fileName = req.body.filename; // Similarly, adjust based on actual data structure

        const response = await uploadFileToPrintful(fileBuffer, fileName);
        context.res = {
            status: 200, // OK
            body: response
        };
    } catch (error) {
        context.res = {
            status: 500, // Server error
            body: { message: "Failed to upload file to Printful.", error: error.message }
        };
    }
};

export default httpTrigger;
