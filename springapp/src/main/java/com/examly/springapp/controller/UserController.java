package com.examly.springapp.controller;

import com.examly.springapp.model.AddIssue;
import com.examly.springapp.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueController {
    @Autowired
    private IssueService service;
    @GetMapping("/addIssue")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<AddIssue> fetchUser() {
        return service.fetchIssue();
    }

    @PostMapping("/addIssue")
    @CrossOrigin(origins = "http://localhost:4200")
    public AddIssue saveIssue(@RequestBody AddIssue issue) {
        return service.saveIssue(issue);
    }
}
