// Student Name: Shrstha
// student ID m24w0199
// ------------------------
// Student Name: Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.repository;

import com.HMS.HospitalManagement.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
}
