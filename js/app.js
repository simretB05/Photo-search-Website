
function searchPhotos(details){
let search_display =document.querySelector(`.search_result`)
let search_input = document.getElementById(`search`)
let search_value = search_input[`value`]
    
    function successFunction( response ){
        console.log(search_value)
        let resultsArry = response.data.results
        // resultsArry.forEach( result => console.log( result ) )
        for ( i = 0; i < resultsArry.length; i++ )
        {
            search_display.insertAdjacentHTML( `afterbegin`,` <div class="display"><img src="${resultsArry[i][`preview_photos`][i][`urls`][`small`]}"></div>`)

        }
    }
    
    function failureFunction(error){

        search_display.insertAdjacentHTML( `afterbegin`,`<h2>Tray Again later</h2>`)

    }
   
   axios.request( {
       
       url: `https://api.unsplash.com/search/collections?client_id=MQPAkbmslxXeujCwE_HF5Q-oM3IWRhzln0nlGN_TqmI` ,
       
       params: {
        query:search_value
       }
    
   } ).then( successFunction ).catch( failureFunction )
   }
   
   let search = document.querySelector(`.search_btn` )
   search.addEventListener(`click`, searchPhotos)