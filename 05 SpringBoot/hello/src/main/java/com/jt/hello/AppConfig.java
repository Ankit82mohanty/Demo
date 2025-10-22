package com.jt.hello;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
   @Bean
   Teacher teacher(){
         return new Teacher();
   }

   //we should only use @Bean to provide a object of the predeined class to spring container (so that  it can use custom behaviour of that object instead of predefined behaviour.)
}
