<template>
    <v-container>
        <h1>Experiment complete</h1>
        <v-table class="elevation-1">
            <thead>
                <tr>
                    <th class="text-left">
                        Audio File
                    </th>
                    <th class="text-left">
                        Rating
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in dataStore.responses" :key="index">
                    <td>{{ data.audio }}</td>
                    <td>{{ data.rating }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script setup>
import {useDataStore} from "@/stores/dataStore.js";
const dataStore = useDataStore();
</script>