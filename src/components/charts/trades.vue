<template>
    <div class="section_trades">
        <div class="title">Market trades</div>
        <div class="w-full flex-1 h-0 flex flex-col">
            <div class="w-full grid grid-cols-3 gap-4 min-w-min px-3 items-center text-xs text-gray-400">
                <div class="group/header tracking-wider box-border select-none overflow-hidden py-2 border-x-table-header-hover uppercase grow text-right relative first:pl-[1px] last:pr-[1px] pl-3 pr-3">price</div>
                <div class="group/header tracking-wider box-border select-none overflow-hidden py-2 border-x-table-header-hover uppercase grow text-right relative first:pl-[1px] last:pr-[1px] pl-3 pr-3">quantity</div>
                <div class="group/header tracking-wider box-border select-none overflow-hidden py-2 border-x-table-header-hover uppercase grow text-right relative first:pl-[1px] last:pr-[1px] pl-3 pr-3">time</div>
            </div>
            <div class="min-w-min flex-1 group w-full h-0">
                <div class="list max-h-full h-full overflow-y-auto">
                    <template v-for="item in 50" :key="item">
                        <div class="w-full grid grid-cols-3 gap-4 items-center min-w-min group px-3 text-gray-500">
                            <div class="text-md text-sm py-1 flex items-center grow text-end justify-end overflow-hidden px-3 first:pl-[1px] last:pr-[1px]">0.457414</div>
                            <div class="text-md text-sm py-1 flex items-center grow text-end justify-end overflow-hidden px-3 first:pl-[1px] last:pr-[1px] text-green-500">0.457414</div>
                            <div class="text-md text-sm py-1 flex items-center grow text-end justify-end overflow-hidden px-3 first:pl-[1px] last:pr-[1px]">09:05:01 AM</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>