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

    @GetMapping("/addComplaint")
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public List<AddIssue> getIssue() {
        return service.fetchIssue();
    }

    @PostMapping("/addComplaint")
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public AddIssue saveIssue(@RequestBody AddIssue issue) {
        return service.saveIssue(issue);
    }
     @GetMapping("/complaint/{id}")
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public AddIssue issueEditData(@PathVariable("id") int complaintId) {
        return service.fetchIssuebyId(complaintId);
    }
    @DeleteMapping("/complaint/{id}")
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public AddIssue complaintDelete (@PathVariable("id") int complaintId) {
        return service.deleteComplaint(complaintId);
    }
    @GetMapping("/issue/{username1}")
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public List <AddIssue> getIssueByName(@PathVariable String username1){
        return service.fetchDataByUser1(username1);
    }

}
