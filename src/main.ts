import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ViewUIPlus from 'view-ui-plus';
import { i18n } from './i18n';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import './styles/my-theme/index.less';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import Print from 'vue3-print-ts'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VXETable);
app.use(i18n).use(ViewUIPlus, { i18n });
app.directive("print", Print);
// app.use(print);
app.mount('#app');
