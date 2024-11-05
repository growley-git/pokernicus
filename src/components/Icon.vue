<template>
    <component
        :is="tag"
        :class="classes">
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The element of the icon
   */
  tag?: string,
  /**
   * icon name
   */
  icon?: string,
  /**
   * icon family
   */
  family?: string,
  /**
   * icon prefix
   */
  prefix?: string,
  /**
   * icon rotation
   */
  rotate?: number,
  /**
   * icon spin animation
   */
  spin?: boolean,
  /**
   * icon flip
   */
  flip?: string,
  fixedWidth?: boolean
}>(), {
    tag: 'i',
    icon: 'account',
    family: 'mdi',
    prefix: 'mdi',
})

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>()

const classes = computed(() => ({
  'icon': true,
  'icon--fw': props.fixedWidth,
  [`${ props.family }`]: true,
  [`${ props.prefix }-${ props.icon }`]: true,
  [`${ props.prefix }-rotate-${ props.rotate }`]: props.rotate,
  [`${ props.prefix }-spin`]: props.spin,
  [`${ props.prefix }-flip-${ props.flip }`]: props.flip,
}))
</script>


<style scoped lang="scss">
.icon {
  $this: &;
  font-size: 1.25rem;

  &--fw {
    width: 1.25em;
    text-align: center;
  }
}
</style>