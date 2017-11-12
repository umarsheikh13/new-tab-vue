<template>
    <div class="boxes">
        <div class="box" v-for="box in structure" :style="box.styles">
            <div class="box__wrapper" :style="box.wrapperStyles">
                <component :settings="box.settings" :is="box.component"></component>
            </div>
        </div>
    </div>
</template>
<script src="./main.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
