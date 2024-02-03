package com.proj.movies;

//import org.bson.types.ObjectId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
//        System.out.println(movieRepository.findAll().toString());
        return movieRepository.findAll();
    }

    public Optional<Movie> findMovieByImdbId(String imdbId) {

        return movieRepository.findMovieByImdbId(imdbId);
    }
}
//either you use constructor to instantiate this class or use autowired which tell the framework that this class need to instantiate
//this findAll() describe in movieRepository return list of data