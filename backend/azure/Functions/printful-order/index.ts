// Contents of index.ts

import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as fetch from "node-fetch";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const responseMessage = "This HTTP triggered function executed successfully.";

    // Example of making a fetch request
    const printfulResponse = await fetch("https://api.printful.com/", {
        method: 'GET', // or 'POST'
        headers: {
            'Authorization': 'Bearer YOUR_PRINTFUL_API_KEY_HERE'
        }
    }).then(response => response.json());

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage + " Fetched data: " + JSON.stringify(printfulResponse)
    };
};

export default httpTrigger;
