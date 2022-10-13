<template>
    <main>
        <div class="main shadow-sm bg-secondary">
            <div class="text-center py-3">
                <h1>Pinia Tasks</h1>
            </div>
        </div>
        <div class="container-xl my-5 pb-5" id="container">
            <div class="task-list">
                <div class="card shadow-sm my-2 py-2 px-1" v-for="task in taskStore.tasks" :key="task.title">
                    <h3>{{task.title}}</h3>
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
main{
    background: rgb(235, 235, 235);
}


</style>
