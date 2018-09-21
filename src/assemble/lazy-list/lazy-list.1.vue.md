<template>
    <ul id="users-list">
            <li v-for="user in users">{{user.name}}</li>
    </ul>
</template>

<script>
    module.exports = {
        props   : [ 'data', 'name', 'value', 'onTapped' ],
        data    : function () {
            return {
                users: []
            }
        },
        mounted : function () {
            var self = this;
            setTimeout(function () {
                self.users = [{name:'123'}, {name:'456'}];
            }, 1000);
        }
    }
</script>