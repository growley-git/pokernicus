<template>
    <div class="user-menu dropdown">
        <button type="button" class="user-menu__toggle dropdown-toggle btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
            <Row align="center" justify="start" :gap-x="0" :gap-y="0">
                <Col size="auto" class="px-0">
                    <Avatar class="user-menu__avatar shadow-sm" :seed="username" :size="36"/>
                </Col>
                <Col class="text-start lh-sm ps-2 pe-4" size="auto">
                    <div class="user-menu__username lh-1 fw-semibold">{{ username }}</div>
                    <div class="user-menu__currency d-flex align-items-center justify-content-start">
                        <Icon icon="crown-circle" class="me-1"/>
                        <small>{{ currency.toLocaleString() }}</small>
                    </div>
                </Col>
            </Row>
        </button>
        <ul class="user-menu__dropdown dropdown-menu dropdown-menu-lg-end">
            <li class="px-2 mb-2">
                <a href="#" class="btn btn-primary w-100">
                    <Icon icon="calendar-alert"/>
                    <span class="fw-semibold ms-1">Current Event</span>
                </a>
            </li>
            <li>
                <a href="#" class="dropdown-item">
                    <Icon icon="account-group"/>
                    <span class="ms-1">Your League</span>
                </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
                <a href="#" class="dropdown-item">
                    <Icon icon="account-circle"/>
                    Your Profile
                </a>
            </li>
            <li>
                <a href="#" class="dropdown-item">
                    <Icon icon="account-cog"/>
                    Account Settings
                </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
                <button type="button" class="dropdown-item fw-semibold text-danger">
                    <Icon icon="logout-variant"/>
                    Sign Out
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Row from '../Row.vue'
import Col from '../Col.vue'
import Icon from '../Icon.vue'
import Avatar from '../Avatar.vue'

const props = withDefaults(defineProps<{
    username?: string,
    currency?: number,
}>(), {
    username: 'Username',
    currency: 999999999
})

const classes = computed(() => ({}))
</script>


<style scoped lang="scss">
.user-menu {
    $this: &;

    &__toggle {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }

    &__avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;
        
        border-radius: 20px;
        background-color: white;
    }
}
</style>