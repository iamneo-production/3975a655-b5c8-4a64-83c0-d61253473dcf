package com.examly.springapp.repo;

import com.examly.springapp.model.AddIssue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepo  extends JpaRepository<AddIssue,Integer> {


}
