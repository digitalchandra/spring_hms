package com.HMS.HospitalManagement.services;

import com.HMS.HospitalManagement.entity.User;
import com.HMS.HospitalManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            // You can generate a JWT token here if needed
            return "Login successful!";
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
