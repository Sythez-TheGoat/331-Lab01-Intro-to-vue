const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable and warm')
        const url = ref('http://www.camt.cmu.ac.th')
        const inventory = ref(100)
        const onSale = ref(true)
        const brand = ref('SE 331')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const sizes = ref(['S', 'M', 'L'])
        const cart = ref(0)
        const selectedVariant = ref(0)

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const onSaleMessage = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale'
        })

        function addToCart() {
            cart.value += 1
        }
        function toggleInStock() {
            inventory.value = inventory.value > 10 ? 0 : 100
        }
        function updateVariant(index) {
            selectedVariant.value = index
        }

        return {
            description,
            title,
            image,
            url,
            inStock,
            inventory,
            onSale,
            onSaleMessage,
            details,
            variants,
            sizes,
            cart,
            selectedVariant,
            addToCart,
            toggleInStock,
            updateVariant
        }
    }
}).mount('#app')