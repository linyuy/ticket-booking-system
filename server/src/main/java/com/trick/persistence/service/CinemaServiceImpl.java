package com.trick.persistence.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.trick.persistence.entities.Cinema;
import com.trick.persistence.entities.Movie;
import com.trick.persistence.repository.CinemaRepository;

import java.util.List;

/**
 * Introduce.
 */

@Service
public class CinemaServiceImpl implements CinemaService {
    @Autowired
    CinemaRepository cinemaRepository;

    @Override
    public void create(Cinema cinema) {
        cinemaRepository.save(cinema);
    }

    @Override
    public void delete(Integer id) {
        cinemaRepository.delete(id);
    }

    @Override
    public void delete(Cinema cinema) {
        cinemaRepository.delete(cinema);
    }

    @Override
    public Cinema update(Cinema cinema) {
        return cinemaRepository.save(cinema);
    }

    @Override
    public Cinema findById(Integer id) {
        return cinemaRepository.findOne(id);
    }

    @Override
    public Cinema findByName(String name) {
        return cinemaRepository.findByName(name);
    }

    @Override
    public List<Cinema> findByAddress(String address) {
        return cinemaRepository.findByAddressContaining(address);
    }

    @Override
    public List<Cinema> findByMovie(Movie movie) {
        // TODO
        return null;
    }

    @Override
    public Cinema findByPhone(String phone) {
        return cinemaRepository.findByPhone(phone);
    }

    @Override
    public List<Cinema> findAll() {
        return cinemaRepository.findAll();
    }
}
