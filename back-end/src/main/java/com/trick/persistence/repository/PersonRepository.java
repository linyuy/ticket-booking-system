package com.trick.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.trick.persistence.entities.Person;

import java.util.List;

/**
 * Introduce.
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
    // 增 save

    // 删 delete

    // 改 save

    // 查 findOne, findAll

    // 根据名字查询
    List<Person> findByName(String name);

    // 根据类型查询
    List<Person> findByType(String type);
}
