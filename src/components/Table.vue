<template>
<table :class="classes">
    <thead>
        <tr>
            <th v-if="autoIndexColumn || autoZIndexColumn">#</th>
            <th v-for="item in Object.keys(data[0])">{{ item }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="row, i in data">
            <td v-if="autoIndexColumn || autoZIndexColumn">{{ autoZIndexColumn ? i : (i + 1) }}</td>
            <td v-for="item in Object.values(row)">{{ item }}</td>
        </tr>
    </tbody>
    <!-- <tfoot></tfoot> -->
</table>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    /**
     * Table data
     */
    data?: any,
    /**
     * Table style
     */
    primary?: boolean,
    secondary?: boolean,
    success?: boolean,
    warning?: boolean,
    danger?: boolean,
    info?: boolean,
    light?: boolean,
    dark?: boolean,
    striped?: boolean,
    stripedColumns?: boolean,
    bordered?: boolean,
    hover?: boolean,
    /**
     * Auto index column
     */
    autoIndexColumn?: boolean,
    /**
     * Auto zero-index column
     */
    autoZIndexColumn?: boolean,
}>(), {
    data: [
        {
            first: 'John',
            last: 'Doe',
            handle: '@jdoe'
        },
        {
            first: 'Jane',
            last: 'Doe',
            handle: '@jdoe'
        },
        {
            first: 'Randy',
            last: 'Savage',
            handle: null
        },
    ]
})

const classes = computed(() => ({
    'table': true,
    'table-hover': props.hover,
    'table-striped': props.striped,
    'table-striped-columns': props.stripedColumns,
    'table-bordered': props.bordered,
    'table-primary': props.primary,
    'table-secondary': props.secondary,
    'table-success': props.success,
    'table-warning': props.warning,
    'table-danger': props.danger,
    'table-info': props.info,
    'table-light': props.light,
    'table-dark': props.dark,
}))
</script>