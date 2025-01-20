// Student Name: Shrstha Chandra Bahadur
// student ID m24w0199
// ------------------------
// Student Name: Anju Pandey
// Student Id: m240213
package com.HMS.HospitalManagement.controller;

import com.HMS.HospitalManagement.entity.User;
import com.HMS.HospitalManagement.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody User user) {
//        String message = authService.register(user);
//        return ResponseEntity.ok(message);
//    }

//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody User user) {
//        String token = authService.login(user.getUsername(), user.getPassword());
//        return ResponseEntity.ok(token);
//    }
}
