<template>
    <figure>
        <blockquote class="blockquote" :cite="citeUrl">
            <p v-html="quote"></p>
        </blockquote>
        <figcaption v-if="citeAuthor || citeSource" class="blockquote-footer">
            {{ citeAuthor }}<template v-if="citeAuthor && citeSource">, </template>
            <template v-if="citeSource"><cite v-html="citeSource"></cite></template>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    /**
     * Quote text
     */
    quote?: string,
    /**
     * Quote Citation
     */
    citeUrl?: string,
    citeAuthor?: string,
    citeSource?: string,
}>(), {
    quote: 'Non anim quis ut voluptate veniam commodo laborum. Ad anim velit reprehenderit qui aliqua sit fugiat excepteur sit laboris.',
    citeAuthor: 'Amet Eiusmod',
    citeSource: 'Enim occaecat Ullamco'
})
</script>