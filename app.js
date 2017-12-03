
new Vue({
  el: '#customers',

  data: {
    customer: { firstName: '', lastName: '', phoneNumber: '',
    cardType: '', address: {
      houseNumber: '', street: '', city: '', state: '', postalCode: '',
    subdivision: '', closestMajorIntersection: '', deliveryNotes: ''}
  },
    customers: []
  },

  mounted: function () {
    this.fetchcustomers();
  },

  methods: {

    fetchcustomers: function () {
      var customers = [];
      axios.get('http://localhost:58080/customer')
        .then(response => {
          this.customers = response.data._embedded.customer;
          console.log(this.customers);
        });
    },

    addcustomer: function () {
        this.customers.push(response.customer);
        axios.post('http://localhost:58080/customer', this.customer)
          .then(response => {
            alert("Customer added");
            console.log('customer added');
          });
    },

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
