package com.examly.springapp.repo;

import com.examly.springapp.model.AddIssue;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IssueRepo  extends JpaRepository<AddIssue,Integer> {
  public  AddIssue findById(int complaintId);
   public  AddIssue deleteById(int complaintId);


   List<AddIssue> findByUsername1(String username1);

}
