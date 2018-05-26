package com.trick.persistence.service;



import org.springframework.transaction.annotation.Transactional;
import com.trick.persistence.entities.Cinema;
import com.trick.persistence.entities.Movie;
import com.trick.persistence.entities.Screen;

import java.util.Date;
import java.util.List;

/**
 * Introduce.
 */
public interface ScreenService {
    // 增
    @Transactional
    void create(Screen screen);

    // 删
    @Transactional
    void delete(Integer id);
    @Transactional
    void delete(Screen screen);

    // 改
    @Transactional
    Screen update(Screen screen);

    // 查
    @Transactional(readOnly = true)
    Screen findById(Integer id);
    @Transactional(readOnly = true)
    List<Screen> findByDate(Date time);
    @Transactional(readOnly = true)
    List<Screen> findByTime(String time);
    @Transactional(readOnly = true)
    List<Screen> findByMovie(Movie movie);
    @Transactional(readOnly = true)
    List<Screen> findByCinemaAndMovie(Cinema cinema, Movie movie);
    @Transactional
    List<Screen> findAll();
}
