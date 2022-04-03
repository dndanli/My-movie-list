package com.mymovielist.MyMovieList.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@Service
//@CrossOrigin(origins = "http://localhost:3000/")
public class MovieService {
    public MovieService() {}

    @Value("${api.key}")
    private String apiKey;

    @GetMapping
    public ResponseEntity<?> getPopularMovies(){
        /*
         * make get request to the movie db api
         * fetching for movie id name and poster
         * */
        try {
            // Todo: search for async solution
            String uri="https://api.themoviedb.org/3/movie/popular?api_key="+apiKey+"&language=en-US&page=1";
            RestTemplate restTemplate = new RestTemplate();
            String result = restTemplate.getForObject(uri, String.class);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>("Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
