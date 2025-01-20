// Student Name: Shrstha
// student ID m24w0199
// ------------------------
// Student Name: Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.repository;

import com.HMS.HospitalManagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    User findByUsername(String username);
}




