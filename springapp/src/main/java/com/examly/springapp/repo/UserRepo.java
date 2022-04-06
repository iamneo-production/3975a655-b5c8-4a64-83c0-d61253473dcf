package com.examly.springapp.repo;


import com.examly.springapp.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepo   extends CrudRepository<User, String> {
    public User findByUsername(String username);
    List<User> findByRole1(String role);
}