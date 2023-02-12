import axios from "axios";

export const getMovies = (title: string, callback: (data: any) => void) => {
  axios.get(`/search/${title}`).then(callback).catch();
};
