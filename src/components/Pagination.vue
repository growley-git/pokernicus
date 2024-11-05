<template>
<nav :aria-label="label">
    <ul :class="classes">
        <li class="page-item">
            <a href="#" class="page-link" aria-label="First">
                <span class="mdi mdi-chevron-double-left" aria-hidden="true"></span>
            </a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link" aria-label="Previous">
                <span class="mdi mdi-chevron-left" aria-hidden="true"></span>
            </a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link">1</a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link" aria-label="Next">
                <span class="mdi mdi-chevron-right" aria-hidden="true"></span>
            </a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link" aria-label="Last">
                <span class="mdi mdi-chevron-double-right" aria-hidden="true"></span>
            </a>
        </li>
    </ul>
</nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    label?: string,
    size?: 'sm' | 'lg',
}>(), {
    label: 'Page Navigation',
})

const classes = computed(() => ({
    'pagination': true,
    [`pagination-${ props.size || '' }`]: props.size,
}))
</script>