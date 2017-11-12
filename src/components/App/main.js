import _ from 'lodash';
import GridHelper from '../../helpers/Grid';
import Config from '../../../config';

const componentNames = vars.components;
const components = {};

componentNames.forEach((name) => {
    if (!(/^\./).test(name)) {
        components[name] = require(`../${name}/index.vue`);
    }
});

export default {

    name: 'App',
    props: ['settings'],
    components,

    data() {
        return {
            structure: new GridHelper()
        };
    },

    methods: {

        /**
         * Add media query classes to boxes on window resize
         * @return void
         */
        resizeMediaQueryClasses() {
            const self = this;

            window.addEventListener('resize', _.debounce(() => {
                self.mediaQueryClasses(this);
            }, 100));
        },

        /**
         * Add media query classes to boxes
         * @return void
         */
        mediaQueryClasses() {
            const boxes = [].slice.call(document.querySelectorAll('.box'));
            const { mediaQuery } = Config.globalSettings;

            // Assign media query class to box

            boxes.forEach((el) => {
                const box = el;
                const width = box.offsetWidth;

                let mqClass = '';

                if (width < mediaQuery.s) {
                    mqClass = 'size-xs';
                } else if (width >= mediaQuery.s && width < mediaQuery.m) {
                    mqClass = 'size-s';
                } else if (width >= mediaQuery.m && width < mediaQuery.l) {
                    mqClass = 'size-m';
                } else if (width >= mediaQuery.l && width < mediaQuery.xl) {
                    mqClass = 'size-l';
                } else if (width >= mediaQuery.xl) {
                    mqClass = 'size-xl';
                }

                // Remove all size classes and add new size class

                if (!box.classList.contains(mqClass)) {
                    box.className = box.className.replace(/ ?size-[a-z]+/g, '');
                    box.classList.add(mqClass);
                }
            });
        }

    },

    mounted() {
        this.resizeMediaQueryClasses();
        this.mediaQueryClasses();
    }

};
