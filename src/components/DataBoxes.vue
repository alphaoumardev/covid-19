<template>
    <div class="grid md:grid-cols-4 gap-2">
        <!--        Box1-->
        <div class="shadow-md bg-yellow-500   rounded text-center p-10">
            <h3 class="text-3xl text-black-900 font-bold mb-4">Cases </h3>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold  "> New: </span> {{numberWithCommas(stats.NewConfirmed)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>
        <!--        Box2-->
        <div class="shadow-md bg-red-500 rounded text-center p-10">
            <h3 class="text-3xl text-black-900 font-bold mb-4">Deaths</h3>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> New: </span> {{numberWithCommas(stats.NewDeaths)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats.TotalDeaths)}}
            </div>
        </div>
        <!--        Box3 for new recovred -->
        <div class="shadow-md bg-green-700 rounded text-center p-10">
            <h3 class="text-3xl text-black-900 font-bold mb-4">Recovered </h3>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> New : </span> {{numberWithCommas(stats.NewRecovered)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> Total : </span>{{numberWithCommas(stats.TotalRecovered)}}
            </div>
        </div>
        <!--        Box4 total recovred-->
        <div class="shadow-md bg-blue-400 rounded text-center p-10">
            <h3 class="text-3xl text-black-900 font-bold mb-4">Vaccinated</h3>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> New: </span> {{numberWithCommas(stats.NewRecovered)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold "> Total: </span>{{numberWithCommas(stats.TotalRecovered)}}
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


