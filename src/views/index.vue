<template>
    <div class="home_main h-screen w-full min-h-screen relative">
        <div class="px-8 w-full h-full mr-auto ml-auto flex justify-center">
            <div class="max-w-screen-2xl w-full h-full grid grid-cols-12 gap-8 justify-center items-center">
                <div class="col-span-5">
                    <h3 class="font-semibold from-stone-50 text-white text-6xl leading-tight break-words">Purchase today and lock your future by security</h3>
                    <p class="text-slate-400 leading-normal text-lg mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia mauris et massa quisque. A, sem mattis semper auctor neque, enim neque. Nisl blandit velit consectetur fames viverra libero libero
                        ut tellus.
                    </p>
                    <div class="relative mt-6 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="text"
                            class="bg-slate-900 block h-14 w-full rounded-md border-1 border-gray-400 py-1.5 pl-7 pr-20 text-white text-xl ring-2 ring-inset ring-gray-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:border-green-500 focus:ring-green-500 sm:text-xl sm:leading-6"
                            placeholder="Please enter the stock code"
                        />
                        <div @click.stop="searchStock" class="cursor-pointer absolute bg-green-500 h-full text-2xl font-semibold text-yellow-50 uppercase px-5 rounded-r-lg inset-y-0 right-0 flex items-center">
                            Search
                        </div>
                    </div>
                </div>
                <div class="col-span-2"></div>
                <div class="col-span-5">
                    <img src="/images/banner.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const searchStock = () => {
    router.push('charts')
}
</script>
