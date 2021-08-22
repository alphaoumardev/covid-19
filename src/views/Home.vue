<template>
    <main v-if="!loading">
        <DataTitle :text="title" :dataDate="dataDate" />
        <DataBoxes :stats="stats"/>
        <CountrySelect @getCountry="getCountryData"  :countries="countries"/>
        <button @click="clearCountryData" v-if="stats.Country" class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-500">Global Data</button>
    </main>
    <main class="flex flex-col align-center justify-center text-center" v-else> Show
        <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching data</div>
        <img :src="loadingImage" alt="Loading" class="w-24 m-auto"/>
    </main>
</template>
<script>
    import DataTitle from '../components/DataTitle'
    import DataBoxes from '../components/DataBoxes'
    import CountrySelect from '../components/CountrySelect'


    export default
  {
    name: "Home",
    components:{DataTitle,DataBoxes,CountrySelect},
    data()
    {
        return {
            loading: true,
            title:'Global',
            dataDate:'',
            status: {},
            contries: {},
            loadingImage:require('../assets/load.gif'),
        }
    },
    methods:
            {
              async fetchCovidData()
              {
                const res=await fetch('https://api.covid19api.com/summary')
                return await res.json()
              },
                async getCountryData(country)
                {
                    this.stats= await country
                    this.title= await country.Country
                },
                async clearCountryData()
                {
                    this.loading=true
                    const data =await this.fetchCovidData()
                    this.title='Global'
                    this.stats= data.Global
                    this.loading=false
                }
            },
    async created()
    {
      const data= await this.fetchCovidData()
        this.dataDate=data.Date
        this.stats=data.Global
        this.countries=data.Countries
        this.loading=false;
    }
  }
</script>

