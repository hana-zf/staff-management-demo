<template>

<nav class="navbar navbar-expand-md navbar-dark bg-light sticky-top" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img class="logo" src="../assets/images/text.jpeg" alt=""></a>
      <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#defaultNav" aria-controls="defaultNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="defaultNav">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link link-dark" :to="{ name: 'dashboard'}">
              Dashboard
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">User Management</a>
            <ul class="dropdown-menu">
            <router-link class="dropdown-item link-dark" :to="{ name: 'roles'}">
                Roles
            </router-link>
            <router-link class="dropdown-item link-dark" :to="{ name: 'users'}">
                Users
            </router-link>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" :to="{ name: 'staffs'}">
              Staffs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" :to="{ name: 'timesheets'}">
              Timesheets
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" :to="{ name: 'payslips'}">
              Payslips
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
            <ul class="dropdown-menu">
              <router-link class="dropdown-item link-dark" :to="{ name: 'projects'}">
                  Projects
              </router-link>
              <router-link class="dropdown-item link-dark" :to="{ name: 'devices'}">
                  Devices
              </router-link>
              <router-link class="dropdown-item link-dark" :to="{ name: 'holiday'}">
                  Holiday
              </router-link>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

