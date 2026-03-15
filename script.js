// =============================
// TRANSLATION SYSTEM
// =============================

const translations = {
    pt: {
        app: {
            title: 'Simulador de Crédito',
            subtitle: 'Cabo Verde 🇨🇻'
        },
        form: {
            amount: { label: 'Montante do Crédito' },
            period: { label: 'Período de Pagamento', months: 'Meses', years: 'Anos' },
            rate: { label: 'Taxa Nominal Anual' },
            divider: { or: 'OU' },
            taeg: {
                label: 'Usar TAEG fornecida pelo banco',
                hint: '💡 Com TAEG: Total a Pagar e Juros incluem todos os custos reais (comissões, seguros, etc.)'
            },
            buttons: {
                calculate: '🔢 Calcular',
                reset: '🔄 Limpar Tudo',
                copy: '📋 Copiar Resultados'
            }
        },
        results: {
            title: 'Resultados',
            monthlyPayment: { label: 'Prestação Mensal' },
            taeg: { label: 'TAEG (Taxa Anual Efetiva)' },
            totalPayment: { label: 'Total a Pagar' },
            totalInterest: { label: 'Total de Juros' },
            summary: { title: '📋 Resumo' },
            amortization: {
                title: '📅 Cronograma de Amortização',
                loading: 'Gerando cronograma...'
            },
            comparison: {
                title: '🔀 Modo Comparação',
                info: 'Use os controles acima para ajustar os valores. Clique no botão abaixo para comparar a situação anterior com a atual.',
                button: '📸 Capturar para Comparação'
            }
        },
        footer: {
            disclaimer: 'Simulação indicativa com base no mercado de Cabo Verde 🇨🇻 Consulte a instituição financeira para valores exatos.',
            credit: 'Simulador de Crédito Cabo Verde'
        },
        popup: {
            formula: '📐 Fórmula utilizada:',
            button: 'Entendi'
        },
        messages: {
            amountError: 'Montante deve estar entre 10.000 e 5.000.000 CVE',
            periodError: 'Período deve ser superior a 0',
            rateError: 'Taxa deve estar entre 0% e 30%',
            taegError: 'TAEG deve ser superior a 0',
            firstCapture: 'Situação anterior capturada! Altere os valores e clique novamente para comparar.',
            comparisonDone: 'Comparação realizada!',
            formReset: 'Formulário reiniciado!',
            copySuccess: 'Resultados copiados para a área de transferência!',
            copyError: 'Erro ao copiar resultados',
            executeFirst: 'Execute uma simulação primeiro',
            taegBank: 'TAEG Fornecida pelo Banco',
            nominalRate: 'Taxa Nominal'
        },
        info: {
            amount: {
                title: 'Montante do Crédito',
                description: 'É o valor total que pretende pedir emprestado ao banco ou instituição financeira. Por exemplo, se quer comprar uma casa ou carro, este é o valor que precisa.',
                formula: 'Representado por: P (Principal)'
            },
            period: {
                title: 'Período de Pagamento',
                description: 'É o tempo que terá para pagar o crédito. Pode escolher entre meses ou anos. Quanto maior o período, menor a prestação mensal, mas mais juros pagará no total.',
                formula: 'n = número de meses (anos × 12)'
            },
            nominalRate: {
                title: 'Taxa Nominal Anual',
                description: 'É a taxa de juro básica que o banco cobra por ano, sem contar com outros custos. Esta taxa serve de base para calcular a TAEG (custo real do crédito).',
                formula: 'Taxa mensal = Taxa Anual ÷ 12'
            },
            taegInput: {
                title: 'TAEG Fornecida pelo Banco',
                description: 'A TAEG (Taxa Anual Efetiva Global) inclui todos os custos do crédito: juros, comissões, seguros e outros encargos. Quando inserir a TAEG do banco, o Total a Pagar e os Juros serão recalculados para refletir o custo real. A Prestação Mensal mantém-se baseada na Taxa Nominal (é o valor base sem custos adicionais).',
                formula: 'Taxa mensal efetiva = (1 + TAEG/100)^(1/12) - 1\n\nUsada para calcular o custo total real do crédito.'
            },
            monthlyPayment: {
                title: 'Prestação Mensal',
                description: 'É o valor que terá de pagar todos os meses ao banco. Este valor inclui uma parte do dinheiro emprestado (capital) e os juros. A prestação é sempre calculada com base na Taxa Nominal Anual.',
                formula: 'PMT = P × [i × (1+i)ⁿ] ÷ [(1+i)ⁿ - 1]\n\nOnde:\nP = Montante\ni = Taxa mensal (Taxa Nominal ÷ 12)\nn = Número de meses'
            },
            taeg: {
                title: 'TAEG - Taxa Anual Efetiva Global',
                description: 'É a taxa real que paga pelo crédito, incluindo todos os custos. É sempre maior que a taxa nominal porque considera a capitalização dos juros. Use esta taxa para comparar propostas de diferentes bancos.',
                formula: 'TAEG = [(1 + taxa mensal)^12 - 1] × 100\n\nA TAEG considera o efeito da capitalização composta dos juros ao longo do ano.'
            },
            totalPayment: {
                title: 'Total a Pagar',
                description: 'É a soma de todas as prestações mensais ao longo do período do crédito. Este valor inclui o montante emprestado mais todos os juros. Se inseriu a TAEG do banco, este valor reflete o custo total real incluindo todas as comissões e encargos.',
                formula: 'Sem TAEG: Total = Prestação Mensal × Número de Meses\n\nCom TAEG: Total calculado com taxa efetiva que inclui todos os custos'
            },
            totalInterest: {
                title: 'Total de Juros',
                description: 'É o custo total do crédito - quanto vai pagar a mais além do valor emprestado. Quanto maior o período ou a taxa de juro, maior será este valor. Se inseriu a TAEG, este valor inclui não só os juros mas também todas as comissões, seguros e encargos.',
                formula: 'Juros = Total a Pagar - Montante Emprestado\n\nCom TAEG: Inclui todos os custos (juros + comissões + seguros)'
            }
        }
    },
    en: {
        app: {
            title: 'Credit Simulator',
            subtitle: 'Cape Verde 🇨🇻'
        },
        form: {
            amount: { label: 'Credit Amount' },
            period: { label: 'Payment Period', months: 'Months', years: 'Years' },
            rate: { label: 'Nominal Annual Rate' },
            divider: { or: 'OR' },
            taeg: {
                label: 'Use TAEG provided by the bank',
                hint: '💡 With TAEG: Total Payment and Interest include all real costs (fees, insurance, etc.)'
            },
            buttons: {
                calculate: '🔢 Calculate',
                reset: '🔄 Clear All',
                copy: '📋 Copy Results'
            }
        },
        results: {
            title: 'Results',
            monthlyPayment: { label: 'Monthly Payment' },
            taeg: { label: 'TAEG (Annual Effective Rate)' },
            totalPayment: { label: 'Total Payment' },
            totalInterest: { label: 'Total Interest' },
            summary: { title: '📋 Summary' },
            amortization: {
                title: '📅 Amortization Schedule',
                loading: 'Generating schedule...'
            },
            comparison: {
                title: '🔀 Comparison Mode',
                info: 'Use the controls above to adjust values. Click the button below to compare the previous situation with the current one.',
                button: '📸 Capture for Comparison'
            }
        },
        footer: {
            disclaimer: 'Indicative simulation based on Cape Verde market 🇨🇻 Consult the financial institution for exact values.',
            credit: 'Cape Verde Credit Simulator'
        },
        popup: {
            formula: '📐 Formula used:',
            button: 'Got it'
        },
        messages: {
            amountError: 'Amount must be between 10,000 and 5,000,000 CVE',
            periodError: 'Period must be greater than 0',
            rateError: 'Rate must be between 0% and 30%',
            taegError: 'TAEG must be greater than 0',
            firstCapture: 'Previous situation captured! Change the values and click again to compare.',
            comparisonDone: 'Comparison completed!',
            formReset: 'Form reset!',
            copySuccess: 'Results copied to clipboard!',
            copyError: 'Error copying results',
            executeFirst: 'Run a simulation first',
            taegBank: 'TAEG Provided by Bank',
            nominalRate: 'Nominal Rate'
        },
        info: {
            amount: {
                title: 'Credit Amount',
                description: 'It is the total amount you want to borrow from a bank or financial institution. For example, if you want to buy a house or car, this is the amount you need.',
                formula: 'Represented by: P (Principal)'
            },
            period: {
                title: 'Payment Period',
                description: 'It is the time you have to repay the credit. You can choose between months or years. The longer the period, the lower the monthly payment, but the more interest you will pay in total.',
                formula: 'n = number of months (years × 12)'
            },
            nominalRate: {
                title: 'Nominal Annual Rate',
                description: 'It is the basic interest rate that the bank charges per year, without including other costs. This rate is used as a basis to calculate the TAEG (real cost of credit).',
                formula: 'Monthly rate = Annual Rate ÷ 12'
            },
            taegInput: {
                title: 'TAEG Provided by the Bank',
                description: 'TAEG (Annual Effective Global Rate) includes all credit costs: interest, fees, insurance and other charges. When you enter the bank\'s TAEG, the Total Payment and Interest will be recalculated to reflect the real cost. The Monthly Payment remains based on the Nominal Rate (it is the base value without additional costs).',
                formula: 'Effective monthly rate = (1 + TAEG/100)^(1/12) - 1\n\nUsed to calculate the real total cost of credit.'
            },
            monthlyPayment: {
                title: 'Monthly Payment',
                description: 'It is the amount you will have to pay every month to the bank. This value includes part of the borrowed money (principal) and interest. The payment is always calculated based on the Nominal Annual Rate.',
                formula: 'PMT = P × [i × (1+i)ⁿ] ÷ [(1+i)ⁿ - 1]\n\nWhere:\nP = Credit Amount\ni = Monthly rate (Nominal Rate ÷ 12)\nn = Number of months'
            },
            taeg: {
                title: 'TAEG - Annual Effective Global Rate',
                description: 'It is the real rate you pay for credit, including all costs. It is always higher than the nominal rate because it considers the capitalization of interest. Use this rate to compare offers from different banks.',
                formula: 'TAEG = [(1 + monthly rate)^12 - 1] × 100\n\nTAEG considers the effect of compound capitalization of interest throughout the year.'
            },
            totalPayment: {
                title: 'Total Payment',
                description: 'It is the sum of all monthly payments over the credit period. This value includes the amount borrowed plus all interest. If you entered the bank\'s TAEG, this value reflects the real total cost including all fees and charges.',
                formula: 'Without TAEG: Total = Monthly Payment × Number of Months\n\nWith TAEG: Total calculated with effective rate that includes all costs'
            },
            totalInterest: {
                title: 'Total Interest',
                description: 'It is the total cost of credit - how much you will pay more than the amount borrowed. The longer the period or the interest rate, the higher this value. If you entered the TAEG, this value includes not only the interest but also all fees, insurance and charges.',
                formula: 'Interest = Total Payment - Borrowed Amount\n\nWith TAEG: Includes all costs (interest + fees + insurance)'
            }
        }
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'pt';

// Get translation value
function t(path) {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    for (let key of keys) {
        value = value[key];
        if (!value) return path;
    }
    return value;
}

// Toggle Language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLanguage);
    updateLanguageDisplay();
    translatePage();
    if (currentResults) calculate();
}

function updateLanguageDisplay() {
    const langCode = document.getElementById('langCode');
    if (langCode) {
        langCode.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
    }
}

// Translate all static elements
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'OPTION') {
            element.textContent = translation;
        } else if (element.tagName === 'BUTTON' && element.classList.contains('popup-button')) {
            element.textContent = translation;
        } else if (element.tagName === 'SPAN') {
            element.textContent = translation;
        } else if (element.tagName === 'H1' || element.tagName === 'H3' || element.tagName === 'H2') {
            element.textContent = translation;
        } else if (element.tagName === 'P') {
            element.textContent = translation;
        } else {
            element.textContent = translation;
        }
    });
}

