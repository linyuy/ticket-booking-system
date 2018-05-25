package com.trick.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.trick.persistence.entities.FilmOrder;
import com.trick.persistence.entities.Screen;
import com.trick.persistence.entities.User;

import java.util.List;

/**
 * Introduce.
 */

@Repository
public interface FilmOrderRepository extends JpaRepository<FilmOrder, Integer> {
    // 增 save

    // 删 delete

    // 改 save

    // 查 findOne, findAll

    // 根据名字查询
    List<FilmOrder> findByUser(User user);
    List<FilmOrder> findByScreenId(Integer screenId);
}
