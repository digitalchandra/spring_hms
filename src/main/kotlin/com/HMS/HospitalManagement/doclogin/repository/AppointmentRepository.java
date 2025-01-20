// Student Name: Shrstha Chandra Bahadur
// student ID m24w0199
// ------------------------
// Student Name: Anju Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.doclogin.repository;

import com.HMS.HospitalManagement.doclogin.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
