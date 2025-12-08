# Contact Form Setup Guide

The contact form uses **Web3Forms** as the backend service to handle form submissions and send emails.

## Why Web3Forms?

- **Free tier**: 250 submissions per month
- **Simple setup**: Just need an access key
- **No backend required**: Works with static sites
- **Reliable**: Good uptime and performance
- **Spam protection**: Built-in spam filtering
- **Email notifications**: Automatic email delivery

## Setup Instructions

### Step 1: Get Your Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address (where you want to receive form submissions)
3. Click "Get Your Access Key"
4. Copy the access key provided

### Step 2: Update the Form Component

1. Open `src/components/Contact.tsx`
2. Find the line with `access_key: 'YOUR_ACCESS_KEY'`
3. Replace `YOUR_ACCESS_KEY` with your actual access key from Step 1

```typescript
body: JSON.stringify({
  access_key: 'your-actual-access-key-here', // Replace this
  // ... rest of the form data
}),
```

### Step 3: Test the Form

1. Build and deploy your site
2. Fill out the contact form
3. Check your email for the form submission

## Form Behavior

The form dynamically shows/hides fields based on the selected contact method:

- **Email selected**: Shows email address field (required)
- **Phone selected**: Shows phone number field (required)
- **WhatsApp selected**: Shows phone number field (required)

## Alternative Services

If Web3Forms doesn't work for your needs, here are alternatives:

### EmailJS
- **Pros**: Very reliable, good free tier, easy integration
- **Cons**: Requires more setup (email service configuration)
- **Setup**: [https://www.emailjs.com](https://www.emailjs.com)

### FormSubmit
- **Pros**: Extremely simple, no signup required
- **Cons**: Less features, basic spam protection
- **Setup**: Just change form action to `https://formsubmit.co/your-email@example.com`

### Formspark
- **Pros**: One-time payment option, unlimited forms
- **Cons**: Paid service ($25 one-time for 50k submissions)
- **Setup**: [https://formspark.io](https://formspark.io)

## Troubleshooting

### Form not submitting
- Check that your access key is correct
- Verify the access key is active in your Web3Forms dashboard
- Check browser console for error messages

### Not receiving emails
- Check spam/junk folder
- Verify email address in Web3Forms dashboard
- Check Web3Forms dashboard for submission logs

### Form validation errors
- Ensure required fields are filled
- Email field must be valid email format when email is selected
- Phone field must be filled when phone/WhatsApp is selected

## Security Notes

- The access key is visible in the client-side code (this is normal for Web3Forms)
- Web3Forms includes built-in spam protection
- Consider adding rate limiting if you expect high traffic
- For additional security, you could proxy requests through a serverless function

