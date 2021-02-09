let app = new Vue({
  el: "#app",
  data: {
    inputMoney: 0,
    price: 100,
    all: 0,
    isPurchased: false,
  },

  methods: {
    addmoney: function() {
      this.all += Number(this.inputMoney);
    },

    purchase: function() {
      if(this.all>this.price){
        this.all -= this.price;
        this.isPurchased = true;
      }
      
    },
  },});