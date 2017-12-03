new Vue({
    el: '#menu',

    data: {
        menu: [{ name: 'loading...', amount: '0.0' }],
        selectedItems: [],
        index: -1,
        total: 0.0,
        customers: [],
        selectedCustomer: "No customer selected"
    },

    mounted: function () {
        this.fetchMenu();
        this.fetchcustomers();
    },

    methods: {

        fetchMenu: function () {
            var customers = [];
            axios.get('http://localhost:58080/menu')
                .then(response => {
                this.menu = response.data._embedded.menu;
        })
            ;
        },
        fetchcustomers: function () {
            var customers = [];
            axios.get('http://localhost:58080/customer')
                .then(response => {
                this.customers = response.data._embedded.customer;
        });
        },

        formatPrice: function (value) {
            var val = (value / 1).toFixed(2);
            return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        // deletecustomer: function (index) {
        //   if (confirm('are you sure？')) {
        //     this.$http.delete('api/customers/' + customer.id)
        //       .success(function (res) {
        //         console.log(res);
        //         this.customers.splice(index, 1);
        //       })
        //       .error(function (err) {
        //         console.log(err);
        //       });
        //   }
        // }
    }
});
