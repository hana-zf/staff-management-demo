<template>
    <div class="users-container d-flex">
        <Sidebar1/>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar1 from '@/components/Sidebar1.vue';
    export default {
        name: 'users',
        components: {
            Sidebar1
        },
        data () {
            return {
                text: 'This is users page!'
            }
        }
    }
</script>