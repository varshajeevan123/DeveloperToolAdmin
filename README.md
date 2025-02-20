# CIVCO Developer Tool 

The CIVCO Developer Portal will be the centralized development resources, streamlining collaboration between CIVCO and the Software Partners for integrating the APIs. It provides comprehensive documentation, SDKs, and integration guides, accelerating API adoption and reducing development time. The portal enhance communication with changelogs, FAQs, and real-time support, ensuring clarity and issue resolution. 

## Prerequisite
clone project form git
```bash
git clone https://github.com/varshajeevan123/DeveloperToolAdmin.git
```

## Installation
Ensure you have the following installed before proceeding:

Node.js

NVM (Node Version Manager)

Yarn

## Usage
Once project clonned , use.
To start the website, run the following command:
```bash
yarn dev
```
Once executed, the page will automatically load in your web browser.
## Features
# **API Management**  

## **Documentation Maintenance**  

## **How to Add an API**  

There are two ways to add an API:  

### **1. Maintain API within the web itself**  
- Recommended to load the API locally for better performance.  

### **2. Register API via GitHub URL**  
- Upload a **YAML** file containing API details.  
- Ensure the file follows the **Backstage support format**.  

## **Adding an API**  

### **Example: Creating a Sample POST API**  

To add an API, follow these steps:  
1. Gather the **request body**, **response body**, and **API URL**.  
2. Structure (sample) the API definition as shown below:  

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: demo-post-api
  description: Sample API for a POST method
  tags:
    - rest
spec:
  type: openapi
  lifecycle: production
  owner: user:default/varshajeevan123
  definition: |
    openapi: 3.0.0
    info:
      title: Demo Post API
      version: 1.0.0
    servers:
      - url: https://jsonplaceholder.typicode.com
    paths:
      /posts:
        post:
          summary: Create a new post
          operationId: createPost
          requestBody:
            content:
              application/json:
                schema:
                  type: object
                  properties:
                    title:
                      type: string
                    body:
                      type: string
                    userId:
                      type: integer
          responses:
            "201":
              description: Created
````
 3. Add this API definition to catalog-info.yaml.
## Registering an API by url
  
To add an API by registering, follow these steps:  
1. Navigate to the docs folder where a sample API YAML file is stored.  
2. Push the API YAML file to GitHub.
3. Retrieve the GitHub file URL.
4. Go to the API feature in the application and select the Register API button.
5. Paste the GitHub URL and analyze it.
6. If successfully loaded, the API will be available in the system.  

## How to Add Documentation
#### Adding Docs Locally

1. Create a docs folder in the root directory.

2. Add documentation content in .md files with appropriate styles.

3. After creating the Markdown files, generate the documentation site using the following command:
take the terminal and should in the rootfolder
`````
npx @techdocs/cli generate --no-docker
`````
This will create a 'site' folder containing the converted Markdown files.

5. Update the catalog-info.yaml file by adding the following component:
````
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: software-documentation
  description: Documentation for Developer.
  annotations:
    backstage.io/techdocs-ref: dir:.
spec:
  type: service
  lifecycle: production
  owner: user:default/varshajeevan123
````
Once completed, your documentation will be available for use.