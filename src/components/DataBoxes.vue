<template>
    <div class="grid md:grid-cols-4 gap-2">
        <!--        Box1-->
        <div class="shadow-md bg-blue-100 rounded text-center p-10">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases </h3>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> New: </span> {{numberWithCommas(stats.NewConfirmed)}}
            </div>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>
        <!--        Box2-->
        <div class="shadow-md bg-blue-200 rounded text-center p-10">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> New: </span> {{numberWithCommas(stats.NewDeaths)}}
            </div>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats.TotalDeaths)}}
            </div>
        </div>
        <!--        Box3 for new recovred -->
        <div class="shadow-md bg-blue-100 rounded text-center p-10">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">New Recovered </h3>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> New : </span> {{numberWithCommas(stats.NewRecovered)}}
            </div>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> Total : </span>{{numberWithCommas(stats.TotalRecovered)}}
            </div>
        </div>
        <!--        Box4 total recovred-->
        <div class="shadow-md bg-blue-200 rounded text-center p-10">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">Vaccinated</h3>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> New: </span> {{numberWithCommas(stats)}}
            </div>
            <div class="text-2xl mb-4 text-denger">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats)}}
            </div>
        </div>
    </div>
</template>

<script>
    export default
    {
        name: "DataBoxes",
        props:['stats'],
        methods:
            {
                numberWithCommas(x)
                {
                   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
            }
    }
</script>


