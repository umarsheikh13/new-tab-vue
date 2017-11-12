import Vue from 'vue';
import App from '../../components/App';
import Config from '../../../config';

// Instantiate app

new Vue({
    el: '#app',
    components: {
        App
    }
});

// Change background color

if (Config.userSettings.backgroundColor) {
    document.body.style.backgroundColor = Config.userSettings.backgroundColor;
}
