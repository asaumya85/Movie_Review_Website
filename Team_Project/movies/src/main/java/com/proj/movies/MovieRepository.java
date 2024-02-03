package com.proj.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> findMovieByImdbId(String imdbId);
}
//job  of actually talking to db and get data back
// repository comes with object id ,but we don't want to use object id ,so we use imdb id for it and create method
// we use automatic query that form where it is dynamically from properties Spring mongodb that we are searching using imdbId