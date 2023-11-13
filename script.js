const locationEl = document.getElementById('location');

// function getLocation() {
//     if (navigator.geolocation) {
//         // if browser support geolocation api 
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     } else {
//         locationEl.innerText = 'update browser'
//     }

//     const onSuccess = (position) => {
//         console.log(position);
//     }

//     const onError = (error) => {
//         if (error.code == 1) {

//         }
//         console.log(error)
//     }
// }


const getCountry = () => {
    const userLocale = navigator.language || navigator.userLanguage;

   country =  new Intl.DisplayNames([userLocale], { type: 'region'})
   console.log("country", country)
}

getCountry();