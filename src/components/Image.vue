<template>
    <img :src="src" :alt="alt" :class="classes">
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * Image source
   */
  src?: string,
  /**
   *  Alternative text for image
   */
  alt?: string,
  /**
   * Fluid image applies max-width: 100% and height auto
   */
  fluid?: boolean,
  /**
   * Display with thumbnail border
   */
  thumbnail?: boolean
}>(), {
    src: 'https://placehold.co/380x250',
    alt: 'Dolore id elit proident anim enim Lorem.'
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