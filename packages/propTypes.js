!Object.propType && Object.defineProperty(Object, 'propType', {
  get () {
    return 'vnode'
  }
})

!String.propType && Object.defineProperty(String, 'propType', {
  get () {
    return this.name.toLowerCase()
  }
})

!Number.propType && Object.defineProperty(Number, 'propType', {
  get () {
    return this.name.toLowerCase()
  }
})

!Boolean.propType && Object.defineProperty(Boolean, 'propType', {
  get () {
    return this.name.toLowerCase()
  }
})

!Array.propType && Object.defineProperty(Array, 'propType', {
  get () {
    return this.name.toLowerCase()
  }
})

!Function.propType && Object.defineProperty(Function, 'propType', {
  get () {
    return this.name.toLowerCase()
  }
})

export default {
  vnode: Object,
  string: String,
  number: Number,
  boolean: Boolean,
  array: Array,
  function: Function
}