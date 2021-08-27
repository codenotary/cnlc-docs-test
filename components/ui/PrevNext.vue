<template>
    <section id="UiPrevNext">
        <div class="prev">
            <p
                v-if="prev && prev.url"
                class="ma-0 mb-4"
            >
                <nuxt-link
                    :to="`${prefix}${prev.url}`"
                    class="_font-weight-bold"
                >
                    <fa
                        class="subtitle-1"
                        :icon="['fas', 'long-arrow-alt-left']"
                    />
                    <span class="ml-4">
                        Previous
                    </span>
                </nuxt-link>
            </p>
            <p v-if="prev && prev.label" class="ma-0">
                <i>{{ prev.label }}</i>
            </p>
        </div>
        <div class="next">
            <p
                v-if="next && next.url"
                class="ma-0 mb-4"
            >
                <nuxt-link
                    :to="`${prefix}${next.url}`"
                    class="_font-weight-bold"
                >
                    <span class="mr-4">
                        Next
                    </span>
                    <fa
                        class="subtitle-1"
                        :icon="['fas', 'long-arrow-alt-right']"
                    />
                </nuxt-link>
            </p>
            <p v-if="next && next.label" class="ma-0">
                <i>{{ next.label }}</i>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UiPrevNext',
    props: {
        prev: {
            type: Object,
            default: () => {}
        },
        next: {
            type: Object,
            default: () => {}
        },
        prefix: {
            type: String,
            default: '/help'
        }
    }
};
</script>

<style lang="scss">
section#UiPrevNext {
	display: flex;
	flex-direction: row;
	flex-wrap: 1;
	align-items: center;
	justify-content: space-between;
	margin-top: $spacer-2 !important;
	padding-top: $spacer-2 !important;
	border-top: 1px solid $border-color-light;

	.prev,
	.next {
		width: auto;
		min-width: 100px;
		align-items: center;
	}

	.prev {
		justify-content: flex-start;
	}

	.next {
		justify-content: flex-end;
	}
}
</style>
