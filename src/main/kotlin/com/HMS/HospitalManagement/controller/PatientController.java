package com.HMS.HospitalManagement.controller;

import com.HMS.HospitalManagement.entity.Patient;
import com.HMS.HospitalManagement.repository.PatientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PatientController {

    private final PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient) {
        System.out.println("Request received: " + patient);
        return patientRepository.save(patient);
    }

    @GetMapping
    public List<Patient> getAllPatient(){
        return patientRepository.findAll();
    }
}
