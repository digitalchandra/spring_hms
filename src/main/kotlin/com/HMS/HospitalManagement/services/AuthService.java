package com.HMS.HospitalManagement.services;

import com.HMS.HospitalManagement.entity.User;
import com.HMS.HospitalManagement.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;

    public AuthService(UserDetailsService userDetailsService, UserRepository userRepository) {
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
    }

    // Method for authenticating the user
    public String authenticateUser(String username, String password) {
        // Fetch the user by username (assuming you have a getUsername method in your User entity)
        Optional<User> user = userRepository.findByUsername(username);

        if (user.isEmpty()) {
            throw new IllegalArgumentException("User not found");
        }

        // Check the password or other authentication logic here

        return user.get().getUsername(); // Make sure to return the username as String
    }

}
