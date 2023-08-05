import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
// const TMDB_TOKEN ="";

const headers= {
    Authorization:"bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWM0OGFhOWQ5NmU0NzQ5YTM0ZGUzYzMzYjdjMGE3ZiIsInN1YiI6IjY0Y2EzZDVlZDM3MTk3MDBlMjBhODc5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZm3tNJlWLMrwmqHqb6c1fRLw1Px_as5WHRUJC0b0Rw",
}

export const fetchDataFromApi = async (url,params) => {
    try {
        const data = await axios.get(
            BASE_URL + url , {
                headers,
                params,
            }
        )
        return data
    } catch (error) {
        console.log("Error occured" + error)
    }
}