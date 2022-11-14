<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light fixed-top">
            <div class="container-fluid">
                <button class="btn btn-dark btn-sm m-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
                <a class="navbar-brand" href="/dashboard">
                    <img src="../assets/images/text.jpeg" class="logo" alt="Logo">
                </a>
            </div>
        </nav>


        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="width: 280px;">
            <div class="offcanvas-header">
                <img src="../assets/images/text.jpeg" :to="{ name: 'dashboard' }" class="logo" alt="Logo">
                <button class="btn mx-1" data-bs-dismiss="offcanvas" aria-label="Close">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
            </div>
            <div class="offcanvas-body">
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item nav-link link-dark">
                        <router-link class="router-link" :to="{ name: 'dashboard' }">
                            <font-awesome-icon icon="fa-solid fa-chart-simple" />
                            Dashboard
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-link nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <font-awesome-icon icon="fa-solid fa-circle-user" />
                            User Management
                        </a>
                        <ul class="dropdown-menu">
                            <router-link class="dropdown-item link-dark" :to="{ name: 'roles' }">
                                Roles
                            </router-link>
                            <router-link class="dropdown-item link-dark" :to="{ name: 'users' }">
                                Users
                            </router-link>
                        </ul>
                    </li>
                    <li class="nav-item nav-link link-dark">
                        <router-link class="router-link" :to="{ name: 'staffs' }">
                            <font-awesome-icon icon="fa-solid fa-users" />
                            Staffs
                        </router-link>
                    </li>
                    <li class="nav-item nav-link link-dark">
                        <router-link class="router-link" :to="{ name: 'timesheets' }">
                            <font-awesome-icon icon="fa-solid fa-clock-four" />
                            Timesheets
                        </router-link>
                    </li>
                    <li class="nav-item nav-link link-dark">
                        <router-link class="router-link" :to="{ name: 'payslips' }">
                            <font-awesome-icon icon="fa-solid fa-money-bill" />
                            Payslips
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class=" dropdown-link nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <font-awesome-icon icon="fa-solid fa-gears" />
                            Settings
                        </a>
                        <ul class="dropdown-menu">
                            <router-link class="dropdown-item link-dark" :to="{ name: 'projects' }">
                                Projects
                            </router-link>
                            <router-link class="dropdown-item link-dark" :to="{ name: 'devices' }">
                                Devices
                            </router-link>
                            <router-link class="dropdown-item link-dark" :to="{ name: 'holiday' }">
                                Holiday
                            </router-link>
                        </ul>
                    </li>
                </ul>
                <hr>
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>mdo</strong>
                    </a>
                    <ul class="dropdown-menu text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar1'
}
</script>

<style lang="scss" scoped>
.router-link {
    color: inherit;
}
</style>