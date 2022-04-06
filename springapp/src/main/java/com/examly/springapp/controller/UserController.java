package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import com.examly.springapp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/signup"})
    public User saveUser(@RequestBody User user)throws Exception {
        String tempUsername=user.getUsername();
        if(tempUsername !=null && !" ".equals(tempUsername)){
            User userobj=userService.fetchUserByUsername(tempUsername);
            if(userobj !=null) {
                throw new Exception("User with this "+tempUsername+" is Already Exist");
            }
        }
        User userObj=null;
        userObj=userService.saveUser(user);
        return userObj;
    }
    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
     @GetMapping({"/forDeveloper"})
      @PreAuthorize("hasRole('Developer')")
      public String forDeveloper() {
          return "This URL is only accessible to the Developer";
      }

      @PostMapping({"/manage-user"})
      @CrossOrigin(origins = "http://localhost:4200/")
      public User saveDeveloper(@RequestBody User user) throws Exception {
          String tempUsername = user.getUsername();
          if (tempUsername != null && !" ".equals(tempUsername)) {
              User userobj = userService.fetchUserByUsername(tempUsername);
              if (userobj != null) {
                  throw new Exception("User with this " + tempUsername + " is Already Exist");
              }
          }
          User userObj = null;
          userObj = userService.saveDeveloper(user);
          return userObj;
      }

    @GetMapping("/User/{role1}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> fetchUserByRole1(@PathVariable String role1) {
        return userService.fetchUserByRole1(role1);
    }


}
