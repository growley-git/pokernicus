<template>
    <form @submit.prevent="onSubmit">
        <Row>
            <Col size="auto">
                <Avatar/>
            </Col>
            <Col :size="10">
                <Row align="center" justify="stretch">
                    <Col>
                        <Input
                            type="select"
                            label="Accessories"
                            :options="accessoryOption"/>
                    </Col>
                    <Col>
                        <Input
                            type="select"
                            label="Eyes"
                            :options="eyeOption"/>
                    </Col>
                    <Col>
                        <Input type="select" label="Hair" :options="hairOption"/>
                    </Col>
                    <Col>
                        <Input type="select" label="Mouth" :options="mouthOption"/>
                    </Col>
                </Row>
                
                
            </Col>
        </Row>
        <Input type="text" label="Username"/>
        <Input type="email" label="E-mail Address"/>
        <Input type="datetime" label="Birthday/Cake Day/First Day Subjected to Gravity?"/>
        <div>
            <Input type="password" label="Current Password"/>
            <Input type="password" label="New Password"/>
        </div>
        <Button primary type="submit" label="Update"/>
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Row from '../Row.vue'
import Col from '../Col.vue'
import Avatar from '../Avatar.vue'
import Input from '../Input.vue'
import Button from '../Button.vue'

const props = withDefaults(defineProps<{}>(), {})

const classes = computed(() => ({}))

const mouthOption = ref([
    'awkwardSmile',
    'braces',
    'gapSmile',
    'kawaii',
    'openedSmile',
    'openSad',
    'teethSmile',
    'unimpressed',
])

const hairOption = ref([
    'bangs',
    'bowlCutHair',
    'braids',
    'bunHair',
    'curlyBob',
    'curlyShortHair',
    'froBun',
    'halfShavedHead',
    'mohawk',
    'shavedHead',
    'shortHair',
    'straightHair',
    'wavyBob',
])


const eyeOption = ref([
    'angry',
    'cheery',
    'confused',
    'normal',
    'sad',
    'sleepy',
    'starstruck',
    'winking',
])

const accessoryOption = ref([
    'catEars',
    'clownNose',
    'faceMask',
    'glasses',
    'mustache',
    'sailormoonCrown',
    'sleepMask',
    'sunglasses',
])


const onSubmit = () => {
    console.log('Update Profile onSubmit EVENT')
    return
}
</script>

<style scoped lang="scss">

</style>