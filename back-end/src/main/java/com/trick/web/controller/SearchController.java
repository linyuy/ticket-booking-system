package com.trick.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.trick.common.Util;
import com.trick.persistence.entities.Movie;
import com.trick.persistence.service.MovieService;
import com.trick.web.model.SimpMovie;

import java.util.ArrayList;
import java.util.List;

/**
 * Introduce.
 */

@Controller
@RequestMapping("/api")
public class SearchController {
    @Autowired
    MovieService movieService;


    @GetMapping("/search")
    @ResponseBody
    public List<SimpMovie> searchMovie(@RequestParam(value = "query")
                                       String query) {
        if ("".equals(query)) { return new ArrayList<SimpMovie>(); }

        List<Movie> movieList = movieService.findByNameContaining(query);

        return Util.MoviesToSimpMovies(movieList);
    }

}
