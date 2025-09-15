# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Install EmailJS

Run this command in your project terminal:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 3: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for personal portfolio)
4. Follow the OAuth setup to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_xyz123`)

## Step 4: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Portfolio Contact - {{from_name}}

**Content:**
```
Hello Lance,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent from: Portfolio Contact Form
```

4. Save the template and note down your **Template ID** (e.g., `template_abc456`)

## Step 5: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_def789`)

## Step 6: Update Contact Component

1. Add EmailJS import to your Contact.tsx:

```tsx
import emailjs from '@emailjs/browser';
```

2. Replace the configuration values in Contact.tsx:

```tsx
// Replace these with your actual EmailJS credentials
const result = await emailjs.send(
  'service_xyz123',          // Your Service ID
  'template_abc456',         // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'lance.antor@gmail.com',
    reply_to: formData.email,
  },
  'user_def789'              // Your Public Key
);
```

3. Uncomment the EmailJS section in handleSubmit function
4. Comment out the mailto section if you prefer direct email sending

## Step 7: Initialize EmailJS (Optional)

For better performance, you can initialize EmailJS once in your app:

```tsx
// In your main App.tsx or Contact.tsx useEffect
useEffect(() => {
  emailjs.init('user_def789'); // Your Public Key
}, []);
```

## Step 8: Test Your Setup

1. Fill out your contact form
2. Submit the form
3. Check your Gmail inbox for the message
4. Verify all template variables are populated correctly

## Security Notes

- **Never expose your private key** - only use the public key in frontend
- EmailJS free plan includes 200 emails/month
- Consider upgrading for higher volume
- Test thoroughly before deploying

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your domain is added to EmailJS allowed origins
2. **Template Variables**: Ensure template variable names match exactly
3. **Gmail Blocking**: Check Gmail spam folder and whitelist EmailJS
4. **Rate Limiting**: Free plan has monthly limits

### Error Handling:

The current implementation includes proper error handling and user feedback:
- Loading states during submission
- Success messages when email is sent
- Error messages if something goes wrong
- Automatic form reset after successful submission

## Alternative: Keep Current Mailto Implementation

The current mailto implementation is perfectly functional and:
- ✅ Works without external dependencies
- ✅ No monthly limits or costs
- ✅ Opens user's preferred email client
- ✅ User can review before sending
- ❌ Requires user to have email client configured
- ❌ User must manually send the email

Choose EmailJS if you want:
- Direct email delivery to your inbox
- Better user experience (no email client required)
- Email tracking and analytics
- Professional appearance

Choose mailto if you want:
- Simple, dependency-free solution
- No external service dependencies
- User control over email sending
- Zero ongoing costs