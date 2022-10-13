<template>
    <main style="background:teal">
        <div class="main shadow-sm">
            <div class="text-center py-3">
                <h1>Pinia Tasks</h1>
            </div>
        </div>
        <div class="container-xl my-5 pb-5" id="container">
            <h1>HELLO</h1>
            <div class="task-list">
                <div class="card shadow-sm my-2" v-for="task in taskStore.tasks" :key="task.title">
                    <h1>{{task.title}}</h1>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
import { useTaskStore } from './stores/TaskStore'

    export default {
        setup() {
            const taskStore = useTaskStore();

            return  { taskStore } 
        }

    }

</script>

<style scoped>
.main{
    background: rgb(179, 179, 179);
}


</style>
