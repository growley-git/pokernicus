<template>
    <div class="leader-board">
        <ul class="list-group">
            <li 
                class="list-group-item"
                v-for="item, i in items.sort((a, b) => b.currency - a.currency)">
                <div class="d-flex" style="gap:16px;">
                    <Icon :icon="item.icon" fixed-width style="font-size:3rem;"/>
                    <div>
                        <div class="fw-bolder">{{ item.item }}</div>
                        <div class="d-flex align-items-center lh-1">
                            <Icon icon="crown-circle" fixed-width/>
                            {{ item.currency.toLocaleString() }}
                        </div>
                        <div class="d-flex align-items-center lh-1">
                            <Icon icon="currency-usd" fixed-width/>
                            {{ item.value.toLocaleString() }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon.vue'
import Avatar from '../Avatar.vue'

const props = withDefaults(defineProps<{
    items?: any,
}>(), {
    items: [
        {
            icon: 'food',
            item: 'Appetizer',
            value: '9.99',
            currency: 1000000,
        },
        {
            icon: 'glass-mug',
            item: 'Domestic Beer',
            value: '3.00',
            currency: 400000,
        },
        {
            icon: 'glass-wine',
            item: 'Wine',
            value: '3.00',
            currency: 400000,
        }
    ]
})

const classes = computed(() => ({}))

</script>

<style scoped lang="scss">

</style>