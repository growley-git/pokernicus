<template>
<div :class="classes" role="progressbar" :aria-label="label" :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max">
    <div :class="progressClasses" :style="{ width: `${ percent }%` }">{{ displayPercent ? `${ percent }%` : '' }}</div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    min?: number,
    max?: number,
    value?: number,
    label?: string,
    striped?: boolean,
    animated?: boolean,
    primary?: boolean,
    secondary?: boolean,
    success?: boolean,
    warning?: boolean,
    danger?: boolean,
    info?: boolean,
    light?: boolean,
    dark?: boolean,
    displayPercent?: boolean,
}>(), {
    min: 0,
    max: 100,
    value: 50,
    label: 'Progress Bar',
})

const percent = computed(() => {
    return (props.value / props.max) * 100
})

const classes = computed(() => ({
    'progress': true,
}))

const progressClasses = computed(() => ({
    'progress-bar': true,
    'progress-bar-striped': props.striped,
    'progress-bar-animated': props.animated,
    // colors
    'bg-primary': props.primary,
    'bg-secondary': props.secondary,
    'bg-success': props.success,
    'bg-warning': props.warning,
    'bg-danger': props.danger,
    'bg-info': props.info,
    'bg-light': props.light,
    'bg-dark': props.dark,
}))
</script>