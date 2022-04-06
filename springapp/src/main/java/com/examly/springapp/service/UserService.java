package com.examly.springapp.service;
import com.examly.springapp.model.Role;
import com.examly.springapp.model.User;
import com.examly.springapp.repo.RoleRepo;
import com.examly.springapp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleRepo.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("New ser");
        roleRepo.save(userRole);

        Role managerRole = new Role();
        managerRole.setRoleName("Developer");
        managerRole.setRoleDescription("New developer");
        roleRepo.save(managerRole);

        User adminUser = new User();
        adminUser.setUsername("admin123@gmail.com");
        adminUser.setRole1("Admin");
        adminUser.setPassword(getEncodedPassword("admin"));
        adminUser.setName("admin");

        adminUser.setMobilenumber("7410258963");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepo.save(adminUser);



    }

    public User saveUser(User user) {
        Role role = roleRepo.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setRole1("User");
        user.setPassword(user.getPassword());
        user.setPassword(getEncodedPassword(user.getPassword()));
        return userRepo.save(user);
    }
     public User saveDeveloper(User user) {
        Role role = roleRepo.findById("Developer").get();
        Set<Role> developerRoles = new HashSet<>();
        developerRoles.add(role);
        user.setDeveloperId(100);
        user.setRole1("Developer");
        user.setRole(developerRoles);
        user.setPassword(user.getPassword());
        user.setPassword(getEncodedPassword(user.getPassword()));
        return userRepo.save(user);
    }
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public User fetchUserByUsername(String username) {
        return userRepo.findByUsername(username);
    }
      public  List<User> fetchUserByRole1(String role) {
    return userRepo.findByRole1(role);
}


    public String deleteUser(String username) {
        return deleteUser(username);
    }
}
