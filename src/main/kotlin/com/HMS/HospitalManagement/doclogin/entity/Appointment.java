// Student Name: Shrstha
// student ID m24w0199
// ------------------------
// Student Name: Pandey
// Student Id: m240213

package com.HMS.HospitalManagement.doclogin.entity;

import jakarta.persistence.*;

@Entity
@Table(name="appoinments")

public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String age;
    private String symptom;
    private String number;

    public Appointment(long id, String name, String age, String symptom, String number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.symptom = symptom;
        this.number = number;
    }



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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSymptom() {
        return symptom;
    }

    public void setSymptom(String symptom) {
        this.symptom = symptom;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Appointment() {

    }

}
