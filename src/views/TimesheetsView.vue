<template>
    <div class="timesheets-container">
        <Sidebar1/>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar1 from '@/components/Sidebar1.vue';
    export default {
        name: 'timesheets',
        components: {
            Sidebar1
        },
        data () {
            return {
                text: 'This is timesheets page!'
            }
        }
    }
</script>