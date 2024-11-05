<template>
    <div role="link" :class="classes">
        <picture class="event-card__image">
            <img src="//placebear.com/800/600" class="card-img-top"/>
        </picture>
        <div class="card-body">
            <h5 class="card-title mb-0">
                <Icon icon="cards-playing" fixed-width/>
                <span>{{ event.title }}</span>
            </h5>
            <h6 class="card-subtitle mb-0">
                <Icon icon="map-marker" fixed-width/>
                <span>{{ event.subtitle }}</span>
            </h6>
            <p class="card-text">{{ event.description }}</p>
        </div>
        <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from '../Icon.vue'

const props = withDefaults(defineProps<{}>(), {})

const event = ref({
    title: "Res' Bounty Hunt!",
    subtitle: "844 E Roosevelt Rd, Lombard, Illinois 60148",
    description: "Ut non voluptate et do fugiat qui tempor. Laboris culpa sint pariatur cupidatat do mollit ea id. Quis est cillum consectetur consectetur culpa magna. Incididunt duis quis occaecat occaecat excepteur. Aliqua do cupidatat Lorem aliqua aliqua sint ut aute nisi do enim dolore sint. Commodo esse excepteur nisi veniam."
})

const classes = computed(() => ({
    'event-card': true,
    'card': true,
}))
</script>

<style scoped lang="scss">
.event-card {
    $this: &;

    cursor: pointer;

    &:hover,
    &:focus {
    }
    
    &__image {
        aspect-ratio: 16/9;
        overflow: hidden;
        width: 100%;

        .card-img-top {
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            position: relative;
            width: 100%;
        }
    }
}
</style>