<script>
import HelpPageMixin from '@/mixins/HelpPageMixin';
import { fetchHelpPage } from '@/helpers/fetchHelpPage';

export default {
	extends: HelpPageMixin,
	middleware: ['tutorial'],
	asyncData: fetchHelpPage('help', 'index'),
};
</script>
