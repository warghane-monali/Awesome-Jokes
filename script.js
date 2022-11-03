
// https://icanhazdadjoke.com API called
// setHeader : setHeader is used to get the data in json format.
// fetch() calls promises

// ***by using promises fetch Method ***

// const jokes = document.querySelector('#jokes');
// const jokeBtn = document.querySelector('#jokeBtn');


// const generateJoke = () =>{

//     const setHeader = {
//         headers:{
//             Accept : "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) =>res.json())
//     .then((data) =>{
//         jokes.innerHTML = data.joke;})
//     .catch((error) =>{
//         console.log(error)
//     })

// }

// jokeBtn.addEventListener('click', generateJoke);
// generateJoke();

// by using async/await function

const jokes = document.querySelector('#jokes');
const jokeBtn = document.querySelector('#jokeBtn');


const generateJoke =  async () =>{

    try{
        const setHeader = {
            headers:{
                Accept : "application/json"
            }
        }
    
        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(error)
    }
}

jokeBtn.addEventListener('click', generateJoke);
generateJoke();



