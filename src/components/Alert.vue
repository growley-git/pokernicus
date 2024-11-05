<template>
    <div role="alert" :class="classes">
        <slot>{{ text }}</slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    text?: string,
    /**
     * button style
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
    text: 'Qui dolor officia aliquip est Lorem irure magna dolor sint ex. Adipisicing tempor officia exercitation qui in. Commodo esse irure qui enim magna proident consectetur laborum sint magna id.'
})

const classes = computed(() => ({
    'alert': true,
    'alert-primary': props.primary,
    'alert-secdonary': props.secdonary,
    'alert-success': props.success,
    'alert-warning': props.warning,
    'alert-danger': props.danger,
    'alert-info': props.info,
    'alert-light': props.light,
    'alert-dark': props.dark,
}))
</script>