package com.HMS.HospitalManagement.doclogin.entity;

import jakarta.persistence.*;

@Entity
@Table(name="medicine")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String drugName;
    private String stock;

    public Medicine(long id, String drugName, String stock) {
        this.id = id;
        this.drugName = drugName;
        this.stock = stock;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }

    public Medicine(){

    }
}
