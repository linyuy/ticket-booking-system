package com.trick.web.model;

import com.trick.persistence.entities.Screen;

import java.util.List;

/**
 * Introduce.
 */
public class CinemaModel {
    private String name;
    private String address;
    private String phone;
    private List<Screen> screens;

    public CinemaModel() {
    }

    public CinemaModel(String name, String address, String phone, List<Screen> screens) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.screens = screens;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Screen> getScreens() {
        return screens;
    }

    public void setScreens(List<Screen> screens) {
        this.screens = screens;
    }

    @Override
    public String toString() {
        return "CinemaModel{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", screens=" + screens +
                '}';
    }
}
