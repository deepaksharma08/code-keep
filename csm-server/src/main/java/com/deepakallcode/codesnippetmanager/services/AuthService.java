package com.deepakallcode.codesnippetmanager.services;

import com.deepakallcode.codesnippetmanager.entities.User;
import com.deepakallcode.codesnippetmanager.models.UserDTO;
import com.deepakallcode.codesnippetmanager.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;

    AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO loginUser(UserDTO user) {
        User userToCheck = new User();
        return new UserDTO();
    }
}
