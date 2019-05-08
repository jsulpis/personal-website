<template>
  <div>
    <span class="school-courses-item__name">{{name}}:</span>
    {{description}}
  </div>
</template>

<script>
export default {
  props: { name: String, description: String }
};
</script>
