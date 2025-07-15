# Priyanshu Madhup's Portfolio Website

A modern, responsive portfolio website with an AI-powered chatbot assistant that can answer questions about Priyanshu's skills, projects, and professional background.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **AI Chat Assistant**: Powered by Groq LLaMA 3.3 with live web search capabilities
- **Secure API Integration**: Environment variables for production deployment
- **Modern UI**: Clean design with smooth animations and dark theme
- **Portfolio Showcase**: Complete overview of projects, skills, and experience

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5.3.2
- **AI Integration**: Groq API (LLaMA 3.3-70B), Serper Search API
- **Deployment**: Vercel with serverless functions
- **Styling**: Custom CSS with Poppins font and orange theme

## 📋 Vercel Deployment Instructions

### 1. Deploy to Vercel

1. **Connect Repository**: 
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub/GitLab repository
   
2. **Configure Project**:
   - Framework Preset: "Other"
   - Root Directory: "./" (or leave empty)
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty

### 2. Set Environment Variables

In your Vercel project dashboard, go to **Settings > Environment Variables** and add:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `GROQ_API_KEY` | `your_groq_api_key_here` | Your Groq API key for AI responses |
| `SERPER_API_KEY` | `your_serper_api_key_here` | Your Serper API key for web search |

#### How to Get API Keys:

**Groq API Key:**
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up/Login
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `gsk_`)

**Serper API Key:**
1. Visit [Serper.dev](https://serper.dev/)
2. Sign up/Login
3. Go to Dashboard
4. Copy your API key

### 3. Deploy

1. **Automatic Deployment**: 
   - Push your code to the connected repository
   - Vercel will automatically deploy

2. **Manual Deployment**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### 4. Verify Deployment

1. **Check AI Features**: 
   - Visit your deployed site
   - Open the "Know Me AI" page
   - Ask a question to test the AI chatbot
   - Check browser console for API status messages

2. **Test Fallback**:
   - If API keys are not set, the chatbot will use text-based responses
   - All functionality will work, but responses will be static

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Set up environment variables**:
   Create a `.env.local` file:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   SERPER_API_KEY=your_serper_api_key_here
   ```

4. **Run locally**:
   ```bash
   vercel dev
   ```

5. **Open in browser**: `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main homepage
├── about.html              # About page
├── services.html           # Skills page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── knowme.html             # AI Chat page
├── resume-data.txt         # Resume data for AI
├── priyanshu.jpg          # Profile image
├── priyanshu_madhup_main_resume.pdf  # Resume PDF
├── api/
│   └── config.js          # Serverless function for API keys
├── vercel.json            # Vercel configuration
├── package.json           # Project configuration
└── README.md              # This file
```

## 🤖 AI Chat Features

- **Intelligent Responses**: Uses Groq LLaMA 3.3-70B for natural conversations
- **Web Search Integration**: Real-time search for current information
- **Resume Data Integration**: Comprehensive knowledge of skills and projects
- **Fallback System**: Text-based responses if APIs are unavailable
- **Security**: API keys stored securely as environment variables

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Bootstrap 5.3.2**: Modern responsive framework
- **Custom CSS**: Smooth animations and hover effects
- **Dark Theme**: Professional orange and black color scheme

## 🔒 Security Features

- **Environment Variables**: API keys stored securely on server
- **CORS Configuration**: Proper cross-origin resource sharing
- **Error Handling**: Graceful fallbacks for API failures
- **Client-Side Security**: No sensitive data exposed in browser

## 📞 Support

For any issues or questions about deployment:
- **Email**: priyanshumadhup@outlook.com
- **LinkedIn**: [linkedin.com/in/priyanshu-madhup](https://linkedin.com/in/priyanshu-madhup/)
- **GitHub**: [github.com/Priyanshu-Madhup](https://github.com/Priyanshu-Madhup)

---

Made with ❤️ by Priyanshu Madhup
