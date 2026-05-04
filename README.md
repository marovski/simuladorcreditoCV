# 🇨🇻 Simulador de Crédito - Cabo Verde | Credit Simulator

A comprehensive credit simulator web application for calculating loan payments in Cabo Verde. Built with vanilla JavaScript, HTML, and CSS, featuring a modern UI with dark mode and bilingual support (Portuguese & English).

![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-4.0-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Languages](https://img.shields.io/badge/languages-PT%20%7C%20EN-blue)


## 📋 Features

### Core Calculations
- **Monthly Payment Calculation**: Calculate exact monthly payment amounts based on principal, interest rate, and period
- **TAEG Support**: Use TAEG (Taxa Anual Efetiva Global / Annual Effective Rate) for real cost calculations including fees and insurance
- **Flexible Period Input**: Enter loan period in months or years
- **Real-time Calculations**: Results update instantly as you adjust input values

### User Interface
- **Interactive Sliders**: Range sliders for quick value adjustments with visual feedback
- **Form Validation**: Real-time validation with error messages for invalid inputs
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with automatic system preference detection
- **Bilingual Support**: Switch between Portuguese and English seamlessly (language preference saved automatically)

### Results & Analysis
- **Comprehensive Results Card**: View monthly payment, TAEG, total amount to pay, and total interest
- **Amortization Schedule**: Expandable table showing first 12 months of payment breakdown
- **Comparison Mode**: Capture and compare two different scenarios side-by-side
- **Copy Results**: Easy one-click copy to clipboard for sharing calculations

### Additional Features
- **Info Popups**: Contextual help buttons with detailed explanations and formulas
- **Calculation Method Badge**: See which calculation method is being used (Nominal or TAEG)
- **Summary Section**: Quick overview of calculation parameters and results
- **Keyboard Shortcuts**:
  - **Enter**: Calculate
  - **Escape**: Close popup
- **Success Notifications**: Visual feedback for user actions

## 📲 Progressive Web App (PWA)

The app can be installed directly on your device for a native-like experience:

- **Install on Android/Desktop**: Click the install icon in the browser address bar (Chrome/Edge)
- **Install on iOS**: Safari → Share → Add to Home Screen
- **Offline support**: All core assets are cached on first visit — the app works without an internet connection
- **Standalone mode**: Runs without browser chrome (no address bar) when installed

### 🛠️ Technologies Used (PWA)
- `manifest.json` — defines app name, theme colors, icons, and display mode
- `sw.js` — service worker with cache-first strategy for static assets and network-first fallback for everything else

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or build tools required

### Installation

1. **Download or Clone**:
```bash
git clone https://github.com/marovski/simuladorcreditoCV.git
cd simuladorcreditoCV
```

2. **Open in Browser**:
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Browser, or
- Use a local server for best experience

### Running with Local Server (Optional)

For the best development experience, use Python's built-in server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

## 📖 How to Use

### Basic Calculation

1. **Enter Loan Amount** (Montante do Crédito):
   - Use the slider or input field
   - Range: 10,000 - 5,000,000 CVE

2. **Set Payment Period** (Período de Pagamento):
   - Enter value and select months or years
   - The slider updates as you type

3. **Enter Interest Rate** (Taxa Nominal Anual):
   - Input the annual interest rate
   - Range: 0% - 30%

4. **Click Calculate** or press **Enter**:
   - Results appear instantly
   - Review monthly payment, total cost, and interest

### Using TAEG (Real Cost Calculation)

1. **Check "Usar TAEG fornecida pelo banco"**
2. **Enter TAEG percentage** from your bank
3. **Results update** to reflect real cost including all fees and insurance

### Amortization Schedule

1. **Look for "Cronograma de Amortização"** section
2. **Click the toggle button** to expand
3. **View first 12 months** of payment breakdown:
   - Month number
   - Monthly payment amount
   - Interest portion
   - Remaining balance

### Comparison Mode

1. **Make initial calculation**
2. **Click "📸 Capturar para Comparação"** - saves current scenario
3. **Adjust loan parameters**
4. **Click button again** - compares with saved scenario
5. **View side-by-side comparison** with highlighted differences

### Dark Mode

- **Click the sun/moon icon** in the top-right header
- Theme preference is saved automatically
- System preference is detected on first visit

### Language Toggle

- **Click the language button** (PT/EN) in the top-right header
- **Switch between Portuguese and English** instantly
- All content translates dynamically:
  - Form labels and buttons
  - Error messages
  - Help popup information
  - Results sections and calculations
  - Amortization schedule headers
- Language preference is saved automatically

## 📁 Project Structure

```
simuladorcreditoCV/
├── index.html           # Main HTML file with form and results
├── styles.css          # Complete styling with dark mode support
├── script.js           # Core calculation logic and interactivity
├── sw.js               # Service worker for offline support (PWA)
├── manifest.json       # Web app manifest (PWA)
├── favicon.svg         # App icon (finance + CV themed)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables and animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **SVG**: Scalable vector icons
- **CSS Grid & Flexbox**: Responsive layout

## 📊 Key Formulas

### Monthly Payment (PMT)
```
PMT = P × [i × (1+i)ⁿ] ÷ [(1+i)ⁿ - 1]

Where:
  P = Principal amount
  i = Monthly interest rate (annual rate ÷ 12)
  n = Number of months
```

### TAEG Calculation
```
TAEG = [(1 + monthly_rate)^12 - 1] × 100
```

### Total Interest
```
Total Interest = (Monthly Payment × Number of Months) - Principal
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #2563eb;           /* Main blue */
    --primary-dark: #1e40af;      /* Darker blue */
    --success: #16a34a;           /* Green */
    --warning: #ea580c;           /* Orange */
    --danger: #dc2626;            /* Red */
}
```

### Adjusting Slider Ranges

In `index.html`, modify slider attributes:

```html
<!-- Amount slider -->
<input type="range" min="10000" max="5000000" step="10000">

