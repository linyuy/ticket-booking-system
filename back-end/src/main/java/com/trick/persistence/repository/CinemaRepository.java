package com.trick.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.trick.persistence.entities.Cinema;
import com.trick.persistence.entities.Screen;

import java.util.List;

/**
 * Introduce.
 */

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Integer> {
    // 增 save

    // 删 delete

    // 改 save

    // 查 findOne, findAll

    // 根据名字查询
    Cinema findByName(String name);
    List<Cinema> findByNameContaining(String name);
    Cinema findByPhone(String phone);
    Cinema findByAddress(String address);
    List<Cinema> findByAddressContaining(String address);
    List<Cinema> findByScreens(Screen screen);
}
