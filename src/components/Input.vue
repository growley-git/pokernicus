<template>
    <div class="input">
        <label class="form-label" v-if="label" :for="id">
            <span v-html="label"></span>
            <slot name="label-extra"></slot>
        </label>
        <template v-if="type === 'textarea'">
            <textarea
                :id="id"
                :name="name"
                :class="classes"
                :minlength="minlength"
                :maxlength="maxlength"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :placeholder="placeholder"
                :aria-describedby="text ? `${ id }-text` : undefined">{{ value }}</textarea>
        </template>
        <template v-else-if="type === 'select'">
            <select
                :id="id"
                :name="name"
                :class="classes"
                :disabled="disabled"
                :required="required"
                :readonly="readonly"
                :placeholder="placeholder"
                :aria-describedby="text ? `${ id }-text` : undefined">
                <option v-for="option in options" :value="option.value ?? option">{{ option.label ?? option }}</option>
            </select>
        </template>
        <template v-else-if="type === 'password'">
            <div class="input-group">
                <input
                    :id="id"
                    :type="passwordType"
                    :name="name"
                    :list="datalist ?? undefined"
                    :class="classes"
                    :min="min"
                    :max="max"
                    :step="step"
                    :minlength="minlength"
                    :maxlength="maxlength"
                    :disabled="disabled"
                    :required="required"
                    :readonly="readonly"
                    :pattern="pattern"
                    :placeholder="placeholder"
                    :aria-describedby="text ? `${ id }-text` : undefined">
                <button
                    :id="`${ id }-toggle`"
                    type="button"
                    class="btn"
                    @click.prevent="passwordToggle">
                    <Icon :icon="passwordType === 'text' ? 'eye-off-outline' : 'eye-outline'" class="me-5"/>
                </button>
            </div>
        </template>
        <template v-else>
            <input
                :id="id"
                :type="type"
                :name="name"
                :list="datalist ?? undefined"
                :class="classes"
                :min="min"
                :max="max"
                :step="step"
                :minlength="minlength"
                :maxlength="maxlength"
                :disabled="disabled"
                :required="required"
                :readonly="readonly"
                :pattern="pattern"
                :placeholder="placeholder"
                :aria-describedby="text ? `${ id }-text` : undefined">
        </template>
        <datalist v-if="datalist" :id="`${ id }-data`">
            <option v-for="item in datalist" :value="item"></option>
        </datalist>
        <div v-if="text" class="form-text" :id="`${ id }-text`" v-html="text"></div>
    </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = withDefaults(defineProps<{
    id?: string,
    type?: string,
    name?: string,
    text?: string,
    label?: string,
    value?: any,
    datalist?: any,
    options?: any,
    min?: number,
    max?: number,
    step?: number,
    size?: 'sm' | 'lg',
    minlength?: number,
    maxlength?: number,
    pattern?: string,
    required?: boolean,
    disabled?: boolean,
    readonly?: boolean,
    placeholder?: string,
}>(), {
    id: `form-control-${ uuidv4() }`,
    type: 'text',
    //label: 'Input Label',
    //placeholder: 'Input Placeholder',
    // text: 'Anim deserunt do cupidatat eu ea ut nulla. Consequat aliquip deserunt velit minim nulla non Lorem et non. Enim et exercitation qui amet. Excepteur incididunt amet occaecat id fugiat mollit commodo quis veniam velit Lorem non cupidatat non.'
})

const classes = computed(() => ({
    'form-control': !['range','select'].includes(props.type),
    'form-range': props.type === 'range',
    'form-select': props.type === 'select',
    [`form-select-${ props.size || '' }`]: props.size && props.type === 'select',
    'form-control-color': props.type === 'color',
    [`form-control-${ props.size || '' }`]: props.size,
}))

const passwordShow = ref(false)

const passwordType = computed(() => {
    let inputType = 'password'
    if (passwordShow.value) {
        inputType = 'text'
    }
    return inputType
})

const passwordToggle = () => {
    passwordShow.value = !passwordShow.value
}
</script>

<style scoped lang="scss">
.input {
    $this: &;

    margin-block: 16px;

    .form-label {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
}
</style>