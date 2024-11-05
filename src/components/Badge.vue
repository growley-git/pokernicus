<template>
    <span :class="classes">
        <slot>{{ text }}</slot>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    text?: string,
    pill?: boolean,
    /**
     * badge style
     */
    primary?: boolean,
    secondary?: boolean,
    success?: boolean,
    warning?: boolean,
    danger?: boolean,
    info?: boolean,
    light?: boolean,
    dark?: boolean,
}>(), {
    text: 'Lorem'
})

const classes = computed(() => ({
    'badge': true,
    'rounded-pill': props.pill,
    'text-bg-primary': props.primary,
    'text-bg-secondary': props.secondary,
    'text-bg-success': props.success,
    'text-bg-warning': props.warning,
    'text-bg-danger': props.danger,
    'text-bg-info': props.info,
    'text-bg-light': props.light,
    'text-bg-dark': props.dark,
}))
</script>