<template>
    <component
        :is="tag"
        :type="type"
        :role="role"
        :href="href"
        :class="classes"
        :aria-disabled="disabled">
        <slot name="before"></slot>
        <slot>{{ label }}</slot>
        <slot name="after"></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The element of the button
   */
  tag?: string,
  /**
   * size of the button
   */
  size?: 'sm' | 'lg',
  /**
   * type of the button
   */
  type?: string,
  /**
   * role of the button
   */
  role?: string,
  /**
   * href of the button
   */
  href?: string,
  /**
   * The label of the button
   */
  label: string,
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
  /**
   * button outline
   */
  outline?: boolean,
  /**
   * button disabled
   */
  disabled?: boolean,
}>(), {
    tag: 'button',
    label: 'Button',
    // primary: true,
})

// const emit = defineEmits<{
//   (e: 'click', id: number): void;
// }>()

const classes = computed(() => ({
  'btn': true,
  'disabled': props.disabled,
  [`btn${ props.outline ? '-outline' : '' }-primary`]: props.primary,
  [`btn${ props.outline ? '-outline' : '' }-secondary`]: props.secondary,
  [`btn${ props.outline ? '-outline' : '' }-success`]: props.success,
  [`btn${ props.outline ? '-outline' : '' }-warning`]: props.warning,
  [`btn${ props.outline ? '-outline' : '' }-danger`]: props.danger,
  [`btn${ props.outline ? '-outline' : '' }-info`]: props.info,
  [`btn${ props.outline ? '-outline' : '' }-dark`]: props.dark,
  [`btn${ props.outline ? '-outline' : '' }-light`]: props.light,
  [`btn-${ props.size || '' }`]: props.size,
}))

// const style = computed(() => ({
//   backgroundColor: props.backgroundColor
// }))

// const onClick = () => {
//   emit("click", 1)
// }
</script>