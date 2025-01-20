// Student Name: Shrstha Chandra Bahadur
// student ID m24w0199
// ------------------------
// Student Name: Anju Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.controller;

import com.HMS.HospitalManagement.entity.Patient;
import com.HMS.HospitalManagement.repository.PatientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class PatientController {

    private final PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // Create a new Patient
    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient) {
        System.out.println("Request received: " + patient);
        return patientRepository.save(patient);
    }

    // Retrieve all Patients
    @GetMapping
    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    // Update an existing Patient by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<Patient> updatePatient(
            @PathVariable Long id,
            @RequestBody Patient updatedPatient) {
        Optional<Patient> patientOptional = patientRepository.findById(id);

        if (patientOptional.isPresent()) {
            Patient existingPatient = patientOptional.get();

            // Update fields
            existingPatient.setName(updatedPatient.getName());
            existingPatient.setAge(updatedPatient.getAge());
            existingPatient.setBlood(updatedPatient.getBlood());
            existingPatient.setPrescription(updatedPatient.getPrescription());
            existingPatient.setDoes(updatedPatient.getDoes());
            existingPatient.setFees(updatedPatient.getFees());
            existingPatient.setUrgency(updatedPatient.getUrgency());

            // Save updated Patient
            Patient savedPatient = patientRepository.save(existingPatient);
            return ResponseEntity.ok(savedPatient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a Patient by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable Long id) {
        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
            return ResponseEntity.ok("Patient deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
