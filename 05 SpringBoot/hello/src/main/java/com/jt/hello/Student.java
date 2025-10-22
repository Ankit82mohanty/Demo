package com.jt.hello;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton") //By default every bean created by spring container is singleton.

public class Student {
    public void sayHello(){
        System.out.println("student say's hello");

    }
}
