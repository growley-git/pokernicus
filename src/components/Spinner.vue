<template>
    <div :class="classes" role="status">
        <span class="visually-hidden" v-text="label"></span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    label?: string,
    border?: boolean,
    growing?: boolean,
    primary?: boolean,
    secondary?: boolean,
    success?: boolean,
    warning?: boolean,
    danger?: boolean,
    info?: boolean,
    light?: boolean,
    dark?: boolean,
    small?: boolean,
}>(), {
    label: 'Loading...',
    border: true,
})

const classes = computed(() => ({
    'spinner-grow': props.growing,
    'spinner-grow-sm': props.growing && props.small,
    'spinner-border': props.border,
    'spinner-border-sm': props.border && props.small,
    // colors
    'text-primary': props.primary,
    'text-secondary': props.secondary,
    'text-success': props.success,
    'text-warning': props.warning,
    'text-danger': props.danger,
    'text-info': props.info,
    'text-light': props.light,
    'text-dark': props.dark,
}))
</script>