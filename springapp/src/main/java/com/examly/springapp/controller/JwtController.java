package com.examly.springapp.controller;


import com.examly.springapp.model.JwtRequest;
import com.examly.springapp.model.JwtResponse;
import com.examly.springapp.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class JwtController {
    @Autowired
    private JwtService jwtService;

    @PostMapping({"/login"})
    @CrossOrigin(origins = "https://8081-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/")
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }

}
