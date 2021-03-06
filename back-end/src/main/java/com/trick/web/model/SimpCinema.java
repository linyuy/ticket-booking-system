package com.trick.web.model;

import com.trick.persistence.entities.Cinema;

/**
 * Introduce.
 */
public class SimpCinema {
    private Integer id;
    private String name;

    public SimpCinema() {}

    public SimpCinema(Cinema cinema) {
        this.id = cinema.getId();
        this.name = cinema.getName();
    }

    public SimpCinema(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "SimpCinema{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
