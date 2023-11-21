<template>
    <div class="section_orderbook">
        <div class="title">Order book</div>
        <div class="rate">
            <div class="rate_items buy">BUY</div>
            <div class="background">
                <div class="back_items buy" style="width: 70.358%">83.93%</div>
                <div class="back_items sell" style="width: 29.642%">16.07%</div>
            </div>
            <div class="rate_items sell">SELL</div>
        </div>
        <div class="h-6 flex items-center justify-between mt-0.5 pr-2.5">
            <div class="text-neutral font-display text-xs font-semibold pr-1.5 text-gray-400 uppercase text-right w-1/3">price</div>
            <div class="text-neutral font-display text-xs font-semibold pr-1.5 text-gray-400 uppercase text-right w-1/3">quantity</div>
        </div>
        <div class="flex h-full flex-1 relative overflow-hidden w-full justify-start flex-col">
            <div class="group relative flex-1 h-full max-h-full overflow-y-auto divide-y divide-transparent w-full [&>*:hover]:bg-order-book-hover [&>*:hover~div]:bg-order-book-hover">
                <template v-for="(item, index) in sellData" :key="index">
                    <div class="flex items-center relative h-6">
                        <span class="bg-order-book-negative absolute left-0 top-0 w-full h-full pointer-events-none origin-left" :style="`transform: ${item.scale}`"></span>
                        <div class="text-negative font-mono text-sm font-medium p-1 first:pl-1.5 last:pr-1.5 overflow-hidden text-ellipsis cursor-pointer hover:font-bold relative text-right w-1/2">
                            <span class="text-negative font-mono text-sm text-red-600 font-medium hover:font-bold">{{ item.price }}</span>
                        </div>
                        <div class="text-primary font-mono text-sm font-medium p-1 first:pl-1.5 last:pr-1.5 overflow-hidden text-ellipsis cursor-pointer hover:font-bold text-right w-1/2">
                            <span class="text-primary font-mono text-sm text-white font-medium hover:font-bold">{{ item.quantity }}</span>
                        </div>
                    </div>
                </template>
            </div>
            <div class="relative w-full bg-card rounded-sm py-1">
                <div class="flex justify-center"><span class="text-neutral font-display text-sm font-normal">Spread:</span><span class="text-neutral font-display text-sm font-medium ml-1">0.1 (0.000%)</span></div>
            </div>
            <div class="group relative flex-1 h-full max-h-full overflow-y-auto divide-y divide-transparent w-full [&>*:hover]:bg-order-book-hover [&>*:hover~div]:bg-order-book-hover">
                <template v-for="(item, index) in buyData" :key="index">
                    <div class="flex items-center relative h-6">
                        <span class="bg-order-book-positive absolute left-0 top-0 w-full h-full pointer-events-none origin-left" :style="`transform: ${item.scale}`"></span>
                        <div class="text-negative font-mono text-sm font-medium p-1 first:pl-1.5 last:pr-1.5 overflow-hidden text-ellipsis cursor-pointer hover:font-bold relative text-right w-1/2">
                            <span class="text-negative font-mono text-sm text-green-600 font-medium hover:font-bold">{{ item.price }}</span>
                        </div>
                        <div class="text-primary font-mono text-sm font-medium p-1 first:pl-1.5 last:pr-1.5 overflow-hidden text-ellipsis cursor-pointer hover:font-bold text-right w-1/2">
                            <span class="text-primary font-mono text-sm text-white font-medium hover:font-bold">{{ item.quantity }}</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const buyData = ref([])
const sellData = ref([])

const randomValue = (min, max, decimalPlaces) => {
    var precision = Math.pow(10, decimalPlaces)
    return Math.floor((Math.random() * (max - min) + min) * precision) / precision
}

const generateOrderBookEntry = (priceMin, priceMax, quantityMin, quantityMax, decimalPlacesForPrice, decimalPlacesForQuantity) => {
    const price = randomValue(priceMin, priceMax, decimalPlacesForPrice)
    const quantity = randomValue(quantityMin, quantityMax, decimalPlacesForQuantity)
    return {
        price: price,
        quantity: quantity
    }
}
const generateRandomSteps = (itemCount, ascending) => {
    let steps = []
    let currentStep = ascending ? 0 : 1

    for (let i = 0; i < itemCount; i++) {
        let randomStep

        if (ascending) {
            randomStep = Math.random() * (1 - currentStep)
            currentStep += randomStep
        } else {
            randomStep = currentStep * Math.random()
            currentStep -= randomStep
        }
        const scale3d = `scale3d(${randomStep.toFixed(2)}, 1, 1)`;
        steps.push(scale3d)
    }

    return steps
}
const initOrderbook = (ascending) => {
    const n = 20
    const scales = []
    const stepValues = generateRandomSteps(n, ascending)
    for (let index = 0; index < n; index++) {
        const randomData = generateOrderBookEntry(1500, 1700, 0.1, 100, 2, 2)
        const itemTemp = {
            scale: stepValues[index],
            price: randomData.price,
            quantity: randomData.quantity
        }
        scales.push(itemTemp)
    }
    return scales
}
const initRandomDelay = (type, ascending) => {
    const arrData = initOrderbook(ascending)
    if (type === 'buy') {
        buyData.value = arrData
    } else {
        sellData.value = arrData
    }
    const delay = Math.random() * 5000
    setTimeout(() => {
        initRandomDelay(type)
    }, delay)
}
onMounted(() => {
    initRandomDelay('buy', false)
    initRandomDelay('sell', true)
})
</script>
