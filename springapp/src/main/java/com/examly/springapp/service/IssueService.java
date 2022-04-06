package com.examly.springapp.service;

import com.examly.springapp.model.AddIssue;
import com.examly.springapp.model.User;
import com.examly.springapp.repo.IssueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {
    @Autowired
    private IssueRepo repo;

     public  List<AddIssue> fetchDataByUser1(String username1) {
        return repo.findByUsername1(username1);
    }
    public AddIssue saveIssue(AddIssue issue) {

        return repo.save(issue);

    }
    public List<AddIssue> fetchIssue() {
        return repo.findAll();
    }
     public AddIssue fetchIssuebyId(int complaintId) {
        return repo.findById(complaintId);
    }
    public AddIssue deleteComplaint(int complaintId) {
        return repo.deleteById(complaintId);
    }

}
