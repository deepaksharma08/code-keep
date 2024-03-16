package com.deepakallcode.codesnippetmanager.services;

import com.deepakallcode.codesnippetmanager.entities.User;
import com.deepakallcode.codesnippetmanager.models.UserDTO;
import com.deepakallcode.codesnippetmanager.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;

    AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO loginUser(UserDTO user) {
        try {
            User fetchedUser = userRepository.findByEmail(user.getEmail());
            if (fetchedUser.getPassword().equals(user.getPassword())) {
                user.setStatus("SUCCESS");
                user.setId(fetchedUser.getId());
            }
        } catch (Exception e) {
            user.setStatus("FAILED");
        }
        return user;
    }

    public UserDTO registerUser(UserDTO user) {
        User userToSave = new User();
        userToSave.setEmail(user.getEmail());
        userToSave.setPassword(user.getPassword());
        try {
            userRepository.save(userToSave);
            user.setStatus("SUCCESS");
        } catch (Exception e) {
            user.setStatus("FAILED");
        }
        return user;
    }

    public UserDetails getUserFromEmail(String email) {
        User user;
        try {
            user = userRepository.findByEmail(email);
        }catch (Exception e) {
            user = new User();
        }
        return (UserDetails) user;
    }
}
