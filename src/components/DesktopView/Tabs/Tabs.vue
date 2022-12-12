<template>
    <div class="tab">
      <div
        @click="toggleTabs"
        class="tab--tick"
        :class="{
            'tab--tick--active': active,
            '': !active, 
        }"
        :aria-controls="`collapse`"
        >
            <span>Tab</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'


// USED TO TELL PARENT TO CHANGE THE DATA FROM THE CAROUSEL
const emit = defineEmits<{
  (e: "show", val: boolean): void
}>()

defineProps({
    active: {
        type: Boolean,
        required: true
    }
})

const toggleTabs = () => {
    emit("show", true)
}
</script>

<style lang="scss">
.tab {
    display: flex;
    flex-direction: column;

    &--tick {
        background-color: rgb(210, 210, 210);
        padding: 1em;
        margin: 0.6em;  
        cursor: pointer;
        border-top-right-radius: 0.3vw;
        border-top-left-radius: 0.3vw;

        &:hover {
        background-color: white;

            span {
                color: blue;
            }
        }

        &--active {
            background-color: white;

            span {
                color: blue;
            }            
        }
    }
    
}
</style>