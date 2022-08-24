let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      hueRotate: 0,
      skewX: 0,
      skewY: 0,
      borderRadius: 0,
      showPopup: false
    }
  },
  computed: {
    computedTransform() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        skew(${this.skewX}deg, ${this.skewY}deg)
            `,
        filter: `hue-rotate(${this.hueRotate}deg)`,
        borderRadius: `${this.borderRadius}%`
      }
    }
  },
  methods: {
    reset() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
      this.hueRotate = 0
      this.skewX = 0
      this.skewY = 0,
        this.borderRadius = 0
    },
    copy() {
      this.showPopup = true
      const textToCopy = `transform: perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg) skew(${this.skewX}deg, ${this.skewY}deg);

      filter: hue-rotate(${this.hueRotate}deg);
      border-radius: ${this.borderRadius}%;`

      setTimeout(() => {
        this.showPopup = false
      }, 1200)

      navigator.clipboard.writeText(textToCopy)
    }
  }
}).mount("#app")