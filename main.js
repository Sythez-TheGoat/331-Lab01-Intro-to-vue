const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable and warm')
        const image = ref('assets/images/socks_blue.jpg')
        const url = ref('http://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)

        return {
            product,
            description,            
            image,
            url,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app')