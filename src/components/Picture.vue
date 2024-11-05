<template>
    <picture>
        <source v-for="item in sources" :media="item.query" :srcset="item.src">
        <img :src="src" :alt="alt" :class="classes">
    </picture>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    /**
     * Image source
     */
    src?: string,
    /**
     * Alternative text for image
     */
    alt?: string,
    /**
     * Fluid image applies max-width: 100% and height auto
     */
    fluid?: boolean,
    /**
     * Responsive image replacements
     */
    sources?: any,
    /**
     * Display with thumbnail border
     */
    thumbnail?: boolean
}>(), {
    src: 'https://placehold.co/400x225',
    alt: 'Dolore id elit proident anim enim Lorem.',
    fluid: true,
    sources: [
        {
            src: 'https://placehold.co/1600x900',
            query: '(min-width:992px)'
        },
        {
            src: 'https://placehold.co/800x450',
            query: '(min-width:768px)',
        }
    ]
})

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>()

const classes = computed(() => ({
    'image': true,
    'img-fluid': props.fluid,
    'img-thumbnail': props.thumbnail,
}))

// const style = computed(() => ({
//   backgroundColor: props.backgroundColor
// }))

// const onClick = () => {
//   emit("click", 1)
// }
</script>