<template>
  <div>
    <h1>Person</h1>
    <br>
    <b-table striped hover :items="json" :fields="fields">
      <template #cell(action)="row">
        <b-btn class="mx-1" variant="primary" size="sm" v-b-modal="'modal-detail-person'" @click="detail(row.item)"><b-icon-search></b-icon-search></b-btn>
        <b-btn class="mx-1" variant="danger" size="sm" @click="deletePerson(row.item)"><b-icon-trash></b-icon-trash></b-btn>
      </template>
    </b-table>
    <div class="d-flex justify-content-end">
      <b-btn variant="primary" v-b-modal="'modal-input-person'">
        <span>
          <b-icon-plus></b-icon-plus>
        </span>
        Create
      </b-btn>
    </div>
    <ModalInput @pushData="updateData"></ModalInput>
    <ModalDetail :person="selectedPerson"></ModalDetail>
  </div>
</template>

<script>
import ModalInputPerson from '../components/ModalInputPerson.vue'
import ModalDetailPerson from '../components/ModalDetailPerson.vue'
export default {
  components : {
    ModalInput:ModalInputPerson,
    ModalDetail : ModalDetailPerson
  },
  data() {
    var rawjson = `[{"name":"John Doe","age":34,"jobDescription":"Gardener"},{"name":"Emily","age":30,"jobDescription":"Data Analyst"}]`
    var json = JSON.parse(rawjson);
    return {
      selectedPerson : null,
      json,
      fields : [
        'name', 'age', 'jobDescription', { key : 'action', label:' '}
      ]
    }
  },
  methods : {
    updateData : function(value){
      this.json.push(value);
    },
    detail(person){
      this.selectedPerson = person
    },
    deletePerson(person){
      this.json.splice(person,1)
      console.log(this.json);
    }

  }
}
</script>
<style scoped>

</style>
