# Azure Infrastructure support for Print on Demand

### Preface - Why is Cloud Infrastructure needed?

> Since Printful / Printify are CORS protected backend APIs - we need our own cloud infrastructure. Most platforms also don't have an internal storage (relying on an image storage you provide). To keep cost low, our IaC uses serverless solutions when possible.

<br />

#### **Printful Flow**:
- [ ] Add File from Blob using File API
- [ ] Use File in Product Creation: [Documentation](https://developers.printful.com/docs/#tag/Products-API and https://developers.printful.com/docs/v2-beta/#section/About-the-Printful-API/Overview-of-version-2-and-its-new-features) 
- [ ] Add product to Shopify Storefront: [Documentation] https://shopify.dev/docs/api/admin

Prerequisites
Azure Blob Storage: You should have Azure Blob Storage set up with a container for storing your images. -> 
Azure Function: An Azure Function to facilitate the upload to Blob Storage, as previously discussed.
Web Application: A frontend application where the Toast UI Image Editor will be embedded.
CORS Configuration: Ensure that CORS (Cross-Origin Resource Sharing) settings on your Blob Storage account allow your web application to retrieve images.

Steps for Integration
Step 1: Setting Up Toast UI Image Editor in Your Web Application
Include Toast UI Image Editor: Include the Toast UI Image Editor library in your web application. You can do this by including the library from a CDN or installing it via npm and bundling it with your application.


<!-- Include via CDN -->
<script src="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.js"></script>
<link rel="stylesheet" href="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css">

Initialize the Editor: Initialize the image editor with a configuration that suits your application needs, as shown in the provided example. You might need to customize the loadImage option to load images from Azure Blob Storage URLs.
Step 2: Loading Images from Azure Blob Storage into the Image Editor
Retrieve Image URLs: When an image is uploaded to Blob Storage (through the Azure Function you set up for uploads), store the URL of the uploaded image. Azure Blob Storage provides a direct URL to each stored object.
Load the Image into the Editor: Use the loadImageFromURL method of the Toast UI Image Editor to load the image for editing. You will need to ensure the Blob Storage container is publicly accessible or use a SAS token for private containers.

imageEditor.loadImageFromURL('https://yourstorageaccount.blob.core.windows.net/yourcontainer/yourimage.jpg', 'ImageName').then(() => {
    console.log('Image loaded successfully');
}).catch((error) => {
    console.error('Error loading image', error);
});

Step 3: Saving the Edited Image Back to Azure Blob Storage
Export Edited Image: Once editing is complete, you can use the toDataURL method to get the edited image data.
Upload to Blob Storage: You might need to implement a function (either an Azure Function or part of your backend API) that accepts the image data and uploads it back to Blob Storage. This could involve sending the image data to the server, where it can be processed and uploaded to Blob Storage using the Azure Storage SDK.
Step 4: CORS Configuration
Ensure that the CORS settings for your Blob Storage account allow requests from your web application's domain. This is necessary for your web application to directly access and display images stored in Blob Storage.
Testing and Validation
Test Image Upload and Editing: Test the entire flow from uploading an image, editing it in the Toast UI Image Editor, and saving the edited image back to Blob Storage.
Validate CORS Settings: Ensure that the image editor can load and save images without encountering CORS issues.
Security Considerations
Secure Access: Consider using Azure Managed Identities and SAS tokens to securely access Blob Storage without hardcoding access keys.
Validate Image Uploads: Ensure that your application validates uploaded images to prevent uploading of malicious files.
By following these steps, you'll integrate the Toast UI Image Editor with Azure Blob Storage for editing images as part of your Print on Demand service workflow.

