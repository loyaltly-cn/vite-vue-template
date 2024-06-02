<template>
    <var-app-bar title="app-bar" title-position="center" round>
        <template #right>
            <theme-select/>
        </template>
    </var-app-bar>
    <router-view v-slot="{ Component }">
        <transition name="router">
            <component :is="Component" />
        </transition>
    </router-view>
</template>