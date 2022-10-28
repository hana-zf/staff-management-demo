<template>
    <div class="form-container d-flex">
        <Sidebar1></sidebar1>
        <div class="card m-5 flex-grow-1">
            <div class="card-header">
                <h1 class="my-2">Create staff</h1>
            </div>
            <form class="container my-2" @submit.prevent="">
                <div class="my-3">
                    <router-link :to="{ name: 'staffs' }">
                        <button class="btn btn-sm btn-light">Back to staff list</button>
                    </router-link>
                </div>
                <h1>Personal Info</h1>       
                <div class="mb-3">
                    <label for="staffName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="staffName" placeholder="Enter name here"
                        v-model="staffName">
                </div>
                <div class="mb-3">
                    <label for="staffId" class="form-label">Identification Number (IC or Passport)</label>
                    <input type="text" class="form-control" id="staffId" placeholder="Enter identification number here"
                        v-model="staffId">
                </div>
                <div class="mb-3">
                    <label for="phoneNum" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phoneNum" placeholder="Enter phone number here"
                        v-model="phoneNum">
                </div>
                <div class="mb-5">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" id="address" rows="3"></textarea>
                </div>
                <hr>
                <h1>Bank Info</h1>
                <select class="form-select mb-3" aria-label="Default select example" v-model="selected">
                    <option selected>Choose bank</option>
                    <option value="1">AMBANK AM (M) BERHAD</option>
                    <option value="2">CIMB BANK BERHAD</option>
                    <option value="3">HONG LEONG BANK BERHAD</option>
                    <option value="4">MALAYAN BANKING BERHAD (MAYBANK)</option>
                    <option value="5">PUBLIC BANK BERHAD</option>
                    <option value="6">RHB BANK BERHAD</option>
                    <option value="7">AFFIN BANK BERHAD</option>
                    <option value="8">ALLIANCE BANK MALAYSIA BERHAD</option>
                    <option value="9">BANK ISLAM MALAYSIA BERHAD</option>
                    <option value="10">BANK KERJASAMA RAKYAT MALAYSIA BERHAD (BANK RAKYAT)</option>
                    <option value="11">BANK MUAMALAT MALAYSIA BERHAD</option>
                    <option value="12">BANK PERTANIAN MALAYSIA BERHAD - AGROBANK</option>
                    <option value="13">BANK SIMPANAN NASIONAL</option>
                    <option value="14">HSBC BANK MALAYSIA BERHAD</option>
                    <option value="15">STANDARD CHARTERED</option>
                </select>
                <div class="mb-3">
                    <label for="bankName" class="form-label">Bank Beneficiary Name</label>
                    <input type="text" class="form-control" id="bankName" placeholder="Enter name here">
                </div>
                <div class="mb-5">
                    <label for="bankNum" class="form-label">Bank Account Number</label>
                    <input type="text" class="form-control" id="bankNum" placeholder="Enter bank account number here">
                </div>
                <hr>
                <h1>Work Info</h1>
                <div class="mb-3">
                    <label for="trade" class="form-label">Trade</label>
                    <input type="text" class="form-control" id="trade" placeholder="Enter work here">
                </div>
                <div class="mb-3">
                    <label for="rate" class="form-label">Rate (RM)</label>
                    <input type="text" class="form-control" id="rate" placeholder="Enter amount here">
                </div>
                <h1>Salary Type</h1>
                <select class="form-select mb-3" aria-label="Default select example" v-model="selected">
                    <option selected>Select type</option>
                    <option value="1">Monthly</option>
                    <option value="2">Hourly</option>
                </select>
                <div class="mb-3">
                    <label for="dayOff" class="form-label">No. of Day Off</label>
                    <input type="text" class="form-control" id="dayOff" placeholder="Enter day off here">
                </div>
                <div class="mb-3">
                    <label for="project" class="form-label">Project</label>
                    <input type="text" class="form-control" id="project">
                </div>
                <h1>Status</h1>
                <select class="form-select mb-3" aria-label="Default select example" v-model="selected">
                    <option selected>Select type</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                </select>
                <button class="btn btn-danger my-2">Save</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1rem;
}
</style>

<script>
import Sidebar1 from '@/components/Sidebar1.vue';
export default {
    name: 'addStaff',
    components: {
        Sidebar1
    },
    data() {
        return {
            staffName: '',
            staffId: '',
            phoneNum: '',
            address: '',

        }
    },
    methods: {
        async saveStaff() {
            axios.post, {

            }
            data: {
                //this.name = ''

            }
        }
    }
}
</script>