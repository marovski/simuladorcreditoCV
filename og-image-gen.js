import { createCanvas } from 'canvas';
import fs from 'fs';

const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, '#7c3aed');
gradient.addColorStop(1, '#5b21b6');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Decorative circles
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.beginPath();
ctx.arc(1100, 100, 150, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(100, 550, 120, 0, Math.PI * 2);
ctx.fill();

// Title
ctx.fillStyle = 'white';
ctx.font = 'bold 72px sans-serif';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText('Simulador de Crédito', 600, 220);

// Subtitle
ctx.font = '32px sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
ctx.fillText('Cabo Verde', 600, 290);

// Description
ctx.font = '24px sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
ctx.fillText('Calcule empréstimos com TAEG, juros e amortização', 600, 380);

// Box
ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
ctx.lineWidth = 3;
ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
ctx.beginPath();
ctx.rect(480, 450, 240, 100);
ctx.fill();
ctx.stroke();

// Features
ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
ctx.font = '18px sans-serif';
ctx.textAlign = 'left';
ctx.fillText('📊 Simulação Interativa', 515, 478);
ctx.fillText('💰 Cálculos Precisos', 515, 518);
ctx.fillText('📈 Cronograma Detalhado', 515, 558);

canvas.createPNGStream().pipe(fs.createWriteStream('og-image.png'));
console.log('✅ og-image.png created');
