<template>
    <component :is="tag" :class="classes">
        <slot>
            <div class="container--placeholder"></div>
        </slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  tag?: string,
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid',
}>(), {
    tag: 'div'
})

const classes = computed(() => ({
    [`container${ props.size ? `-${ props.size }` : ''}`]: true
}))
</script>

<style scoped lang="scss">
.container {
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
            content: 'container';
        }
    }
}
</style>