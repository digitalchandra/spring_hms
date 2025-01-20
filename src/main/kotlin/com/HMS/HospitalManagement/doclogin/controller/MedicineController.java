// Student Name: Shrstha Chandra Bahadur
// student ID m24w0199
// ------------------------
// Student Name: Anju Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.doclogin.controller;

import com.HMS.HospitalManagement.doclogin.entity.Medicine;
import com.HMS.HospitalManagement.doclogin.repository.MedicineRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v3")
public class MedicineController {

    private final MedicineRepository medicineRepository;

    public MedicineController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    // Add a new medicine
    @PostMapping("/insert")
    public Medicine createMedicine(@RequestBody Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    // Get all medicines
    @GetMapping("/all")
    public List<Medicine> getAllMedicine() {
        return medicineRepository.findAll();
    }

    // Update medicine by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicineDetails) {
        Optional<Medicine> optionalMedicine = medicineRepository.findById(id);
        if (optionalMedicine.isPresent()) {
            Medicine medicine = optionalMedicine.get();
            medicine.setDrugName(medicineDetails.getDrugName());
            medicine.setStock(medicineDetails.getStock());
            Medicine updatedMedicine = medicineRepository.save(medicine);
            return ResponseEntity.ok(updatedMedicine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete medicine by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMedicine(@PathVariable Long id) {
        Optional<Medicine> optionalMedicine = medicineRepository.findById(id);
        if (optionalMedicine.isPresent()) {
            medicineRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
