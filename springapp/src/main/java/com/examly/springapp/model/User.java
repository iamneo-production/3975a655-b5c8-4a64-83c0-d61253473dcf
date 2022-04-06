package com.examly.springapp.model;


import javax.persistence.*;
import java.util.Set;


@Entity
public class User {


    @Id
    private String username;
    private String name;
     private String firstname;//for employee name
    private String mobilenumber;
    private String password;
    private boolean active;
     private String role1;
    private int developerId;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
                    },


            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")

            }

    )



    private Set<Role> role;


    public User() {
    }
     public String getRole1() {
        return role1;
    }

    public void setRole1(String role1) {
        this.role1 = role1;
    }

    public int getDeveloperId() {
        return developerId;
    }

    public void setDeveloperId(int developerId) {
        this.developerId = developerId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }
}
