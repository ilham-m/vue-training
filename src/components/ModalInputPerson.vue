<template lang="">
  <div>
    <b-modal id="modal-input-person" title="input person" ref="modal-input-person">
      <b-form>
        <b-form-group id="input-group-name" label="Name" label-for="name">
          <b-form-input id="name" type="text" placeholder="name" v-validate="{ required: true }" :state="validateState('name')" v-model="form.name" data-vv-name="name"></b-form-input>
          <b-form-invalid-feedback>
            {{ veeErrors.first('name') }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-age" label="Age" label-for="age">
          <b-form-input id="age" type="number" placeholder="age" v-validate="{ required: true, min_value:1 }" :state="validateState('age')" v-model="form.age" data-vv-name="age" @blur="numberFormater($event.target)"></b-form-input>
          <b-form-invalid-feedback>
            {{ veeErrors.first('age') }}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-job" label="Job Description" label-for="job">
          <b-form-input id="job" type="text" placeholder="job" v-validate="{ required: true }" :state="validateState('job')" v-model="form.jobDescription" data-vv-name="job"></b-form-input>
          <b-form-invalid-feedback>
            {{ veeErrors.first('job') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
      <template #modal-footer>
                
                <b-button size="sm" variant="success" @click="onSubmit()">
                    Save
                </b-button>
                <b-button size="sm" variant="danger" @click="resetForm()">
                    Cancel
                </b-button>
            </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDirty: [],
      form: {
        name: '',
        age: null,
        jobDescription: ''
      }
    }
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.form = {
        name: '',
        age: 0,
        jobDescription: ''
      }

      this.$nextTick(() => {
        this.$validator.reset();
      });

      this.$refs["modal-input-person"].hide()
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.$emit('pushData', this.form)
        this.resetForm()
      });
    },
    numberFormater(el) {
      if (!el.value) return;
      else if (el.value.includes('.')) el.value = parseFloat(el.value)
      else el.value = parseInt(el.value)
    }
  },
}
</script>
<style lang="">
  
</style>