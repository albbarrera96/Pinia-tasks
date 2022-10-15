<template>
    <div class="container py-1">
        <div class="row">
            <div class="col-10">
                <h3>{{task.title}}</h3>
            </div>
            <div class="col-2">
                <div class="icons">
                    <div class="btn-group">
                        <button class="btn btn-warning"><i class="material-icons">favorite</i></button>
                        <button class="btn btn-danger"><i class="material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    

</template>

<script >
    export default {
        props:{
            task:Array
        }
    }
</script>

<style scoped>

</style>
