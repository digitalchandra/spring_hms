package com.HMS.HospitalManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "doctor_name")
    private String name;

    @Column(name = "department")
    private String department;

    @Column(name = "designation")
    private String designation;

    @Column(name = "education")
    private String education;


    @Column(name = "profile_image")
    private String profileImage;

    // No-argument constructor (required by JPA)
    public Doctor() {
    }

    // Parameterized constructor
    public Doctor(long id, String name, String department, String designation, String education, String profileImage ) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.designation = designation;
        this.education = education;
        this.profileImage=profileImage;
    }

    // Getters and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }
    // Getters and setters
    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}
