<template>
  <div class="b-base-text-field"
    :class="{'b-base-text-field_error': hasError}">
    <label class="b-base-text-field__label">

      <base-label v-if="label || $slots.label" :hasError="hasError" :hasFocus="hasFocus">
        {{label}}
        <slot name="label"></slot>
      </base-label>

      <input class="b-base-text-field__input" type="text"
        ref="inputText"
        v-bind="$attrs"
        v-model="innerValue"
        :placeholder="placeholder"
        @input="$emit('input', innerValue)"
        @focus="$emit('focus', $event), hasFocus = true"
        @blur="$emit('blur', $event), hasFocus = false" />

      <base-error-text v-if="hasError">
        {{errorText}}
        <slot name="error"></slot>
      </base-error-text>

    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  watch: {
    value (value) {
      this.innerValue = value
    }
  },

  data () {
    return {
      innerValue: this.value,
      hasFocus: false
    }
  }
}
</script>

<style lang="sass" scoped>
.b-base-text-field
  $this: &

  font-size: 1.4rem
  line-height: 1.7rem
  width: 100%

  &_error
    color: #FF3737

  &__label
    display: block

  &__input
    background: transparent
    width: 100%
    height: 2.6rem
    color: #272727
    font-size: 1.6rem
    border: 0
    border-bottom: 1px solid #e2e2e2
    transition: border-color 0.1s ease

    &::placeholder
      color: #CDCDCD;

    .b-base-text-field_error &
      border-color: #FF3737

    &:hover
      border-color: rgba(#0B99FF, 0.8)

    &:focus
      outline: none
      border-color: #0B99FF

    &:disabled
      border-color: transparent
      color: #888888

</style>
