<template>
    <component
        :is="tag"
        :class="classes" v-html="text">
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The element of the heading
   */
  tag?: string,
  /**
   *  The text of the heading
   */
  text?: string,
}>(), {
    tag: 'h1',
    text: 'Dolore id elit proident anim enim Lorem.'
})

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>()

const classes = computed(() => ({
  'heading': true,
}))

// const style = computed(() => ({
//   backgroundColor: props.backgroundColor
// }))

// const onClick = () => {
//   emit("click", 1)
// }
</script>