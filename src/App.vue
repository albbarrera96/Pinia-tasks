<template>
    <main style="background:teal">
        <div class="main shadow-sm">
            <div class="text-center py-3">
                <h1>Pinia Tasks</h1>
            </div>
        </div>
        <div class="container-xl" id="container">
            <h1>HELLO</h1>
        </div>
    </main>

</template>

<script>
import { useTaskStore } from './stores/TaskStore'

    setup() {
        const taskStore = useTaskStore();

        return { taskStore }
    }
    

</script>

<style scoped>
.main{
    background: rgb(179, 179, 179);
}


</style>
