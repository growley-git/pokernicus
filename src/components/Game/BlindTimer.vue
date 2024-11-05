<template>
    <div :class="classes">
        <div class="d-flex justify-content-between mb-2">
            <div class="d-inline-flex align-items-center lh-1">
                <!-- <span></span> -->
                <Icon icon="crown-circle" fixed-width/>
                <strong class="fw-bolder" v-html="smallBlind"></strong>
            </div>
            <div class="d-inline-flex align-items-center lh-1">
                <!-- <span></span> -->
                <strong class="fw-bolder" v-html="bigBlind"></strong>
                <Icon icon="crown-circle" fixed-width/>
            </div>
        </div>
        <ProgressBar striped animated :min="0" :max="(60*roundLength)" :value="count" :success="success" :warning="warning" :danger="danger"/>
        <div class="text-end">{{ minToSec(count/60) }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from '../Icon.vue'
import ProgressBar from '../ProgressBar.vue'

const props = withDefaults(defineProps<{
    bigBlind?: number,
    smallBlind?: number,
    roundLength?: number,
}>(), {
    bigBlind: 100,
    smallBlind: 50,
    roundLength: .5,
})

const round = ref(60 * props.roundLength)
const count = ref(round.value)

const success = ref(true)
const warning = ref(false)
const danger = ref(false)

const classes = computed(() => ({
    'blind-timer': true,
}))

const minToSec = (minutes: number) => {
    const mins = Math.floor(minutes)
    const seconds = Math.round((minutes - mins) * 60)

    return `${mins} mins ${seconds} secs`
}

const timer = setInterval(() => {
  count.value--
  let pctLeft = (count.value / round.value) * 100
  if (pctLeft <= 50.0) {
    success.value = false
    warning.value = true
  }
  if (pctLeft <= 25.0) {
    warning.value = false
    danger.value = true
  }
  if (count.value === 0) {
    clearInterval(timer)
    alert("Time's up!")
  }
}, 1000)
</script>

<style scoped lang="scss">

</style>