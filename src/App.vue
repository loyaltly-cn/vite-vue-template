<template>
    <router-view v-slot="{ Component }">
        <transition name="router">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>