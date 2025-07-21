# Parmar CNC Machines Website

A modern, responsive website for Parmar CNC Machines built with Next.js.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/parmarcnc-website.git
   cd parmarcnc-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
parmarcnc-next/
├── public/                 # Static files
│   ├── images/            # All website images
│   └── files/            # Downloadable files (PDFs, etc.)
│
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── Navbar/      # Navigation component
│   │   ├── Home/        # Home page components
│   │   ├── Products/    # Products page components
│   │   ├── Event/       # Events page components
│   │   ├── Download/    # Download page components
│   │   ├── Contact-Us/  # Contact page components
│   │   ├── Company/     # Company page components
│   │   ├── Footer/      # Footer component
│   │   └── Bottom_to_top/ # Scroll to top component
│   │
│   ├── Data_Folders/    # Data files for components
│   └── font_styles/     # Font and global styles
```

## 🌐 Deployment

### For IIS Server:
1. Build the application: `npm run build`
2. Start with PM2: `pm2 start npm --name "parmarcnc-next" -- start`
3. Configure IIS with the provided `web.config`

### Required IIS Modules:
- iisnode-core
- URL Rewrite Module
- Application Request Routing (ARR)

## 📱 Features

- ✅ Responsive design for all screen sizes
- ✅ Modern UI with smooth animations
- ✅ SEO optimized
- ✅ Fast loading with image optimization
- ✅ Contact form with email integration
- ✅ Download section for company documents
- ✅ Event showcase
- ✅ Product catalog
- ✅ Company information and history

## 🛠️ Technologies Used

- **Frontend:** Next.js 15, React 18
- **Styling:** CSS Modules, Bootstrap 5
- **Icons:** React Icons
- **Forms:** EmailJS
- **Deployment:** PM2, IIS

## 📞 Contact

For support or questions:
- Email: Export.parmarllp@gmail.com
- Phone: +9195108 22377 (Domestic)
- Phone: +9194272 54147 (International)

## 📄 License

This project is private and proprietary to Parmar CNC Machines (India) LLP. 