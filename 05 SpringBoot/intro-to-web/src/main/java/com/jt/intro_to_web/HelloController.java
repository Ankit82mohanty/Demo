package com.jt.intro_to_web;

import java.io.PrintWriter;
import java.util.List;

import javax.print.DocFlavor.STRING;

import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties.Credential;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;



@Component
@Controller
public class HelloController {
    @RequestMapping(path = "/hello")
    public void sayHello(PrintWriter writer){
        System.out.println("Hello To Web");
        writer.println("Hello To Web in Browser");
    }
        // @RequestMapping(path = "/login")
        // public void login(PrintWriter writer2){
        //     System.out.println("Login Page");
        //     writer2.println("Login Page in Browser");
        // }

        // @RequestMapping({"/","/home"})
        // public String home(){
        //     System.out.println("Home method");
        //     return "index";
        // }
        // @RequestMapping("/Ankit")
        // public String ankit(){
        //     System.out.println("New Method");
        //     return "file";
        // }

        @RequestMapping("/contact")
        public String contact(Model model){
            model.addAttribute("name1", "Java Technocrat");
            model.addAttribute("phone", "8260754453");
            return "contact";
        }

        @RequestMapping("/form")
        public String form(){
            return "form";


        }

        // @RequestMapping("/submit")
        //     // public String submit(@RequestParam(name="user",defaultValue = "Java Technocrat") String username, @RequestParam String password , Model model){
            
        //         System.out.println("submit method");
        //         System.out.println("Username: " + username);
        //         System.out.println("password: " + password);
        //         model.addAttribute("user", username);
        //         model.addAttribute("pass", password);
        //         return "details";
        //     }

        // @RequestMapping(path = "/submit", method = RequestMethod.POST)
        @PostMapping("/submit")
            public String submit(@ModelAttribute LoginCredentials Credentials , Model model){


                 model.addAttribute("user", Credentials.getUsername());
                 model.addAttribute("pass", Credentials.getPassword());
                return "details";

            }

            @GetMapping("/multi-submit")
            public String submit2(Model model){
                LoginCredentials credential1 = new LoginCredentials("JT","1234");
                LoginCredentials credential2 = new LoginCredentials("JavaTechnocrat","5678");
                LoginCredentials credential3 = new LoginCredentials("Ankit","3456");


                
                model.addAttribute("credentials", List.of(credential1,credential2,credential3));
                return "credentials";

            }
        }
            
                

       
  
 