// =============================
// STATE MANAGEMENT
// =============================

let currentResults = null;
let previousResults = null;

// =============================
// DARK MODE
// =============================

function toggleDarkMode() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme);
}

function updateDarkModeIcon(theme) {
    const icon = document.getElementById('darkModeIcon');
    if (!icon) return;
    
    if (theme === 'dark') {
        icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    } else {
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }
}

function initializeDarkMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';
        html.setAttribute('data-theme', theme);
        updateDarkModeIcon(theme);
    } else {
        html.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(savedTheme);
    }
}

// =============================
// FORMATTING
// =============================

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-CV', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatNumber(value) {
    return new Intl.NumberFormat('pt-CV', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// =============================
// FORM VALIDATION
// =============================

function validateForm() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const period = parseFloat(document.getElementById('periodValue').value) || 0;
    const rate = parseFloat(document.getElementById('nominalRate').value) || 0;
    const useTaeg = document.getElementById('useTaeg').checked;
    const taegInput = parseFloat(document.getElementById('taegInput').value) || 0;

    let isValid = true;

    if (amount <= 0 || amount > 5000000) {
        showError('amountError', t('messages.amountError'));
        isValid = false;
    } else {
        clearError('amountError');
    }

    if (period <= 0) {
        showError('periodError', t('messages.periodError'));
        isValid = false;
    } else {
        clearError('periodError');
    }

    if (rate <= 0 || rate > 30) {
        showError('rateError', t('messages.rateError'));
        isValid = false;
    } else {
        clearError('rateError');
    }

    if (useTaeg && taegInput <= 0) {
        showError('taegError', t('messages.taegError'));
        isValid = false;
    } else {
        clearError('taegError');
    }

    return isValid;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'inline-block';
        
        const inputId = elementId.replace('Error', '');
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.classList.add('error');
        }
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
        element.textContent = '';
        
        const inputId = elementId.replace('Error', '');
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.classList.remove('error');
        }
    }
}

