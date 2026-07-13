const { createApp,  } = Vue

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(false)
        function updateCart(id) {
            cart.value.push(id)
        }
        function removeCart(id) {
            const index = cart.value.indexOf(id)
            if (index !== -1) {
                cart.value.splice(index, 1)
            }
        }
        return {
            cart,
            premium,
            updateCart,
            removeCart
        }
    }
})

app.component('product-display', productDisplay)
app.mount('#app')