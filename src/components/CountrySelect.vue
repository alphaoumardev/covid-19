<template>
    <label>
        <select @change="onChange()" v-model="selected" class="form-select bg-gray-500 text-white mt-10 block w-full border p-3 rounded">
            <option value="0">Select the country you want to check out</option>
            <option v-for="country in countries" :value="country.ID">{{country.Country}}</option>
        </select>
    </label>
</template>

<script>
    export default
    {
        name: "CountrySelect",
        props:['countries'],
        data()
        {
            return {selected:0}
        },
        methods:
            {
                onChange()
                {
                    const country= this.countries.find((item) =>item.ID===this.selected)
                    this.$emit('getCountry',country)
                }
            }
    }
</script>

<style scoped>

</style>
