<template>
    <div class="projects-container">
        <sidebar></sidebar>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
    export default {
        name: 'projects',
        components: {
            "sidebar": Sidebar,
        },
        data () {
            return {
                text: 'This is projects page!'
            }
        }
    }
</script>