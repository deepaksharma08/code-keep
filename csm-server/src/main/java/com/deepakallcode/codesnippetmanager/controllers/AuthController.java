package com.deepakallcode.codesnippetmanager.controllers;

import com.deepakallcode.codesnippetmanager.models.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthController {

    @PostMapping
    public ResponseEntity<UserDTO> login(@RequestBody UserDTO user) {
        ResponseEntity<UserDTO> userResponse = null;
        return userResponse;

    }
}
