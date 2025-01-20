// Student Name: Shrstha Chandra Bahadur
// student ID m24w0199
// ------------------------
// Student Name: Anju Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.controller;

import com.HMS.HospitalManagement.entity.Doctor;
import com.HMS.HospitalManagement.repository.DoctorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v4")
@CrossOrigin(origins = "*")
public class DoctorController {
    private final DoctorRepository doctorRepository;

    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    // Create a new doctor
    @PostMapping("/insert")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        System.out.println("Request Received " + doctor);
        return doctorRepository.save(doctor);
    }

    // Get all doctors
    @GetMapping
    public List<Doctor> getAllDoctor() {
        return doctorRepository.findAll();
    }

    // Update a doctor
    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable long id, @RequestBody Doctor updatedDoctor) {
        Optional<Doctor> optionalDoctor = doctorRepository.findById(id);

        if (optionalDoctor.isPresent()) {
            Doctor existingDoctor = optionalDoctor.get();
            existingDoctor.setName(updatedDoctor.getName());
            existingDoctor.setDepartment(updatedDoctor.getDepartment());
            existingDoctor.setDesignation(updatedDoctor.getDesignation());
            existingDoctor.setEducation(updatedDoctor.getEducation());

            Doctor savedDoctor = doctorRepository.save(existingDoctor);
            return ResponseEntity.ok(savedDoctor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a doctor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable long id) {
        Optional<Doctor> optionalDoctor = doctorRepository.findById(id);

        if (optionalDoctor.isPresent()) {
            doctorRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
