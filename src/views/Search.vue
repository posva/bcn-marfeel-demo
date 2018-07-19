<template>
  <div>
    <label>
      Search
      <input type="text" v-model="query">
    </label>

    <ul>
      <li v-for="contact in filteredContacts">
        <router-link :to="`/contacts/${contact.id}`">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { contacts } from "@/assets/db.json";

export default {
  data() {
    return {
      query: "",
      contacts
    };
  },

  computed: {
    filteredContacts() {
      return this.contacts.filter(c =>
        `${c.firstName} ${c.lastName}`
          .toLowerCase()
          .includes(this.query.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>
