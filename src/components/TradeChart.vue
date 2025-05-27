<template>
    <div class="flex-1 bg-[#1e1b3ab3] rounded-2xl border border-[#393a5a] p-0 flex flex-col min-w-[480px]">
        <div class="px-8 pt-6 pb-2">
            <h2 class="text-base font-bold text-white">{{ pair }}</h2>
        </div>
        <div class="flex-1 flex flex-col justify-center items-center px-2 pb-6">
            <div class="w-full h-[400px] rounded-xl overflow-hidden bg-[#18142a] flex items-center justify-center">
                <canvas ref="chartCanvas" class="w-full h-full"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    pair: {
        type: String,
        default: '$BOUNTY / USDT'
    }
});

const chartCanvas = ref(null);

onMounted(() => {
    if (chartCanvas.value) {
        renderFallbackChart();
    }
});

function renderFallbackChart() {
    const canvas = chartCanvas.value;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    // 绘制背景
    ctx.fillStyle = '#18142a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制价格和变化百分比
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('0.0291', 20, 30);

    ctx.fillStyle = '#876bff';
    ctx.font = '14px Arial';
    ctx.fillText('+0.05%', 90, 30);

    // 绘制蜡烛图
    const candleData = generateCandleData(50);
    drawCandleChart(ctx, candleData, canvas.width, canvas.height);

    // 绘制TV标志
    ctx.fillStyle = '#777777';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('TradingView', canvas.width - 70, canvas.height - 10);
}

function generateCandleData(count) {
    const data = [];
    let price = 0.0291;

    for (let i = 0; i < count; i++) {
        const change = (Math.random() - 0.5) * 0.0008;
        const open = price;
        price = open + change;
        const high = Math.max(open, price) + Math.random() * 0.0002;
        const low = Math.min(open, price) - Math.random() * 0.0002;

        data.push({
            time: Date.now() - (count - i) * 3600000,
            open,
            high,
            low,
            close: price,
            isUp: price >= open
        });
    }

    return data;
}

function drawCandleChart(ctx, data, width, height) {
    // 找出价格范围
    const highs = data.map(d => d.high);
    const lows = data.map(d => d.low);
    const maxPrice = Math.max(...highs);
    const minPrice = Math.min(...lows);
    const priceRange = maxPrice - minPrice;

    // 绘制网格线
    ctx.strokeStyle = '#2e2a42';
    ctx.lineWidth = 0.5;

    // 水平网格线
    for (let i = 0; i < 5; i++) {
        const y = 60 + ((height - 100) * i / 4);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // 计算蜡烛图的宽度和间距
    const candleWidth = 5;
    const spacing = (width - 40) / data.length;

    // 绘制蜡烛图
    data.forEach((candle, i) => {
        const x = 20 + i * spacing;

        // 将价格转换为坐标
        const normalizedOpen = (candle.open - minPrice) / priceRange;
        const normalizedClose = (candle.close - minPrice) / priceRange;
        const normalizedHigh = (candle.high - minPrice) / priceRange;
        const normalizedLow = (candle.low - minPrice) / priceRange;

        const openY = height - 40 - normalizedOpen * (height - 100);
        const closeY = height - 40 - normalizedClose * (height - 100);
        const highY = height - 40 - normalizedHigh * (height - 100);
        const lowY = height - 40 - normalizedLow * (height - 100);

        // 绘制蜡烛线
        ctx.strokeStyle = candle.isUp ? '#ff45a4' : '#876bff';
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, highY);
        ctx.lineTo(x + candleWidth / 2, lowY);
        ctx.stroke();

        // 绘制蜡烛体
        ctx.fillStyle = candle.isUp ? '#ff45a4' : '#876bff';
        const candleHeight = Math.abs(closeY - openY);
        const candleY = Math.min(closeY, openY);
        ctx.fillRect(x, candleY, candleWidth, Math.max(1, candleHeight));
    });
}

// 窗口调整大小时重新绘制
const handleResize = () => {
    if (chartCanvas.value) {
        renderFallbackChart();
    }
};

window.addEventListener('resize', handleResize);

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
