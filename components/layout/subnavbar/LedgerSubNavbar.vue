<template>
    <i-navbar v-if="ledger" id="ledger-sub-navbar" class="sub-navbar" fluid :collapse="false">
        <i-navbar-items>
            <i-nav>
                <i-nav-item>
                    <ledger-search
                        :value="ledger.name"
                        @submit="onSearchSubmit" />
                </i-nav-item>
                <i-nav-item :to="localePath({ name: 'ledgers-id', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.dashboard') }}
                </i-nav-item>
                <i-nav-item v-if="apiKeyPermissions.canListApiKeys" :to="localePath({ name: 'ledgers-id-api-keys', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.apiKeys') }}
                </i-nav-item>
                <i-nav-item :active="isQueryRoute" :to="localePath({ name: 'ledgers-id-query', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.queryLedger') }}
                </i-nav-item>
                <i-nav-item :to="localePath({ name: 'ledgers-id-audit-report', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.auditReport') }}
                </i-nav-item>
                <i-nav-item v-if="ledgerPermissions.canReadLedgerSettings" :to="localePath({ name: 'ledgers-id-settings', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.settings') }}
                </i-nav-item>
                <i-nav-item :to="localePath({ name: 'ledgers-id-export', params: { id: ledger.id } })">
                    {{ $t('ledgers.subnavbar.export') }}
                </i-nav-item>
            </i-nav>
        </i-navbar-items>
    </i-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AUTH_MODULE, PERMISSIONS } from '@/store/auth/constants';
import { FETCH_LEDGERS, LEDGERS_MODULE, LEDGERS, LEDGERS_COUNT } from '~/store/ledgers/constants';

export default {
    name: 'LedgerSubNavbar',
    async fetch() {
        await this.fetchLedgers();
    },
    data() {
        return {
            options: []
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        ledger: {
            type: Object,
            default: () => null
        }
    },
    computed: {
        ...mapGetters(LEDGERS_MODULE, {
            ledgers: LEDGERS,
            ledgersCount: LEDGERS_COUNT
        }),
        ...mapGetters(AUTH_MODULE, {
            getPermissions: PERMISSIONS
        }),
        apiKeyPermissions() {
            return this.getPermissions.apiKey({});
        },
        ledgerPermissions() {
            return this.getPermissions.ledger({});
        },
        isQueryRoute() {
            return this.$route.name.startsWith('ledgers-id-query');
        }
    },
    methods: {
        ...mapActions(LEDGERS_MODULE, {
            fetchLedgers: FETCH_LEDGERS
        }),
        onSearchSubmit(value) {
            this.$router.push({ name: this.$route.name, params: { id: value.id } });
        }
    }
}
</script>
