package com.deepakallcode.codesnippetmanager.services;

import org.springframework.stereotype.Service;

@Service
public class JwtService {
    public boolean verifyToken(String token) {
        return true;
    }

    public String getEmailFromToken(String token) {
        return "";
    }
}
