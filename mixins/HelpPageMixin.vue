<template>
    <article class="help-section">
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

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

article.help-section {
        padding-right: $spacer-4;

        img {
            display:block;
            max-width: 100%;
            margin: $spacer-2 auto;
            padding: 0 0 $spacer-1 $spacer-1;
        }

        table {
            width: 100%;
            margin: $spacer-2 0;
            border-collapse: collapse;
        }

        // div:nth-child(3) > div > div > div > table:last-child {
        //     border: 4px solid green;
        // }

        div:nth-child(3) > div > div > div > table:last-of-type {
            background: transparent;
            border: none;

            th:first-of-type, td:first-of-type {
                width: 50%;
                background: transparent;
                border: none;
                text-align: left;
            }

            th:last-of-type, td:last-of-type {
                width: 50%;
                background: transparent;
                border: none;
                text-align: right;
            }
        }

        tr:nth-of-type(even) {
            background: lighten($color-primary, 60%);
        }

        th {
            background: $color-primary;
            color: $color-white;
            font-weight: bold;
        }

        td, th {
            padding: 6px;
            border: 1px solid #e6e6e6;
            text-align: left;
        }

        .nuxt-content-highlight {
            margin: $spacer-1-2 0;
        }

        @include breakpoint-up(md) {
            border-right: 1px solid #e6e6e6;
        }

        @include breakpoint-down(sm) {
            padding: 0;
            padding-bottom: $spacer-2;

            h1 {
                font-size: 1.5rem;
                font-weight: bold;
            }

            h2 {
                font-size: 1.25rem;
                font-weight: bold;
            }

            img {
                width: 100%;
                padding: 0;
            }

            table {
                table-layout: fixed;
                width: 100%;
                word-wrap: break-word;
            }
        }
    }
</style>
