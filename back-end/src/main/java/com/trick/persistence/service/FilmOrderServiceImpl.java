package com.trick.persistence.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.trick.persistence.entities.FilmOrder;
import com.trick.persistence.entities.Screen;
import com.trick.persistence.entities.User;
import com.trick.persistence.repository.FilmOrderRepository;

import java.util.List;

/**
 * Introduce.
 */

@Service
public class FilmOrderServiceImpl implements FilmOrderService {
    @Autowired
    FilmOrderRepository filmOrderRepository;

    @Override
    public void create(FilmOrder filmOrder) {
        filmOrderRepository.save(filmOrder);
    }

    @Override
    public void delete(FilmOrder filmOrder) {
        filmOrderRepository.delete(filmOrder);
    }

    @Override
    public void delete(Integer id) {
        filmOrderRepository.delete(id);
    }

    @Override
    public FilmOrder update(FilmOrder filmOrder) {
        return filmOrderRepository.save(filmOrder);
    }

    @Override
    public FilmOrder findById(Integer id) {
        return filmOrderRepository.findOne(id);
    }

    @Override
    public List<FilmOrder> findByUser(User user) {
        return filmOrderRepository.findByUser(user);
    }

    @Override
    public List<FilmOrder> findByScreen(Screen screen) {
        return filmOrderRepository.findByScreenId(screen.getId());
    }
}
