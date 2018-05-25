package com.trick.web.controller.administrator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.trick.common.ResponseState;
import com.trick.persistence.entities.Cinema;
import com.trick.persistence.service.CinemaService;
import com.trick.web.model.CinemaModel;

/**
 * Introduce.
 */

@Controller
@RequestMapping("/api/admin/cinema")
public class manageCinemaController {
    @Autowired
    CinemaService cinemaService;

    @DeleteMapping("{id}")
    @ResponseBody
    public ResponseState deleteCinemaById(@PathVariable("id") Integer id) {
        cinemaService.delete(id);
        return new ResponseState(ResponseState.SUCCESS);
    }

    @PostMapping("/create")
    @ResponseBody
    public ResponseState createCinema(@RequestParam CinemaModel cinemaModel) {
        Cinema cinema = new Cinema(cinemaModel);
        if (cinemaService.findByName(cinemaModel.getName()) != null) {
            return new ResponseState(ResponseState.ERROR, "名字重复");
        }

        cinemaService.create(cinema);
        return new ResponseState(ResponseState.SUCCESS);
    }


    @PutMapping("/{id}")
    @ResponseBody
    public ResponseState updateCinema(@PathVariable("id") Integer id,
                                      @RequestParam CinemaModel cinemaModel) {
        Cinema cinema = cinemaService.findById(id);
        if (!cinemaModel.getName().equals("")) {
            cinema.setName(cinemaModel.getName());
        }

        if (!cinemaModel.getAddress().equals("")) {
            cinema.setAddress(cinemaModel.getAddress());
        }

        if (!cinemaModel.getPhone().equals("")) {
            cinema.setPhone(cinemaModel.getPhone());
        }

        if (cinemaModel.getScreens() != null) {
            cinema.setScreens(cinemaModel.getScreens());
        }

        return new ResponseState(ResponseState.SUCCESS);
    }
}