// =============================
// SLIDER SYNC
// =============================

document.getElementById('amountSlider')?.addEventListener('input', function() {
    document.getElementById('amount').value = this.value;
    document.getElementById('amountDisplay').textContent = formatNumber(this.value);
    calculate();
});

document.getElementById('periodSlider')?.addEventListener('input', function() {
    document.getElementById('periodValue').value = this.value;
    const months = parseInt(this.value);
    const monthsText = currentLanguage === 'pt' ? 'meses' : 'months';
    document.getElementById('periodDisplay').textContent = months + ' ' + monthsText;
    calculate();
});

document.getElementById('rateSlider')?.addEventListener('input', function() {
    document.getElementById('nominalRate').value = this.value;
    document.getElementById('rateDisplay').textContent = parseFloat(this.value).toFixed(1) + '%';
    calculate();
});

document.getElementById('amount')?.addEventListener('input', function() {
    document.getElementById('amountSlider').value = this.value;
    document.getElementById('amountDisplay').textContent = formatNumber(this.value);
});

document.getElementById('periodValue')?.addEventListener('input', function() {
    const value = parseInt(this.value) || 0;
    document.getElementById('periodSlider').value = value;
    const monthsText = currentLanguage === 'pt' ? 'meses' : 'months';
    document.getElementById('periodDisplay').textContent = value + ' ' + monthsText;
});

