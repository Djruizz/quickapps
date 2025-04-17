<template>
  
  <div class="row text-center pb-3">
    <h2 @click="searchRates">Exchanges Rates</h2>
  </div>
  <div class="container d-flex flex-column justify-content-center" style="height: 80vh;">
    <div class="container-xl mb-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-4 py-3">
          <div class="input-group">
            <button
              class="btn btn-outline-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ this.fromCurrency }}
            </button>
            <ul class="dropdown-menu">
              <li v-for="(currency, index) in currenciesList" :key="index">
                <a
                  class="dropdown-item"
                  href="#"
                  @click="selectCurrency(currency)"
                  >{{ `${currency.symbol} - ${currency.name}` }}</a
                >
              </li>
            </ul>
            <input
              type="number"
              class="form-control"
              aria-label="Text input with dropdown button"
              v-model="this.amount"
            />
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="btn btn-success btn-lg"
            @click="convertCurrency"
          >
            Covert to
            <div v-html="rightArrowIcon" v-if="this.isNormalDirection"></div>
            <div v-html="downArrowIcon" v-else></div>
          </button>
        </div>
        <div class="col-md-4 py-3">
          <div class="input-group">
            <button
              class="btn btn-outline-success "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled
            >
              {{ this.toCurrency }}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  disabled
                  ></a
                >
              </li>
            </ul>
            <input
              type="number"
              class="form-control"
              aria-label="Text input with dropdown button"
              disabled
              v-model="this.convertedAmount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      rightArrowIcon: feather.icons["arrow-right"].toSvg(),
      downArrowIcon: feather.icons["arrow-down"].toSvg(),

      fromCurrency:'USD',
      amount: 0,
      toCurrency: 'USD',
      convertedAmount: 0,

      
      
      currenciesList: [
        { name: "US Dollar", symbol: "USD" },
        { name: "Euro", symbol: "EUR" },
        { name: "Japanese Yen", symbol: "JPY" },
        { name: "British Pound", symbol: "GBP" },
        { name: "Swiss Franc", symbol: "CHF" },
        { name: "Canadian Dollar", symbol: "CAD" },
        { name: "Australian Dollar", symbol: "AUD" },
        { name: "Chinese Yuan", symbol: "CNY" },
        { name: "Hong Kong Dollar", symbol: "HKD" },
        { name: "South Korean Won", symbol: "KRW" },
        { name: "Singapore Dollar", symbol: "SGD" },
        { name: "Mexican Peso", symbol: "MXN" },
        { name: "Brazilian Real", symbol: "BRL" },
        { name: "Indian Rupee", symbol: "INR" },
        { name: "Russian Ruble", symbol: "RUB" },
      ],

      isNormalDirection: true,
    };
  },
  methods: {
    async convertCurrency() {
      const apiKey = 'acc27068cb8a4ac2813674dc6b9c8bf0' // Replace with your real API key
      const url = `https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${this.fromCurrency}`

      try {
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
          const rate = data.rates[this.fromCurrency]
          this.convertedAmount = (this.amount / rate).toFixed(2)
        } else {
          this.convertedAmount = 'Error'
        }
      } catch (error) {
        console.error('Conversion failed:', error)
        this.convertedAmount = 'Error'
      }
      
    },

    selectCurrency(selectedCurrency) {
      this.fromCurrency = selectedCurrency.symbol;
    },
  },
  mounted(){
    this.isNormalDirection = (window.innerWidth > 768) ? true : false;
  }
};
</script>
