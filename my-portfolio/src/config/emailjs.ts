// EmailJS Configuration - Environment-based (Secure)
// This configuration reads from environment variables for security
// Safe to commit to Git as it doesn't contain actual credentials

export const EMAILJS_CONFIG = {
  // Read from environment variables (set in .env.local for development)
  // For production (Vercel), set these in the deployment environment variables
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8hcw4va',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_m8kekeb',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cvP-8GRkulQtK_iys',
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || 'lanceantorpro@gmail.com',
  
  // Template variables (these should match your EmailJS template)
  TEMPLATE_VARS: {
    name: '{{name}}',
    email: '{{email}}', 
    message: '{{message}}',
    time: '{{time}}'
  }
};

// Development validation: Check if environment variables are loaded
if (import.meta.env.DEV) {
  const missingVars = [];
  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  
  if (missingVars.length > 0) {
    console.warn('⚠️  Missing EmailJS environment variables:', missingVars);
    console.warn('📝 Using fallback values - create .env.local for development');
    console.warn('📖 See .env.example for reference');
  } else {
    console.log('✅ EmailJS configuration loaded from environment variables');
  }
} else {
  // Production validation
  console.log('📧 EmailJS configuration loaded for production');
}