document.getElementById('nominalRate')?.addEventListener('input', function() {
    document.getElementById('rateSlider').value = this.value;
    document.getElementById('rateDisplay').textContent = parseFloat(this.value).toFixed(1) + '%';
});

// =============================
// CALCULATION
// =============================

function calculate() {
    if (!validateForm()) {
        document.getElementById('results').style.display = 'none';
        return;
    }

    const principal = parseFloat(document.getElementById('amount').value) || 0;
    const rate = parseFloat(document.getElementById('nominalRate').value) || 0;
    const period = parseFloat(document.getElementById('periodValue').value) || 0;
    const periodUnit = document.getElementById('periodUnit').value;
    const useTaeg = document.getElementById('useTaeg').checked;
    const taegInput = parseFloat(document.getElementById('taegInput').value) || 0;

    const totalMonths = periodUnit === 'anos' || periodUnit === 'years' ? period * 12 : period;
    const monthlyRate = rate / 100 / 12;

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                          (Math.pow(1 + monthlyRate, totalMonths) - 1);

    let taeg;
    let totalPayment;
    let totalInterest;
    let calculationMethod;

    if (useTaeg && taegInput > 0) {
        taeg = taegInput;
        calculationMethod = t('messages.taegBank');
        
        const effectiveMonthlyRate = Math.pow(1 + taeg / 100, 1 / 12) - 1;
        const effectivePayment = principal * (effectiveMonthlyRate * Math.pow(1 + effectiveMonthlyRate, totalMonths)) / 
                               (Math.pow(1 + effectiveMonthlyRate, totalMonths) - 1);
        
        totalPayment = effectivePayment * totalMonths;
        totalInterest = totalPayment - principal;
    } else {
        calculationMethod = t('messages.nominalRate');
        taeg = (Math.pow(1 + monthlyRate, 12) - 1) * 100;
        
        totalPayment = monthlyPayment * totalMonths;
        totalInterest = totalPayment - principal;
    }

    currentResults = {
        principal,
        monthlyPayment,
        taeg,
        totalPayment,
        totalInterest,
        totalMonths,
        rate,
        calculationMethod,
        timestamp: new Date()
    };

    document.getElementById('results').style.display = 'block';
    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment) + ' CVE';
    document.getElementById('taeg').textContent = taeg.toFixed(2) + '%';
    document.getElementById('totalPayment').textContent = formatCurrency(totalPayment) + ' CVE';
    document.getElementById('totalInterest').textContent = formatCurrency(totalInterest) + ' CVE';

    const methodBadge = document.getElementById('methodBadge');
    if (methodBadge) {
        methodBadge.innerHTML = `<span>✓ ${calculationMethod}</span>`;
        methodBadge.style.display = 'inline-block';
    }

    const periodText = currentLanguage === 'pt' ? 'Período' : 'Period';
    const yearText = currentLanguage === 'pt' ? 'anos' : 'years';
    const nominalText = currentLanguage === 'pt' ? 'Taxa Nominal' : 'Nominal Rate';
    const monthlyText = currentLanguage === 'pt' ? 'Taxa Mensal' : 'Monthly Rate';
    const taegCalcText = currentLanguage === 'pt' ? 'TAEG Calculada' : 'Calculated TAEG';
    const taegProvText = currentLanguage === 'pt' ? 'TAEG (fornecida)' : 'TAEG (provided)';
    const costsText = currentLanguage === 'pt' ? 'custos totais reais' : 'real total costs';
    const baseText = currentLanguage === 'pt' ? 'base para PMT' : 'basis for PMT';
    const callcText = currentLanguage === 'pt' ? '✓ Total a Pagar e Juros calculados com TAEG real' : '✓ Total Payment and Interest calculated with real TAEG';
    const aoAnoText = currentLanguage === 'pt' ? 'ao ano' : 'per year';

    let summaryHTML = `<p><strong>${periodText}:</strong> ${totalMonths} ${currentLanguage === 'pt' ? 'meses' : 'months'} (${(totalMonths / 12).toFixed(1)} ${yearText})</p>`;
    
    if (useTaeg && taegInput > 0) {
        summaryHTML += `
            <p><strong>${nominalText}:</strong> ${rate}% ${aoAnoText} (${baseText})</p>
            <p><strong>${taegProvText}:</strong> ${taegInput}% (${costsText})</p>
            <p class="summary-highlight">${callcText}</p>
        `;
    } else {
        summaryHTML += `
            <p><strong>${nominalText}:</strong> ${rate}% ${aoAnoText}</p>
            <p><strong>${monthlyText}:</strong> ${(rate / 12).toFixed(2)}%</p>
            <p><strong>${taegCalcText}:</strong> ${taeg.toFixed(2)}%</p>
        `;
    }
    
    document.getElementById('summaryContent').innerHTML = summaryHTML;
    document.getElementById('copyBtn').style.display = 'flex';
    generateAmortizationSchedule(principal, monthlyPayment, monthlyRate, totalMonths);
}