<!-- Period slider -->
<input type="range" min="6" max="360" step="1">

<!-- Rate slider -->
<input type="range" min="1" max="30" step="0.5">
```

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ⚠️ Limited |

## 🔒 Privacy

- All calculations are performed **locally** in your browser
- No data is sent to any server
- Results are only stored in your browser's localStorage (dark mode preference)

## 📝 Input Validation

The app validates:
- ✅ Amount between 10,000 and 5,000,000 CVE
- ✅ Period greater than 0 months
- ✅ Interest rate between 0% and 30%
- ✅ TAEG must be greater than 0 if enabled

Error messages guide you to correct inputs.

## 🎯 Use Cases

- **Personal Loans**: Calculate monthly payments for personal credit
- **Car Loans**: Estimate vehicle financing costs
- **Home Mortgages**: Preliminary mortgage calculations
- **Business Planning**: Financial forecasting
- **Comparison Shopping**: Compare bank offers using TAEG

## 🌐 Localization

Currently supports:
- **Languages**: Portuguese (Portugal/Cape Verde) and English
- **Currency Format**: Cabo Verde Escudo (CVE)
- **Number Format**: Locale-specific formatting (pt-CV)

The app automatically remembers your language preference and applies it on every visit.

### Adding More Languages

To add a new language, update the `translations` object in `script.js`:

```javascript
const translations = {
    pt: { /* Portuguese translations */ },
    en: { /* English translations */ },
    es: {  // Add Spanish
        app: { title: 'Simulador de Crédito', ... },
        form: { /* form translations */ },
        // ... other sections
    }
};

// Then update toggleLanguage() to cycle through: pt → en → es → pt
```

To modify currency format, edit `formatCurrency()` in `script.js`:

```javascript
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-CV', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}
```

## 🐛 Known Limitations

- Amortization schedule shows first 12 months only
- Very large loan amounts may have minor floating-point precision issues
- Mobile: Sliders may be difficult to use on very small screens

## 🤝 Contributing

Found a bug or have a feature request? Feel free to contribute!

Areas for enhancement:
- PDF export of amortization schedule
- Chart visualization of payment breakdown
- Comparison of multiple scenarios
- Additional languages (Spanish, French, etc.)

## 📄 License

MIT License - Feel free to use, modify, and distribute.

## 👨‍💻 Author

**Mário Cardoso**
- Portfolio: [marovski.github.io](https://marovski.github.io/)
- Email: Contact via GitHub

© 2026 Simulador de Crédito Cabo Verde


---

## 📞 Support

For questions or issues:
1. Check the info buttons (ℹ️) in the app for detailed explanations
2. Review this README
3. Open an issue on GitHub

## 🎉 Changelog

### Version 4.0
- 📲 **Progressive Web App (PWA)**: App is now installable on Android, iOS, and desktop
- 🔌 **Offline Support**: Core assets cached via service worker — works without internet after first visit
- 🗂️ **Web App Manifest**: Defines app identity, theme colors, and standalone display mode
- ⚡ **Cache-first strategy**: Instant load for static assets on repeat visits

### Version 3.0
- 🌍 **Bilingual Support**: Portuguese and English language toggle
- 💾 Language preference saved to localStorage
- 🔄 Dynamic translation of all content (forms, results, messages, popups)
- ⚡ Seamless language switching without page reload
- 📖 Complete English documentation and help text

### Version 2.0
- ✨ Complete UI/UX overhaul
- 🌙 Dark mode support
- 🎨 Enhanced icon-box with animations
- 📊 Amortization schedule
- 🔀 Comparison mode
- 📋 Copy results to clipboard
- ⌨️ Keyboard shortcuts
- 📱 Improved responsive design
- ✅ Form validation with error messages
- 🎯 Interactive range sliders

### Version 1.0
- Basic loan calculator functionality
- TAEG support
- Form validation
- Responsive layout

---

**Happy calculating! 💰📊**
