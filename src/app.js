import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',

    data: {
      countries: [],
      country: null,
      favourites:[]
    },

    mounted(){
      this.fetchCountries()
    },

    methods: {
      fetchCountries: function (){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((data) => {
          for(const datapoint of data){
            const country = {name: datapoint["name"], population: datapoint["population"]}
            this.countries.push(country);
          }
        })
      },
      fetchCountry: function (name){
        fetch("https://restcountries.eu/rest/v2/name/"+name)
        .then(response => response.json())
        .then((data) => {
          this.country = data[0]})
        },

      addFavourite: function (name) {
        this.favourites.push(name)
      }

      }
    })
  });
