package com.trick;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Import;

/**
* @ClassName: SpringMvcQuickstartApplication.
*/
@SpringBootApplication
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class,
                                    HibernateJpaAutoConfiguration.class})
@Import(SpringConfiguration.class)
public class Application {

  /**
   * @Description 整个web应用的入口点.
   */
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
