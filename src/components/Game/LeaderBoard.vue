<template>
    <div class="leader-board">
        <ul class="list-group">
            <li 
                class="list-group-item"
                v-for="player, i in players.sort((a, b) => b.currency - a.currency)">
                <div class="d-flex">
                    <Avatar :seed="player.username" :size="48"/>
                    <div>
                        <div class="fw-bold">{{ player.username }}</div>
                        <div class="d-flex align-items-center lh-1">
                            <Icon icon="crown-circle" fixed-width/>
                            {{ player.currency.toLocaleString() }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon.vue'
import Avatar from '../Avatar.vue'

const props = withDefaults(defineProps<{
    players?: any,
}>(), {
    players: [
        {
            username: 'Ut0elit',
            currency: 234828,
        },
        {
            username: 'Reprehenderit',
            currency: 2382372,
        },
        {
            username: 'Proident',
            currency: 34534,
        },
        {
            username: 'Consectetur',
            currency: 43523431,
        },
        {
            username: 'Pariatur',
            currency: 2344342,
        },
        {
            username: 'Nulla',
            currency: 34543,
        },
        {
            username: 'Laboris',
            currency: 7654756,
        },
        {
            username: 'Elit',
            currency: 3443,
        },
        {
            username: 'Amet',
            currency: 34534,
        }
    ]
})

const classes = computed(() => ({}))

</script>

<style scoped lang="scss">

</style>