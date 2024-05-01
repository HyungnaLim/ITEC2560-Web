export default {
    getRandomWYR() {
        return fetch('/wyr').then(response => {  // fetch data from api server and returns a Promise
            // if not indicate server address in full, the program will assume it's the same server - same origin
            // (ex. '/wyr' will be understood as 'http://localhost:5173/wyr' vite server, not http://localhost:3000/wyr express server)
            // browsers restrict cross-origin requests, it will cause CORS (cross origin request sharing) error
            // so vite dev server need to act as proxy server - configure it in vite.config.js
            return response.json()  // then turns the data into json
        })
    }
}