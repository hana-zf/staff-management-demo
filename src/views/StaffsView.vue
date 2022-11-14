<template>
  <div class="staffs-container">
    <Sidebar1 />

    <div class="card mx-3 mb-5 staff-card">
      <div class="card-header">
        Staff List
      </div>
      <div class="d-flex align-items-center">
        <div class="action-btn m-3 flex-grow-1 flex-wrap">
          <router-link :to="{ name: 'addStaff' }">
            <button class="btn btn-sm btn-success">Add staffs</button>
          </router-link>
          <button class="btn btn-sm btn-primary">Select All</button>
          <button class="btn btn-sm btn-primary">Deselect All</button>
          <button class="btn btn-sm btn-light">Copy</button>
          <button class="btn btn-sm btn-light">CSV</button>
          <button class="btn btn-sm btn-light">Excel</button>
          <button class="btn btn-sm btn-light">PDF</button>
          <button class="btn btn-sm btn-light">Print</button>
          <button class="btn btn-sm btn-light">Column Visibility</button>
          <button class="btn btn-sm btn-danger">Delete Selected</button>
        </div>
        <div class="d-flex align-items-center">
          <label class="" for="search"></label>
          <input type="text" id="search" v-model="searchValue" class="form-control mx-5" placeholder="Search: " />
        </div>
      </div>

      <div class="card-body">
        <table class="table table-bordered table-hover table-responsive text-center m-1 align-middle">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">IC/Passport No.</th>
              <th scope="col">Tel. No</th>
              <th scope="col">Trade</th>
              <th scope="col">Bank Name</th>
              <th scope="col">Bank Beneficiary Name</th>
              <th scope="col">Bank Code</th>
              <th scope="col">Rate (RM)</th>
              <th scope="col">Salary Type</th>
              <th scope="col">Off Day</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(staff, index) in filteredList">
              <th>
                <input class="form-check-input" type="checkbox" value="" id="selectStaff">
                <label class="form-check-label" for="selectStaff"></label>
              </th>
              <td> {{ index + 1 }}</td>
              <td> {{ staff.name }}</td>
              <td> {{ staff.idNum }}</td>
              <td> {{ staff.telNum }}</td>
              <td> {{ staff.trade }}</td>
              <td> {{ staff.bankName }}</td>
              <td> {{ staff.name }}</td>
              <td> {{ staff.bankCode }}</td>
              <td> {{ staff.rate }}</td>
              <td> {{ staff.salaryType }}</td>
              <td> {{ staff.offDay }}</td>
              <td> {{ staff.status }}</td>
              <td>
                <div class="d-flex flex-column">
                  <router-link :to="{ name: 'showStaff' }"><button class="btn btn-sm btn-primary my-1">View</button>
                  </router-link>
                  <button class="btn btn-sm btn-success my-1">Edit</button>
                  <button class="btn btn-sm btn-danger my-1" @click="deleteStaff">Delete</button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar1 from "@/components/Sidebar1.vue";
import { onMounted } from 'vue';

export default {
  name: "staffs",
  components: {
    Sidebar1
  },

  data() {
    return {
      staffs: [],
      name: '',
      searchValue: '',
      isActive: false,
      hasError: false,
    };
  },

  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    generateBank(i) {
      let bank = ["MAYBANK", "CIMB BANK", "RHB BANK", "HONG LEONG BANK", "BANK SIMPANAN NASIONAL", "BANK RAKYAT", "OCBC BANK", "PUBLIC BANK", "BANK ISLAM",
        "AFFIN BANK", "ALLIANCE BANK", "AMBANK", "UOB BANK", "HSBS BANK", "STANDARD CHARTERED BANK", "AGRO BANK"]

      let bankName = bank[this.getRandomInt(0, i + 1)]

      return bankName
    },

    generateName(i) {
      let firstName = ["Abdul", "Siti", "Nur", "Razak", "Fatimah", "Intan", "Fatin", "Khairil", "Nazirul", "Zamani",
        "Amy", "Erra", "Ziana", "Zain", "Awie", "Fattah", "Amir", "Fudhail", "Fadzilah", "Iman", "Joyce", "Wui Chee", "Wong"];

      let lastName = ["Aiman", "Nurhaliza", "Suraya", "Mimi", "Seroja", "Mawar", "Rashid", "Fitri", "Akim", "Amirul",
        "Nisa", "Anis", "Azira", "Mawi", "Zahid", "Jamal", "Haikal", "Alif", "Fuziah", "Rosiah", "Marsya", "Cindy", "Fatin"];

      let fullName = firstName[this.getRandomInt(0, i + 1)] + " " + lastName[this.getRandomInt(0, i + 1)]

      return fullName
    },

    generatePosition(i) {
      let pos = ["CEO", "COO", "CTO", "CONSTRUCTION MANAGER", "PROJECT ENGINEER", "ASSISTANT ENGINEER", "COORDINATOR", "HUMAN RESOURCES", "ADMIN",
        "SAFETY PROMOTER", "SUPERVISOR WELDER", "SUPERVISOR FITTER", "QC", "MATERIAL CONTROLLER", "FORKLIFR DRIVER", "WELDER FOREMAN"]

      let postition = pos[this.getRandomInt(0, i + 1)]

      return postition
    },

    staffArray() {
      let arrays = [];
      for (let i = 0; i < 30; i++) {
        arrays.push({
          id: (Math.random() + 1).toString(36).substring(7),
          name: this.generateName(i),
          idNum: Math.floor(Math.random() * 100000),
          telNum: "012" + "" + "-" + Math.floor(Math.random() * 100000000),
          trade: this.generatePosition(i),
          bankName: this.generateBank(i),
          bankCode: '',
          rate: Math.floor(Math.random() * 10000),
          salaryType: "Monthly",
          offDay: "",
          status: "Active"
        });
      }
      return arrays;
    },
  },

  computed: {
    filteredList() {
      let arr = this.staffArray();
      
      const filterArray = arr.filter((staff) => // to filter what we search
        staff.name
          .toLowerCase()
          .includes
          (this.searchValue.trim().toLowerCase()))
        
      if (filterArray.length > 0) { // to return list of names after user empty the search bar
          arr = filterArray
        }
      return arr
    }
  },

  mounted() {
    this.staffs = this.staffArray();
  },
};
</script>