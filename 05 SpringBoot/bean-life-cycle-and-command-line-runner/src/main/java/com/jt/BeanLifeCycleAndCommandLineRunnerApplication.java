package com.jt;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeanLifeCycleAndCommandLineRunnerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BeanLifeCycleAndCommandLineRunnerApplication.class, args)
																.getBean(Greet.class).greet();
	}
 
	@Override
	public void run(String... args) throws Exception {
		// the run() of command line runner is executed after the springcontainer is fully initialized
		// we can populate the data inside database ✅
		// we can perform some startup checks or logging
		// test small piece of code ✅
		// we can load some cache 
		// create a admin user
		System.out.println("run method of command line runner is called");
	}
}

/*
 * beans are managed by spring container-> bean lifecycle
 * 
 * Bean instantiation
 * Dependencies injection
 * Bean initialization
 * Bean used
 * Bean destruction
 */
