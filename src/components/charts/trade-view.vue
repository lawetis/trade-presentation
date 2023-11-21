<template>
    <div class="section_chart w-full h-full relative">
        <div v-if="false" class="w-full relative flex items-center justify-between px-4 py-2">
            <div class="w-full options flex relative items-center justify-start gap-5">
                <div class="resolutions flex items-center gap-3">
                    <template v-for="(item, index) in resolutionsArray" :key="index">
                        <div class="items text-gray-300 text-sm cursor-pointer" :class="{ active: item.interval === resolutionsActive }">
                            {{ item.text }}
                        </div>
                    </template>
                </div>
                <div class="separator"></div>
                <div class="tradeing flex items-center gap-3">
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="white" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path><path fill="white" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path></svg>
                    </div>
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="white" fill-rule="evenodd" d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"></path></svg>
                    </div>
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="white"><path stroke="white" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"></path></svg>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="tradeing flex items-center gap-3">
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="white" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path><path fill="white" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path></svg>
                    </div>
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="white" fill-rule="evenodd" d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"></path></svg>
                    </div>
                    <div class="items cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="white"><path stroke="white" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"></path></svg>
                    </div>
                </div>
            </div>
            <div class="action flex items-center gap-3">
                <div class="items text-gray-300 cursor-pointer">
                    <font-awesome-icon icon="fa-solid fa-gear" />
                </div>
                <div class="items text-gray-300 cursor-pointer">
                    <font-awesome-icon icon="fa-solid fa-expand" />
                </div>
            </div>
        </div>
        <div ref="chartContainerRef" class="chart_container w-full h-full relative"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import resolutionsArray from '@/config/resolutions.json'

const viewWidget = ref(null)
const chartContainerRef = ref()
const resolutionsActive = ref('1')

const initTradeView = () => {
    const widgetOptions = {
        container: chartContainerRef.value,
        toolbar_bg: '#16121F',
        locale: 'cn',
        library_path: 'https://charting-library.oss-cn-hongkong.aliyuncs.com/charting_library/',
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed('https://demo-feed-data.tradingview.com'),
        symbol: 'aapl',
        interval: '1D',
        fullscreen: true,
        debug: true,
        theme: 'dark',
        overrides: {
            'paneProperties.background': '#16121F',
            'paneProperties.backgroundType': 'solid',
            'paneProperties.backgroundGradientStartColor': '#16121F',
            'paneProperties.backgroundGradientEndColor': '#16121F',
            'scalesProperties.backgroundColor' : "#16121F",
            'paneProperties.vertGridProperties.color': "#16121F",
            'paneProperties.horzGridProperties.color': "#16121F",
            'paneProperties.crossHairProperties.color': "#16121F",
            'paneProperties.crossHairProperties.width': 1,
        },
        enabled_features: ['chart_style_hilo'],
        disabled_features: ['volume_force_overlay', 'header_screenshot', 'timeframes_toolbar', 'symbol_search_hot_key', 'header_symbol_search', 'header_resolutions']
    }
    viewWidget.value = new window.TradingView.widget(widgetOptions)
    viewWidget.value.headerReady().then(() => {
        for (const item of resolutionsArray) {
            console.info(item)
            const button = viewWidget.value.createButton()
            button.setAttribute('title', item.text)
            button.addEventListener('click', () => {
                intervalChange(item)
            })
            button.textContent = item.text
        }
        viewWidget.value.setCSSCustomProperty('--tv-color-pane-background', '#16121F')
        // viewWidget.value.chart().createStudy('Moving Average', false, false, [5, 'close', 0], null, {
        //     'Plot.color': '#34a9ff',
        //     'Plot.linewidth': 1
        // })
        // viewWidget.value.chart().createStudy('Moving Average', false, false, [10, 'close', 0], null, {
        //     'Plot.color': '#ffb620',
        //     'Plot.linewidth': 1
        // })
        // viewWidget.value.chart().createStudy('Moving Average', false, false, [15, 'close', 0], null, {
        //     'Plot.color': '#8750ff',
        //     'Plot.linewidth': 1
        // })
        // viewWidget.value.chart().createStudy('Moving Average', false, false, [30, 'close', 0], null, {
        //     'Plot.color': '#ff688f',
        //     'Plot.linewidth': 1
        // })
    })
}

const intervalChange = (item) => {
    if (item.interval === 'Time') {
        viewWidget.value.chart().setChartType(3)
    } else {
        viewWidget.value.chart().setChartType(1)
    }
}
onMounted(() => {
    initTradeView()
})
</script>
