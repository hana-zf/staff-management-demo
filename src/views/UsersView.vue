<template>
    <div class="users-container">
        <sidebar></sidebar>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
    export default {
        name: 'users',
        components: {
            "sidebar": Sidebar,
        },
        data () {
            return {
                text: 'This is users page!'
            }
        }
    }
</script>