// Student Name: Shrstha
// student ID m24w0199
// ------------------------
// Student Name: Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.doclogin.repository;

import com.HMS.HospitalManagement.doclogin.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
