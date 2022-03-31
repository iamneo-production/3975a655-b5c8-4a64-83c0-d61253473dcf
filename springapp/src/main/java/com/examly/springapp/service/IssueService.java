package com.examly.springapp.service;
import com.examly.springapp.model.AddIssue;
import com.examly.springapp.repo.IssueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {
    @Autowired
    private IssueRepo repo;
    public AddIssue saveIssue(AddIssue issue) {

        return repo.save(issue);

    }
    public List<AddIssue> fetchIssue() {
        return repo.findAll();
    }
}
