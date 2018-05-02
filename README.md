# LCC Sample App

## Deploy to SFDX

You can test this app with just one click thanks to Deploy to SFDX:    
[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com)

## Installation Instructions

Make sure you have the latest version of the Salesforce DX CLI before proceeding. Update info [here](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm).

1. Authenticate with your hub org (if not already done)
    ```
    sfdx force:auth:web:login -d -a *your_hub_org*
    ```

1. Clone the lightning-container-component-samples repository:
    ```
    git clone https://github.com/ccoenraets/lightning-container-component-samples
    cd lightning-container-component-samples
    ```

1. Create a scratch org and provide it with an alias (for example: lcc):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lcc --setdefaultusername
    ```

1. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

1. Assign the lcc permission set to the default user:
    ```
    sfdx force:user:permset:assign -n lcc
    ```

1. Open the scratch org:
    ```
    sfdx force:org:open
    ```

1. In App Launcher, select the **LCC Samples** app.


## Building JavaScript Apps

The Lightning Container Component library is available as a JavaScript module that you can install as a dependency in your JavaScript application using npm. JavaScript modules are not yet supported consistently across all browsers. Therefore, applications using modules require a build process using a tool like webpack or rollup.

The JavaScript applications that use the Lightning Container Component as a module are located in the ```js-apps``` folder. Each application has a webpack build configuration (webpack.config.js).

Follow the steps below if you want to make changes to a sample application:

1. Make your changes in source code

2. Install the app dependencies. Make sure you are in the application root folder and type the following command:

    ```
    npm install
    ```

2. Build the app. Make sure you are in the application root folder and type the following command:

    ```
    npm run build
    ```

    Webpack automatically outputs the results (bundle.js) in the staticresources folder corresponding to your application.

3. Type the following command to push your changes to your scratch org:

    ```
    sfdx force:source:push
    ```

NOTE: You can also use the Lightning Container Component library in plain old JavaScript (ECMAScript 5) without using modules and without a build process. Check out Example 4 below to see how.
