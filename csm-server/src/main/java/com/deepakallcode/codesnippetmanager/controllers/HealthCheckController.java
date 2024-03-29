package com.deepakallcode.codesnippetmanager.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api/healthCheck")
public class HealthCheckController {


    @GetMapping("checkHealth")
    public ResponseEntity<String> checkHealth() {
        return new ResponseEntity<>("Code Keep Service is running", HttpStatus.OK);
    }
}
