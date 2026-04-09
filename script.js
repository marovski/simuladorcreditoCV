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
            amount: { 
                label: 'Quanto dinheiro quer pedir emprestado?',
                helper: 'Para carro, casa ou outro fim. Mínimo 10.000 CVE, máximo 50.000.000 CVE.'
            },
            period: { 
                label: 'Em quantos meses pretende pagar?', 
                helper: 'Períodos maiores = prestações menores, mas mais juros no total.',
                months: 'Meses', 
                years: 'Anos' 
            },
            rate: { 
                label: 'Taxa de juro anual do banco (%)', 
                helper: 'Peça este valor ao seu banco. Afeta quanto vai pagar de juros.'
            },
            divider: { or: 'OU' },
            taeg: {
                label: 'Usar TAEG do banco (mais realista)',
                helper: 'A TAEG inclui juros + comissões + seguros + outros encargos. Peça ao seu banco.',
                hint: '💡 Com TAEG (Aviso BCV 3/2013): Total a Pagar e Custo Total incluem todos os encargos reais.'
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
            taeg: {
                label: 'TAEG (Taxa Anual Efetiva)',
                labelEst: 'TAN (sem encargos)',
                labelBank: 'TAEG (fornecida pelo banco)'
            },
            totalPayment: { label: 'Total a Pagar' },
            totalInterest: {
                label: 'Total de Juros (Custo do Crédito)',
                labelWithTaeg: 'Custo Total do Crédito (com encargos)'
            },
            summary: { title: '📋 Resumo' },
            affordability: {
                title: '💼 Pode pagar?',
                helper: 'Indique seu rendimento mensal para saber se a prestação é acessível',
                income: { label: 'Seu rendimento mensal aproximado (CVE)' },
                guidance: 'Recomendação geral: prestação < 20% do rendimento = confortável | 20-35% = aceitável | > 35% = apertado',
                indicator: {
                    green: '✅ Confortável',
                    yellow: '⚠️ Aceitável',
                    red: '🔴 Apertado'
                }
            },
            amortization: {
                title: '📅 Como vai pagar?',
                subtitle: 'Primeiras 12 prestações (cronograma completo disponível)',
                columns: {
                    month: 'Mês',
                    payment: 'Prestação',
                    interest: 'Juros',
                    principal: 'Devolve',
                    balance: 'Saldo'
                },
                expand: 'Ver todas as prestações'
            },
            comparison: {
                title: '🔀 Comparison Mode',
                info: 'Use os controles acima para ajustar os valores. Clique no botão abaixo para comparar a situação anterior com a atual.',
                button: '📸 Capturar para Comparação'
            },
            transparency: {
                title: '🔓 Transparência',
                disclaimer: 'Este simulador é apenas educativo. Os valores são estimativas com base no mercado de Cabo Verde e podem variar conforme o banco.',
                privacy: '🔒 Privacidade: Não guardamos nenhum dado seu. Tudo funciona no seu browser.',
                contact: 'Contactar banco: Confirme sempre os valores com sua instituição financeira antes de assinar qualquer contrato.'
            }
        },
        footer: {
            disclaimer: 'Simulação indicativa com base no mercado de Cabo Verde 🇨🇻 Consulte a instituição financeira para valores exatos.',
            credit: 'Simulador de Crédito Cabo Verde',
            privacy: 'Sem recolha de dados | Totalmente privado | Educativo'
        },
        popup: {
            formula: '📐 Fórmula utilizada:',
            button: 'Entendi'
        },
        messages: {
            amountError: 'Montante deve estar entre 10.000 e 50.000.000 CVE',
            periodError: 'Período deve ser superior a 0',
            rateError: 'Taxa deve estar entre 0% e 30%',
            taegError: 'TAEG deve ser superior a 0',
            taegEstNote: '⚠️ TAEG estimada com base na TAN. Não inclui comissões, seguros nem outros encargos. Para o custo real, insira a TAEG fornecida pelo banco.',
            firstCapture: 'Situação anterior capturada! Altere os valores e clique novamente para comparar.',
            comparisonDone: 'Comparação realizada!',
            formReset: 'Formulário reiniciado!',
            copySuccess: 'Resultados copiados para a área de transferência!',
            copyError: 'Erro ao copiar resultados',
            executeFirst: 'Execute uma simulação primeiro',
            taegBank: 'TAEG Fornecida pelo Banco',
            nominalRate: 'Taxa Nominal'
        },
        fiscal: {
            title: '🏛️ Regime Fiscal — Imposto de Selo',
            isJuros: 'IS sobre Juros (3,5%)',
            isCapital: 'IS sobre Capital (0,5%)',
            isTotal: 'Total Imposto de Selo',
            custoTotal: 'Custo Total c/ Impostos',
            note: 'Conforme o Código do Imposto de Selo de Cabo Verde, aplicável a operações de crédito. Valores estimados — confirme com o banco.',
            tanOnlyBadge: 'Calculado com TAN (sem encargos)',
            tanOnlyNote: 'Imposto de Selo calculado apenas sobre os juros da TAN. Não inclui comissões, seguros ou outros encargos. Para valores mais precisos, introduza a TAEG fornecida pelo banco.'
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
                title: 'TAN vs TAEG — qual a diferença?',
                description: 'Sem TAEG do banco: o cartão mostra "TAN (sem encargos)". A Taxa Anual Nominal é a taxa de juro base do contrato — não inclui comissões, seguros nem outros encargos. É o ponto de partida do cálculo, não o custo real.\n\nCom TAEG do banco: é exibida a TAEG real conforme o Aviso BCV n.º 3/2013, que inclui todos os encargos da operação. Use a TAEG para comparar propostas de diferentes bancos.',
                formula: 'Sem TAEG: exibida a TAN tal como introduzida (sem cálculo)\n\nCom TAEG (BCV Anexo I) = taxa X que iguala:\nPV(crédito utilizado) = PV(reembolsos + todos os encargos)\n\nTAEG ≥ TAN sempre que existam encargos adicionais.'
            },
            totalPayment: {
                title: 'Total a Pagar',
                description: 'Sem TAEG do banco: soma de todas as prestações mensais calculadas com a TAN (capital + juros). Não inclui comissões, seguros ou outros encargos cobrados pelo banco.\n\nCom TAEG do banco: estimativa do custo total calculada com base na TAEG, que inclui todos os encargos da operação conforme o Aviso BCV n.º 3/2013.',
                formula: 'Sem TAEG: Total = Prestação Mensal (TAN) × Nº de Meses\n\nCom TAEG: Total estimado = PMT(TAEG) × Nº de Meses\n(inclui juros + encargos estimados)'
            },
            totalInterest: {
                title: 'Custo do Crédito',
                description: 'Sem TAEG: juros totais calculados com a TAN — diferença entre o total pago e o montante emprestado. Não inclui comissões, seguros ou outros encargos.\n\nCom TAEG: estimativa do custo total incluindo juros, comissões, seguros e demais encargos, conforme a definição de «Custo total do crédito» do Aviso BCV n.º 3/2013.',
                formula: 'Sem TAEG: Juros = Total a Pagar (TAN) − Montante\n\nCom TAEG: Custo Total = PMT(TAEG) × Nº Meses − Montante\n(inclui todos os encargos)'
            },
            impostoSelo: {
                title: 'Imposto de Selo (Regime Fiscal CV)',
                description: 'Em Cabo Verde, as operações de crédito estão sujeitas ao Imposto de Selo conforme o Código do Imposto de Selo:\n\n• 3,5% sobre os juros — aplicado ao total de juros pagos durante o período do crédito.\n\n• 0,5% sobre o capital utilizado — aplicado ao montante total do empréstimo.\n\nEste imposto acresce ao custo do crédito e deve ser considerado no planeamento financeiro.',
                formula: 'IS sobre Juros = Total de Juros × 3,5%\nIS sobre Capital = Montante × 0,5%\nTotal IS = IS Juros + IS Capital\n\nCusto Total c/ Impostos = Total a Pagar + Total IS'
            }
        }
    },
    en: {
        app: {
            title: 'Credit Simulator',
            subtitle: 'Cape Verde 🇨🇻'
        },
        form: {
            amount: { 
                label: 'How much money do you want to borrow?',
                helper: 'For car, house or other purpose. Min 10,000 CVE, max 50,000,000 CVE.'
            },
            period: { 
                label: 'How many months will you pay?', 
                helper: 'Longer periods = lower payments, but more interest in total.',
                months: 'Months', 
                years: 'Years' 
            },
            rate: { 
                label: 'Bank annual interest rate (%)', 
                helper: 'Ask your bank for this value. It affects how much you pay in interest.'
            },
            divider: { or: 'OR' },
            taeg: {
                label: 'Use bank\'s TAEG (more realistic)',
                helper: 'TAEG = rate that includes commissions, insurance, etc. Shows real cost.',
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
            taeg: {
                label: 'TAEG (Annual Effective Rate)',
                labelEst: 'TAN (excl. charges)',
                labelBank: 'TAEG (provided by bank)'
            },
            totalPayment: { label: 'Total Payment' },
            totalInterest: {
                label: 'Total Interest (Cost of Credit)',
                labelWithTaeg: 'Total Cost of Credit (incl. charges)'
            },
            summary: { title: '📋 Summary' },
            affordability: {
                title: '💼 Can you afford it?',
                helper: 'Enter your monthly income to see if the payment is affordable',
                income: { label: 'Your approximate monthly income (CVE)' },
                guidance: 'General recommendation: payment < 20% of income = comfortable | 20-35% = acceptable | > 35% = tight',
                indicator: {
                    green: '✅ Comfortable',
                    yellow: '⚠️ Acceptable',
                    red: '🔴 Tight'
                }
            },
            amortization: {
                title: '📅 How will you pay?',
                subtitle: 'First 12 payments (full schedule available)',
                columns: {
                    month: 'Month',
                    payment: 'Payment',
                    interest: 'Interest',
                    principal: 'Repay',
                    balance: 'Balance'
                },
                expand: 'See all payments'
            },
            comparison: {
                title: '🔀 Comparison Mode',
                info: 'Use the controls above to adjust values. Click the button below to compare the previous situation with the current one.',
                button: '📸 Capture for Comparison'
            },
            transparency: {
                title: '🔓 Transparency',
                disclaimer: 'This simulator is educational only. Values are estimates based on Cape Verde market and may vary by bank.',
                privacy: '🔒 Privacy: We don\'t store any of your data. Everything works in your browser.',
                contact: 'Contact bank: Always confirm values with your financial institution before signing any contract.'
            }
        },
        footer: {
            disclaimer: 'Indicative simulation based on Cape Verde market 🇨🇻 Consult the financial institution for exact values.',
            credit: 'Cape Verde Credit Simulator',
            privacy: 'No data collection | Completely private | Educational'
        },
        popup: {
            formula: '📐 Formula used:',
            button: 'Got it'
        },
        messages: {
            amountError: 'Amount must be between 10,000 and 50,000,000 CVE',
            periodError: 'Period must be greater than 0',
            rateError: 'Rate must be between 0% and 30%',
            taegError: 'TAEG must be greater than 0',
            taegEstNote: '⚠️ TAEG estimated from TAN only. Does not include fees, insurance or other charges. For the real cost, enter the TAEG provided by your bank.',
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
                title: 'TAN vs TAEG — what\'s the difference?',
                description: 'Without bank TAEG: the card shows "TAN (excl. charges)". The Nominal Annual Rate is the base interest rate in the contract — it does not include fees, insurance or other charges. It is the starting point of the calculation, not the real cost.\n\nWith bank TAEG: the real TAEG is shown as per BCV Notice 3/2013, which includes all charges. Use the TAEG to compare offers from different banks.',
                formula: 'Without TAEG: TAN displayed as entered (no calculation)\n\nWith TAEG (BCV Annex I) = rate X where:\nPV(credit used) = PV(repayments + all charges)\n\nTAEG ≥ TAN whenever additional charges exist.'
            },
            totalPayment: {
                title: 'Total Payment',
                description: 'Without bank TAEG: sum of all monthly payments calculated with TAN (principal + interest). Does not include bank fees, insurance or other charges.\n\nWith bank TAEG: estimated total cost based on the TAEG, which includes all charges as per BCV Notice 3/2013.',
                formula: 'Without TAEG: Total = Monthly Payment (TAN) × No. of Months\n\nWith TAEG: Estimated Total = PMT(TAEG) × No. of Months\n(includes interest + estimated charges)'
            },
            totalInterest: {
                title: 'Cost of Credit',
                description: 'Without TAEG: total interest calculated with TAN — difference between total paid and amount borrowed. Does not include fees, insurance or other charges.\n\nWith TAEG: estimated total cost including interest, fees, insurance and other charges, as per the definition of "Total cost of credit" in BCV Notice 3/2013.',
                formula: 'Without TAEG: Interest = Total Payment (TAN) − Principal\n\nWith TAEG: Total Cost = PMT(TAEG) × No. Months − Principal\n(includes all charges)'
            },
            impostoSelo: {
                title: 'Stamp Tax — Fiscal Regime CV',
                description: 'In Cape Verde, credit operations are subject to Stamp Tax (Imposto de Selo) under the Cape Verde Stamp Tax Code:\n\n• 3.5% on interest — applied to the total interest paid over the credit period.\n\n• 0.5% on capital used — applied to the total loan amount.\n\nThis tax is in addition to the cost of credit and should be factored into financial planning.',
                formula: 'IS on Interest = Total Interest × 3.5%\nIS on Capital = Principal × 0.5%\nTotal Stamp Tax = IS Interest + IS Capital\n\nTotal Cost incl. Tax = Total Payment + Total Stamp Tax'
            }
        },
        fiscal: {
            title: '🏛️ Fiscal Regime — Stamp Tax',
            isJuros: 'Stamp Tax on Interest (3.5%)',
            isCapital: 'Stamp Tax on Capital (0.5%)',
            isTotal: 'Total Stamp Tax',
            custoTotal: 'Total Cost incl. Tax',
            note: 'As per the Cape Verde Stamp Tax Code, applicable to credit operations. Estimated values — confirm with your bank.',
            tanOnlyBadge: 'Calculated with TAN (excl. charges)',
            tanOnlyNote: 'Stamp Tax calculated on TAN interest only. Does not include fees, insurance or other charges. For more accurate values, enter the TAEG provided by your bank.'
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
    // Update period display with the new language
    const periodValue = parseInt(document.getElementById('periodValue').value) || 0;
    const periodUnit = document.getElementById('periodUnit')?.value || 'meses';
    const unitText = periodUnit === 'anos' ? (currentLanguage === 'pt' ? 'anos' : 'years') : (currentLanguage === 'pt' ? 'meses' : 'months');
    document.getElementById('periodDisplay').textContent = periodValue + ' ' + unitText;
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
    const locale = currentLanguage === 'pt' ? 'pt-CV' : 'en-US';
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatNumber(value) {
    const locale = currentLanguage === 'pt' ? 'pt-CV' : 'en-US';
    return new Intl.NumberFormat(locale, {
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

    if (amount <= 0 || amount > 50000000) {
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
    const value = parseInt(this.value);
    const periodUnit = document.getElementById('periodUnit')?.value || 'meses';
    const unitText = periodUnit === 'anos' ? (currentLanguage === 'pt' ? 'anos' : 'years') : (currentLanguage === 'pt' ? 'meses' : 'months');
    document.getElementById('periodDisplay').textContent = value + ' ' + unitText;
    calculate();
});

document.getElementById('rateSlider')?.addEventListener('input', function() {
    document.getElementById('nominalRate').value = this.value;
    document.getElementById('rateDisplay').textContent = parseFloat(this.value).toFixed(1) + '%';
    calculate();
});

document.getElementById('amount')?.addEventListener('input', function() {
    const numericValue = this.value;
    document.getElementById('amountSlider').value = numericValue || 0;
    document.getElementById('amountDisplay').textContent = formatNumber(numericValue || 0);
});

document.getElementById('amount')?.addEventListener('paste', function(e) {
    e.preventDefault();
    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    const numericValue = pastedText.replace(/\D/g, '');
    this.value = numericValue || '';
    document.getElementById('amountSlider').value = numericValue || 0;
    document.getElementById('amountDisplay').textContent = formatNumber(numericValue || 0);
    calculate();
});

document.getElementById('periodValue')?.addEventListener('input', function() {
    const value = parseInt(this.value) || 0;
    document.getElementById('periodSlider').value = value;
    const periodUnit = document.getElementById('periodUnit')?.value || 'meses';
    const unitText = periodUnit === 'anos' ? (currentLanguage === 'pt' ? 'anos' : 'years') : (currentLanguage === 'pt' ? 'meses' : 'months');
    document.getElementById('periodDisplay').textContent = value + ' ' + unitText;
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
        taeg = rate;
        
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

    // Update result card labels dynamically based on calculation mode
    const taegCardLabel = document.querySelector('.result-card.green .result-header span[data-i18n]');
    const interestCardLabel = document.querySelector('.result-card.orange .result-header span[data-i18n]');
    if (taegCardLabel) {
        taegCardLabel.textContent = useTaeg && taegInput > 0
            ? t('results.taeg.labelBank')
            : t('results.taeg.labelEst');
    }
    if (interestCardLabel) {
        interestCardLabel.textContent = useTaeg && taegInput > 0
            ? t('results.totalInterest.labelWithTaeg')
            : t('results.totalInterest.label');
    }

    // Imposto de Selo
    const isJuros = totalInterest * 0.035;
    const isCapital = principal * 0.005;
    const isTotal = isJuros + isCapital;
    const custoTotalComIS = totalPayment + isTotal;

    document.getElementById('isJuros').textContent = formatCurrency(isJuros) + ' CVE';
    document.getElementById('isCapital').textContent = formatCurrency(isCapital) + ' CVE';
    document.getElementById('isTotal').textContent = formatCurrency(isTotal) + ' CVE';
    document.getElementById('custoTotalComIS').textContent = formatCurrency(custoTotalComIS) + ' CVE';
    document.getElementById('fiscalSection').style.display = 'block';

    // Update fiscal section labels (language-aware)
    document.querySelector('#fiscalSection h3').textContent = t('fiscal.title');
    document.getElementById('labelIsJuros').textContent = t('fiscal.isJuros');
    document.getElementById('labelIsCapital').textContent = t('fiscal.isCapital');
    document.getElementById('labelIsTotal').textContent = t('fiscal.isTotal');
    document.getElementById('labelCustoTotal').textContent = t('fiscal.custoTotal');

    // Show/hide TAN-only badge and note based on whether bank TAEG was entered
    const fiscalBadge = document.getElementById('fiscalBadge');
    const fiscalNote = document.getElementById('fiscalNote');
    if (useTaeg && taegInput > 0) {
        fiscalBadge.style.display = 'none';
        fiscalNote.textContent = t('fiscal.note');
    } else {
        fiscalBadge.textContent = t('fiscal.tanOnlyBadge');
        fiscalBadge.style.display = 'inline-block';
        fiscalNote.textContent = t('fiscal.tanOnlyNote');
    }

    const methodBadge = document.getElementById('methodBadge');
    if (methodBadge) {
        methodBadge.innerHTML = `<span>✓ ${calculationMethod}</span>`;
        methodBadge.style.display = 'inline-block';
    }

    const periodText = currentLanguage === 'pt' ? 'Período' : 'Period';
    const yearText = currentLanguage === 'pt' ? 'anos' : 'years';
    const nominalText = currentLanguage === 'pt' ? 'Taxa Nominal' : 'Nominal Rate';
    const monthlyText = currentLanguage === 'pt' ? 'Taxa Mensal' : 'Monthly Rate';
    const taegCalcText = currentLanguage === 'pt' ? 'TAN (sem encargos)' : 'TAN (excl. charges)';
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
            <p class="summary-note">${t('messages.taegEstNote')}</p>
        `;
    }
    
    document.getElementById('summaryContent').innerHTML = summaryHTML;
    document.getElementById('copyBtn').style.display = 'flex';
    generateAmortizationSchedule(principal, monthlyPayment, monthlyRate, totalMonths);
    
    // Update affordability indicator if income has been entered
    const incomeInput = document.getElementById('incomeInput');
    if (incomeInput && parseFloat(incomeInput.value) > 0) {
        updateAffordabilityIndicator();
    }
}

// =============================
// AMORTIZATION SCHEDULE
// =============================

function generateAmortizationSchedule(principal, monthlyPayment, monthlyRate, totalMonths) {
    let balance = principal;
    const monthCol = currentLanguage === 'pt' ? 'Mês' : 'Month';
    const paymentCol = currentLanguage === 'pt' ? 'Prestação' : 'Payment';
    const interestCol = currentLanguage === 'pt' ? 'Juros' : 'Interest';
    const principalCol = currentLanguage === 'pt' ? 'Devolve' : 'Principal';
    const balanceCol = currentLanguage === 'pt' ? 'Saldo' : 'Balance';

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>${monthCol}</th>
                    <th>${paymentCol}</th>
                    <th>${interestCol}</th>
                    <th>${principalCol}</th>
                    <th>${balanceCol}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    const monthsToShow = Math.min(12, totalMonths);
    
    for (let i = 1; i <= monthsToShow; i++) {
        const interest = balance * monthlyRate;
        const principal_payment = monthlyPayment - interest;
        balance -= principal_payment;
        
        tableHTML += `
            <tr>
                <td>${i}</td>
                <td>${formatCurrency(monthlyPayment)}</td>
                <td>${formatCurrency(interest)}</td>
                <td>${formatCurrency(principal_payment)}</td>
                <td>${formatCurrency(Math.max(0, balance))}</td>
            </tr>
        `;
    }

    tableHTML += `</tbody></table>`;

    if (totalMonths > 12) {
        const note = currentLanguage === 'pt' 
            ? `Mostrando primeiras 12 prestações de ${totalMonths}` 
            : `Showing first 12 payments of ${totalMonths}`;
        tableHTML += `<p style="text-align: center; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.75rem;">${note}</p>`;
    }

    document.getElementById('amortizationContent').innerHTML = tableHTML;
}

// =============================
// AFFORDABILITY INDICATOR
// =============================

function updateAffordabilityIndicator() {
    const monthlyPayment = currentResults.monthlyPayment;
    const incomeInput = document.getElementById('incomeInput');
    const income = parseFloat(incomeInput.value) || 0;
    
    if (income <= 0) {
        document.getElementById('affordabilityIndicator').style.display = 'none';
        return;
    }

    const percentage = (monthlyPayment / income) * 100;
    let color, status, message;

    if (percentage < 20) {
        color = '#16a34a'; // green
        status = currentLanguage === 'pt' ? '✅ Confortável' : '✅ Comfortable';
    } else if (percentage < 35) {
        color = '#ea580c'; // warning orange
        status = currentLanguage === 'pt' ? '⚠️ Aceitável' : '⚠️ Acceptable';
    } else {
        color = '#dc2626'; // danger red
        status = currentLanguage === 'pt' ? '🔴 Apertado' : '🔴 Tight';
    }

    const barHTML = `<div class="bar-fill" style="width: ${Math.min(percentage, 100)}%; background-color: ${color};">${percentage >= 10 ? Math.round(percentage) + '%' : ''}</div>`;
    document.querySelector('.affordability-bar').innerHTML = barHTML;

    const guidanceText= currentLanguage === 'pt'
        ? `Sua prestação é ${Math.round(percentage)}% do seu rendimento. ${status}`
        : `Your payment is ${Math.round(percentage)}% of your income. ${status}`;

    document.getElementById('affordabilityText').textContent = guidanceText;
    document.getElementById('affordabilityText').style.color = color;
    document.getElementById('affordabilityIndicator').style.display = 'block';
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
    document.getElementById('amountDisplay').textContent = formatNumber(100000);
    
    document.getElementById('periodValue').value = '12';
    document.getElementById('periodSlider').value = '12';
    document.getElementById('periodUnit').value = 'meses';
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
document.getElementById('periodUnit')?.addEventListener('change', function() {
    const value = parseInt(document.getElementById('periodValue').value) || 0;
    const unitText = this.value === 'anos' ? (currentLanguage === 'pt' ? 'anos' : 'years') : (currentLanguage === 'pt' ? 'meses' : 'months');
    document.getElementById('periodDisplay').textContent = value + ' ' + unitText;
    calculate();
});
document.getElementById('nominalRate')?.addEventListener('input', calculate);
document.getElementById('taegInput')?.addEventListener('input', calculate);

// Income input for affordability indicator
document.getElementById('incomeInput')?.addEventListener('input', function() {
    if (currentResults) {
        updateAffordabilityIndicator();
    }
});

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
    // Initialize amount display with formatted value
    const amountField = document.getElementById('amount');
    if (amountField && amountField.value) {
        const numericValue = parseFloat(amountField.value);
        document.getElementById('amountDisplay').textContent = formatNumber(numericValue);
    }
    calculate();
}

// Start the app
init();

// =============================
// ANDROID / DESKTOP INSTALL PROMPT
// =============================

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const dismissed = localStorage.getItem('androidBannerDismissed');
    if (isStandalone || dismissed) return;

    setTimeout(() => {
        const banner = document.getElementById('androidInstallBanner');
        if (!banner) return;

        const isPt = currentLanguage === 'pt';
        document.getElementById('androidBannerTitle').textContent = isPt ? 'Instalar aplicação' : 'Install app';
        document.getElementById('androidBannerDesc').textContent = isPt
            ? 'Adicione ao ecrã inicial para acesso rápido e uso offline.'
            : 'Add to your home screen for quick access and offline use.';
        document.getElementById('androidInstallBtn').textContent = isPt ? 'Instalar' : 'Install';

        banner.style.display = 'flex';
    }, 2000);
});

window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    const banner = document.getElementById('androidInstallBanner');
    if (banner) banner.style.display = 'none';
});

async function triggerAndroidInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (outcome === 'accepted') {
        const banner = document.getElementById('androidInstallBanner');
        if (banner) banner.style.display = 'none';
    }
}

function dismissAndroidBanner() {
    localStorage.setItem('androidBannerDismissed', '1');
    const banner = document.getElementById('androidInstallBanner');
    if (banner) banner.style.display = 'none';
}

// =============================
// iOS PWA INSTALL BANNER
// =============================

function showIOSInstallBanner() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isInStandalone = window.navigator.standalone === true ||
        window.matchMedia('(display-mode: standalone)').matches;
    const dismissed = localStorage.getItem('iosBannerDismissed');
    if (!isIOS || isInStandalone || dismissed) return;

    const banner = document.getElementById('iosInstallBanner');
    if (!banner) return;

    // Update text based on current language
    const isPt = currentLanguage === 'pt';
    document.getElementById('iosBannerTitle').textContent = isPt ? 'Instalar aplicação' : 'Install app';
    document.getElementById('iosBannerDesc').innerHTML = isPt
        ? 'Toque em <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> e depois "Adicionar ao ecrã inicial"'
        : 'Tap <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> then "Add to Home Screen"';

    banner.style.display = 'flex';
}

function dismissIOSBanner() {
    localStorage.setItem('iosBannerDismissed', '1');
    const banner = document.getElementById('iosInstallBanner');
    if (banner) banner.style.display = 'none';
}

// Show after a short delay so it doesn't clash with page load
setTimeout(showIOSInstallBanner, 2000);
