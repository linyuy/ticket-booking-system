package com.trick.persistence.service;

import org.springframework.transaction.annotation.Transactional;
import com.trick.persistence.entities.FilmOrder;
import com.trick.persistence.entities.Screen;
import com.trick.persistence.entities.User;

import java.util.List;

/**
 * Introduce.
 */

public interface FilmOrderService {
    // 增
    @Transactional
    void create(FilmOrder filmOrder);

    // 删
    @Transactional
    void delete(FilmOrder filmOrder);
    @Transactional
    void delete(Integer id);

    // 改
    @Transactional
    FilmOrder update(FilmOrder filmOrder);

    // 查
    @Transactional(readOnly = true)
    FilmOrder findById(Integer id);
    @Transactional(readOnly = true)
    List<FilmOrder> findByUser(User user);
    @Transactional(readOnly = true)
    List<FilmOrder> findByScreen(Screen screen);
}
