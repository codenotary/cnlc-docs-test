<template>
    <section class="prev-next">
        <div v-if="prev" class="prev">
            <p class="_margin-0 _margin-bottom-1">
                <a :href="prev" class="_font-weight-bold">
                    <fa :icon="['fas', 'long-arrow-alt-left']" />
                    <span class="_margin-left-1">Previous</span>
                </a>
            </p>
            <p class="_margin-0">
                <i>Creating a Ledger</i>
            </p>
        </div>
        <div v-if="next" class="next">
            <p class="_margin-0 _margin-bottom-1">
                <a :href="next" class="_font-weight-bold">
                    <span class="_margin-right-1">Next</span>
                    <fa :icon="['fas', 'long-arrow-alt-right']" />
                </a>
            </p>
            <p class="_margin-0">
                <i>Using the SDK</i>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PrevNext',
    props: {
        prev: {
            type: String,
            default: ''
        },
        next: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
section.prev-next {
    display: flex;
    flex-direction: row;
    flex-wrap: 1;
    align-items: center;
    justify-content: space-between;

    .prev,
    .next {
        width: auto;
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
