<template>
  <div :class="$style.red">
    <router-link to="/search">Back to Search</router-link>
    <pre class="contact">{{ contact }}</pre>
  </div>
</template>

<script>
import { contacts } from "@/assets/db.json";

export default {
  props: ["id"],
  computed: {
    contact() {
      return contacts.find(c => c.id === Number(this.id));
    }
  }
};
</script>

<style module>
.red {
  color: crimson;
}
</style>
