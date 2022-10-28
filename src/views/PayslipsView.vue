<template>
    <div class="payslips-container">
        <sidebar></sidebar>
        <div class="container text-center m-5">
            <h1> {{ text }}</h1>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
    export default {
        name: 'payslips',
        components: {
            "sidebar": Sidebar,
        },
        data () {
            return {
                text: 'This is playslips page!'
            }
        }
    }
</script>