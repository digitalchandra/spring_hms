package com.HMS.HospitalManagement.repository;
import com.HMS.HospitalManagement.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {

}
