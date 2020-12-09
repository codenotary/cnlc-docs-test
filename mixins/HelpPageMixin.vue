<template>
    <article>
        <page-heading :title="article.title" :icon="['fas', 'question-circle']" />

        <help-breadcrumbs v-if="showBreadcrumbs" :data="articles" class="_margin-top-1" />

        <i-card class="_margin-top-1">
            <nuxt-content :document="article" />
        </i-card>
    </article>
</template>

<script>
export default {
    name: 'HelpPageMixin',
    computed: {
        showBreadcrumbs() {
            return this.$route.path !== '/help';
        }
    }
}
</script>
