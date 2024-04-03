# Azure Infrastructure support for Print on Demand

### Preface - Why is Cloud Infrastructure needed?

> Since Printful / Printify are CORS protected backend APIs - we need our own cloud infrastructure. Most platforms also don't have an internal storage (relying on an image storage you provide). To keep cost low, our IaC uses serverless solutions when possible.

<br />

#### **Printful Flow**:
- [ ] Add File from Blob using File API
- [ ] Use File in Product Creation: [Documentation](https://developers.printful.com/docs/#tag/Products-API and https://developers.printful.com/docs/v2-beta/#section/About-the-Printful-API/Overview-of-version-2-and-its-new-features) 
- [ ] Add product to Shopify Storefront: [Documentation] https://shopify.dev/docs/api/admin