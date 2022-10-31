<template>

    <div class="dashboard-container">
        <Sidebar1 />
        <div class=" dashboard-title align-items-center p-5">
            <div class="card offset-3 mt-5" style="width: 90vh; height: auto;">
                <div class="card-header">
                    {{ title }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">You are logged in.</li>
                </ul>
            </div>


        </div>
    </div>

</template>

<script>

import Sidebar1 from '@/components/Sidebar1.vue';
export default {
    name: 'dashboard',
    components: {
        Sidebar1
    },
    data() {
        return {
            title: 'Welcome to JURUNATURE SDN BHD!',

        }

    }
}
</script>