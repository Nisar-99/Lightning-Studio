# Welcome 

Thank you for installing Lightning Studio, **Lightning Studio** is a powerful and versatile Chrome extension designed to streamline your **Lightning Web Component (LWC)** development workflow—all within your browser. Tailored for Salesforce developers and designers, Lightning Studio brings together essential tools in one convenient place, including:

- LWC Development Toolkit
- Lightning Message Service (LMS)
- Apex Code Editor
- GraphQL Tester
- SOQL-to-GraphQL Converter
- Backup Downloader 


![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/ehkpneicmpbdejpoancidgkejlkahjgo?style=for-the-badge&label=Chrome%20Extension)
![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/ehkpneicmpbdejpoancidgkejlkahjgo?style=for-the-badge&label=Users)
![Chrome Web Store Stars](https://img.shields.io/chrome-web-store/stars/ehkpneicmpbdejpoancidgkejlkahjgo?style=for-the-badge&label=Star%20Rating) 
![Chrome Web Store Last Updated](https://img.shields.io/chrome-web-store/last-updated/ehkpneicmpbdejpoancidgkejlkahjgo?style=for-the-badge&labelColor=Last%20Updated)


## 🧩 Getting Started

1. Log in to Salesforce and click the Lightning Studio icon located in the browser’s top-right corner (Standard Chrome extension toolbar).
2. Wait for the icon to turn blue, indicating it’s ready to use.
3. For first-time installations, refresh the page before accessing the extension.


![How to launch](./media/app-launch.jpg)


We hope you enjoy using Lightning Studio and find it a valuable tool in your Salesforce LWC development workflow.


## ❓ FAQ

-  ⚠️ Lightning Studio is not working properly. It redirects to the extensions page.
    - **Solution**: This usually happens when the extension data gets corrupted. Please **clear your browser's cache** and try again.
- 🔄 Unable to use `@import` with custom objects
    - **Solution**: If you're referencing custom fields or objects and encounter issues, ensure you're using `Standard Deployment?` Mode. This deployment mode helps resolve metadata reference errors.
- 🧨 Receiving exceptions like:
    - `FIELD_INTEGRITY_EXCEPTION`
    - `CUSTOM_FIELD_NOT_FOUND`
    - `INVALID_REFERENCE_SOBJECT_FIELD`
    - **Solution**: These errors typically mean the custom object or field is not available in the target org or referenced incorrectly. Make sure your LWC component is deployed using `Standard Deployment?` Mode and that all metadata dependencies are properly included.

 

## 💬 Feedback & Support

We’re always looking to improve Lightning Studio based on your feedback. If you have suggestions, questions, or run into any issues, please [open an issue on GitHub](https://github.com/Nisar-99/lightning-studio/issues).

 


_Enjoy faster, smarter Salesforce development with Lightning Studio!_