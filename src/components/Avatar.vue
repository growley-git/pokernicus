<template>
    <div :class="classes">
        <div v-html="svg"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createAvatar } from '@dicebear/core'
import { bigSmile } from '@dicebear/collection'

const props = withDefaults(defineProps<{
    randomizeIds?: boolean,
    seed?: string,
    // options
    size?: number,
    flip?: boolean,
    clip?: boolean,
    scale?: number,
    rotate?: number,
    backgroundType?: any,
    backgroundColor?: any,
    backgroundRotation?: any,
    translateX?: number,
    translateY?: number,
    hair?: any,
    eyes?: any,
    face?: any,
    mouth?: any,
    hairColor?: any,
    skinColor?: any,
    accessories?: any,
}>(), {
    randomizeIds: true,
    seed: 'default',
    // size: 96,
    // flip: false,
    // clip: true,
    // scale: 100,
    // rotate: 0,
    // backgroundType: undefined,
    // backgroundColor: undefined,
    // backgroundRotation: undefined,
    // translateX: 0,
    // translateY: 0,
    // hair: ['shortHair'],
    // eyes: ['winking'],
    // face: ['base'],
    // mouth: ['openedSmile'],
    // hairColor: ['238d80'],
    // skinColor: ['e2ba87'],
    // accessories: ['catEars'],
})

const svg = computed(() => createAvatar(bigSmile, {
    randomizeIds: props.randomizeIds,
    seed: props.seed,
    size: props.size,
    // flip: props.flip,
    // clip: props.clip,
    // scale: props.scale,
    // rotate: props.rotate,
    // backgroundType: props.backgroundType,
    // backgroundColor: props.backgroundColor,
    // backgroundRotation: props.backgroundRotation,
    // translateX: props.translateX,
    // translateY: props.translateY,
    // eyes: props.eyes,
    // face: props.face,
    // hair: props.hair,
    // mouth: props.mouth,
    // hairColor: props.hairColor,
    // skinColor: props.skinColor,
    // accessories: props.accessories,
}).toString())

const classes = computed(() => ({
    'avatar': true
}))
</script>