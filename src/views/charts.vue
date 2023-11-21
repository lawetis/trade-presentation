<template>
    <div class="page_charts">
        <div class="charts_header">头部区域、可放置导航等区域</div>
        <div class="charts_container">
            <StockInfo></StockInfo>
            <div class="stock_section">
                <TradesView></TradesView>
                <OrderBook></OrderBook>
                <MarketTrades></MarketTrades>
            </div>
            <div class="stock_blank">
                Transaction history, balances, orders, and other areas
            </div>
        </div>
    </div>
</template>

<script setup>
import StockInfo from '@/components/charts/stock.vue'
import OrderBook from '@/components/charts/order-book.vue'
import MarketTrades from '@/components/charts/trades.vue'
import TradesView from '@/components/charts/trade-view.vue'
</script>
