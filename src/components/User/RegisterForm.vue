<template>
    <form @submit.prevent="onSubmit">
        <Input type="text" label="Username"/>
        <Input type="email" label="E-mail Address"/>
        <Input type="datetime" label="Birthday/Cake Day/First Day Subjected to Gravity?"/>
        <Input type="password" label="Password">
            <template v-slot:label-extra>
                <a href="#">Forgot password?</a>
            </template>
        </Input>
        <Button primary type="submit" label="Sign Up"/>
    </form>
</template>

<script setup lang="ts">
import Input from '../Input.vue'
import Button from '../Button.vue'


const onSubmit = () => {
    console.log('Sign Up onSubmit EVENT')
    return
}
</script>