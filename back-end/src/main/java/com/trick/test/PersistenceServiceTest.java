package com.trick.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.trick.SpringConfiguration;
import com.trick.Application;
import com.trick.persistence.entities.Movie;
import com.trick.persistence.service.MovieServiceImpl;
//import com.trick.web.filter.MyOpenSessionFilter;

import java.util.List;

/**
 * Introduce.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {SpringConfiguration.class,
                            Application.class})
public class PersistenceServiceTest {

    @Autowired
    MovieServiceImpl movieServiceImpl;


//    MyOpenSessionFilter myOpenSessionFilter;

//    @Test
//    public void personServiceTest() {
//        System.out.println(personService);
//        List<Person> list = personService.findAll();
//        System.out.println(list.size());
//        for (Person person : list) {
//            System.out.println(person);
//        }
//    }

    @Test
    public void movieServiceTest() {
        System.out.println(movieServiceImpl);
        List<Movie> list = movieServiceImpl.findAll();
        System.out.println(list.size());
        for (Movie movie : list) {
            System.out.println(movie);
        }
    }

//    @Test
//    public void openSessionFilterTest() {
//        System.out.println(myOpenSessionFilter);
//    }
}
