<template>
    <component
        :is="tag"
        :class="classes">
        <slot>
            <li v-for="item in items" :class="listClasses" v-html="item"></li>
        </slot>
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
   * Inline list
   */
  inline?: boolean,
  /**
   * Unstyled style (hides item markers)
   */
  unstyled?: boolean
  /**
   * List items
   */
  items?: any,
}>(), {
    tag: 'ul',
    items: [
        'Pariatur non nostrud ad deserunt reprehenderit.',
        'Sit deserunt et amet est et do labore et.',
        'Est ullamco sunt cupidatat dolore fugiat laborum do velit magna reprehenderit magna aliquip.',
        'Labore ut aliquip occaecat aliqua ea reprehenderit commodo.',
        'Commodo proident qui amet amet anim id in.'
    ],
})

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>()

const classes = computed(() => ({
    'list': true,
    'list-inline': props.inline,
    'list-unstyled': props.unstyled,
}))

const listClasses = computed(() => ({
    'list-inline-item': props.inline,
}))

// const style = computed(() => ({
//   backgroundColor: props.backgroundColor
// }))

// const onClick = () => {
//   emit("click", 1)
// }
</script>