// =============================
// AMORTIZATION SCHEDULE
// =============================

function generateAmortizationSchedule(principal, monthlyPayment, monthlyRate, totalMonths) {
    let balance = principal;
    const monthText = currentLanguage === 'pt' ? 'Mês' : 'Month';
    const paymentText = currentLanguage === 'pt' ? 'Pagamento' : 'Payment';
    const interestText = currentLanguage === 'pt' ? 'Juros' : 'Interest';
    const balanceText = currentLanguage === 'pt' ? 'Saldo' : 'Balance';

    let scheduleHTML = `<div class="table-header"><div>${monthText}</div><div>${paymentText}</div><div>${interestText}</div><div>${balanceText}</div></div>`;
    
    const monthsToShow = Math.min(12, totalMonths);
    
    for (let i = 1; i <= monthsToShow; i++) {
        const interest = balance * monthlyRate;
        const principal_payment = monthlyPayment - interest;
        balance -= principal_payment;
        
        scheduleHTML += `
            <div class="table-row">
                <div>${i}</div>
                <div>${formatCurrency(monthlyPayment)}</div>
                <div>${formatCurrency(interest)}</div>
                <div>${formatCurrency(Math.max(0, balance))}</div>
            </div>
        `;
    }

    if (totalMonths > 12) {
        const showingText = currentLanguage === 'pt' ? 'Mostrando primeiros 12 meses de' : 'Showing first 12 months of';
        scheduleHTML += `<p style="text-align: center; font-size: 0.75rem; color: #6b7280; margin-top: 0.5rem;">${showingText} ${totalMonths}</p>`;
    }

    document.getElementById('amortizationContent').innerHTML = scheduleHTML;
}

