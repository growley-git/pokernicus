<template>
    <nav :aria-label="label">
        <ol class="breadcrumb">
            <li v-for="item, i in items" :class="{ 'breadcrumb-item': true, 'active': i === (items.length - 1)}" :aria-current="i === (items.length - 1) ? 'page' : undefined">
                <a v-if="i !== (items.length - 1)" :href="item.href">{{ item.label }}</a>
                <template v-else>{{ item.label }}</template>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    label?: string,
    items?: any,
}>(), {
    label: 'Breadcrumb',
    items: [
        {
            href: '#',
            label: 'Home'
        },
        {
            href: '#',
            label: 'Library'
        },
        {
            href: '#',
            label: 'Data'
        }
    ]
})

const classes = computed(() => ({}))
</script>