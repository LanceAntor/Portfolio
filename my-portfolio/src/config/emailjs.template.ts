// EmailJS Configuration Template
// IMPORTANT: This is a template file for reference only
// 
// To set up EmailJS:
// 1. Copy this file to 'emailjs.ts' in the same directory
// 2. Replace the placeholder values with your actual EmailJS credentials
// 3. The actual 'emailjs.ts' file is in .gitignore and won't be committed

export const EMAILJS_CONFIG = {
  // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',     // e.g., 'service_xyz123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',   // e.g., 'template_abc456'  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',     // e.g., 'user_def789'
  
  // Your email address where messages should be sent
  TO_EMAIL: 'your.email@gmail.com',
  
  // Template variables (these should match your EmailJS template)
  TEMPLATE_VARS: {
    name: '{{name}}',
    email: '{{email}}', 
    message: '{{message}}',
    time: '{{time}}'
  }
};

/*
Setup Instructions:

1. Create EmailJS Account:
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Verify your email

2. Create Gmail Service:
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" 
   - Choose "Gmail"
   - Connect your Gmail account
   - Note your SERVICE_ID

3. Create Email Template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use variables: {{name}}, {{email}}, {{message}}, {{time}}
   - Note your TEMPLATE_ID

4. Get Public Key:
   - Go to Account → General
   - Copy your PUBLIC_KEY

5. Update Configuration:
   - Copy this file to 'emailjs.ts'
   - Replace placeholder values with real credentials
   - Save the file

6. Enable in Contact Component:
   - Make sure USE_EMAILJS = true in Contact.tsx
*/