// =============================
// TOGGLE FUNCTIONS
// =============================

function toggleAmortization() {
    const content = document.getElementById('amortizationContent');
    const button = event.target.closest('.toggle-btn');
    
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    button.classList.toggle('active');
}

function toggleComparison() {
    const content = document.getElementById('comparisonContent');
    const button = event.target.closest('.toggle-btn');
    
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    button.classList.toggle('active');
}

// =============================
// COMPARISON
// =============================

function captureComparison() {
    if (!currentResults) {
        alert(t('messages.executeFirst'));
        return;
    }

    if (!previousResults) {
        previousResults = { ...currentResults };
        showNotification(t('messages.firstCapture'));
        return;
    }

    const previousText = currentLanguage === 'pt' ? 'Situação Anterior' : 'Previous Situation';
    const currentText = currentLanguage === 'pt' ? 'Situação Atual' : 'Current Situation';
    const paymentText = currentLanguage === 'pt' ? 'Prestação Mensal' : 'Monthly Payment';
    const fullPaymentText = currentLanguage === 'pt' ? 'Total a Pagar' : 'Total Payment';
    const interestText = currentLanguage === 'pt' ? 'Total de Juros' : 'Total Interest';

    const comparisonHTML = `
        <div class="comparison-result">
            <div class="comparison-card">
                <h4>${previousText}</h4>
                <div class="comparison-item">
                    <span>${paymentText}:</span>
                    <span class="comparison-value">${formatCurrency(previousResults.monthlyPayment)} CVE</span>
                </div>
                <div class="comparison-item">
                    <span>${fullPaymentText}:</span>
                    <span class="comparison-value">${formatCurrency(previousResults.totalPayment)} CVE</span>
                </div>
                <div class="comparison-item">
                    <span>${interestText}:</span>
                    <span class="comparison-value">${formatCurrency(previousResults.totalInterest)} CVE</span>
                </div>
            </div>

            <div class="comparison-card">
                <h4>${currentText}</h4>
                <div class="comparison-item">
                    <span>${paymentText}:</span>
                    <span class="comparison-value">${formatCurrency(currentResults.monthlyPayment)} CVE
                        ${getDifference(currentResults.monthlyPayment, previousResults.monthlyPayment)}
                    </span>
                </div>
                <div class="comparison-item">
                    <span>${fullPaymentText}:</span>
                    <span class="comparison-value">${formatCurrency(currentResults.totalPayment)} CVE
                        ${getDifference(currentResults.totalPayment, previousResults.totalPayment)}
                    </span>
                </div>
                <div class="comparison-item">
                    <span>${interestText}:</span>
                    <span class="comparison-value">${formatCurrency(currentResults.totalInterest)} CVE
                        ${getDifference(currentResults.totalInterest, previousResults.totalInterest)}
                    </span>
                </div>
            </div>
        </div>
    `;

    document.getElementById('comparisonResults').innerHTML = comparisonHTML;
    document.getElementById('comparisonResults').style.display = 'block';
    previousResults = { ...currentResults };
    showNotification(t('messages.comparisonDone'));
}

function getDifference(current, previous) {
    const diff = current - previous;
    if (diff === 0) return '';
    
    const isPositive = diff > 0;
    const className = isPositive ? 'difference-negative' : 'difference-positive';
    const symbol = isPositive ? '+' : '';
    
    return `<span class="comparison-difference ${className}">${symbol}${formatCurrency(diff)}</span>`;
}

// =============================
// COPY RESULTS
// =============================

