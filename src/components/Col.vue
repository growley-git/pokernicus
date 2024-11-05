<template>
    <component :is="tag" :class="classes">
        <slot>
            <div class="col--placeholder"></div>
        </slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    tag?: string,
    size?: number | 'auto',
    sm?: number | 'auto',
    md?: number | 'auto',
    lg?: number | 'auto',
    xl?: number | 'auto',
    xxl?: number | 'auto',
}>(), {
    tag: 'div'
})

const classes = computed(() => ({
    'col': true,
    [`col-${ props.size || '' }`]: props.size,
    [`col-sm-${ props.sm }`]: props.sm,
    [`col-md-${ props.md }`]: props.md,
    [`col-lg-${ props.lg }`]: props.lg,
    [`col-xl-${ props.xl }`]: props.xl,
    [`col-xxl-${ props.xxl }`]: props.xxl,
}))
</script>

<style scoped lang="scss">
.col {
    $this: &;

    &--placeholder {
        background: rgba(170,170,170);
        color: rgb(100,100,100);
        text-align: center;
        text-shadow: -1px -1px 0px rgba(255,255,255,.25), 1px 1px rgba(0,0,0,.25);
        font-size: 1.15rem;
        font-style: italic;
        height: 2rem;

        &:before {
            content: 'column';
        }
    }
}
</style>