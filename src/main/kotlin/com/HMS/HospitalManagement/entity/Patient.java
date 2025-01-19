package com.HMS.HospitalManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String name;

    @Column(name = "age")
    private String age;

    @Column(name = "blood_group")
    private String blood;

    @Column(name = "prescription")
    private String prescription;

    @Column(name = "does")
    private String does;

    @Column(name = "fees")
    private String fees;

    @Column(name = "urgency")
    private String urgency;

    public Patient() {
    }

    public Patient(String fees, long id, String name, String age, String blood, String prescription, String does, String urgency) {
        this.fees = fees;
        this.id = id;
        this.name = name;
        this.age = age;
        this.blood = blood;
        this.prescription = prescription;
        this.does = does;
        this.urgency = urgency;
    }

    // Getters and setters
}
