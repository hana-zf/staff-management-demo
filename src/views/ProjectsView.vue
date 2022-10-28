<template>
    <div class="projects-container">
        <Sidebar1/>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar1 from '@/components/Sidebar1.vue';
    export default {
        name: 'projects',
        components: {
            Sidebar1
        },
        data () {
            return {
                text: 'This is projects page!'
            }
        }
    }
</script>