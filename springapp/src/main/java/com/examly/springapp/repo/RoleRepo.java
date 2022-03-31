package com.examly.springapp.repo;

import com.examly.springapp.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepo extends CrudRepository<Role, String> {
}