function copyResults() {
    if (!currentResults) return;

    const headerText = currentLanguage === 'pt' ? 'SIMULADOR DE CRÉDITO - CABO VERDE' : 'CAPE VERDE CREDIT SIMULATOR';
    const amountText = currentLanguage === 'pt' ? 'Montante' : 'Amount';
    const periodText = currentLanguage === 'pt' ? 'Período' : 'Period';
    const nominalText = currentLanguage === 'pt' ? 'Taxa Nominal' : 'Nominal Rate';
    const paymentText = currentLanguage === 'pt' ? 'Prestação Mensal' : 'Monthly Payment';
    const taegText = currentLanguage === 'pt' ? 'TAEG' : 'TAEG';
    const totalPaymentText = currentLanguage === 'pt' ? 'Total a Pagar' : 'Total Payment';
    const totalInterestText = currentLanguage === 'pt' ? 'Total de Juros' : 'Total Interest';
    const methodText = currentLanguage === 'pt' ? 'Método de Cálculo' : 'Calculation Method';
    const monthsText = currentLanguage === 'pt' ? 'meses' : 'months';

    const text = `
${headerText}

${amountText}: ${formatCurrency(currentResults.principal)} CVE
${periodText}: ${currentResults.totalMonths} ${monthsText}
${nominalText}: ${currentResults.rate}%

${paymentText}: ${formatCurrency(currentResults.monthlyPayment)} CVE
${taegText}: ${currentResults.taeg.toFixed(2)}%
${totalPaymentText}: ${formatCurrency(currentResults.totalPayment)} CVE
${totalInterestText}: ${formatCurrency(currentResults.totalInterest)} CVE

${methodText}: ${currentResults.calculationMethod}
    `;

    navigator.clipboard.writeText(text).then(() => {
        showNotification(t('messages.copySuccess'));
    }).catch(() => {
        alert(t('messages.copyError'));
    });
}

// =============================
// NOTIFICATIONS
// =============================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// =============================
// RESET FORM
// =============================

function resetForm() {
    document.getElementById('amount').value = '100000';
    document.getElementById('amountSlider').value = '100000';
    document.getElementById('amountDisplay').textContent = '100,000';
    
    document.getElementById('periodValue').value = '12';
    document.getElementById('periodSlider').value = '12';
    const monthsText = currentLanguage === 'pt' ? 'meses' : 'months';
    document.getElementById('periodDisplay').textContent = '12 ' + monthsText;
    
    document.getElementById('nominalRate').value = '12';
    document.getElementById('rateSlider').value = '12';
    document.getElementById('rateDisplay').textContent = '12.0%';
    
    document.getElementById('useTaeg').checked = false;
    document.getElementById('taegInput').value = '';
    document.getElementById('taegInput').disabled = true;
    document.getElementById('taegHint').style.display = 'none';

    document.querySelectorAll('.validation-error').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('input[type="number"]').forEach(el => {
        el.classList.remove('error');
    });

    document.getElementById('results').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
    document.getElementById('methodBadge').style.display = 'none';
    document.getElementById('amortizationContent').style.display = 'none';

    currentResults = null;
    previousResults = null;

    showNotification(t('messages.formReset'));
}

// =============================
// INFO POPUP
// =============================

function showInfo(key) {
    const info = t('info.' + key);
    document.getElementById('popupTitle').textContent = info.title;
    document.getElementById('popupDescription').textContent = info.description;
    
    if (info.formula) {
        document.getElementById('popupFormula').style.display = 'block';
        document.getElementById('formulaContent').textContent = info.formula;
    } else {
        document.getElementById('popupFormula').style.display = 'none';
    }
    
    document.getElementById('infoPopup').style.display = 'flex';
}

function closeInfo() {
    document.getElementById('infoPopup').style.display = 'none';
}

// =============================
// EVENT LISTENERS
// =============================

document.getElementById('amount')?.addEventListener('input', calculate);
document.getElementById('periodValue')?.addEventListener('input', calculate);
document.getElementById('periodUnit')?.addEventListener('change', calculate);
document.getElementById('nominalRate')?.addEventListener('input', calculate);
document.getElementById('taegInput')?.addEventListener('input', calculate);

document.getElementById('useTaeg')?.addEventListener('change', function() {
    const taegInput = document.getElementById('taegInput');
    const taegHint = document.getElementById('taegHint');
    
    if (this.checked) {
        taegInput.disabled = false;
        taegHint.style.display = 'block';
    } else {
        taegInput.disabled = true;
        taegInput.value = '';
        taegHint.style.display = 'none';
    }
    
    calculate();
});

document.getElementById('infoPopup')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeInfo();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement.tagName !== 'TEXTAREA') {
        calculate();
    }
    if (e.key === 'Escape') {
        closeInfo();
    }
});

// =============================
// INITIALIZATION
// =============================

function init() {
    initializeDarkMode();
    updateLanguageDisplay();
    translatePage();
    calculate();
}

// Start the app
init();
