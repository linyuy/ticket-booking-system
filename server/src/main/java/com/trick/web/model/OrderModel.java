package com.trick.web.model;

import com.trick.persistence.entities.FilmOrder;

import java.util.List;

/**
 * Introduce.
 */
public class OrderModel {
    List<FilmOrder> filmOrderModelList;

    public OrderModel(List<FilmOrder> filmOrderModelList) {
        this.filmOrderModelList = filmOrderModelList;
    }

    public OrderModel() {
    }

    public List<FilmOrder> getFilmOrderModelList() {
        return filmOrderModelList;
    }

    public void setFilmOrderModelList(List<FilmOrder> filmOrderModelList) {
        this.filmOrderModelList = filmOrderModelList;
    }

    @Override
    public String toString() {
        return "OrderModel{" +
                "filmOrderModelList=" + filmOrderModelList +
                '}';
    }
}
