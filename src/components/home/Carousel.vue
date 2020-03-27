<template>
    <div class="gallery-cell">
        <b-carousel id="carousel-fade" v-model="slide" :interval="4000" indicators controls fade background="#ababab"
            width="1024" height="480" style="text-shadow: 1px 1px 2px #333;">
            <b-carousel-slide v-for="slide in slides" v-bind:img-src="slide.src" :key="slide"></b-carousel-slide>
        </b-carousel>
    </div>
    <!-- <div class="col-md-4 text-right d-flex flex-column justify-content-end align-content-end">
            <p><span class="bg-dark text-white small px-2 py-1 mb-3">{{ getCurrentSlide().type }}</span></p>
            <h1 class="serif-font-face">{{ getCurrentSlide().title }}</h1>
            <div>
                <div class="w-25 border-bottom"></div>
            </div>
            <p class="font-italic">{{ getCurrentSlide().description }}</p>
        </div> -->

</template>

<script>
    export default {
        name: "Carousel",
        props: {
            slides: Array
        },
        data() {
            return {
                slide: 0,
            }
        },
        methods: {
            getCurrentSlide: function () {
                return this.slides[this.slide];
            }
        }
    }
</script>