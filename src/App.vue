<template>
    <main>
        <div class="main shadow-sm" id="header">
            <div class="text-center py-3">
                <h1>Pinia Tasks</h1>
            </div>
        </div>
        <div class="container-xl my-5 pb-5" id="container">
            <h4 class="fw-light">All tasks ({{taskStore.tasks.length}})</h4>
            <div class="task-list">
                <div class="card shadow-sm my-2 ps-2" v-for="task in taskStore.tasks" :key="task.title">
                    <TaskDetails :task="task"/>
                </div>
            </div>
            <hr>
            <h4 class="fw-light">Favorite Tasks</h4>
            <div class="task-list">
                <div class="card shadow-sm my-2 ps-2" v-for="task in taskStore.favs" :key="task.id">
                    <TaskDetails :task="task"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { useTaskStore } from './stores/TaskStore'
import TaskDetails  from './components/TaskDetails.vue'

    export default {
        components: {
            TaskDetails
        },
        setup() {
            const taskStore = useTaskStore();

            return  { taskStore } 
        }

    }

</script>

<style>
#header {
    background: rgb(156, 156, 156);
}


</style>
