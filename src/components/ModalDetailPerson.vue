<template lang="">
  <div>
    <b-modal id="modal-detail-person" ref="modal-detail-person" title="modal detail person" ok-only>
      <dl>
        <dt>Name</dt>
        <dd>{{person.name}}</dd>
        <dt>Age</dt>
        <dd>{{person.age}}</dd>
        <dt>Job Description</dt>
        <dd>{{person.jobDescription}}</dd>
      </dl>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    person: Object
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>
<style lang="">
  
</style>