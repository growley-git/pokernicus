<template>
    <component :is="tag" :class="classes">
        <slot>
            <div class="row--placeholder"></div>
        </slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  tag?: string,
  cols?: number | 'auto',
  gapX?: undefined | number,
  gapY?: undefined | number,
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  align?: 'start' | 'center' | 'end',
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around',
}>(), {
    tag: 'div'
})

const classes = computed(() => ({
    'row': true,
    [`gx-${ props.gapX }`]: props.gapX >= 0,
    [`gy-${ props.gapY }`]: props.gapY >= 0,
    [`row-cols-${ props.size ? `${ props.size }-${ props.cols }` : props.cols}`]: props.size || props.cols,
    [`justify-content-${ props.justify }`]: props.justify,
    [`align-items-${ props.align }`]: props.align,
}))
</script>

<style scoped lang="scss">
.row {
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
            content: 'row';
        }
    }
}
</style>