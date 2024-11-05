<template>
    <form @submit.prevent="onSubmit">
        <Input type="text" label="Username or E-mail Address"/>
        <Input type="password" label="Password">
            <template v-slot:label-extra>
                <a href="#">Forgot password?</a>
            </template>
        </Input>
        <Button primary type="submit" label="Sign In"/>
    </form>
</template>

<script setup lang="ts">
import Input from '../Input.vue'
import Button from '../Button.vue'


const onSubmit = () => {
    console.log('Sign In onSubmit EVENT')
    return
}
</script>