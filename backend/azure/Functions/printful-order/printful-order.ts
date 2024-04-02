// Contents of printful-order.ts

import * as fetch from "node-fetch";

async function createPrintfulOrder(orderData) {
    const response = await fetch("https://api.printful.com/orders", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_PRINTFUL_API_KEY_HERE',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    });

    return response.json();
}

export { createPrintfulOrder };
